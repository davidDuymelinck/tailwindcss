import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ svgFill, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'svgFill.prefix') ? modifyClassNames.svgFill.prefix : 'fill-'

  return _.map(svgFill, (color, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      fill: color,
    })
  })
}
