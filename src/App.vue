<template>
  <div id=app>
    <!-- 头部 -->
    <div id="topmenu">
      <div class="header-mainpart">
        <div class="logo-img">
          社区居民购物网站
        </div>
        <div class="menu">
          <!-- 跳到home @click=""-->
          <el-button type="text" @click="toHome()" class="el-icon-food">首页</el-button>
          <!-- 跳到个人中心 @click="" -->
          <el-button type="text" @click="toUsermsg()" class="el-icon-user">个人中心</el-button>
          <!-- 退出登录 -->
          <el-button type="text" class="el-icon-switch-button">退出登录</el-button>
        </div>
        <div class="help">
          <el-button type="text" @click="open" class="iconfont icon-help">帮助</el-button>
        </div>
      </div>
    </div>
    <!-- 侧边 -->
    <div v-if="tab" class="container-box">
      <div class="mainPart good-list">
        <div class="goods-left">
          <div class="titlebox">
            <label v-if="usertab">分类</label>
          </div>
          <div v-if="usertab2" class="userbox">
            <!-- 用户注册姓名 -->
            <label>hi， 王家兴 </label>
          </div>
          <div class="titlelist">
            <el-menu v-if="usertab" default-active="2" class="el-menu-vertical-demo" @select="chooseMenu">

              <el-menu-item index="/1">
                <span class="food-title" slot="title">熟食</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">冷冻生鲜</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">蔬菜</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">水果</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">水饮</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">粮油</span>
              </el-menu-item>

              <el-menu-item index="/1">
                <span class="food-title" slot="title">生活用品</span>
              </el-menu-item>
            </el-menu>
            <!-- 跳转到个人中心时显示的导航 -->
            <el-menu v-if="usertab2" default-active="2" class="el-menu-vertical-demo" @select="chooseMenu">
              <el-menu-item index="/userdingdan">
                <span class="food-title" slot="title">订单详情</span>
              </el-menu-item>
              <el-menu-item index="/useradress">
                <span class="food-title" slot="title">地址信息</span>
              </el-menu-item>
              <el-menu-item index="/userxinxi">
                <span class="food-title" slot="title">个人信息</span>
              </el-menu-item>
            </el-menu>
          </div>


        </div>

        <div v-if="usertab" class="msg-box">
          <el-divider></el-divider>
          <label style="font-weight: bold; font-size: 20px; margin-left: 10px;">送餐至：</label>
          <!-- 类似小博客的登录 -->
          <a class="btnchange" href="javascript:;" @click="changeadress()">更换地址</a>
          <div class="adress-box">
            北京市大兴区贵园南里丙区14栋7单元602
          </div>
          <div class="timebox">
            <label style="font-weight: bold; font-size: 20px; margin-left: 10px;">预计时间：40分钟</label>
          </div>
        </div>

        <!-- 右边框 -->
        <div class="goods-right">
          <div class="page-top">
            <!-- 搜索框 -->
            <div v-if="usertab" class="food-search">
              <el-input style="margin-left: 200px; height: 60px;border-radius: 50px;" placeholder="请输入要搜索的商品"
                class="input-with-select"></el-input>
              <el-button style="position: absolute;top:25px; height:50px;background-color: rgb(245, 153, 15);"
                slot="append" icon="el-icon-search">
              </el-button>
            </div>
            <!-- 登录后商品浏览 -->
            <div class="food-listbox">
              <router-view></router-view>
            </div>

          </div>
        </div>

        <!-- 购物车 -->
        <div v-if="usertab" class="buycar">
          <div class="mainPart cart-panel">
            <div class="cart-panel-overview">
              <i class="el-icon-shopping-cart-2" style="font-size: 70px;margin-top: 35px;"></i>
              <label class="sumnumber">合计：xx元</label>
              <el-button style="left: 90%;width: 200px;margin-top: 40px;background-color: rgb(245, 153, 15);"
                type="success" round>去结算
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录注册时显示 -->
    <div v-if="tab2" class="content">
      <router-view></router-view>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        tab2: false,
        isCollapse: true,
        tab: true,
        usertab: true,
        usertab2: false
      };
    },

    methods: {
      open() {
        this.$alert('如有问题请拨打xxxxxxxxx', '帮助', {
          confirmButtonText: '确定'
        });
      },
      chooseMenu(index) {
        // console.log(index)
        this.$router.push({
          path: index
        }) //router为false时使用push跳转
      },
      changeadress() {
        // 添加添加弹出盒子修改地址，类似小博客的登录
        alert('hhh')
      },
      toHome() {
        // 添加判断是否登录
        this.$router.push({ path: '/' })
      },
      toUsermsg() {
        this.$router.push({ path: '/usermsg' })
      },
    },
    watch: {
      $route(e) {
        if (e.name == 'Userlogin' || e.name == 'Userregist') {
          this.tab = false
          this.tab2 = true
        } else {
          this.tab = true
          this.tab2 = false
        }
        // 如果路径是个人信息相关则隐藏
        if (e.name == 'Usermsg') {
          this.usertab = false
          this.usertab2 = true
        } else {
          this.usertab = true
          this.usertab2 = false
        }
      }
    },
  }
</script>
<style>
  span {
    font-weight: bold;
  }

  .btnchange {
    margin-left: 30px;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .btnchange:hover {
    color: rgb(230, 171, 10);
  }

  .cart-panel-overview span:hover {
    color: black;
  }

  .sumnumber {
    position: absolute;
    font-size: 25px;
    line-height: 170px;
    left: 20%;
  }

  .food-search .el-input__inner {
    border: black 3px solid;
  }

</style>
