export const generateCode = function (formJson) {
	const formJsonStr = JSON.stringify(formJson, null, '  ')

	return ` <template>
    <div>
      <form-render :form-json="formJson" ref="formRenderRef">
      </form-render>
    </div>
  </template>
  
  <script setup>
    import { ref, reactive } from 'vue'
    import { ElMessage } from 'element-plus'
  
    const formJson = reactive(${formJsonStr})
    const formRenderRef = ref(null)
  </script>`
}
