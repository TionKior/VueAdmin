<template>
  <el-container>
    <el-aside width="200px">

      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

        <el-menu-item index="1-1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </template>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-operation"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span slot="title">用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-2">
            <template slot="title">
              <i class="el-icon-rank"></i>
              <span slot="title">角色管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">菜单管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span>系统工具</span>
          </template>
          <el-menu-item index="2-2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span slot="title">数字字典</span>
            </template>
          </el-menu-item>
        </el-submenu>

      </el-menu>

    </el-aside>
    <el-container>
      <el-header>
        <!-- 中间的标题 -->
        <strong>VueAdmin后台管理系统</strong>
        <!-- 头部右面的信息 -->
        <div class="header-avatar">
          <!-- 头像 -->
          <el-avatar size="medium"
                     src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <!-- 下拉菜单 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              Admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 两个链接 -->
          <el-link href="http://www.tionkior.com" target="_blank">网站</el-link>
          <el-link href="https://space.bilibili.com/277984790" target="_blank">B站</el-link>
        </div>

      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
/* 头部 */
/* 让下拉列表和两个链接显示在右边 */
.header-avatar {
  /* 偏移到右边 */
  float: right;
  /* 设置宽度 */
  width: 210px;
  /* 让里面的内容居中 */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* 侧边栏 */
.el-menu-vertical-demo{
  /* 让它占左侧100% */
  height: 100vh;
}

/* 让这个布局撑满整个页面 */
.el-container {
  padding: 0;
  margin: 0;
  height: 100vh;
}

.el-dropdown-link {
  cursor: pointer;
}

.el-header {
  background-color: #00AEEC;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>