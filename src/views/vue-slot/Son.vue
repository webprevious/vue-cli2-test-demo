<template>
  <div>
    <div class="red">子组件</div>
    <slot name="one"></slot>
    <slot name="two"></slot>
  </div>
</template>

<script>
export default {
  name: 'son'
}
</script>

<style lang="less" scoped>
.red {
  color: red;
}
</style>
