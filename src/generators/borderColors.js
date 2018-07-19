import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ borderColors, modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'borderColors.prefix') ? modifyClassNames.borderColors.prefix : 'border-'

  return _.map(_.omit(borderColors, 'default'), (color, className) => {
    return defineClass(`${prefix}${className}`, {
      'border-color': color,
    })
  })
}
