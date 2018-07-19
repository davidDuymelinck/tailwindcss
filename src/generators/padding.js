import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function definePadding(padding, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'padding.prefix') ? modifyClassNames.padding.prefix : 'p-'
  const twPrefix = _.has(modifyClassNames, 'padding.prefix') ? modifyClassNames.padding.prefix : 'p'
  const generators = [
    (size, modifier) => {
      return defineClasses({
        [`${prefix}${modifier}`]: { padding: `${size}` },
      })
    },
    (size, modifier) => {
      const mHorizontal = _.has(modifyClassNames, 'padding.modifier.horizontal') ? modifyClassNames.padding.modifier.horizontal : 'x'
      const mVertical = _.has(modifyClassNames, 'padding.modifier.vertical') ? modifyClassNames.padding.modifier.vertical : 'y'

      return defineClasses({
        [`${twPrefix}${mVertical}-${modifier}`]: { 'padding-top': `${size}`, 'padding-bottom': `${size}` },
        [`${twPrefix}${mHorizontal}-${modifier}`]: { 'padding-left': `${size}`, 'padding-right': `${size}` },
      })
    },
    (size, modifier) => {
      const mTop = _.has(modifyClassNames, 'padding.modifier.top') ? modifyClassNames.padding.modifier.top : 't'
      const mRight = _.has(modifyClassNames, 'padding.modifier.right') ? modifyClassNames.padding.modifier.right : 'r'
      const mBottom = _.has(modifyClassNames, 'padding.modifier.bottom') ? modifyClassNames.padding.modifier.bottom : 'b'
      const mLeft = _.has(modifyClassNames, 'padding.modifier.left') ? modifyClassNames.padding.modifier.left : 'l'

      return defineClasses({
        [`${twPrefix}${mTop}-${modifier}`]: { 'padding-top': `${size}` },
        [`${twPrefix}${mRight}-${modifier}`]: { 'padding-right': `${size}` },
        [`${twPrefix}${mBottom}-${modifier}`]: { 'padding-bottom': `${size}` },
        [`${twPrefix}${mLeft}-${modifier}`]: { 'padding-left': `${size}` },
      })
    },
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(padding, generator)
  })
}

export default function({ padding, modifyClassNames }) {
  return _.flatten([definePadding(padding, modifyClassNames)])
}
