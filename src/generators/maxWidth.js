import _ from 'lodash'
import defineClass from '../util/defineClass'

function defineMaxWidths(widths, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'maxWidth.prefix') ? modifyClassNames.maxWidth.prefix : 'max-w-'

  return _.map(widths, (size, modifer) => {
    return defineClass(`${prefix}${modifer}`, {
      'max-width': `${size}`,
    })
  })
}

export default function(config) {
  return _.flatten([defineMaxWidths(config.maxWidth, config.modifyClassNames)])
}
