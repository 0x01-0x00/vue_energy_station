<template>
  <div class="bg">

    <div class="login">
      <div class="logo">
        <img :src="log0Img" alt="" width="70px" height="70px">
        <h1 class="ml">小华能源充电管理平台</h1>
      </div>

      <el-form :model="loginForm" :rules="rules">
        <el-form-item prop="name">
          <el-input prefix-icon="User" placeholder="用户名" v-model="loginForm.name"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="Lock" placeholder="密码" v-model="loginForm.password" type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script setup lang="ts">
import log0Img from "@/assets/logo.png"
import {reactive,ref} from "vue";
import type {FormRules, FormInstance} from "element-plus"
// 登录表单
interface LoginForm {
  name: string;
  password: string;
}
// 表单验证
const loginForm: LoginForm = reactive({
  name: "",
  password: "",
})
// 表单验证规则
const rules=reactive<FormRules<LoginForm>>({
  name: [
    {required: true, message: "请输入用户名", trigger: "blur"},
    {min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur"},
  ],
  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    {min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur"},
  ],
})

const formRef = ref<FormInstance>();
const handleLogin = () => {
  formRef.value?.validate(valid: boolean => {
    if (valid) {
      console.log("登录成功")
    } else {
      console.log("登录失败")
    }
  })
}

</script>

<style scoped lang="less">
.bg {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  .login {
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      h1 {
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