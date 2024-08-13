<template>
  <div>
    <el-divider content-position="center">栅格选项设置</el-divider>
    <div>
        <el-form-item
          :label="`栅格宽度${idx + 1}`"
          v-for="(item,idx) in widget.cols"
          :key="item.id"
        >
        <el-input-number v-model="item.options.span" size="small" :min="0" :max="24"/>
        </el-form-item>
    </div>
    <div class="action">
      <span @click="addItem">增加栅格列</span>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineOptions({
    name:'gridOptionItem-editor'
})

const props = defineProps({
    //因为栅格存储都是组件(栅格列),存储在cols中不属于option,属于widget中的属性,因此直接传入widget
    widget:{
        type:Object,
        default:()=>{}
    }
})

const designer=inject('designer')

const addItem = () => {
  designer.addItem(props.widget)
}

</script>

<style>

</style>