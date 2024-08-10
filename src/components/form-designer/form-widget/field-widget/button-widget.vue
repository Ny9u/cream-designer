<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <el-button 
    :type="options.type" 
    plain 
    @click="onClickhandle"
    :readonly="widget.options.readonly"
    :disabled="options.disabled"
    >
    {{state.optionsModel.name}}</el-button>
  </form-item-wrapper>
</template>

<script setup>
import { computed, reactive } from 'vue'
import registerEvents from '../registerEvents'
import formItemWrapper from './form-item-wrapper.vue'

defineOptions({
  name: 'button-widget',
  mixins: [registerEvents],
})

const props = defineProps({
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

const onClickhandle=()=>{
  if(state.optionsModel.url)
  {
    window.location.href=state.optionsModel.url
  }
}
</script>
