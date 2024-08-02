<template>
  <el-form-item label-width="70" label="onFocus">
    <el-button 
    type="primary" 
    size="default"
    @click="onClickHandle"
    class="button"
    >
    <img src='@/assets/edit.svg'>
    &nbsp;&nbsp;编写代码
    </el-button>
  </el-form-item>
</template>

<script setup>
defineOptions({
    name: 'onFocus-editor'
})

const emits=defineEmits(['editEventProp'])
const onClickHandle = () =>{
    emits('editEventProp', {
    title: 'onFocus',
    tip: '.onFocus(){'
  })
}

</script>

<style scoped>
.button{
  font-size: 14px;
}
</style>