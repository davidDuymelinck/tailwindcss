import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineNegativeMargin(negativeMargin, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'negativeMargin.prefix') ? modifyClassNames.negativeMargin.prefix : '-m-'
  const twPrefix = _.has(modifyClassNames, 'negativeMargin.prefix') ? modifyClassNames.negativeMargin.prefix : '-m'
  const generators = [
    (size, modifier) => {
      return defineClasses({
        [`${prefix}${modifier}`]: { margin: `${size}` },
      })
    },
    (size, modifier) => {
      const mHorizontal = _.has(modifyClassNames, 'negativeMargin.modifier.horizontal') ? modifyClassNames.negativeMargin.modifier.horizontal : 'x'
      const mVertical = _.has(modifyClassNames, 'negativeMargin.modifier.vertical') ? modifyClassNames.negativeMargin.modifier.vertical : 'y'

      return defineClasses({
        [`${twPrefix}${mVertical}-${modifier}`]: { 'margin-top': `${size}`, 'margin-bottom': `${size}` },
        [`${twPrefix}${mHorizontal}-${modifier}`]: { 'margin-left': `${size}`, 'margin-right': `${size}` },
      })
    },
    (size, modifier) => {
      const mTop = _.has(modifyClassNames, 'negativeMargin.modifier.top') ? modifyClassNames.negativeMargin.modifier.top : 't'
      const mRight = _.has(modifyClassNames, 'negativeMargin.modifier.right') ? modifyClassNames.negativeMargin.modifier.right : 'r'
      const mBottom = _.has(modifyClassNames, 'negativeMargin.modifier.bottom') ? modifyClassNames.negativeMargin.modifier.bottom : 'b'
      const mLeft = _.has(modifyClassNames, 'negativeMargin.modifier.left') ? modifyClassNames.negativeMargin.modifier.left : 'l'

      return defineClasses({
        [`${twPrefix}${mTop}-${modifier}`]: { 'margin-top': `${size}` },
        [`${twPrefix}${mRight}-${modifier}`]: { 'margin-right': `${size}` },
        [`${twPrefix}${mBottom}-${modifier}`]: { 'margin-bottom': `${size}` },
        [`${twPrefix}${mLeft}-${modifier}`]: { 'margin-left': `${size}` },
      })
    },
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(negativeMargin, (size, modifier) => {
      return generator(`${size}` === '0' ? `${size}` : `-${size}`, modifier)
    })
  })
}

export default function({ negativeMargin, modifyClassNames }) {
  return _.flatten([defineNegativeMargin(negativeMargin, modifyClassNames)])
}
