<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <el-switch
    v-model="state.optionsModel.value"
    :active-value="options.activeValue"
    :inactive-value="options.inactiveValue"
    :disabled="options.disabled"
    @change="onChangeHandle"
    />
  </form-item-wrapper>
</template>

<script setup>

import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue' 
import registerEvents from '../registerEvents'

defineOptions({
  name: 'switch-widget',
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
})

const onChangeHandle = () => {
  //state.optionsModel.switchValue  =  state.optionsModel.value
}
</script>