<template>
  <div class="wrap">
    <el-row class="padding-20px" :gutter="30" type="flex">
      <el-col :xs="24" :sm="8" :lg="2" class="flex-align-center">
        <label>输入激活码：</label>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="20">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :xs="24" :sm="8" :lg="2">
        <el-button type="primary">激活</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: calc(100% - 58px);
}
</style>