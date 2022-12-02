import * as THREE from 'three'
import parameterValues from '~/src/reaction-diffusion/js/parameterValues'
import { setupRenderTargets } from '~/src/reaction-diffusion/js/renderTargets'
import { simulationUniforms } from '~/src/reaction-diffusion/js/uniforms'

export function resetTextureSizes (canvas) {
  parameterValues.canvas.width = canvas.clientWidth * parameterValues.canvas.scale
  parameterValues.canvas.height = canvas.clientHeight * parameterValues.canvas.scale

  // Resize render targets
  setupRenderTargets()

  // Reset the resolution in the simulation code to match new container size
  simulationUniforms.resolution.value = new THREE.Vector2(parameterValues.canvas.width, parameterValues.canvas.height)

  // Resize the buffer canvas
  const bufferCanvas = document.querySelector('#buffer-canvas')
  bufferCanvas.width = parameterValues.canvas.width
  bufferCanvas.height = parameterValues.canvas.height
}
