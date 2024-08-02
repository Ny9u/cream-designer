<template>
  <el-form-item label-width="68" label="onInput">
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
    name: 'onInput-editor'
})

const emits=defineEmits(['editEventProp'])
const onClickHandle = () =>{
    emits('editEventProp', {
    title: 'onInput',
    tip: '.onInput(){'
  })
}

</script>

<style scoped>
.button{
  font-size: 14px;
}
</style>