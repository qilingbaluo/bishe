<template>
  <div id="user-login">
    <div class="bgimg">
      <div class="loginbox">
        <div class="header">
          <h1>登录</h1>
        </div>
        <el-form :label-position="'right'" label-width="150px" :model="formData">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="formData.password" auto-complete="new-password" show-password>
            </el-input>
          </el-form-item>


          <el-form-item>
            <el-button style="font-size: 18px;" @click="userLogin()" type="success">登录</el-button>
            <el-button style="font-size: 18px;" @click="toRegister()" type="primary" round>没有账号？去注册吧</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      toRegister() {
        this.$router.push({ path: '/userregist' })
      },
    },
  }
</script>
<style>
  .header {
    display: inline-block;
    height: 30px;
    margin-top: 20px;
  }

  .el-form {
    position: absolute;
    top: 150px;
  }

</style>
