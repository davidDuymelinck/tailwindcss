import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'verticalAlign.prefix') ? modifyClassNames.verticalAlign.prefix : 'align-'
  const alignments = ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom']

  return _.map(alignments, (value) => {
    let modifier = _.has(modifyClassNames, `resize.modifier.${value}`) ? modifyClassNames.resize.modifier[value] : value

    return defineClass(`${prefix}${modifier}`, {
      'vertical-align': value,
    })
  })
}
