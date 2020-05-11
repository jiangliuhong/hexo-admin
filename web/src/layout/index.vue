<template>
  <el-container class="fd-height100">
    <el-aside class="fd-aside" :width="asideWidth">
      <app-menus :collapse="collapse"></app-menus>
    </el-aside>
    <el-container>
      <el-header height="50px" class="fd-mian-head">
        <AppNavbar :status="collapse" @changeCollapse="changeCollapse" class="fd-padding-top-10 fd-padding-bottom-5"></AppNavbar>
      </el-header>
      <el-main class="fd-main">
        <app-main></app-main>
      </el-main>
      <el-footer>
        <app-bottom></app-bottom>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script src="./components/index.js"></script>
<style lang="less" scoped>
@import url("./components/index.less");
</style>