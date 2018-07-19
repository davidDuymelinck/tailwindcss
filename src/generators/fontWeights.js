import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ fontWeights, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'fontWeight.prefix') ? modifyClassNames.fontWeight.prefix : 'font-'

  return _.map(fontWeights, (weight, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      'font-weight': `${weight}`,
    })
  })
}
