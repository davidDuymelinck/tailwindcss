import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineMinWidths(widths, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'minWidth.prefix') ? modifyClassNames.minWidth.prefix : 'min-w-'

  return _.map(widths, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      'min-width': `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineMinWidths(config.minWidth, config.modifyClassNames)])
}
