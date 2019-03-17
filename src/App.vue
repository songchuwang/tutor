<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from './common/Header'
  export default {
    name: 'App',
    components: {
      Header,
    },
    created() {
      // 我希望在页面dom结构创建伊始，从vuex中获取数据，因为数据最
      // 开始是通过axios获取的然后存在vuex中的，我希望实现本地存储，
      // 首先我需要先判断localstorage是否存在数据，如果存在就不必再
      // 发送ajax请求了，直接调用localstorage里面的数据就行了。
      // 页面初始化时获取数据
      // this.$store.dispatch('getData',data)


      // 获取json数据
      axios.get('/static/mock/static.json')
        .then(this.getDataSucc);
    },
    methods: {
      getDataSucc(res) {
        this.$store.dispatch('getParamSync', res.data.data);
      },
    },
  }

</script>

<style>
  @import '../src/assets/css/reset.css';

</style>
