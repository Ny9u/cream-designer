<template>
  <div class="container-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'container-wrapper-render',
})
</script>
<style lang="less" scoped>
.container-wrapper {
  padding: 4px;
  position: relative;
  margin-bottom: 10px;
  :deep(.el-form-item) {
    position: relative;
    margin: 0;
    z-index: 2;
  }
}
</style>
