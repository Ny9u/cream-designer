<template>
  <el-form-item label-width="126" label="onClear">
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
    name: 'onClear-editor'
})

const emits=defineEmits(['editEventProp'])
const onClickHandle = () =>{
    emits('editEventProp', {
    title: 'onClear',
    tip: '.onClear(){'
  })
}

</script>

<style scoped>
.button{
  font-size: 14px;
}
</style>