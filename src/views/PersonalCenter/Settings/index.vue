<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="用户邮箱："
            prop="email"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="用户名："
            :label-width="formLabelWidth"
            prop="name"
          >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="用户类型："
            :label-width="formLabelWidth"
            prop="type"
          >
            <el-input
              disabled
              v-model="form.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24" class="flex-row-center">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >更新信息</el-button
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
        email: "123456@test.com",
        date: "2021-05-21 21:11:54",
        name: "",
        type: "",
      },
      formLabelWidth: "100px",
      rules: {
        email: [{ required: true, message: "请输入名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        type: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
    };
  },
};
</script>

<style>
</style>