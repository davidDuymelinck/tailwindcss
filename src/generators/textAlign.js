import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'textAlign.prefix') ? modifyClassNames.textAlign.prefix : 'text-'
  const alignments = ['left', 'center', 'right', 'justify']

  return _.map(alignments, (value) => {
    let modifier = _.has(modifyClassNames, `textAlign.modifier.${value}`) ? modifyClassNames.textAlign.modifier[value] : value

    return defineClass(`${prefix}${modifier}`, {
      'text-align': value,
    })
  })
}
