<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Headtop from '@/components/Headtop.vue'
import Navgator from '@/components/Navgator.vue'
export default {
  data () {
    return {
      msg: '1'
    }
  },
  components: {
    Headtop,
    Navgator
  }
}
</script>

<style lang="less">
#layout {
  min-width: 900px;
  .head {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    min-width: 900px;
  }
  .router-view {
    padding-top: 80px;
    height: 100vh;
    overflow-x: auto;
    min-width: 700px;
  }
}
</style>
