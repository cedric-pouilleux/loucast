import * as THREE from 'three'
import { WebGLRenderTarget } from 'three'
import { ref } from 'vue'
import { useUtils } from '~/composables/reaction-diffusion/useUtils'
import { useParams } from '~/composables/reaction-diffusion/useParams'
import { useShapes } from '~/composables/reaction-diffusion/useShapes'

export function useReactionDiffusionGfx ($container: HTMLElement, $bufferCanvas: HTMLCanvasElement) {
  const params = useParams()
  const { convertPixelsToTextureData } = useUtils()
  const {
    passthroughUniforms,
    simulationUniforms,
    displayUniforms,
    displayMaterial,
    passthroughMaterial,
    simulationMaterial
  } = useShapes(params)

  const currentRenderTargetIndex = ref<number>(0)
  const pingPongSteps = 60
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const scene = new THREE.Scene()
  const displayMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), displayMaterial)
  const renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true })
  const $canvas: HTMLCanvasElement = renderer.domElement
  const bufferCanvasCtx: CanvasRenderingContext2D | null = $bufferCanvas?.getContext('2d') || null
  const renderTargets = ref<Array<WebGLRenderTarget>>([])

  const nextRenderTargetIndex = computed((): number => currentRenderTargetIndex.value === 0 ? 1 : 0)

  function setupEnvironment (): void {
    scene.add(displayMesh)
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
    renderer.setSize(params.canvas.width, params.canvas.height)
    if ($container) {
      $container.appendChild($canvas)
    }
    window.addEventListener('resize', () => resetTextureSizes(), false)
    resetTextureSizes()
  }

  function setupRenderTargets (): void {
    renderTargets.value = []
    for (let i = 0; i < 2; i++) {
      const nextRenderTarget: WebGLRenderTarget = new THREE.WebGLRenderTarget(params.canvas.width, params.canvas.width, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType
      })
      renderTargets.value.push(nextRenderTarget)
    }
  }

  function update (): void {
    displayMesh.material = simulationMaterial

    for (let i = 0; i < pingPongSteps; i++) {
      simulationUniforms.previousIterationTexture.value = renderTargets.value[currentRenderTargetIndex.value].texture
      renderer.setRenderTarget(renderTargets.value[nextRenderTargetIndex.value])
      renderer.render(scene, camera)
      simulationUniforms.previousIterationTexture.value = renderTargets.value[nextRenderTargetIndex.value].texture
      displayUniforms.textureToDisplay.value = renderTargets.value[nextRenderTargetIndex.value].texture
      displayUniforms.previousIterationTexture.value = renderTargets.value[currentRenderTargetIndex.value].texture
      currentRenderTargetIndex.value = nextRenderTargetIndex.value
    }

    displayUniforms.time.value = new THREE.Clock().getElapsedTime()
    displayMesh.material = displayMaterial

    renderer.setRenderTarget(null)
    renderer.render(scene, camera)
    requestAnimationFrame(update)
  }

  function resetTextureSizes (): void {
    params.canvas.width = $canvas.clientWidth * params.canvas.scale
    params.canvas.height = $canvas.clientHeight * params.canvas.scale
    setupRenderTargets()
    simulationUniforms.resolution.value = new THREE.Vector2(params.canvas.width, params.canvas.height)
    if ($bufferCanvas) {
      $bufferCanvas.width = params.canvas.width
      $bufferCanvas.height = params.canvas.height
    }
  }

  function drawFirstFrame (): void {
    if (!bufferCanvasCtx) {
      return
    }
    bufferCanvasCtx.fillStyle = '#fff'
    bufferCanvasCtx.fillRect(0, 0, params.canvas.width, params.canvas.height)
    bufferCanvasCtx.beginPath()
    bufferCanvasCtx.arc(params.canvas.width / 2, params.canvas.height / 2, 100, 0, Math.PI * 2)
    bufferCanvasCtx.fillStyle = '#000'
    bufferCanvasCtx.fill()
    const textureData = convertPixelsToTextureData(bufferCanvasCtx, params.canvas.width, params.canvas.height)
    renderInitialDataToRenderTargets(textureData)
  }

  function renderInitialDataToRenderTargets (initialData: Float32Array): void {
    const texture = new THREE.DataTexture(initialData, params.canvas.width, params.canvas.height, THREE.RGBAFormat, THREE.FloatType)
    texture.flipY = true
    texture.needsUpdate = true

    passthroughUniforms.textureToDisplay.value = texture

    displayMesh.material = passthroughMaterial

    for (let i = 0; i < 2; i++) {
      renderer.setRenderTarget(renderTargets.value[i])
      renderer.render(scene, camera)
    }

    displayUniforms.textureToDisplay.value = renderTargets.value[0].texture
    displayUniforms.previousIterationTexture.value = renderTargets.value[0].texture
    displayMesh.material = displayMaterial

    renderer.setRenderTarget(null)
    renderer.compile(scene, camera)
  }

  return {
    setupEnvironment,
    drawFirstFrame,
    update
  }
}
