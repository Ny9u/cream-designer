<template>
  <div>
    <el-divider content-position="center">选项设置</el-divider>
    <div class="cascader">
        <!-- 因为value需要双向绑定,所以用state建立响应式数据,而option只需要传入即可,实际两者指向同一个地方 -->
        <el-cascader
        v-model="state.optionModel.value"
        :options="widget.options.cascaderOption"
        />
    </div>
    <div class="action primary-color">
      <span @click="importItem">增加选项</span>
      <span @click="state.optionModel.value=''">重置选中结果</span>
    </div>
  </div>
  <ImportCascaderOptionDialog
    @importItem="importItemHandle"
    :content="state.content"
    v-model:showImportDialog="state.showImportDialog"
  />
</template>

<script setup>
import { reactive ,computed } from 'vue'
import ImportCascaderOptionDialog from '../../components/importCascaderOptionDialog.vue'
defineOptions({
    name: "cascaderOption-editor"
})

const props=defineProps({
    widget:{
        type:Object,
        default:()=>{}
    },
    optionModel:{
        type:Object,
        default:()=>{}
    }
})

const state=reactive({
    optionModel:computed(()=>{
        return props.optionModel
    }),
    showImportDialog:false,
    content:computed({
        get(){
            return JSON.stringify(props.optionModel.cascaderOption,null,' ')
        },
        set(v)
        {
            console.log(v)
        }
    })
})

const importItem=()=>{
    state.showImportDialog=true
}

const importItemHandle=(content)=>{
    state.optionModel.cascaderOption = JSON.parse(content)
}
</script>

<style scoped>
.cascader{
    margin-left: 3px;
}
.action{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
</style>