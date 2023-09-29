<script setup>
import CopyGallery from "./components/CopyGallery.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div class="main-container">
    <div class="topbar">
      <TopBar />
    </div>
    <div class="copygallery-container">
      <CopyGallery />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  padding: 16px;

  height: 100vh;
  width: 100vw;
  overflow: auto;
  background: #f9f9f9;

  .copygallery-container {
    margin-top: 96px;
  }
}
</style>
