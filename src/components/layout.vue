<template>
  <div id="layout">
    <el-row>
      <headtop></headtop>
    </el-row>
    <el-row>
      <el-col :span="4">
        <navgator></navgator>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
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
}
</style>
