<template>
  <div>
    <div class="green">父组件</div>
    <son>
      <div slot="hh">
        yellow
      </div>
      <div slot="mm">
        mmmmm
      </div>
    </son>
  </div>
</template>

<script>
import Son from '@/components/Son.vue'
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
