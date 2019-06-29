<template>
  <div class="about">
    <div class="title">关于</div>
    <div v-for="(item,index) in items" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      items: 'fnsdjkfnsdjkfdsmmvxcewuyriqwyturtyeiroutyieyuitoreuyvcmbnvcmdjgkueirotiropyriutjkdfbmvcnsasadfhklfsjgklfdgjdhsjfghfdjhgkmvxc'
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  .title {
    color: green;
  }
}
</style>
