<template>
  <div class="experiment-page">
    <div class="wrapper">
      <v-tweakpane class="panel" :pane="{title: 'Configuration'}" @on-pane-created="paneCreated" />
    </div>
    <div ref="container" class="render" />
    <canvas ref="bufferCanvas" style="display: none;" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Pane } from 'tweakpane'
import { ReactionDiffusionGfx, useReactionDiffusionGfx } from '~/composables/reaction-diffusion/useReactionDiffusionGfx'
import { useParams } from '~/composables/reaction-diffusion/useParams'
const bufferCanvas = ref<HTMLCanvasElement | null>(null)
const container = ref<HTMLElement | null>(null)

const params = useParams()
let obj: ReactionDiffusionGfx

onMounted(() => {
  if (!container.value || !bufferCanvas.value) {
    return
  }
  obj = useReactionDiffusionGfx({
    $bufferCanvas: bufferCanvas.value,
    $container: container.value,
    params
  })
  obj.setupEnvironment()
  obj.update()
  obj.drawFirstFrame()
})

function paneCreated (pane: Pane) {
  pane.addInput(params, 'f', {
    min: 0.040,
    max: 0.080
  })
  pane.addInput(params, 'k', {
    min: 0.060,
    max: 0.065
  })
  pane.addInput(params, 'dA', {
    min: 0.2,
    max: 0.3
  })
  pane.addInput(params, 'dB', {
    min: 0.0,
    max: 0.2
  })
  pane.addInput(params, 'mouseActive')
  pane.addInput(params.gradientColors, 'color2RGB')
  pane.addButton({
    title: 'Reload'
  }).on('click', () => {
    obj.drawFirstFrame()
  })
}

</script>

<style scoped lang="scss">
.panel {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 250px;
}
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
