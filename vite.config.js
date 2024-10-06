import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; 
import { fileURLToPath, URL } from 'node:url'
import { Plugin as importToCdn ,autoComplete } from 'vite-plugin-cdn-import'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({command,mode}) => {
  const isLibBuild = command === 'build' && mode === 'production';
  return{
  plugins: [
    vue(),
    importToCdn({
      modules: [
        autoComplete('axios'),
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@3.4.31/dist/vue.global.js'
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus@2.7.7/dist/index.full.js',
          css: 'https://unpkg.com/element-plus@2.7.7/dist/index.css'
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'https://unpkg.com/@element-plus/icons-vue@2.3.1/dist/index.iife.min.js',
        },
        {
          name:'ace-builds',
          var: 'ace',
          path: 'https://unpkg.com/ace-builds@1.35.4/src-noconflict/ace.js'
        },
        {
          name:'js-beautify',
          var: 'beautify',
          path: 'https://unpkg.com/js-beautify@1.15.1/js/index.js'
        },
        {
          name:'vuedraggable',
          var:'draggable',
          path: 'https://unpkg.com/vuedraggable@4.1.0/dist/vuedraggable.umd.min.js'
        }
      ]
    }),
    visualizer({
      open: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    lib: isLibBuild ? { 
      entry: './src/index.js', 
      name: 'CreamDesigner', 
      fileName: (format) => `cream-designer.${format}.js`, 
    }: undefined,
    outDir: isLibBuild ? 'dist/lib': 'dist', 
    rollupOptions: {
      external: [
        'vue', 
        'element-plus', 
        '@element-plus/icons-vue',
        'ace-builds',
        'js-beautify',
        'vuedraggable'
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
  }
});