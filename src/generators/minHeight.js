import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineMinHeights(heights, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'minHeight.prefix') ? modifyClassNames.minHeight.prefix : 'min-h-'

  return _.map(heights, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      'min-height': `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineMinHeights(config.minHeight, config.modifyClassNames)])
}
