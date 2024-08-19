<template>
    <div>
        <el-dialog v-model="state.showPreviewDialog" title="表单预览" wirth="80%"> 
            <!-- 表单渲染 -->
            <FormRender :formJSON="designer"/>
            <template #footer>
                <div>
                    <el-button type="primary" @click="getFormJson">获取数据</el-button>
                    <el-button type="primary" @click="resetForm">重置表单</el-button>
                    <el-button @click="state.showPreviewDialog=false">关闭</el-button>
                </div>
            </template>
        </el-dialog>
        <div v-if="state.showCodeDialog">
            <ShowCodeDialog
                :title="state.title"
                v-model:showCodeDialog="state.showCodeDialog"
                v-model:code="state.JSON"
            ></ShowCodeDialog>
        </div>
    </div>    
</template>

<script setup>
import { reactive, computed } from "vue"
import ShowCodeDialog from "./showCodeDialog.vue"
import FormRender from "@/components/form-render/formRender.vue"

const props = defineProps({
  showPreviewDialog: {
    type: Boolean,
    default: false,
  },
  designer: {
    type: Object,
    default: () => {},
  },
})
const emits=defineEmits(['update:showPreviewDialog'])
const state = reactive({
  showPreviewDialog: computed({
    get() {
      return props.showPreviewDialog
    },
    set(v) {
      emits('update:showPreviewDialog', v)
    },
  }),
  showCodeDialog: false,
  JSON: "",
  title: ""
})

const getFormJson = () => {
  state.JSON= props.designer.getJSON()
  state.title='获取数据',
  state.showCodeDialog=true
}

const resetForm = () => {
  props.designer.resetForm()
}

</script>

