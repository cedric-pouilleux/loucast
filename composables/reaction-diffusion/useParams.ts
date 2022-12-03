import { ReactionDiffusionParams } from '~/composables/reaction-diffusion/types/params'

export function useParams () {
  return reactive<ReactionDiffusionParams>({
    f: 0.035,
    k: 0.062,
    dA: 0.2097,
    dB: 0.105,
    timestep: 1.0,
    renderingStyle: '',
    gradientColors: {
      color1RGB: { r: 0, g: 0, b: 0 },
      color2RGB: { r: 0, g: 255, b: 0 },
      color3RGB: { r: 255, g: 255, b: 0 },
      color4RGB: { r: 255, g: 0, b: 0 },
      color5RGB: { r: 100, g: 0, b: 0 },
      color1Stop: 0,
      color2Stop: 0.2,
      color3Stop: 0.21,
      color4Stop: 0.4,
      color5Stop: 0.6,
      color1Enabled: true,
      color2Enabled: true,
      color3Enabled: true,
      color4Enabled: true,
      color5Enabled: true
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
