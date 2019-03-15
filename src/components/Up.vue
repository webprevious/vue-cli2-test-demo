<template>
  <div>
    <el-upload
      class="upload-demo"
      :action="actionUrl"
      :data="upyun"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-input type="number" v-model="input" placeholder="请输入内容" @input="judgeInput"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      upyun: {
        authorization: 'UPYUN upyun:nx9kPu0De1X55WDllL9rR+ohZYc=',
        policy: 'eyJidWNrZXQiOiJzaG9wZGV2Iiwic2F2ZS1rZXkiOiJ7ZmlsZW5hbWV9ey5zdWZmaXh9IiwiZXhwaXJhdGlvbiI6IjE1NTEwOTc0MzEiLCJkYXRlIjoiTW9uLCAyNSBGZWIgMjAxOSAxMDowMzo1OSBHTVQifQ=='
      },
      host: 'http://v0.api.upyun.com/',
      input: ''
    }
  },
  computed: {
    actionUrl () {
      return this.host + 'shopdev'
    }
  },
  methods: {
    judgeInput (value) {
      console.log(value)
      let temp = ''
      if (value.length === 11) {
        temp = value
      }
      this.input = temp
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了${files.length} 个文件，共选择了${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    async getUpyun () {
      const res = await this.$axios('/api/business/common/get_upyun_sign')
      console.log(res)
      this.upyun = res.msg
    },
    async getUpyunHost () {
      const res = await this.$axios('/api/business/common/get_host')
      console.log(res.msg)
    }
  },
  created () {
    // this.getUpyun()
    // this.getUpyunHost()
  }
}
</script>
