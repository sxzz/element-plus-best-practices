<script lang="ts" setup>
// Method 1: Import and register icon component manually.
// 方式 1:手动导入并注册图标组件
import IconEpApple from '~icons/ep/apple'

const msg = ref('')

const handleClick = () => {
  ElMessage.success('Hello world')
}
</script>

<script lang="ts">
export default defineComponent({
  components: {
    // Method 3: or we can use `unplugin-auto-import` to auto import icon component and register manally. not recommended)
    // 方法 3：或者我们还可以使用 `unplugin-auto-import` 来自动导入组件，再手动注册组件。（不推荐）
    IconEpRefresh,
  },
})
</script>

<template>
  <el-space direction="vertical">
    <IconEpApple />

    <!-- Method 2: or we can use `unplugin-vue-components` to auto register icon component -->
    <!-- 或者我们可以使用 `unplugin-vue-components` 插件来自动注册图标 -->
    <!-- Please refer to vite.config.ts -->
    <!-- 请参阅 vite.config.ts -->
    <i-ep-add-location />
    <i-ep-aim />

    <!-- Method 3 -->
    <!-- 方法 3 -->
    <IconEpRefresh />

    <!-- For more icons please refer to https://icones.js.org/ -->
    <!-- 更多图标请参阅 https://icones.js.org/ -->

    <el-button @click="handleClick">
      <el-icon><i-ep-circle-check-filled /></el-icon> Hello world
    </el-button>

    <el-input v-model="msg" />
  </el-space>

  <div v-loading="true" style="height: 500px">Loading Area</div>
</template>
