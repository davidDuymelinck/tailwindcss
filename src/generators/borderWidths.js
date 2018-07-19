import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineBorderWidthUtilities(borderWidths, modifyClassNames) {
  const prefix = _.has( modifyClassNames, 'borderWidths.prefix') ? modifyClassNames.borderWidths.prefix : 'border-'
  const generators = [
    (width, modifier) => {
      const specificPrefix = modifier === '' ? prefix.replace('-', '') : prefix

      return defineClasses({
        [`${specificPrefix}${modifier}`]: {
          'border-width': `${width}`,
        },
      })
    },
    (width, modifier) => {
      const mTop = _.has(modifyClassNames, 'borderWidths.modifier.top') ? modifyClassNames.borderWidths.modifier.top : 't'
      const mRight = _.has(modifyClassNames, 'borderWidths.modifier.right') ? modifyClassNames.borderWidths.modifier.right : 'r'
      const mBottom = _.has(modifyClassNames, 'borderWidths.modifier.bottom') ? modifyClassNames.borderWidths.modifier.bottom : 'b'
      const mLeft = _.has(modifyClassNames, 'borderWidths.modifier.left') ? modifyClassNames.borderWidths.modifier.left : 'l'

      return defineClasses({
        [`${prefix}${mTop}${modifier}`]: {
          'border-top-width': `${width}`,
        },
        [`${prefix}${mRight}${modifier}`]: {
          'border-right-width': `${width}`,
        },
        [`${prefix}${mBottom}${modifier}`]: {
          'border-bottom-width': `${width}`,
        },
        [`${prefix}${mLeft}${modifier}`]: {
          'border-left-width': `${width}`,
        },
      })
    },
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(borderWidths, (width, modifier) => {
      return generator(width, modifier === 'default' ? '' : `-${modifier}`)
    })
  })
}

module.exports = function({ borderWidths, modifyClassNames }) {
  return defineBorderWidthUtilities(borderWidths, modifyClassNames)
}
