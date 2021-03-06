import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineHeights(heights, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'height.prefix') ? modifyClassNames.height.prefix : 'h-'

  return _.map(heights, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      height: `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineHeights(config.height, config.modifyClassNames)])
}
