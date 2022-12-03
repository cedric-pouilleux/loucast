import * as THREE from 'three'
import { ShaderMaterial } from 'three'
import simulationFragShader from '@/assets/glsl/simulationFrag.glsl'
import simulationVertShader from '@/assets/glsl/simulationVert.glsl'
import displayFragShader from '@/assets/glsl/displayFrag.glsl'
import displayVertShader from '@/assets/glsl/displayVert.glsl'
import passthroughFragShader from '@/assets/glsl/passthroughFrag.glsl'
import passthroughVertShader from '@/assets/glsl/passthroughVert.glsl'
import { ReactionDiffusionParams } from '~/composables/reaction-diffusion/types/params'
import { DisplayUniforms, PassthroughUniforms, SimulationUniforms } from '~/composables/reaction-diffusion/types/uniforms'

type UseShapes = {
  simulationUniforms: SimulationUniforms,
  passthroughUniforms: PassthroughUniforms,
  displayUniforms: DisplayUniforms,
  simulationMaterial: ShaderMaterial,
  displayMaterial: ShaderMaterial,
  passthroughMaterial: ShaderMaterial
}

export function useShapes (params: ReactionDiffusionParams): UseShapes {
  const simulationUniforms = reactive<SimulationUniforms>({
    previousIterationTexture: {
      type: 't',
      value: undefined
    },
    resolution: {
      type: 'v2',
      value: new THREE.Vector2(params.canvas.width, params.canvas.height)
    },
    mousePosition: {
      type: 'v2',
      value: new THREE.Vector2(-1, -1)
    },
    brushRadius: {
      type: 'f',
      value: 10.0
    },
    styleMapTexture: {
      type: 't',
      value: undefined
    },
    styleMapResolution: {
      type: 'vec2',
      value: new THREE.Vector2(-1, -1)
    },
    styleMapTransforms: {
      type: 'v4',
      value: new THREE.Vector4(1.0, 0.0, 0.0, 0.0) // {scale, rotation, xOffset, yOffset}
    },
    styleMapParameters: {
      type: 'v4',
      value: new THREE.Vector4(params.f, params.k, params.dA, params.dB)
    },
    bias: {
      type: 'vec2',
      value: new THREE.Vector2(params.bias.x, params.bias.y)
    },

    // Reaction-diffusion equation parameters
    f: { // feed rate
      type: 'f',
      value: params.f
    },
    k: { // kill rate
      type: 'f',
      value: params.k
    },
    dA: { // diffusion rate for chemical A
      type: 'f',
      value: params.dA
    },
    dB: { // diffusion rate for chemical B
      type: 'f',
      value: params.dB
    },
    timestep: {
      type: 'f',
      value: params.timestep
    }
  })

  const displayUniforms = reactive<DisplayUniforms>({
    textureToDisplay: {
      value: null
    },
    previousIterationTexture: {
      value: null
    },
    time: {
      type: 'f',
      value: 0
    },
    renderingStyle: {
      type: 'i',
      value: 0
    },

    // Gradient color stops - RGB channels represent real color values, but A channel is for B threshold
    // via https://github.com/pmneila/jsexp
    colorStop1: {
      type: 'v4',
      value: new THREE.Vector4(
        params.gradientColors.color1RGB.r / 255,
        params.gradientColors.color1RGB.g / 255,
        params.gradientColors.color1RGB.b / 255,
        params.gradientColors.color1Stop
      )
    },
    colorStop2: {
      type: 'v4',
      value: new THREE.Vector4(
        params.gradientColors.color2RGB.r / 255,
        params.gradientColors.color2RGB.g / 255,
        params.gradientColors.color2RGB.b / 255,
        params.gradientColors.color2Stop
      )
    },
    colorStop3: {
      type: 'v4',
      value: new THREE.Vector4(
        params.gradientColors.color3RGB.r / 255,
        params.gradientColors.color3RGB.g / 255,
        params.gradientColors.color3RGB.b / 255,
        params.gradientColors.color3Stop
      )
    },
    colorStop4: {
      type: 'v4',
      value: new THREE.Vector4(
        params.gradientColors.color4RGB.r / 255,
        params.gradientColors.color4RGB.g / 255,
        params.gradientColors.color4RGB.b / 255,
        params.gradientColors.color4Stop
      )
    },
    colorStop5: {
      type: 'v4',
      value: new THREE.Vector4(
        params.gradientColors.color5RGB.r / 255,
        params.gradientColors.color5RGB.g / 255,
        params.gradientColors.color5RGB.b / 255,
        params.gradientColors.color5Stop
      )
    },

    // HSL mapping
    hslFrom: {
      type: 'vec2',
      value: new THREE.Vector2(
        params.hsl.from.min,
        params.hsl.from.max
      )
    },
    hslTo: {
      type: 'vec2',
      value: new THREE.Vector2(
        params.hsl.to.min,
        params.hsl.to.max
      )
    },
    hslSaturation: {
      type: 'f',
      value: params.hsl.saturation
    },
    hslLuminosity: {
      type: 'f',
      value: params.hsl.luminosity
    }
  })

  const passthroughUniforms = reactive<PassthroughUniforms>({
    textureToDisplay: {
      value: null
    }
  })

  const simulationMaterial: ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: simulationUniforms,
    vertexShader: simulationVertShader,
    fragmentShader: simulationFragShader
  })
  simulationMaterial.blending = THREE.NoBlending

  const displayMaterial: ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: displayUniforms,
    vertexShader: displayVertShader,
    fragmentShader: displayFragShader
  })
  displayMaterial.blending = THREE.NoBlending

  const passthroughMaterial: ShaderMaterial = new THREE.ShaderMaterial({
    uniforms: passthroughUniforms,
    vertexShader: passthroughVertShader,
    fragmentShader: passthroughFragShader
  })
  passthroughMaterial.blending = THREE.NoBlending

  return {
    passthroughUniforms,
    simulationUniforms,
    displayUniforms,
    simulationMaterial,
    displayMaterial,
    passthroughMaterial
  }
}
