import ColorizedMatrix from '../ColorizedMatrix'

import * as css from './index.css'

import {getBCOMs} from './bcom'

const BCOMs = getBCOMs()

export default class App {
  constructor (parentEl) {
    if (!parentEl) return
    this.parentEl = parentEl
  }

  render () {
    if (!this.parentEl) return

    this.parentEl.innerHTML = '<section data-component="app"></section>'
    const app = document.querySelector('section[data-component=app]')

    const colorizedMatrix = new ColorizedMatrix(app)
    colorizedMatrix.render(BCOMs[6])
  }
}