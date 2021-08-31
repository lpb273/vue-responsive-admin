<template>
  <div>
    <el-row class="top-block">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-button type="primary">主要按钮</el-button>
        <el-button>默认按钮</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="12">
        <el-button type="primary">主要按钮</el-button>
        <el-button>默认按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style></style>
