<template>
  <div>
    <div class="green">父组件</div>
    <son>
      <div slot="one">
        具名插槽1
      </div>
      <div slot="two">
        具名插槽2
      </div>
    </son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'parent',
  components: {
    Son
  }
}
</script>

<style scoped>
.green {
  color: green;
}
</style>
