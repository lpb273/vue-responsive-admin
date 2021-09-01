<template>
  <div class="sidebar">
    <el-menu
      :default-active="activeIndex"
      router
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="/system">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="/user-admin">用户管理</el-menu-item>
        <el-menu-item index="/activation-code-admin">激活码管理</el-menu-item>
        <el-menu-item index="/activation-code-distribution"
          >经销商订购</el-menu-item
        >
        <el-menu-item index="/dealer-order">激活码分配</el-menu-item>
      </el-submenu>
      <el-submenu index="/distribution">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">经销管理</span>
        </template>
        <el-menu-item index="/my-activation-code">我的激活码</el-menu-item>
      </el-submenu>
      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">我的商品</span>
        </template>
        <el-menu-item index="/activation">激活</el-menu-item>
        <el-menu-item index="/my-goods-activation-code">我的激活码</el-menu-item>
      </el-submenu>
      <el-submenu index="/user">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">个人中心</span>
        </template>
        <el-menu-item index="/settings">基本设置</el-menu-item>
        <el-menu-item index="/address">收获地址</el-menu-item>
        <el-menu-item index="/password">修改密码</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    activeIndex() {
      const thisRoutPath = this.$route.path;
      if (this.$route.name === "details") {
        return "/tables/details";
      }
      return thisRoutPath;
    }
  },
  methods: {},
  mounted() {
    console.warn(this.$route);
  }
};
</script>

<style scoped>
.sidebar {
  background-color: rgb(84, 92, 100);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-item.is-active,
.el-submenu.is-active >>> .el-submenu__title {
  background: #484e5c !important;
}

.el-submenu .el-menu-item {
  padding-left: 60px !important;
  min-width: auto;
}
.el-submenu.is-active .el-menu-item {
  background: #484e5c !important;
}
.el-submenu.is-active .el-menu-item.is-active {
  background: #3a4046 !important;
}
.el-submenu .el-menu-item:hover {
  padding-left: 60px !important;
  background: rgb(67, 74, 80) !important;
}
.el-menu-item i {
  padding-bottom: 4px;
}

.el-submenu__title i {
  padding-bottom: 4px;
}

@media all and (max-width: 768px) {
  .el-menu--collapse {
    width: 0;
    overflow: hidden;
  }
}
</style>
