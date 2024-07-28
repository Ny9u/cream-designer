<template>
  <el-form-item label-width="120" label="onBlur">
    <el-button type="primary" size="small" round @click="onClickHandle">编写代码</el-button>
  </el-form-item>
</template>
<script setup>
defineOptions({
  name: 'onBlur-editor'
})

const emits = defineEmits(['editEventProp'])

const onClickHandle = () => {
  emits('editEventProp', {
    title: 'onBlur',
    tip: '.onBlur(){'
  })
}
</script>
