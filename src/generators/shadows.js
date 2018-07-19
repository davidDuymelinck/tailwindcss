import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ shadows, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'shadows.prefix') ? modifyClassNames.shadows.prefix : 'shadow-'

  return _.map(shadows, (shadow, modifier) => {
    return defineClass(modifier === 'default' ? prefix.replace('-', '') : `${prefix}${modifier}`, {
      'box-shadow': shadow,
    })
  })
}
