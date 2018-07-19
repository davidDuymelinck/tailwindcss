import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ opacity, modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'opacity.prefix') ? modifyClassNames.opacity.prefix : 'opacity-'

  return _.map(opacity, (value, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      opacity: value,
    })
  })
}
