<template>
    <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
        <el-select 
        v-model="state.optionsModel.value" 
        filterable placeholder="请选择"
        @focus="onFocusHandle"
        @blur="onBlurHandle"
        @clear="onClearHandle"
        @change="onChangeHandle"
        @visible-change="onVisibleChangeHandle"
        >
            <el-option
            v-for="item in widget.options.optionItem"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
         </el-select>
    </form-item-wrapper>
</template>

<script setup>
import formItemWrapper from './form-item-wrapper.vue'
import registerEvents from '../registerEvents'
import { reactive, computed } from 'vue'

defineOptions({
    name: 'select-widget',
    mixins: [registerEvents]
})

const props = defineProps({
    widget:{
        type:Object,
        default:()=>{}
    },
    isDesign:{
        type:Boolean,
        default:true
    },
    parent:{
        type:Object,
        default:()=>{}
    },
    options:{
        type:Object,
        default:()=>{}
    }
})

const emits = defineEmits(['update:options'])

const state = reactive({
    optionsModel: computed({
        get(){
            return props.options
        },
        set(v){
            emits('update:options',v)
        }
    })
})
</script>

