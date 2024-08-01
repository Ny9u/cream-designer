<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <div class="color-picker">
        <el-color-picker
        v-model="state.optionsModel.value"
        :show-alpha="options.showAlpha"
        @change="onChangeHandle"
        >
        </el-color-picker>
    </div>
  </form-item-wrapper>
</template>

<script setup>

import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue' 
import registerEvents from '../registerEvents'

defineOptions({
  name: 'color-picker-widget',
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

</script>

<style scoped>
.color-picker{
    margin-left:15px
}
</style>