import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ zIndex, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'zIndex.prefix') ? modifyClassNames.zIndex.prefix : 'z-'

  return _.map(zIndex, (value, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      'z-index': value,
    })
  })
}
