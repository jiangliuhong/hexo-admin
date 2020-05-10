<template>
    <el-container class="fd-height100">
      <el-aside class="fd-aside" >
        <app-menus></app-menus>
      </el-aside>
      <el-container>
        <el-main>
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