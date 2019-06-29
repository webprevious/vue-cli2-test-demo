<template>
  <div class="index">
    <div class="tab-bar">
      <div class="item" @click="goto('/keep/home')">首页</div>
      <div class="item" @click="goto('/keep/about')">关于</div>
      <div class="item" @click="goto('/keep/my')">我的</div>
    </div>
    <div class="view-show">
      <!-- <keep-alive>
        <router-view></router-view>
      </keep-alive> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  .tab-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #FFFFFF;
    .item {
      text-align: center;
      width: 33.33%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #eeeeee;
    }
  }
  .view-show {
    margin-top: 42px;
  }
}
</style>
