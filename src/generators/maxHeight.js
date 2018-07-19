import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineMaxHeights(heights, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'maxHeight.prefix') ? modifyClassNames.maxHeight.prefix : 'max-h-'

  return _.map(heights, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      'max-height': `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineMaxHeights(config.maxHeight, config.modifyClassNames)])
}
