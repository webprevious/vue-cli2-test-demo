<template>
  <div class="my">
    <div class="title">我的</div>
    <button @click="add">增加</button>
    <div v-for="(item,index) in items" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      items: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBB'
    }
  },
  methods: {
    add () {
      let newStr = 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
      this.items = this.items + newStr
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  .title {
    color: pink;
  }
}
</style>
