<template>
  <div>
    <el-row class="top-block padding-20px" :gutter="40">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">用户邮箱：</label>
          </el-col>
          <el-col :xs="18" :sm="18" :lg="18">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
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
        <el-row type="flex" class="row-bg" justify="">
          <el-col :xs="6" :sm="6" :lg="6" class="flex-align-center">
            <label for="">用户类型：</label>
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
        <el-button type="primary">+ 新建</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="warning">停用</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="用户邮箱" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="用户类型" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="状态" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="SN码数量" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address" label="已激活量" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text">修改</el-button>
            <el-button type="text">删除</el-button>
            <el-button type="text">停用</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  },
};
</script>

<style></style>
