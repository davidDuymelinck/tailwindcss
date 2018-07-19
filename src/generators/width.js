import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineWidths(widths, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'width.prefix') ? modifyClassNames.width.prefix : 'w-'

  return _.map(widths, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      width: `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineWidths(config.width, config.modifyClassNames)])
}
