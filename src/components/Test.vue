<template>
  <div>
        <el-row>
            <el-col :span="8">
                <el-form>
                    <el-form-item label="权限组">
                        <el-select v-model="search.permission" placeholder="请选择" @change="selectPermissionGroup" clearable>
                            <el-option
                            v-for="(item, index) in search.permissionGroup"
                            :key="index"
                            :label="item.title"
                            :value="item.role_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
        <el-table
        :data="tableData"
        border>
        <el-table-column
            label="全选"
            width="50">
            <template slot-scope="scope">
            <el-checkbox v-model="scope.row.isChecked" true-label="true" false-label="false" @change="checked=>handleClick(checked, scope)"></el-checkbox>
            </template>
        </el-table-column>
        <el-table-column
            prop="module"
            label="模块"
            width="250">
        </el-table-column>
        <el-table-column
            prop="name"
            label="功能点">
            <template slot-scope="scope">
            <el-checkbox-group v-model="scope.row.selecteList" @change="selectPermmission(scope)">
                <el-checkbox v-for="(item, index) in scope.row.checkList" :key="index" :label="item.permission_id">{{item.title}}</el-checkbox>
            </el-checkbox-group>
            </template>
        </el-table-column>
        </el-table>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        module: '预约系统管理',
        mudleType: 1,
        checkList: [],
        selecteList: [],
        isChecked: false
      }, {
        module: '营销管理',
        mudleType: 2,
        checkList: [],
        selecteList: [],
        isChecked: false
      }, {
        module: '账号权限管理',
        mudleType: 3,
        checkList: [],
        selecteList: [],
        isChecked: false
      }],
      search: {
        permissionId: '',
        permissionGroup: []
      }
    }
  },
  methods: {
    async getPermissionList () {
      const res = await this.$axios('/api/erp/auth/getPermissionList')
      if (res.success) {
        var permission = res.msg.filter(item => (item.name !== 'base'))
        var list = ['reservation', 'activity', 'auth']
        var len = this.tableData.length
        permission.forEach(item => {
          for (var i = 0; i < len; i++) {
            if (item.name.includes(list[i])) {
              this.tableData[i].checkList.push(item)
            }
          }
        })
      } else {
        console.log(res)
      }
    },
    async getPermissionGroup () {
      const res = await this.$axios('/api/erp/auth/getRoleList')
      if (res.success) {
        this.search.permissionGroup = res.msg
      } else {
        console.log(res)
      }
    },
    async getUserInfo () {
      let reqData = {
        staffId: 600410
      }
      const res = this.$axios('/api/erp/auth/getStaffInfo', reqData)
      if (res.success) {
        console.log(res)
      } else {
        console.log(res)
      }
    },
    selectPermissionGroup (value) {
      console.log(value)
    },
    selectPermmission (scope) {
      console.log(scope)
      var selecteList = scope.row.selecteList
      var checkList = scope.row.checkList
      if (checkList.length === selecteList.length) {
        scope.row.isChecked = true
      } else {
        scope.row.isChecked = false
      }
    },
    handleClick (value, scope) {
      var selecteList = scope.row.selecteList
      var checkList = scope.row.checkList
      if (value === 'true') {
        checkList.forEach(item => {
          if (!selecteList.includes(item.permission_id)) {
            selecteList.push(item.permission_id)
          }
        })
      } else {
        scope.row.selecteList = []
      }
    }
  },
  created () {
    this.getPermissionList()
    this.getPermissionGroup()
    this.getUserInfo()
  }
}
</script>
<style lang="less">

</style>
