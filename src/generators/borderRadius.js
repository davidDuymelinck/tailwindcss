import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineBorderRadiusUtilities(borderRadiuses, modifyClassNames) {
  const prefix = _.has( modifyClassNames, 'borderRadius.prefix') ? modifyClassNames.borderRadius.prefix : 'rounded-'
  const generators = [
    (radius, modifier) => {
      const specificPrefix = modifier === '' ? prefix.replace('-', '') : prefix

      return defineClasses({
        [`${specificPrefix}${modifier}`]: {
          'border-radius': `${radius}`,
        },
      })
    },
    (radius, modifier) => {
      const mTop = _.has(modifyClassNames, 'borderRadius.modifier.top') ? modifyClassNames.borderRadius.modifier.top : 't'
      const mRight = _.has(modifyClassNames, 'borderRadius.modifier.right') ? modifyClassNames.borderRadius.modifier.right : 'r'
      const mBottom = _.has(modifyClassNames, 'borderRadius.modifier.bottom') ? modifyClassNames.borderRadius.modifier.bottom : 'b'
      const mLeft = _.has(modifyClassNames, 'borderRadius.modifier.left') ? modifyClassNames.borderRadius.modifier.left : 'l'

      return defineClasses({
        [`${prefix}${mTop}${modifier}`]: {
          'border-top-left-radius': `${radius}`,
          'border-top-right-radius': `${radius}`,
        },
        [`${prefix}${mRight}${modifier}`]: {
          'border-top-right-radius': `${radius}`,
          'border-bottom-right-radius': `${radius}`,
        },
        [`${prefix}${mBottom}${modifier}`]: {
          'border-bottom-right-radius': `${radius}`,
          'border-bottom-left-radius': `${radius}`,
        },
        [`${prefix}${mLeft}${modifier}`]: {
          'border-top-left-radius': `${radius}`,
          'border-bottom-left-radius': `${radius}`,
        },
      })
    },
    (radius, modifier) => {
      const mTopLeft = _.has(modifyClassNames, 'borderRadius.modifier.topLeft') ? modifyClassNames.borderRadius.modifier.topLeft : 'tl'
      const mTopRight = _.has(modifyClassNames, 'borderRadius.modifier.topRight') ? modifyClassNames.borderRadius.modifier.topRight : 'tr'
      const mBottomLeft = _.has(modifyClassNames, 'borderRadius.modifier.bottomLeft') ? modifyClassNames.borderRadius.modifier.bottomLeft : 'bl'
      const mBottomRight = _.has(modifyClassNames, 'borderRadius.modifier.bottomRight') ? modifyClassNames.borderRadius.modifier.bottomRight : 'br'

      return defineClasses({
        [`${prefix}${mTopLeft}${modifier}`]: {
          'border-top-left-radius': `${radius}`,
        },
        [`${prefix}${mTopRight}${modifier}`]: {
          'border-top-right-radius': `${radius}`,
        },
        [`${prefix}${mBottomRight}${modifier}`]: {
          'border-bottom-right-radius': `${radius}`,
        },
        [`${prefix}${mBottomLeft}${modifier}`]: {
          'border-bottom-left-radius': `${radius}`,
        },
      })
    },
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(borderRadiuses, (radius, modifier) => {
      return generator(radius, modifier === 'default' ? '' : `-${modifier}`)
    })
  })
}

module.exports = function({ borderRadius, modifyClassNames }) {
  return defineBorderRadiusUtilities(borderRadius, modifyClassNames)
}
