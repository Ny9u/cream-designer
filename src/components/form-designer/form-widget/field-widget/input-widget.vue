<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <el-input
      v-model="state.optionsModel.value"
      @focus="onFocusHandle"
      @blur="onBlurHandle"
      @input="onInputHandle"
      @change="onChangeHandle"
      @clear="onClearHandle"
    >
    </el-input>
  </form-item-wrapper>
</template>

<script setup>
import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue'
import registerEvents from '../registerEvents'
const emits=defineEmits(['update:options'])
defineOptions({
  name: 'input-widget',
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
