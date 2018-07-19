import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ textColors, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'textColors.prefix') ? modifyClassNames.textColors.prefix : 'text-'

  return _.map(textColors, (color, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      color,
    })
  })
}
