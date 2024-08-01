<template>
  <form-item-wrapper :widget="widget" :is-design="isDesign" :parent="parent">
    <div v-if="options.display === 'block'">{{ options.defaultValue }}</div>
    <span v-else>{{ options.defaultValue }}</span>
    <!-- 当文本为空时自动删除组件更为合理 -->
  </form-item-wrapper>
</template>

<script setup>
import formItemWrapper from './form-item-wrapper.vue'
import registerEvents from '../registerEvents'
defineOptions({
  name: 'text-widget',
  mixins: [registerEvents],
})
defineProps({
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
</script>