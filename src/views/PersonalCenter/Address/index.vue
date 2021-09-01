<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="国家地区："
            prop="country"
            :label-width="formLabelWidth"
          >
            <el-input
              disabled
              v-model="form.country"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-form-item
            label="所在省："
            prop="province"
            :label-width="formLabelWidth"
          >
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-form-item
            label="所在市："
            prop="city"
            :label-width="formLabelWidth"
          >
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="街道地址："
            :label-width="formLabelWidth"
            prop="address"
          >
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="联系电话："
            :label-width="formLabelWidth"
            prop="phone"
          >
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <el-form-item
            label="收货人："
            :label-width="formLabelWidth"
            prop="people"
          >
            <el-input v-model="form.people" autocomplete="off"></el-input>
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
        country: "中国",
        province: "",
        city: "",
        address: "",
        phone: "",
        people: ""
      },
      formLabelWidth: "100px",
      rules: {
        country: [{ required: true, message: "请输入名称", trigger: "blur" }],
        province: [{ required: true, message: "请输入名称", trigger: "blur" }],
        city: [{ required: true, message: "请输入名称", trigger: "blur" }],
        address: [{ required: true, message: "请输入名称", trigger: "blur" }],
        phone: [{ required: true, message: "请输入名称", trigger: "blur" }],
        people: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style>
</style>