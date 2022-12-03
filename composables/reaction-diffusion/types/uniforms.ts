import { Vector2, Vector4 } from 'three'

export type UniformsProp = {
    type?: 't' | 'i' | 'v2' | 'v4'| 'f' | 'vec2' | 'v4',
    value: number | undefined | Vector2 | Vector4 | null
}

export type SimulationUniforms = {
    previousIterationTexture: UniformsProp,
    resolution: UniformsProp,
    mousePosition: UniformsProp,
    brushRadius: UniformsProp,
    styleMapTexture: UniformsProp,
    styleMapResolution: UniformsProp,
    styleMapTransforms: UniformsProp,
    styleMapParameters: UniformsProp,
    bias: UniformsProp,
    f: UniformsProp,
    k: UniformsProp,
    dA:UniformsProp,
    dB: UniformsProp,
    timestep: UniformsProp
}

export type DisplayUniforms = {
    textureToDisplay: UniformsProp,
    previousIterationTexture: UniformsProp,
    time: UniformsProp,
    renderingStyle: UniformsProp,
    colorStop1: UniformsProp,
    colorStop2: UniformsProp,
    colorStop3: UniformsProp,
    colorStop4: UniformsProp,
    colorStop5: UniformsProp,
    hslFrom: UniformsProp,
    hslTo: UniformsProp,
    hslSaturation: UniformsProp,
    hslLuminosity: UniformsProp
}

export type PassthroughUniforms = {
    textureToDisplay: UniformsProp
}
