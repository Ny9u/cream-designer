<template>
    <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
        <el-date-picker
            v-model="state.optionsModel.value"
            type="date"
            :placeholder="widget.options.placeholder"
            :readonly="widget.options.readonly"
            :disabled="options.disabled"
            :format="widget.options.format"
            @focus="onFocusHandle"
            @blur="onBlurHandle"
            @change="onChangeHandle"
            @visible-change="onVisibleChangeHandle"
            >
        </el-date-picker>
    </form-item-wrapper>
</template>

<script setup>
import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue'
import registerEvents from '../registerEvents'

defineOptions({
  name: 'date-widget',
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
</script>
