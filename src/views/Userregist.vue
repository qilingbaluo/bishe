<template>
  <div id="user-regist">
    <div class="bgimg">
      <div class="registbox">
        <div class="header">
          <h1>注册</h1>
        </div>
        <el-form :label-position="'right'" label-width="150px" :model="formData">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
          </el-form-item>

          <!-- 验证手机格式 11位 -->
          <el-form-item label="手机号">
            <el-input placeholder="手机号" v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="formData.password" auto-complete="new-password" show-password>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input placeholder="请再次输入密码" v-model="formData.password" auto-complete="new-password" show-password>
            </el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input placeholder="请输入内容" v-model="formData.useradress">
              <template slot="prepend">贵园南里</template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button style="font-size: 18px;" @click="userRegister()" type="success" round>注册</el-button>
            <el-button style="font-size: 18px;" @click="toLogin()" type="primary">已有账号，去登录吧</el-button>
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
          password: '',
          useradress: ''
        }
      };
    },
    methods: {
      toLogin() {
        this.$router.push({ path: '/userlogin' })
      },
    },
  }
</script>
<style>
  .header {
    display: inline-block;
    height: 30px;
    margin-top: 15px;
  }

  .el-form {
    position: absolute;
    top: 150px;
  }

  .el-button--success {
    width: 78px;
  }

  .el-form-item__label {
    font-size: 24px;
  }

  .ad {
    font-size: 20px;
    display: block;
  }

</style>
