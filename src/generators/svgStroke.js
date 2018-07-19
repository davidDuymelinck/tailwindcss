import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ svgStroke, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'svgStoke.prefix') ? modifyClassNames.svgStroke.prefix : 'stroke-'

  return _.map(svgStroke, (color, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      stroke: color,
    })
  })
}
