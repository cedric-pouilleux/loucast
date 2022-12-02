//= =============================================================
//  EXPORT
//  - Functions to export images or other data from the
//    simulation.
//= =============================================================

export function exportImage () {
  const link = document.createElement('a')
  link.download = 'reaction-diffusion.png'
  link.href = renderer.domElement.toDataURL()
  link.click()
  link.remove()
}
