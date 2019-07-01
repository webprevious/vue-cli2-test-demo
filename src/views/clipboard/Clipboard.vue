<template>
  <div>
    <input id="foo" value="https://github.com/zenorocha/clipboard.js.git">
    <div id="test">12345</div>
    <button data-clipboard-target="#test" ref="copy" @click="copyClick">复制到切板</button>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'jianqieban',
  data () {
    return {
      copyBtn: null
    }
  },
  methods: {
    // 剪切板回调函数
    copyClick () {
      this.copyBtn.on('success', function () {
        console.log('success')
      })
      this.copyBtn.on('error', function () {
        console.log('error')
      })
    }
  },
  mounted () {
    this.copyBtn = new Clipboard(this.$refs.copy)
  }
}
</script>

<style lang="less" scoped>
input {
  width: 40%;
}
</style>
