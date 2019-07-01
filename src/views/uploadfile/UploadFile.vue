<template>
  <div>
    <el-upload
      class="upload-demo"
      :action="upyun.host"
      :data="upyun"
      :before-upload="checkFile"
      :on-success="uploadSuccess"
      :on-error="uploadFail"
      :auto-upload="true"
      accept="image/*"
      :show-file-list="false"
      :limit="1">
      <img class="upload-success" :src="adImgUrl" v-if="adImgUrl">
      <div class="upload-origin" v-else>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">只能上传jpg/png文件</div>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adImgUrl: '',
      // 又拍云信息
      upyun: {
        host: 'http://v0.api.upyun.com/shopdev',
        authorization: '',
        policy: ''
      }
    }
  },
  methods: {
    // 上传文件前校验文件，现在只允许上传图片
    checkFile (file) {
      this.uploadFileName = file.name
      const types = file.name.split('.')[1]
      console.log(types)
      if (types === 'png' || types === 'jpg') {
        return true
      } else {
        this.$message.error('格式错误！请重新选择')
        return false
      }
    },
    /**
     * [uploadSuccess 合同文件上传成功回掉函数]
     * @param {Object} response 发送ajax请求成功的res对象
     * @param {Object} file 上传成功的文件对象的相关信息
     * @param {Object} fileList 文件列表
     */
    uploadSuccess (response, file, fileList) {
      console.log(response.url)
      this.adImgUrl = 'http://shopdev.test.upcdn.net/' + response.url
    },
    /**
     * [uploadFail 合同文件上传失败回掉函数]
     * @param {Object} response 发送ajax请求失败的res对象
     * @param {Object} file 上传失败的文件对象的相关信息
     * @param {Object} fileList 文件列表
     */
    uploadFail (response, file, fileList) {
      console.log(response)
    },
    async getUpyun () {
      const res = await this.$axios('/getUpyun')
      if (res.code) {
        console.log(res)
        this.upyun.authorization = res.data.authorization
        this.upyun.policy = res.data.policy
      } else {
        this.$message.error('系统错误')
      }
    }
  },
  created () {
    this.getUpyun()
  }
}
</script>

<style lang="less" scoped>
// 上传样式
.upload-demo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .upload-origin {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 98px;
    border: 1px solid #EBEEF5;
    margin-top: 30px;
  }
  .upload-success {
    width: 200px;
    height: 98px;
    margin-top: 30px;
  }
}
</style>
