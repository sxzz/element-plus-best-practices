<script lang="ts" setup>
// Method 1: Import and register icon component manually.
// 方式 1:手动导入并注册图标组件
import IconEpApple from '~icons/ep/apple'

const handleClick = () => {
  ElMessage.success('Hello world')
}
</script>

<template>
  <IconEpApple />

  <!-- Method 2: or we can use `unplugin-vue-components` to auto register icon component -->
  <!-- 或者我们可以使用 `unplugin-vue-components` 插件来自动注册图标 -->
  <!-- Please refer to vite.config.ts -->
  <!-- 请参阅 vite.config.ts -->
  <i-ep-add-location />
  <i-ep-aim />

  <!-- For more icons please refer to https://icones.js.org/ -->
  <!-- 更多图标请参阅 https://icones.js.org/ -->

  <div>
    <el-button @click="handleClick">
      <el-icon><i-ep-circle-check-filled /></el-icon>
      Hello world
    </el-button>
  </div>

  <div v-loading="true" style="height: 500px">Loading Area</div>
</template>
