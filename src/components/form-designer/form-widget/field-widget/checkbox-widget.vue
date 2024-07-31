<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <div>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项A" 
      border
      @change="onChangeHandle"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项B" 
      border
      @change="onChangeHandle"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项C" 
      border
      @change="onChangeHandle"
      ></el-checkbox>
      <el-checkbox 
      v-model="state.optionsModel.value" 
      label="选项D" 
      border
      @change="onChangeHandle"
      ></el-checkbox>
    </div>
  </form-item-wrapper>
</template>

<script setup>
import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed } from 'vue'
import registerEvents from '../registerEvents.js'
defineOptions({
    name: 'checkbox-widget',
    mixins: [registerEvents]
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

const emits= defineEmits(['update:options'])

const state = reactive({
  optionsModel: computed({
    get() {
        return props.options
    },

    set(v) {
        emits('update:options', v)
    }
})
})
</script>

