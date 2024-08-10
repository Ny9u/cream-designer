<template>
  <el-dialog
  title="导入选项"
  width="80%"
  v-model="state.dialogVisible"
  >
  <el-input
    :rows="10"
    placeholder="格式：每行输入一条label,value"
    type="textarea"
    v-model="state.content"
  />
  <template #footer>
    <div>
      <el-button @click="onCancel">取 消</el-button>
      <el-button type="primary" @click="onSure">导 入</el-button>
    </div>
  </template>
</el-dialog>
</template>

<script setup>
import { reactive, computed} from 'vue'

const props= defineProps({
  showImportItemDialog: {
    type: Boolean,
    default:false,
  },
  content:{
    type:String,
    default:''
  }
})

const emits=defineEmits(['update:showImportItemDialog','importItem'])

const state=reactive({
  dialogVisible:computed({
    get(){
      if(props.showImportItemDialog)
      {
        state.content=props.content
      }
      return props.showImportItemDialog
    },
    set(v){
      emits('update:showImportItemDialog', v)
    }
  }),
  content:''
})

const onCancel=()=>{
  state.dialogVisible=false
}

const onSure=()=>{
  emits('importItem',state.content)
  state.dialogVisible=false
}
</script>

<style>

</style>