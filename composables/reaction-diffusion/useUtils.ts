export function useUtils () {
  function convertPixelsToTextureData (context: CanvasRenderingContext2D, width: number, height: number): Float32Array {
    const pixels: Uint8ClampedArray = context.getImageData(0, 0, width, height).data
    const data = new Float32Array(pixels.length)
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 1.0
      data[i + 1] = pixels[i + 1] === 0 ? 0.5 : 0.0
      data[i + 2] = 0.0
      data[i + 3] = 0.0
    }
    return data
  }
  return {
    convertPixelsToTextureData
  }
}
