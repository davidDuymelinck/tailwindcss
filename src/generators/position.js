import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'position.prefix') ? modifyClassNames.position.prefix : ''
  const pinPrefix = _.has(modifyClassNames, 'position.pinPrefix') ? modifyClassNames.position.pinPrefix : 'pin-'
  const mStatic = _.has(modifyClassNames, 'position.modifier.static') ? modifyClassNames.position.modifier.static : 'static'
  const mFixed = _.has(modifyClassNames, 'position.modifier.fixed') ? modifyClassNames.position.modifier.fixed : 'fixed'
  const mAbsolute = _.has(modifyClassNames, 'position.modifier.absolute') ? modifyClassNames.position.modifier.absolute : 'absolute'
  const mRelative = _.has(modifyClassNames, 'position.modifier.relative') ? modifyClassNames.position.modifier.relative : 'relative'
  const mSticky = _.has(modifyClassNames, 'position.modifier.sticky') ? modifyClassNames.position.modifier.sticky : 'sticky'
  const mNone = _.has(modifyClassNames, 'position.modifier.none') ? modifyClassNames.position.modifier.none : 'none'
  const mFourSides = _.has(modifyClassNames, 'position.modifier.fourSides') ? modifyClassNames.position.modifier.fourSides : ''
  const mVertical = _.has(modifyClassNames, 'position.modifier.vertical') ? modifyClassNames.position.modifier.vertical : 'y'
  const mHorizontal = _.has(modifyClassNames, 'position.modifier.horizontal') ? modifyClassNames.position.modifier.horizontal : 'x'
  const mTop = _.has(modifyClassNames, 'position.modifier.top') ? modifyClassNames.position.modifier.top : 't'
  const mRight = _.has(modifyClassNames, 'position.modifier.right') ? modifyClassNames.position.modifier.right : 'r'
  const mBottom = _.has(modifyClassNames, 'position.modifier.bottom') ? modifyClassNames.position.modifier.bottom : 'b'
  const mLeft = _.has(modifyClassNames, 'position.modifier.left') ? modifyClassNames.position.modifier.left : 'l'
  const fourSidesClass = `${pinPrefix}${mFourSides}` === 'pin-' ? 'pin' : `${pinPrefix}${mFourSides}`


  return defineClasses({
    [`${prefix}${mStatic}`]: { position: 'static' },
    [`${prefix}${mFixed}`]: { position: 'fixed' },
    [`${prefix}${mAbsolute}`]: { position: 'absolute' },
    [`${prefix}${mRelative}`]: { position: 'relative' },
    [`${prefix}${mSticky}`]: { position: 'sticky' },
    [`${pinPrefix}${mNone}`]: {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    },
    [`${fourSidesClass}`]: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    [`${pinPrefix}${mVertical}`]: { top: 0, bottom: 0 },
    [`${pinPrefix}${mHorizontal}`]: { right: 0, left: 0 },
    [`${pinPrefix}${mTop}`]: { top: 0 },
    [`${pinPrefix}${mRight}`]: { right: 0 },
    [`${pinPrefix}${mBottom}`]: { bottom: 0 },
    [`${pinPrefix}${mLeft}`]: { left: 0 },
  })
}
