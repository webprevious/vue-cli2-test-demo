<template>
  <el-row class="nav-wrap">
    <el-col :span="24">
      <div class="item-list">
        <i class="el-icon-location"></i>
        <router-link to="/">概况</router-link>
      </div>
    </el-col>
    <el-col :span="24">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="/login">选项1</el-menu-item>
          <el-menu-item index="/register">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="24">
      <div class="item-list">
        <i class="el-icon-location"></i>
        <router-link to="/login">发票管理</router-link>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="item-list">
        <i class="el-icon-location"></i>
        <router-link to="/register">原片管理</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleOpen (index) {
      console.log(index)
    },
    handleClose (index) {
      console.log(index)
    }
  },
  mounted () {
    console.log(1)
  }
}
</script>

<style lang="less">
.nav-wrap {
  min-width: 200px;
  z-index: 999;
  height: 100vh;
  background: #E4E7ED;
  padding-top: 80px;
  .item-list {
    height: 56px;
    line-height: 56px;
    color: #303133;
    padding-left: 23px;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 14px;
      color: #303133;
    }
    i {
      color: #909399;
      font-size: 18px;
      margin-right: 14px;
    }
  }
}
</style>
