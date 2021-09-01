<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="旧密码："
            :label-width="formLabelWidth"
            prop="oldPassword"
          >
            <el-input v-model="form.oldPassword" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="新密码："
            :label-width="formLabelWidth"
            prop="newPassword"
          >
            <el-input v-model="form.newPassword" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="重复新密码："
            :label-width="formLabelWidth"
            prop="newPassword2"
          >
            <el-input v-model="form.newPassword2" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24" class="flex-row-center">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >修改密码</el-button
          >
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
      },
      formLabelWidth: "120px",
      rules: {
        oldPassword: [{ required: true, message: "请输入名称", trigger: "blur" }],
        newPassword: [{ required: true, message: "请输入名称", trigger: "blur" }],
        newPassword2: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
    };
  },
};
</script>

<style>
</style>