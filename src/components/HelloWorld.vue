<template>
  <div class="hello">
    <el-row v-if="false">
      <el-col :span="12"><div class="bg-purple">1</div></el-col>
      <el-col :span="12"><div class="bg-purple-light">1</div></el-col>
      <el-col :span="24"><el-button type="success" @click="clickMe">默认按钮</el-button></el-col>
      <el-col :span="24"><el-button type="danger" @click="clickMeFor">for默认按钮</el-button></el-col>
    </el-row>
    <el-row>
      <button><i class="iconfont icon-file_location"></i>nihao</button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickMe () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    clickMeFor () {
      // aaa:
      // for (var i = 0; i < 3; i++) {
      //   console.log(i, '我是i')
      //   bbb:
      //   for (var j = 0; j < 2; j++) {
      //     console.log(j, '我是j')
      //     if (j === 0) {
      //       console.log('j等于0了')
      //       break aaa
      //     }
      //   }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~@/assets/less/index.less';
.hello {
  color: @color
}
.bg-purple {
  background: #333;
  width: 100px;
  height: 60px;
}
.bg-purple-light {
  background: greenyellow;
  width: 100px;
  height: 60px;
}
</style>
