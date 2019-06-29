<template>
  <div class="home">
    <div class="title">首页</div>
    <div v-for="item in 100" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
.home {
  .title {
    color: red;
  }
}
</style>
