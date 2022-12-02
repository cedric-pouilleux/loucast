import { simulationUniforms } from './uniforms'
import parameterValues from './parameterValues'
import parameterMetadata from './parameterMetadata'

let horizontalLine, verticalLine
let horizontalLabel, verticalLabel
let horizontalLabelValue, verticalLabelValue

export function setupMap () {
  // Create crosshair lines
  horizontalLine = document.createElement('div')
  horizontalLine.classList.add('horizontal-line', 'crosshair-line', 'is-hidden')

  verticalLine = document.createElement('div')
  verticalLine.classList.add('vertical-line', 'crosshair-line', 'is-hidden')

  // Create crosshair labels
  horizontalLabel = document.createElement('div')
  horizontalLabel.classList.add('horizontal-line-label', 'crosshair-label')
  horizontalLabel.innerHTML = '<em>f</em> = <span></span>'
  horizontalLabelValue = horizontalLabel.querySelector('span')

  verticalLabel = document.createElement('div')
  verticalLabel.classList.add('vertical-line-label', 'crosshair-label')
  verticalLabel.innerHTML = '<em>k</em> = <span></span>'
  verticalLabelValue = verticalLabel.querySelector('span')

  // Add labels to line elements
  horizontalLine.appendChild(horizontalLabel)
  verticalLine.appendChild(verticalLabel)

  // Update crosshair labels on mouse move
  mapImage.addEventListener('mousemove', (e) => {
    horizontalLine.style.top = e.offsetY + 'px'
    verticalLine.style.left = e.offsetX + 'px'

    const feedKillValues = getFeedKillValuesFromMouse(e.offsetX, e.offsetY)

    horizontalLabelValue.innerHTML = feedKillValues.f.toString().substring(0, 5)
    verticalLabelValue.innerHTML = feedKillValues.k.toString().substring(0, 5)
  })

  // Show the crosshairs on hover of the map image
  mapImage.addEventListener('mouseover', () => {
    horizontalLine.classList.remove('is-hidden')
    verticalLine.classList.remove('is-hidden')

    horizontalLine.style.width = mapImage.clientWidth + 'px'
    verticalLine.style.height = mapImage.height + 'px'
  })

  // Hide the crosshairs when map image loses hover
  mapImage.addEventListener('mouseout', () => {
    horizontalLine.classList.add('is-hidden')
    verticalLine.classList.add('is-hidden')
  })

  // When the map is clicked, pass new f/k values (from mouse coords) to UI and simulation frag shader uniforms
  mapImage.addEventListener('click', (e) => {
    const newFeedKillValues = getFeedKillValuesFromMouse(e.offsetX, e.offsetY)

    parameterValues.f = newFeedKillValues.f
    parameterValues.k = newFeedKillValues.k

    simulationUniforms.f.value = newFeedKillValues.f
    simulationUniforms.k.value = newFeedKillValues.k

    collapseMap()
  })

  // Hide the map on load
  collapseMap()
}

export function expandMap () {
  document.body.classList.add('modal-open')
}

export function collapseMap () {
  document.body.classList.remove('modal-open')
  mapDialog.classList.remove('is-visible')
}

function getFeedKillValuesFromMouse (mouseX, mouseY) {
  const x = mouseX / mapImage.scrollWidth
  const y = Math.abs(mapImage.scrollHeight - mouseY) / mapImage.scrollHeight

  return {
    f: y.map(0, 1, parameterMetadata.f.min, parameterMetadata.f.max),
    k: x.map(0, 1, parameterMetadata.k.min, parameterMetadata.k.max)
  }
}

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
// eslint-disable-next-line no-extend-native
Number.prototype.map = function (inMin, inMax, outMin, outMax) {
  return (this - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
