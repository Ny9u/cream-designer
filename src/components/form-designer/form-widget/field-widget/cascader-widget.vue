<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
     <el-cascader
      v-model="state.optionsModel.value"
      :props="state.cascaderProps"
      :options="widget.options.cascaderOption"
      :placeholder="widget.options.placeholder"
      :readonly="widget.options.readonly"
      :disabled="options.disabled"
      :clearable="widget.options.clearable"
      :filterable="widget.options.filterable"
      @focus="onFocusHandle"
      @blur="onBlurHandle"
      @input="onInputHandle"
      @change="onChangeHandle"
    >
    </el-cascader>
  </form-item-wrapper>
</template>

<script setup>

import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue' 
import registerEvents from '../registerEvents'

defineOptions({
  name: 'cascader-widget',
  mixins: [registerEvents],
})

const props=defineProps({
  widget: {
    type: Object,
    default: () => {},
  },
  isDesign: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Object,
    default: () => {},
  },
  parent: {
    type: Object,
    default: () => {},
  },
})

const emits=defineEmits(['update:options'])

const state = reactive({
  optionsModel: computed({
    get() {
      return props.options
    },
    set(v) {
      emits('update:options', v)
    },
  }),
  cascaderProps: {
    multiple: computed(() => props.options.multiple),
  },
})

</script>

<style scoped>
:deep(.el-cascader) {
  width: 100%;
}
</style>
