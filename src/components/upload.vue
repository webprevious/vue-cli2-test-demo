<template>
  <section class="idea-edit">
    <page-title page-title="脑洞管理" @back="back"></page-title>
    <div class="main-content">
      <el-form class="form" label-width="90px">
        <el-form-item label="脑洞类型:">
          <el-select class="full-width" v-model="form.type">
            <el-option v-for="item in types" :key="item.id" :value="item.id" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="脑洞介绍:">
          <el-input v-model="form.recommendReason" type="textarea" :autosize="{minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <el-form-item label="图片展示:">
          <div class="img-list">
            <el-upload
              :action="upyun.bucket"
              accept="image/*"
              :data="upyun"
              :file-list="fileListCopy"
              :limit="9"
              :on-exceed="imgLimit"
              :on-success="pictureUploaded"
              :on-remove="pictureRemove"
              multiple
              list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="left">
            <el-button type="primary" @click="submitIdea" :loading="loading">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>
<script>
import pageTitle from '@/module/pc/components/pageTitle'
export default {
  name: 'ideaEdit',
  components: {
    pageTitle
  },
  data () {
    return {
      form: {
        type: '',
        recommendReason: '',
        images: '',
        id: ''
      },
      upyun: {
        bucket: '',
        policy: '',
        signature: ''
      },
      fileListCopy: [],
      loading: false
    }
  },
  computed: {
    types () {
      return this.$store.state.partnerHome.ideaType
    },
    host () {
      return this.$store.state.partnerHome.ideaHost
    }
  },
  methods: {
    /**
    * @description 返回按钮
    * @author 王欢
    * @date 2018-08-26
    * @param {String} param 搜索字段名
    */
    back () {
      this.$router.go(-1)
    },
    /**
    * @description 拷贝vuex中的点子
    * @author 王欢
    * @date 2018-08-27
    * @param {String} param 搜索字段名
    */
    copyIdea () {
      let idea = JSON.parse(JSON.stringify(this.$store.state.partnerHome.ideaEditing))
      if (!idea) {
        this.$router.go(-1)
        return
      }
      this.fileListCopy = idea.images.map(img => {
        return {
          filename: img,
          url: this.host + img
        }
      })
      this.form = idea
    },
    /**
    * @description 获取又拍云签名
    * @author 王欢
    * @date 2018-08-27
    */
    getUpyunSign () {
      let req = {
        params: {
          upyun_key: 'partner',
          isDown: false
        }
      }
      const URL = '/micro/project_thinking/common/getUpyunSign'
      let basePath = 'http://v0.api.upyun.com/'
      this.$axios.get(URL, req).then(res => {
        this.upyun = res.msg
        this.upyun.bucket = basePath + this.upyun.bucket
      }).catch(() => this.$message.warning('获取又拍云签名失败'))
    },
    /**
    * @description 图片数量超出限制
    * @author 王欢
    * @date 2018-08-27
    */
    imgLimit () {
      this.$message.warning('图片数量超出限制')
    },
    /**
    * @description 上传成功钩子
    * @author 王欢
    * @date 2018-08-27
    */
    pictureUploaded (response, file, fileList) {
      this.fileListCopy.push({
        filename: response.url.match(/[^/]*$/)[0],
        url: file.url
      })
    },
    /**
    * @description 删除图片钩子
    * @author 王欢
    * @date 2018-08-27
    */
    pictureRemove (file, fileList) {
      this.fileListCopy = this.fileListCopy.filter(img => img.uid !== file.uid)
    },
    /**
    * @description 提交脑洞更改
    * @author 王欢
    * @date 2018-08-27
    */
    submitIdea () {
      const URL = '/micro/project_thinking/thinkManage/editThink'
      let req = {
        _ids: [this.form.id],
        recommend_reason: this.form.recommendReason,
        type_id: this.form.type,
        images: this.fileListCopy.map(img => img.filename)
      }
      this.loading = true
      this.$axios.post(URL, JSON.stringify(req)).then(res => {
        this.$message.success('编辑成功')
      }).catch(() => {
        this.$message.warning('编辑失败')
      }).finally(() => {
        this.loading = false
      })
    }
  },
  created () {
    this.copyIdea()
    this.getUpyunSign()
  }
}
</script>
<style lang="less" scoped>
  @import '~@/module/pc/less/partnerHome/idea/ideaEdit.less';
</style>
