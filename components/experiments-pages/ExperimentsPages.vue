<template>
  <div class="experiment-page">
    <div id="map-dialog" role="dialog" aria-modal="true" aria-label="Parameter map" />
    <div id="container" />
    <canvas id="buffer-canvas" style="display: none;" />
    <img id="buffer-image" style="display: none;" alt="experiment render" src="">
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

import { onMounted } from 'vue'
import globals from '~/src/reaction-diffusion/js/globals'
import { simulationUniforms, displayUniforms } from '~/src/reaction-diffusion/js/uniforms'
import { simulationMaterial, displayMaterial } from '~/src/reaction-diffusion/js/materials'
import parameterValues from '~/src/reaction-diffusion/js/parameterValues'
import { resetTextureSizes } from '~/src/reaction-diffusion/js/resetTextureSizes'

onMounted(async () => {
  const { drawFirstFrame } = await import('~/src/reaction-diffusion/js/firstFrame')
  setupEnvironment()
  drawFirstFrame()
})

window.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
window.scene = new THREE.Scene()
window.displayMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), displayMaterial)
window.renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true })
window.canvas = renderer.domElement

function setupEnvironment () {
  window.scene.add(window.displayMesh)
  window.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
  window.renderer.setSize(parameterValues.canvas.width, parameterValues.canvas.height)
  document.getElementById('container')?.appendChild(canvas)
  window.addEventListener('resize', () => resetTextureSizes(canvas), false)
  resetTextureSizes(canvas)
  update()
}

//= =============================================================
//  UPDATE
//  - Main program loop, runs once per frame no matter what.
//= =============================================================
function update () {
  // Activate the simulation shaders
  window.displayMesh.material = simulationMaterial

  // Run the simulation multiple times by feeding the result of one iteration (a render target's texture) into the next render target
  for (let i = 0; i < globals.pingPongSteps; i++) {
    const nextRenderTargetIndex = globals.currentRenderTargetIndex === 0 ? 1 : 0
    // @ts-ignore
    simulationUniforms.previousIterationTexture.value = renderTargets[globals.currentRenderTargetIndex].texture // grab the result of the last iteration
    window.renderer.setRenderTarget(window.renderTargets[nextRenderTargetIndex]) // prepare to render into the next render target
    window.renderer.render(window.scene, window.camera) // run the simulation shader on that texture
    // @ts-ignore
    simulationUniforms.previousIterationTexture.value = renderTargets[nextRenderTargetIndex].texture // save the result of this simulation step for use in the next step
    // @ts-ignore
    displayUniforms.textureToDisplay.value = renderTargets[nextRenderTargetIndex].texture // pass this result to the display material too
    // @ts-ignore
    displayUniforms.previousIterationTexture.value = renderTargets[globals.currentRenderTargetIndex].texture // pass the previous iteration result too for history-based rendering effects

    globals.currentRenderTargetIndex = nextRenderTargetIndex
  }

  // Activate the display shaders
  displayUniforms.time.value = globals.clock.getElapsedTime()
  window.displayMesh.material = displayMaterial

  // Render the latest iteration to the screen
  window.renderer.setRenderTarget(null)
  window.renderer.render(window.scene, window.camera)

  // Tick the FPS and iteration counters
  // updateStats(globals.isPaused)

  // Kick off next frame
  requestAnimationFrame(update)
}
</script>
