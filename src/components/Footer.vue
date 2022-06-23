<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <el-button text @click="toggleDark()">
      <div dark:i-ep-moon i-ep-sunny text-lg />
    </el-button>

    <el-link
      :underline="false"
      rel="noreferrer"
      href="https://github.com/sxzz/element-plus-best-practices"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github textlg />
    </el-link>
  </nav>
</template>
