import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ leading, modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'leading.prefix') ? modifyClassNames.leading.prefix : 'leading-'

  return _.map(leading, (value, modifier) => {
    return defineClass(`${prefix}${modifier}`, {
      'line-height': `${value}`,
    })
  })
}
