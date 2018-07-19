import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'resize.prefix') ? modifyClassNames.resize.prefix : 'resize-'
  const types = {
    'none' : 'none',
    'y': 'vertical',
    'x': 'horizontal',
    'both': 'both'
  }

  return _.map(types, (value, className) => {
    let modifier = _.has(modifyClassNames, `resize.modifier.${className}`) ? modifyClassNames.resize.modifier[className] : className

    return defineClass(`${prefix}${modifier}`, {
      resize: value,
    })
  })
}
