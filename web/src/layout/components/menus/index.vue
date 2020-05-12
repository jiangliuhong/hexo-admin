<template>
  <div class="fd-height-100">
    <el-menu
      default-active="index"
      class="fd-menus"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :collapse="collapse"
      active-text-color="#ffd04b"
    >
      <div v-for="(menu,index) in menus" :key="index">
        <el-submenu v-if="menu.children && menu.children.length>=1" :index="menu.key">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </template>
          <el-menu-item
            v-for="(childMenu,cindex) in menu.children"
            :key="cindex"
            :index="childMenu.key"
          >
            <i :class="childMenu.icon"></i>
            <span slot="title">{{childMenu.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="!(menu.children && menu.children.length)>=1" :index="menu.key">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" scoped>
.fd-menus {
  width: 100%;
  height: 100%;
}
</style>
