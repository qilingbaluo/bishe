<template>
  <div id="user-login">
    <div class="bgimg">
      <div class="loginbox">
        <div class="header">
          <h1>登录</h1>
        </div>
        <el-form :label-position="'right'"
                 label-width="150px"
                 :model="formData">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名"
                      v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码"
                      v-model="formData.password"
                      auto-complete="new-password"
                      show-password>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="font-size: 18px;"
                       @click="userLogin()"
                       type="success">登录</el-button>
            <el-button style="font-size: 18px;"
                       @click="toRegister()"
                       type="primary"
                       round>没有账号？去注册吧</el-button>

          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'


export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    toRegister () {
      this.$router.push({
        path: '/userregist'
      })
    },
    userLogin () {
      if (this.formData.username.length == 0 || this.formData.password.length == 0) {
        this.$alert('请把登录信息填写完整', '警告', {
          confirmButtonText: '确定',
        });

        return
      }
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9000/api/yonghu-login/',
        data: Qs.stringify(this.formData)
      }).then((res) => {

        if (res.data == 'none') {
          this.$alert('用户名不存在', '警告', {
            confirmButtonText: '确定',
          });
        }
        if (res.data == 'pwderr') {
          this.$alert('密码错误', '警告', {
            confirmButtonText: '确定',
          });
        }
        // console.log(res.data);
      })
    }
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

.el-message-box__message p {
  font-size: 25px;
  color: #000;
}

.el-message-box__title span {
  font-size: 25px;
}

.el-button--primary {
  border-radius: 20px;
}

.el-message-box__headerbtn .el-message-box__close {
  color: #000;
  font-size: 25px;
  font-weight: bolder;
}
</style>
