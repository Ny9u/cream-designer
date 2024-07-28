<template>
  <el-form-item label-width="120" label="onVisibleChange">
    <el-button type="primary" size="small" round @click="onClickHandle">编写代码</el-button>
  </el-form-item>
</template>
<script setup>
defineOptions({
  name: 'onVisibleChange-editor'
})

const emits = defineEmits(['editEventProp'])

const onClickHandle = () => {
  emits('editEventProp', {
    title: 'onVisibleChange',
    tip: '.onVisibleChange(){'
  })
}
</script>
