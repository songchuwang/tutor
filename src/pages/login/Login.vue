<template>
  <div class="container">
    <section class="login">
      <div class="login-switch" @click="toggle()">切换登录方式</div>
      <!-- 登录页面 -->
      <div class="login-wrap" v-if="showLoginPage === true">
        <h4>密码登录</h4>
        <form action="#" class="login-form">
          <div class="login-input">
            <label for="login-user">
              <i class="el-icon-edit"></i>
            </label>
            <input type="text" id="login-user" placeholder="请输入用户名" autocomplete="off">
          </div>
          <div class="login-input">
            <label for="login-pwd">
              <i class="el-icon-goods"></i>
            </label>
            <input type="password" id="login-pwd" placeholder="请输入密码">
          </div>
          <div class="login-input" style="border:0">
            <input type="submit" value="登录" id="login-submit">
          </div>
          <div class="logon-tips">
            <span>忘记密码</span>
            <span>免费注册</span>
          </div>
        </form>
      </div>
      <!-- 注册页面 -->
      <div class="login-wrap" v-else>
        <h4>注册账号</h4>
        <form action="#" class="login-form">
          <div class="login-input">
            <label for="login-user">
              <i class="el-icon-edit"></i>
            </label>
            <input type="text" id="login-user" placeholder="请输入用户名" autocomplete="off">
          </div>
          <div class="login-input">
            <label for="login-pwd">
              <i class="el-icon-goods"></i>
            </label>
            <input type="password" id="login-pwd" placeholder="请输入密码">
          </div>
          <div class="login-input">
            <label for="login-pwd">
              <i class="el-icon-goods"></i>
            </label>
            <input type="password" id="login-pwd" placeholder="请确认密码">
          </div>
          <div class="login-input" style="border:0">
            <input type="submit" value="注册账号" id="login-submit">
          </div>
          <div class="logon-tips">
            <span>忘记密码</span>
            <span>使用账号登录</span>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        showLoginPage: true
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      toggle() {
        this.showLoginPage = !this.showLoginPage;
        console.log(this.showLoginPage);
      },
      getData() {
        axios.get('../../../static/mock/login.json')
        .then(this.getDataSucc);
      },
      getDataSucc(res) {
        console.log(res);
        this.$store.commit('getParam',res)
        console.log(this.$store.state.loginDate.data.data[0].userName);

      }
    },
  }

</script>
<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: rgba(61, 93, 243, 1);

    .login-switch {
      position: absolute;
      padding: 5px 10px;
      right: 10px;
      cursor: pointer;

      &:hover {
        color: #ff0036;
      }
    }

    .login {
      position: absolute;
      top: 100px;
      right: 130px;
      width: 350px;
      height: 400px;
      background-color: #fff;

      .login-wrap {
        width: 300px;
        height: 260px;
        position: absolute;
        margin-top: 40px;
        left: 50%;
        transform: translate(-50%, 0);

        h4 {
          font-size: 16px;
          height: 18px;
          line-height: 18px;
          font-weight: 700;
          color: #3c3c3c;
        }

        .login-form {
          margin-top: 30px;

          .login-input {
            width: 300px;
            height: 40px;
            margin-top: 22px;
            box-sizing: border-box;
            position: relative;
            border: 1px solid #cbcbcb;

            label {
              display: inline-block;
              position: absolute;
              left: 0;
              width: 38px;
              height: 38px;
              background: #ddd;

              i {
                display: inline-block;
                width: 38px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                font-size: 22px;
                color: #606060;
              }
            }

            input {
              width: 298px;
              height: 38px;
              line-height: 38px;
              color: #999;
              border: 0;
              font-size: 14px;
              box-sizing: border-box;
              padding-left: 48px;
              background: #fff;

              &::placeholder {
                font-size: 14px;
                color: #999;
                background: #fff;
              }
            }

            #login-submit {
              display: inline-block;
              padding-left: 0;
              background: #ff0036;
              color: #fff;
              border: 0;
              font-size: 16px;
              border-radius: 3px;
              font-weight: 700;
              cursor: pointer;
              letter-spacing: 5px;
              text-align: center;

              &:hover {
                background-color: rgba(255, 0, 54, .8);
              }
            }
          }

          .logon-tips {
            margin-top: 18px;

            span {
              font-size: 12px;
              margin-right: 12px;
              cursor: pointer;
              float: right;
              color: #6c6c6c;

              &:hover {
                color: #ff0036;
              }
            }
          }
        }
      }

    }



  }

</style>
