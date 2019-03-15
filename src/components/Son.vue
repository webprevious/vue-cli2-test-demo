<template>
  <div>
    <div class="red">子组件</div>
    <slot name="hh"></slot>
    <slot name="mm"></slot>
    <slot name="nnn"></slot>
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
