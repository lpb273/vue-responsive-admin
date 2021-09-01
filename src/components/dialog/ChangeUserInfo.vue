<template>
  <el-row>
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="80%" :close-on-click-modal="false" :show-close="false">
      <el-form :model="form" :rules="rules">
        <el-row>
          <el-col :xs="24" :sm="12" :lg="12">
            <el-form-item label="用户邮箱：" :label-width="formLabelWidth"
              >{{form.email}}</el-form-item
            >
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12">
            <el-form-item label="注册日期：" :label-width="formLabelWidth"
              >{{form.date}}</el-form-item
            >
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="12" :lg="12">
            <el-form-item label="用户名：" :label-width="formLabelWidth" prop="name">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="12">
            <el-form-item label="用户类型：" :label-width="formLabelWidth" prop="type">
              <el-radio-group v-model="form.type">
                <el-radio label="1">副管理员</el-radio>
                <el-radio label="2">经销商</el-radio>
                <el-radio label="3">用户</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        email: "123456@test.com",
        date: "2021-05-21 21:11:54",
        name: "",
        type: "",
      },
      formLabelWidth: "100px",
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    show() {
      this.dialogFormVisible = true;
    },
  },

  watch: {},
};
</script>
<style lang='' scoped>
</style>