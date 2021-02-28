<template>
  <div id="user-regist">
    <div class="bgimg">
      <div class="registbox">
        <div class="header">
          <h1>注册</h1>
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
          <el-form-item label="确认密码">
            <el-input placeholder="请再次输入密码"
                      v-model="formData.password2"
                      auto-complete="new-password"
                      show-password>
            </el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input placeholder="请输入内容"
                      v-model="formData.useradress">
              <template slot="prepend">贵园南里</template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button style="font-size: 18px;"
                       @click="userRegister()"
                       type="success"
                       round>注册</el-button>
            <el-button style="font-size: 18px;"
                       @click="toLogin()"
                       type="primary">已有账号，去登录吧</el-button>
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
        password: '',
        password2: '',
        useradress: '',
      },
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ path: '/userlogin' })
    },
    userRegister () {
      if (this.formData.username.length == 0 || this.formData.password.length == 0 || this.formData.password2.length == 0 || this.formData.useradress.length == 0) {
        this.$alert('请把注册信息填写完整', '警告', {
          confirmButtonText: '确定',
        });
        return
      }
      if (this.formData.password2 != this.formData.password) {
        this.$alert('两次密码不一致', '警告', {
          confirmButtonText: '确定',
        });
        return
      }
      if (this.formData.password.length < 8 || this.formData.password2.length < 8) {
        this.$alert('密码太短，不能小于8位', '警告', {
          confirmButtonText: '确定',
        });
        return
      }
      axios({
        method: 'post',
        url: 'http://127.0.0.1:9000/api/yonghu-register/',
        data: Qs.stringify(this.formData)
      }).then((res) => {
        console.log(res.data)
        if (res.data == 'repeat') {
          this.$alert('用户名已存在', '警告', {
            confirmButtonText: '确定',
          });
          return
        }
      })
    }
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
