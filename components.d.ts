// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/core/pull/3399
import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ChartDefine: typeof import('./src/components/chart/ChartDefine.vue')['default']
    HelloWorld: typeof import('./src/components/HelloWorld.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
  export interface ComponentCustomProperties {
    vLoading: typeof import('element-plus/es')['ElLoadingDirective']
  }
}
