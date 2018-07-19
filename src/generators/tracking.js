import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ tracking, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'tracking.prefix') ? modifyClassNames.tracking.prefix : 'tracking-'

  return _.map(tracking, (value, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      'letter-spacing': `${value}`,
    })
  })
}
