<template>
  <div class="experiment-page">
    <div class="wrapper" />
    <div ref="container" class="render" />
    <canvas ref="bufferCanvas" style="display: none;" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useReactionDiffusionGfx } from '~/composables/reaction-diffusion/useReactionDiffusionGfx'

const bufferCanvas = ref<HTMLCanvasElement | null>(null)
const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value || !bufferCanvas.value) {
    return
  }
  const obj = useReactionDiffusionGfx(container.value, bufferCanvas.value)
  obj.setupEnvironment()
  obj.update()
  obj.drawFirstFrame()
})
</script>

<style scoped lang="scss">
.render {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  background: radial-gradient(circle, rgba(187, 187, 187, 0) 0%, rgb(0, 0, 0) 100%);
}
</style>
