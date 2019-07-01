<template>
  <el-row>
    <el-col :span="24">
      <div id="box">
        <el-input v-model="username" placeholder="用户名" class="input" maxlength="11"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="input"></el-input>
        <el-input v-model="password" placeholder="密码" class="input"></el-input>
        <el-col id="code">
          <el-button type="primary" class="code-btn" @click="goTo">发送验证码至邮箱</el-button>
          <el-input v-model="code" placeholder="验证码" class="code-input"></el-input>
        </el-col>
        <el-button type="primary" class="btn" @click="register">注册</el-button>
      </div>
    </el-col>
    <el-col :span="24">
      <div id="box">
        <el-input v-model="username" placeholder="用户名" class="input"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="input"></el-input>
        <el-input v-model="password" placeholder="密码" class="input"></el-input>
        <el-col id="code">
          <el-button type="primary" class="code-btn" @click="goTo">发送验证码至邮箱</el-button>
          <el-input v-model="code" placeholder="验证码" class="code-input"></el-input>
        </el-col>
        <el-button type="primary" class="btn" @click="register">注册</el-button>
      </div>
    </el-col>
    <el-col :span="24">
      <div id="box">
        <el-input v-model="username" placeholder="用户名" class="input"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="input"></el-input>
        <el-input v-model="password" placeholder="密码" class="input"></el-input>
        <el-col id="code">
          <el-button type="primary" class="code-btn" @click="goTo">发送验证码至邮箱</el-button>
          <el-input v-model="code" placeholder="验证码" class="code-input"></el-input>
        </el-col>
        <el-button type="primary" class="btn" @click="register">注册</el-button>
      </div>
    </el-col>
    <el-col>
      <div id="box">
        <el-upload
          class="upload-demo"
          action="http://223.94.4.163:91/file/upload?token=0ugkOi97cWGMESZw"
          :on-success="uploadSuccess"
          :on-error="uploadFail"
          :on-progress="uploadProgress"
          :auto-upload="true"
          accept=".pdf"
          :show-file-list="false">
          <span>文件上传</span>
        </el-upload>
      </div>
    </el-col>
    <el-col :span="24">
      <div id="box">
        <el-input v-model="username" placeholder="用户名" class="input"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="input"></el-input>
        <el-input v-model="password" placeholder="密码" class="input"></el-input>
        <el-col id="code">
          <el-button type="primary" class="code-btn" @click="goTo">发送验证码至邮箱</el-button>
          <el-input v-model="code" placeholder="验证码" class="code-input"></el-input>
        </el-col>
        <el-button type="primary" class="btn" @click="register">注册</el-button>
      </div>
    </el-col>
    <el-col :span="24">
      <div id="box">
        <el-button type="primary" class="btn">下载</el-button>
        <el-button type="primary" class="btn" @click="downLoad">下载2</el-button>
        <el-upload
          class="upload-demo"
          action="/"
          :on-change="importExcel"
          :auto-upload="false"
          accept=".xlsx"
          :show-file-list="false">
          <el-button type="primary">文件导入解析</el-button>
        </el-upload>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      code: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  watch: {
    username (newValue, oldValue) {
      if (!/^([1-9][0-9]*)$/g.test(newValue) && newValue.length === 11) {
        alert('请输入正确的金额')
      }
    }
  },
  methods: {
    async register () {
      let reqData = {
        username: this.username,
        password: this.password,
        email: this.email,
        code: this.code
      }
      const res = await this.$axios('/api/register', reqData, 'POST')
      console.log(res)
    },
    goTo () {
      // this.$router.push({
      //   path: '/login',
      //   query: {
      //     id: 2
      //   }
      // })
      this.$router.back()
    },
    uploadSuccess (response, file, fileList) {
      console.log(response)
      this.$message.success('上传成功')
    },
    uploadFail (response, file, fileList) {
      console.log(response)
      this.$message.error('上传失败')
    },
    uploadProgress (event, file, fileList) {
      console.log(event)
    },
    downLoad () {
      var jsono = [{
        'id': 1,
        '合并的列头1': '数据11',
        '合并的列头2': '数据12',
        '合并的列头3': '数据13',
        '合并的列头4': '数据14'
      }, {
        'id': 2,
        '合并的列头1': '数据21',
        '合并的列头2': '数据22',
        '合并的列头3': '数据23',
        '合并的列头4': '数据24'
      }]
      this.downloadExl(jsono)
    },
    saveAs (obj, fileName) {
      var tmpa = document.createElement('a')
      tmpa.download = fileName || '下载'
      tmpa.href = URL.createObjectURL(obj)
      tmpa.click()
      setTimeout(function () {
        URL.revokeObjectURL(obj)
      }, 100)
    },
    downloadExl (data, type) {
      var wopts = { bookType: 'xlsx', bookSST: true, type: 'binary' }
      var wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} }
      data = XLSX.utils.json_to_sheet(data)
      data['!cols'] = [{wpx: 45}, {wpx: 165}, {wpx: 45}, {wpx: 45}, {wpx: 45}]
      wb.Sheets['Sheet1'] = data
      this.saveAs(new Blob([this.s2ab(XLSX.write(wb, wopts))], {type: 'application/octet-stream'}), '这里是下载的文件名' + '.' + (wopts.bookType === 'biff2' ? 'xls' : wopts.bookType))
    },
    s2ab (s) {
      if (typeof ArrayBuffer !== 'undefined') {
        let buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
        return buf
      } else {
        let buf = new Array(s.length)
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF
        return buf
      }
    },
    importExcel (file) {
      // let file = file.files[0] // 使用传统的input方法需要加上这一步
      const types = file.name.split('.')[1]
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
      if (!fileType) {
        this.$message('格式错误！请重新选择')
        return
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          this.xlsxJson = tabJson
          console.log('数据', this.xlsxJson)
        }
      })
    },
    file2Xce (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const data = e.target.result
          this.wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
        // reader.readAsBinaryString(file) // 传统input方法
      })
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
<style lang="less">
#box {
  width: 300px;
  margin: 0 auto;
  padding-top: 60px;
  .input {
    margin-bottom: 30px;
  }
  .btn {
    width: 300px;
    margin-left: 0;
    margin-bottom: 20px;
  }
  #code {
      margin-bottom: 20px;
    .code-btn {
      width: 160px;
      margin-right: 20px;
    }
    .code-input {
      width: 114px;
    }
  }
}
</style>
