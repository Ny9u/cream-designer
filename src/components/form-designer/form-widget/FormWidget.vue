<template>
  <div class="form-widget">
    <el-scrollbar :height="state.scrollHeight">
        <el-form class="form-body"  :model="state.formData" :label-width="designer.formConfig.formLabelWidth"> 
        <draggable
          class="draggable"
          :list="designer.widgetList"
        >
          <template #item="{ element: widget, index }">
              <component
                v-model:options="widget.options"
                :is="getWidgetName(widget.type)"
                :widget="widget"
                :designer="designer"
                :key="widget.options.propName"
                :parent="designer"
                :index="index"
                @click.stop="selectWidget(widget, index)"
              ></component>
          </template>
        </draggable>
        </el-form>
    </el-scrollbar>
  </div>
</template>
<script setup>
import { inject, computed, reactive } from 'vue'
import draggable from 'vuedraggable'
import { getWidgetName } from '@/utils/tool'

const designer = inject('designer')
const state = reactive({
  formData: computed(() => JSON.parse(designer.getJSON())),
  scrollHeight: 0,
})

</script>

<style lang="less" scoped>
.form-widget {
  position: relative;
  background: #f5f1f1;;
  box-sizing: border-box;
  padding: 10px;
}
.form-body {
  background: #fff;
  padding: 10px;
  .draggable {
    min-height: calc(100vh - 95px);
  }
}
</style>
