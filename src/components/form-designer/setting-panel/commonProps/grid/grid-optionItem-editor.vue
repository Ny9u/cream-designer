<template>
  <div>
    <el-divider content-position="center">栅格选项设置</el-divider>
    <el-form-item label="当前栅格列:"></el-form-item>
    <el-form-item
      :label="`栅格宽度${idx + 1}`"
      v-for="(item, idx) in widget.cols"
      :key="item.id"
    >
      <el-input-number v-model="item.options.span" :min="1" :max="24" />
    </el-form-item>
    <el-form-item>
      <template #label>
        <span @click="insetCol" style="color: #409eff; cursor: pointer;">
          增加栅格
        </span>
      </template>
    </el-form-item>
  </div>
</template>
<script setup>
import { inject } from 'vue'

defineOptions({
  name: 'grid-optionItem-editor',
})
const designer = inject('designer')
const props = defineProps({
  widget: {
    type: Object,
    default: () => {},
  },
})
const insetCol = () => {
  designer.insetCol(props.widget)
}
</script>
<style lang="less" scoped></style>
