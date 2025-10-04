<template>
  <div class="bg">

    <div class="login">
      <div class="logo">
        <img :src="log0Img" alt="" width="70px" height="70px">
        <h1 class="ml">小华能源充电管理平台</h1>
      </div>

      <el-form>
        <el-form-item>
          <el-input prefix-icon="User" placeholder="用户名"/>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="Lock" placeholder="密码"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script setup lang="ts">
import log0Img from "@/assets/logo.png"
// import {User, Lock} from "@element-plus/icons-vue";

</script>

<style scoped lang="less">
.bg{
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  .login {
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      h1{
        color: rgb(14, 53, 148);
      }
    }
    width: 500px;
    height: 300px;
    padding: 50px;
    box-shadow: 0 0 10px 10px #f4f4f4;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -200px;
  }
}
</style>