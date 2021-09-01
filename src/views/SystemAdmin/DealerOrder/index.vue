<template>
  <div>
    <el-row class="top-block padding-20px" :gutter="40">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">激活码：</label>
          </el-col>
          <el-col :xs="18" :sm="18" :lg="18">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">分配经销商：</label>
          </el-col>
          <el-col :xs="18" :sm="18" :lg="18">
            <el-input v-model="admin" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">状态：</label>
          </el-col>
          <el-col :xs="18" :sm="18" :lg="18">
            <el-select v-model="value" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="start">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="padding-20px" :gutter="20">
      <el-col :xs="24" :sm="12" :lg="12">
        <el-button type="primary" @click="distribution">分配给经销商</el-button>
        <el-button type="primary">取消分配</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="SN编号">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="设备型号">
        </el-table-column>
        <el-table-column prop="address" label="经销商" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="用户" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="激活状态" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <Pagination
        :total="100"
        v-on:size-change="sizeChange"
        v-on:current-change="currentChange"
      />
    </el-row>
    <ActivationCodeAssignmentDialog ref="activationCodeAssignmentDialog" />
  </div>
</template>

<script>
import Pagination from "@/components/pagination";
import ActivationCodeAssignmentDialog from "@/components/dialog/ActivationCodeAssignment";
export default {
  components: {
    Pagination,
    ActivationCodeAssignmentDialog,
  },
  data() {
    return {
      input: "",
      admin: "",
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    sizeChange(val) {
      console.warn(val);
    },
    currentChange(val) {
      console.warn(val);
    },
    distribution(item) {
      this.$refs.activationCodeAssignmentDialog.show(item);
    },
    deleteItem(item) {
      this.$alert("确定要删除吗", "提示", {
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
    disabledItem(item) {
      this.$alert("确定要停用吗", "提示", {
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
};
</script>

<style></style>
