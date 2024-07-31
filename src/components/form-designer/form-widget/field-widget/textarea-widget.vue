<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <el-input
        v-model="state.optionsModel.value"
        type="textarea"
        :rows="2"
        placeholder="请输入"
        @blur="onBlurHandle"
        @input="onInputHandle"
        @change="onChangeHandle"
        @focus="onFocusHandle"
        @clear="onClearHandle"
    >
    </el-input>
  </form-item-wrapper>    
</template>

<script setup>
import registerEvents from '../registerEvents'
import formItemWrapper from './form-item-wrapper.vue'
import { reactive, computed} from 'vue'

const emits=defineEmits(['update:options'])

defineOptions({
    name: 'textarea-widget',
    mixin: [registerEvents]
})
const props = defineProps({
    widget: {
        type: Object,
        default: () => {}
    },
    isDesign: {
        type: Boolean,
        default: true
    },
    options: {
        type: Object,
        default: () => {}
    },
    parent: {
        type: Object,
        default: () => {}
    }
})

const state = reactive({
    optionsModel: computed({
        get() {
            return props.options
        },
        set(v)
        {
            emits('update:options', v)
        }
    })
})

</script>

