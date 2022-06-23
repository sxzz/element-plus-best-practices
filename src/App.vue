<script lang="ts" setup>
let msg = $ref('')

const handleClick = () => {
  ElMessage.success('Hello world')
  msg = 'hello world'
}
</script>

<template>
  <div text="center">
    <el-space mb-2>
      <!-- we can use `unplugin-vue-components` to auto register icon component -->
      <!-- 我们可以使用 `unplugin-vue-components` 插件来自动注册图标 -->
      <!-- Please refer to vite.config.ts -->
      <!-- 请参阅 vite.config.ts -->
      <i-ep-add-location />
      <i-ep-aim />

      <!-- 或者使用 UnoCSS 的图标功能 -->
      <!-- Or use the icon feature of UnoCSS -->
      <div i-ep-check />

      <!-- For more icons please refer to https://icones.js.org/ -->
      <!-- 更多图标请参阅 https://icones.js.org/ -->

      <el-button @click="handleClick">
        <template #icon><i-ep-circle-check-filled /></template>
        Hello world
      </el-button>
      <el-input v-model="msg" />
    </el-space>

    <div
      v-loading="{ text: 'Loading...' }"
      p-2
      w-300px
      h-300px
      border="1px #ccc"
      ma
    >
      Loading Area
    </div>

    <Footer />
  </div>
</template>
