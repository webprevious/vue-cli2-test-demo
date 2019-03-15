<template>
  <el-row>
    <el-col :span="24">
      <div id="box">
        <el-input v-model="username" placeholder="用户名" class="input"></el-input>
        <el-input v-model="password" placeholder="密码" class="input"></el-input>
        <el-button type="primary" class="btn" @click="goTo">登录</el-button>
        <el-button class="btn">还没有账号?</el-button>
        <button id="TencentCaptcha" data-appid="2049380082" data-cbfn="callback" type="button">按钮</button>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register () {
      let reqData = {
        username: this.username,
        password: this.password
      }
      const res = await this.$axios('/api/login', reqData, 'POST')
      console.log(res)
    },
    goTo () {
      this.$router.push({
        name: 'Register',
        query: {
          id: 1
        }
      })
    }
  },
  created () {
    // console.log(TencentCaptcha)
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'https://ssl.captcha.qq.com/TCaptcha.js'
    document.body.appendChild(s)
    window.callback = function (res) {
      console.log(res)
    }
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
}
</style>
