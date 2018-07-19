import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'textStyle.prefix') ? modifyClassNames.textStyle.prefix : ''
  const mItalic = _.has(modifyClassNames, 'position.modifier.italic') ? modifyClassNames.position.modifier.italic : 'italic'
  const mNormal = _.has(modifyClassNames, 'position.modifier.normal') ? modifyClassNames.position.modifier.normal : 'roman'
  const mUppercase = _.has(modifyClassNames, 'position.modifier.uppercase') ? modifyClassNames.position.modifier.uppercase : 'uppercase'
  const mLowercase = _.has(modifyClassNames, 'position.modifier.lowercase') ? modifyClassNames.position.modifier.lowercase : 'lowercase'
  const mCapitalize = _.has(modifyClassNames, 'position.modifier.capitalize') ? modifyClassNames.position.modifier.capitalize : 'capitalize'
  const mNoTransform = _.has(modifyClassNames, 'position.modifier.noTransform') ? modifyClassNames.position.modifier.noTransform : 'normal-case'
  const mUnderline = _.has(modifyClassNames, 'position.modifier.underline') ? modifyClassNames.position.modifier.underline : 'underline'
  const mLineThrough = _.has(modifyClassNames, 'position.modifier.lineThrough') ? modifyClassNames.position.modifier.lineThrough : 'line-through'
  const mNoDecoration = _.has(modifyClassNames, 'position.modifier.noDecoration') ? modifyClassNames.position.modifier.noDecoration : 'no-underline'
  const mAntialiased = _.has(modifyClassNames, 'position.modifier.antialiased') ? modifyClassNames.position.modifier.antialiased : 'antialiased'
  const mSubpixelAntialiased = _.has(modifyClassNames, 'position.modifier.SubpixelAntialiased') ? modifyClassNames.position.modifier.SubpixelAntialiased : 'subpixel-antialiased'

  return defineClasses({
    [`${prefix}${mItalic}`]: { 'font-style': 'italic' },
    [`${prefix}${mNormal}`]: { 'font-style': 'normal' },

    [`${prefix}${mUppercase}`]: { 'text-transform': 'uppercase' },
    [`${prefix}${mLowercase}`]: { 'text-transform': 'lowercase' },
    [`${prefix}${mCapitalize}`]: { 'text-transform': 'capitalize' },
    [`${prefix}${mNoTransform}`]: { 'text-transform': 'none' },

    [`${prefix}${mUnderline}`]: { 'text-decoration': 'underline' },
    [`${prefix}${mLineThrough}`]: { 'text-decoration': 'line-through' },
    [`${prefix}${mNoDecoration}`]: { 'text-decoration': 'none' },

    [`${prefix}${mAntialiased}`]: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    [`${prefix}${mSubpixelAntialiased}`]: {
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    },
  })
}
