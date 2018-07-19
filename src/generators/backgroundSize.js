import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ backgroundSize, modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'backgroundSize.prefix') ? modifyClassNames.backgroundSize.prefix : 'bg-'

  return _.map(backgroundSize, (size, className) => {
    return defineClass(`${prefix}${className}`, {
      'background-size': size,
    })
  })
}
