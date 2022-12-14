import { ReactionDiffusionParams } from '~/composables/reaction-diffusion/types/params'

export function useParams (): ReactionDiffusionParams {
  return reactive({
    mouseActive: false,
    f: 0.0570,
    k: 0.0620,
    dA: 0.2097,
    dB: 0.105,
    timestep: 1,
    renderingStyle: 1,
    gradientColors: {
      color1RGB: { r: 0, g: 0, b: 0 },
      color2RGB: { r: 255, g: 0, b: 0 },
      color3RGB: { r: 0, g: 0, b: 0 },
      color4RGB: { r: 0, g: 0, b: 0 },
      color5RGB: { r: 0, g: 0, b: 0 },
      color1Stop: 0,
      color2Stop: 0.08,
      color3Stop: 0.21,
      color4Stop: 0.46,
      color5Stop: 0.60,
      color1Enabled: true,
      color2Enabled: true,
      color3Enabled: false,
      color4Enabled: false,
      color5Enabled: false
    },
    hsl: {
      from: { min: 0.0, max: 1.0 },
      to: { min: 0.21, max: 0.85 },
      saturation: 0.7,
      luminosity: 0.7
    },
    canvas: {
      width: window.innerWidth,
      height: window.innerHeight,
      scale: 1
    },
    styleMap: {
      imageLoaded: false,
      scale: 1.0,
      rotation: 0,
      translate: { x: 0.0, y: 0.0 },
      f: 0.035,
      k: 0.062,
      dA: 0.2097,
      dB: 0.105,
      animation: {
        enabled: false,
        parameter: '',
        easingEquation: '',
        speed: 1.0
      }
    },
    bias: { x: 0, y: 0 }
  })
}
