<template>
  <div>
    <div class="loading-wrapper" v-show="showLoading">
      <Loading></Loading>
    </div>
    <div class="login-wrapper" v-show="!showLoading">
      <img :src="imgUrl" alt="" width="100%" height="100%" />
      <div class="login">
        <p class="title">修改密码</p>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :xs="24" :sm="24" :lg="24">
              <el-form-item prop="oldPassword">
                <el-input
                  v-model="ruleForm.oldPassword"
                  auto-complete="off"
                  placeholder="请输入旧密码"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :lg="24">
              <el-form-item prop="newPassword">
                <el-input
                  v-model="ruleForm.newPassword"
                  auto-complete="off"
                  placeholder="请输入新密码"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="newPassword2">
            <el-input
              type="password"
              v-model="ruleForm.newPassword2"
              auto-complete="off"
              placeholder="请再次输入新密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="login('ruleForm')"
              style="width: 100%"
              >登录</el-button
            >
            <p class="register" @click="gotoRegist">没有账户？立即注册</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Loading from "@/components/loading/Loading.vue";
import { login } from "@/http";

export default {
  name: "Login",
  components: {
    Loading,
  },
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else if(value !== this.ruleForm.newPassword2) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      showLoading: true,
      imgUrl: require("../../assets/images/bg-img.jpg"),
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      },
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'change' }],
        newPassword: [{ required: true, message: '请输入新密码', trigger: 'change' }],
        newPassword2: [{ validator: validatePass, required: true, message: '请再次输入新密码', trigger: 'change' }],
      },
    };
  },
  mounted() {
    let bgImg = new Image();
    bgImg.src = this.imgUrl;
    bgImg.onerror = () => {
      console.log("img onerror");
    };
    bgImg.onload = () => {
      // 图片加载成功后 去除loading
      this.showLoading = false;
    };
  },
  methods: {
    ...mapMutations({
      bindLogin: "BIND_LOGIN",
      saveUser: "SAVE_USER",
    }),
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.bindLogin(this.ruleForm.name);
          this.saveUser(this.ruleForm.name);
          login({
            a: 1,
          });
          this.$notify({
            title: "成功",
            message: "恭喜，登录成功。",
            duration: 1000,
            type: "success",
          });
          setTimeout(() => {
            this.$router.push({
              path: "/",
            });
          }, 500);
        }
      });
    },
    gotoRegist() {
      this.$router.push({
        path: "/register",
      });
    },
    changePassword() {
      this.$router.push({
        path: "/register",
      });
    }
  },
};
</script>
<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.login-wrapper img {
  position: absolute;
  z-index: 1;
}
.login {
  max-width: 340px;
  margin: 60px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
#login-form > input {
  width: 100%;
  height: 34px;
  display: block;
  margin-top: 26px;
  background: #fff;
  color: #333;
  border: 1px solid #7da9c7;
  outline: none;
  text-indent: 20px;
  font-size: 14px;
}
#login-form > button {
  width: 100%;
  height: 34px;
  display: block;
  margin-top: 26px;
  background: #1ab2ff;
  color: #fff;
  border: 1px solid #1ab2ff;
  outline: none;
  border-radius: 100px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.register {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  text-indent: 8px;
  color: #1ab2ff;
  cursor: pointer;
  display: inline-block;
}
.register:hover {
  color: #2c2fd6;
}
@media (max-width: 768px) {
  .login {
    max-width: 260px;
    margin: 60px auto;
    background: #fff;
    padding: 20px 20px;
    border-radius: 10px;
    position: relative;
    z-index: 9;
  }
}
</style>
