<template>
  <el-row>
    <el-row class="top">
      <button @click="goTo(1)">去1号路由</button>
      <button @click="goTo(2)">去2号路由</button>
    </el-row>
    <el-row class="body">
      <router-view></router-view>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'test inner router',
  methods: {
    goTo (index) {
      if (index === 1) {
        this.$router.push('/in/one')
      } else {
        this.$router.push('/in/two')
      }
    }
  }
}
</script>

<style lang="less">
.top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.body {
  margin-top: 30px;
}
</style>
