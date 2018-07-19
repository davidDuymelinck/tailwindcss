import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'pointerEvents.prefix') ? modifyClassNames.pointerEvents.prefix : 'pointer-events-'
  const events = ['none', 'auto']

  return _.map(events, (value) => {
    let modifier = _.has(modifyClassNames, `pointerEvents.modifier.${value}`) ? modifyClassNames.pointerEvents.modifier[value] : value;

    return defineClass(`${prefix}${modifier}`, {
      'pointer-events': value,
    })
  })
}
