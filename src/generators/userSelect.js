import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'userSelect.prefix') ? modifyClassNames.userSelect.prefix : 'select-'
  const selects = ['none', 'text']

  return _.map(selects, (value) => {
    let modifier = _.has(modifyClassNames, `resize.modifier.${value}`) ? modifyClassNames.resize.modifier[value] : value

    return defineClass(`${prefix}${modifier}`, {
      'user-select': value,
    })
  })
}
