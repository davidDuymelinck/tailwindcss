import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ backgroundColors, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'backgroundColors.prefix') ? modifyClassNames.backgroundColors.prefix : 'bg-'

  return _.map(backgroundColors, (color, className) => {
    return defineClass(`${prefix}${className}`, {
      'background-color': color,
    })
  })
}
