export const generateCode = function (formJson) {
	const formJsonStr = JSON.stringify(formJson, null, '  ')

	return ` <template>
    <div>
      <el-form>
        <template v-for="widget in formJSON.widgetList" :key="widget.options.propName">
          <component
            v-model:options="widget.options"
            :is-design="false"
            :is="getRenderName(widget)"
            :widget="widget"
            :designer="state.designer"
          ></component>
        </template>
		  </el-form>
    </div>
  </template>
  
  <script setup>
    import { ref, reactive } from 'vue'
  
    const formJson = reactive(${formJsonStr})
    const formRenderRef = ref(null)
    const getRenderName = (widget) => {
      if (widget.category) {
        return widget.type + '-render'
      }
      return widget.type + '-widget'
    }
  </script>`
}
