export type Position = {
    x: number,
    y: number
}

export type RGB = {
    r: number, g: number, b: number
}

export type Limit = {
    min: number,
    max : number
}

export type Hsl = {
    from: Limit,
    to: Limit,
    saturation: number,
    luminosity: number
}

export type Canvas = {
    width: number,
    height: number,
    scale: number
}

export type GradientColors = {
    color1RGB: RGB,
    color2RGB: RGB,
    color3RGB: RGB,
    color4RGB: RGB,
    color5RGB: RGB,
    color1Stop: number,
    color2Stop: number,
    color3Stop: number,
    color4Stop: number,
    color5Stop: number,
    color1Enabled: boolean,
    color2Enabled: boolean,
    color3Enabled: boolean,
    color4Enabled: boolean,
    color5Enabled: boolean
}

export type Animation = {
    enabled: boolean,
    parameter: string,
    easingEquation: string,
    speed: number
}

export type StyleMap = {
    imageLoaded: boolean,
    scale: number,
    rotation: number,
    translate: Position,
    f: number,
    k: number,
    dA: number,
    dB: number,
    animation: Animation
}

export type ReactionDiffusionParams = {
    mouseActive: boolean,
    f: number,
    k: number,
    dA: number,
    dB: number,
    timestep: number,
    renderingStyle: number,
    gradientColors: GradientColors,
    hsl: Hsl,
    canvas: Canvas,
    styleMap: StyleMap,
    bias: Position
}
