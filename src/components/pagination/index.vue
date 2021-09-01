<template>
  <div class="pagination-wrap flex-row-right-align-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPage: 1,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit('size-change', val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit('current-change', val);
    },
  },

  watch: {},
};
</script>
<style lang='css' scoped>
.pagination-wrap {
  width: 100%;
  height: 50px;
}
</style>