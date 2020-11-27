import * as d3 from 'd3'

const width = 1000
const height = 1000

export default class ColorizedMatrix {
  constructor(parentEl) {
    if (!parentEl) return
    this.parentEl = parentEl
  }

  /**
   *
   *
   * @see https://observablehq.com/@d3/icicle
   */
  render(matrix) {
    if (!this.parentEl) return

    const data = { name: 'matrix', children: matrix }
    const root = d3.partition().size([height, width]).padding(1)
    console.log('root', root)

    const svg = d3.create('svg').attr('viewBox', [0, 0, width, height])
    console.log('svg', svg)

    (svg.selectAll('g').data(root.descendants()).join('g')
      .attr('transform', (datum, index, nodes) => {
        console.log('datum', datum)
        console.log('index', index)
        console.log('nodes', nodes)
      })
    )
    /*
    const cell = (svg
      .selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', d => `translate(${d.y0}, ${d.x0})`)
    )

    cell.append('rect')
    */
  }
}

