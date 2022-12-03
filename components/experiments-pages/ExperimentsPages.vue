<template>
  <div class="experiment-page">
    <div ref="container" />
    <canvas ref="bufferCanvas" style="display: none;" width="100%" height="100%" />
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
