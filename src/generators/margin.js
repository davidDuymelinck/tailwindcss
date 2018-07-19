import _ from 'lodash'
import defineClasses from '../util/defineClasses'

function defineMargin(margin, modifyClassNames) {
  const prefix = _.has(modifyClassNames, 'margin.prefix') ? modifyClassNames.margin.prefix : 'm-'
  const twPrefix = _.has(modifyClassNames, 'margin.prefix') ? modifyClassNames.margin.prefix : 'm'
  const generators = [
    (size, modifier) => {
      return defineClasses({
        [`${prefix}${modifier}`]: { margin: `${size}` },
      })
    },
    (size, modifier) => {
      const mHorizontal = _.has(modifyClassNames, 'margin.modifier.horizontal') ? modifyClassNames.margin.modifier.horizontal : 'x'
      const mVertical = _.has(modifyClassNames, 'margin.modifier.vertical') ? modifyClassNames.margin.modifier.vertical : 'y'

      return defineClasses({
        [`${twPrefix}${mVertical}-${modifier}`]: { 'margin-top': `${size}`, 'margin-bottom': `${size}` },
        [`${twPrefix}${mHorizontal}-${modifier}`]: { 'margin-left': `${size}`, 'margin-right': `${size}` },
      })
    },
    (size, modifier) => {
      const mTop = _.has(modifyClassNames, 'margin.modifier.top') ? modifyClassNames.margin.modifier.top : 't'
      const mRight = _.has(modifyClassNames, 'margin.modifier.right') ? modifyClassNames.margin.modifier.right : 'r'
      const mBottom = _.has(modifyClassNames, 'margin.modifier.bottom') ? modifyClassNames.margin.modifier.bottom : 'b'
      const mLeft = _.has(modifyClassNames, 'margin.modifier.left') ? modifyClassNames.margin.modifier.left : 'l'

      return defineClasses({
        [`${twPrefix}${mTop}-${modifier}`]: { 'margin-top': `${size}` },
        [`${twPrefix}${mRight}-${modifier}`]: { 'margin-right': `${size}` },
        [`${twPrefix}${mBottom}-${modifier}`]: { 'margin-bottom': `${size}` },
        [`${twPrefix}${mLeft}-${modifier}`]: { 'margin-left': `${size}` },
      })
    },
  ]

  return _.flatMap(generators, generator => {
    return _.flatMap(margin, generator)
  })
}

export default function({ margin, modifyClassNames }) {
  return _.flatten([defineMargin(margin, modifyClassNames)])
}
