<template>
  <MultipleOptionItem :optionModel="optionModel" :widget="widget"></MultipleOptionItem>
</template>
<script setup>
import MultipleOptionItem from '../multipleOptionItem-editor.vue'

defineOptions({
  name: 'checkbox-optionItem-editor'
})
defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  },
  widget: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="less" scoped>
.option-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .el-radio {
    margin-right: 0;
  }
  .el-input {
    width: 90px;
  }
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(223, 150, 150, 0.226);
    border: 1px solid rgba(223, 150, 150, 0.562);
    color: rgb(223, 150, 150);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
.action {
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  span {
    cursor: pointer;
  }
}
</style>
