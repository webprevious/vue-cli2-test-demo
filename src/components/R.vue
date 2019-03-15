<template>
  <div class="con">
    <div class="inner-con">
      <div class="hhh"></div>
      <div class="www"></div>
    </div>
    <div class="btn">
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(0)
  }
}
</script>
<style lang="less" scoped>
.con{
  overflow: hidden;
  .inner-con{
    width: 100%;
    height: 100vh;
    background: pink;
    overflow: scroll;
    margin-bottom: 100px;
    .hhh{
      width:80px;
      background: yellow;
      height: 680px;
    }
    .www{
      height: 80px;
      background: red;
    }
  }
  .btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: blue;
  }
}
</style>
