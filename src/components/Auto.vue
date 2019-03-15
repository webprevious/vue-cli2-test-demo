<template>
  <ul class="img-wrap">
    <a href="http://www.baidu.com" class="a-item">1</a>
    <a href="http://www.baidu.com" class="a-item">2</a>
    <a href="http://www.baidu.com" class="a-item">3</a>
    <a href="http://www.baidu.com" class="a-item">4</a>
    <a href="http://www.baidu.com" class="a-item">5</a>
    <a href="http://www.baidu.com" class="a-item">6</a>
    <a href="http://www.baidu.com" class="a-item">7</a>
    <a href="http://www.baidu.com" class="a-item">8</a>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="less">
.img-wrap {
  position: absolute;
  top: 0;
  left: 10%;
  list-style: none;
  width: 80%;
  text-align: center;
  .a-item {
    display: inline-block;
    width: 200px;
    height: 120px;
    background: #f40;
    margin: 10px;
  }
}
</style>
