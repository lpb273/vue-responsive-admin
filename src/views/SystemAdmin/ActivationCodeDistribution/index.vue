<template>
  <div>
    <el-row class="top-block padding-20px" :gutter="40">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">经销商：</label>
          </el-col>
          <el-col :xs="18" :sm="18" :lg="18">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    <el-row class="padding-20px">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      >
        <el-table-column label="序号">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="经销商邮箱"> </el-table-column>
        <el-table-column prop="address" label="经销商" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="订购矿机数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="已分配矿机数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="待分配矿机数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="待分配矿机数"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" @click="orderAdmin(scope)"
              >订购管理</el-button
            >
          </template>
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
    <OrderManagementDialog ref="orderManagementDialog" />
  </div>
</template>

<script>
import Pagination from "@/components/pagination";
import OrderManagementDialog from "@/components/dialog/OrderManagement";
export default {
  components: {
    Pagination,
    OrderManagementDialog,
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
    orderAdmin(item) {
      this.$refs.orderManagementDialog.show(item);
    },
  },
};
</script>

<style></style>
