<template>
  <el-form-item label-width="0">
    <el-divider content-position="center">选项设置</el-divider>
    <el-cascader
      placeholder="请选择"
      :options="widget.options.optionItem"
      v-model="state.optionModel.value"
    ></el-cascader>
    <div class="action primary-color">
      <span @click="importItem">导入选项</span>
      <span @click="state.optionModel.value = ''">重置选中项</span>
    </div>
    <div v-if="state.showImportItemDialog">
      <ImportCascaderOptionDialog
        @importItem="importItemHandle"
        :content="state.content"
        v-model:showImportItemDialog="state.showImportItemDialog"
      />
    </div>
  </el-form-item>
</template>
<script setup>
import { computed, reactive } from 'vue'
import ImportCascaderOptionDialog from '@/components/form-designer/setting-panel/components/importCascaderOptionDialog.vue'

defineOptions({
  name: 'cascader-optionItem-editor'
})
const props = defineProps({
  optionModel: {
    type: Object,
    default: () => {}
  },
  widget: {
    type: Object,
    default: () => {}
  }
})
const state = reactive({
  optionModel: computed(() => props.optionModel),
  showImportItemDialog: false,
  content: computed({
    get() {
      return JSON.stringify(props.optionModel.optionItem, null, ' ')
    },
    set(v) {
      console.log(v)
    }
  })
})

const importItem = () => (state.showImportItemDialog = true)
const importItemHandle = (v) => {
  state.optionModel.optionItem = JSON.parse(v)
}
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
