<template>
  <div class="header">
    <nav class="header-nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/information">教员信息库</router-link>
        </li>
        <li>
          <router-link to="/require">学生需求信息</router-link>
        </li>
        <li>
          <router-link to="/administrator">管理员入口</router-link>
        </li>
        <li style="float:right;margin-right:100px">
          <router-link to="/login">登录</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="scss" scoped>
  .header /deep/ .router-link-exact-active {
    background: rgba(245, 245, 245,.24);
  }

  .header {
    width: 100%;
    background: #1976d2;

    ul {
      overflow: hidden;
    }

    li {
      width: 100px;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding: 0 20px;

      a {
        color: #fff;
        display: inline-block;
        white-space: nowrap;
        padding: 0 15px;
        border-radius: 5px;
        height: 35px;
        line-height: 35px;
        &:hover {
          color: #E2E2E2;
        }
      }
    }
  }

</style>
