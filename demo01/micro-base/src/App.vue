<template>
  <div class="container">
    <div class="header">header</div>
    <div class="body">
      <div class="menu">
        <div @click="changeRouter('/app-vue')">项目管理</div>
        <div @click="changeRouter('/app-react')">react-app</div>
        <div @click="changeRouter('/app-jquery')">jquery-demo</div>
      </div>
      <div class="main" id="main"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const changeRouter = (url: string) => {
    history.pushState(null, '', url)
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  height: 50px;
  background: red;
}
.body {
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 50px);
}
.menu {
  width: 200px;
  height: 100%;
  background: pink;
}
.body {
  flex: 1;
  height: 100%;
}

</style>
