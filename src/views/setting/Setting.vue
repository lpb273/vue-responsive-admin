<template>
  <div class="setting">
    <h1 class="title">setting</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    // this.getAllUser()
  },
  methods: {

  }
};
</script>

<style lang="stylus">
.setting {
  background: #fff;
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;

  .title {
    font-size: 28px;
    padding: 0 0 30px 0;
  }
}
</style>