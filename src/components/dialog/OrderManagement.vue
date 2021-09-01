<template>
  <el-row>
    <el-dialog
      title="订购管理"
      :visible.sync="dialogFormVisible"
      width="80%"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <el-form>
        <el-row type="flex" :gutter="40" class="padding-20px">
          <el-col :xs="24" :sm="8" :lg="2" class="flex-align-center">
            <label>订购数量：</label>
          </el-col>
          <el-col :xs="24" :sm="8" :lg="8">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :xs="24" :sm="8" :lg="8">
            <el-button type="primary">主要按钮</el-button>
          </el-col>
        </el-row>
        <el-row> </el-row>
      </el-form>
      <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
        <el-table-column prop="date" label="订购时间">
        </el-table-column>
        <el-table-column prop="name" label="订购数量">
        </el-table-column>
        <el-table-column prop="address" label="操作管理员"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="cancel(scope)">取消订购</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
    cancel() {
      this.$alert("确定要取消吗", "提示", {
        confirmButtonText: "确定",
        showCancelButton: true,
        showClose: false,
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },

  watch: {},
};
</script>
<style lang='' scoped>
</style>