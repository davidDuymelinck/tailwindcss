import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'backgroundRepeat.prefix') ? modifyClassNames.backgroundRepeat.prefix : 'bg-'
  let backgroundRepeats = {
    'repeat': 'repeat',
    'no-repeat': 'no-repeat',
    'repeat-x': 'repeat-x',
    'repeat-y': 'repeat-y',
  }

  return _.map(backgroundRepeats, (repeat, className) => {
    let modifier = _.has(modifyClassNames, `backgroundRepeat.modifier.${className}`) ? modifyClassNames.backgroundRepeat.modifier[className] : className

    return defineClass(`${prefix}${modifier}`, {
      'background-repeat': repeat,
    })
  })
}
