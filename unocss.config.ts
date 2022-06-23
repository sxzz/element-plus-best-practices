import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
})
