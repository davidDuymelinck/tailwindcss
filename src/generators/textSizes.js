import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ textSizes, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'textSizes.prefix') ? modifyClassNames.textSizes.prefix : 'text-'

  return _.map(textSizes, (size, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      'font-size': `${size}`,
    })
  })
}
