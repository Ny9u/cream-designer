<template>
  <el-form-item label-width="0">
    <el-divider content-position="center">选项设置</el-divider>
    <el-checkbox-group v-model="state.optionModel.value">
      <div
        class="option-item"
        v-for="(item, idx) in state.optionModel.optionItem"
        :key="item.value"
      >
        <el-checkbox :label="item.value">&nbsp;</el-checkbox>
        <el-input v-model="item.label"></el-input>
        <el-input v-model="item.value"></el-input>
        <div class="circle" @click="removeItem(item.value, idx)">-</div>
      </div>
    </el-checkbox-group>
    <div class="action primary-color">
      <span @click="insetItem">增加选项</span>
      <span @click="importItem">导入选项</span>
      <span @click="widget.resetValue()">重置选中项</span>
    </div>
    <ImportItemDialog
      @importItem="importItemHandle"
      :content="state.content"
      v-model:showImportItemDialog="state.showImportItemDialog"
    />
  </el-form-item>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import { computed, reactive } from 'vue'
import ImportItemDialog from '../components/importItemDialog.vue'
defineOptions({
  name: 'multipleOptionItem-editor'
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
      let str = ''
      props.optionModel.optionItem.forEach((item) => {
        str = `${str}${item.label},${item.value}\n`
      })
      return str
    },
    set(v) {
      console.log(v)
    }
  })
})


const insetItem = () => {
  state.optionModel.optionItem.push({
    label: '',
    value: ''
  })
}
const removeItem = (val, idx) => {
  const targetIdx = state.optionModel.value.indexOf(val)
  const item = state.optionModel.optionItem.splice(idx, 1)[0]
  if (item.value == val) {
    state.optionModel.value.splice(targetIdx, 1)
  }
}
const importItem = () => (state.showImportItemDialog = true)
const importItemHandle = (v) => {
  const items = v.split('\n')
  const optionItem = []
  let flag = true
  items.forEach((item) => {
    if (item) {
      const idx = item.indexOf(',')
      if (idx < 0) {
        ElMessage({
          message: '导入格式不正确',
          type: 'error'
        })
        flag = false
      }
      const label = item.slice(0, idx)
      const value = item.slice(idx + 1)
      optionItem.push({
        value,
        label
      })
    }
  })
  if (flag) {
    state.optionModel.optionItem = optionItem
    props.widget.resetValue()
  }
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
