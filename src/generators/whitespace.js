import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'whitespace.prefix') ? modifyClassNames.whitespace.prefix : 'whitespace-'
  const twPrefix = _.has(modifyClassNames, 'whitespace.prefix') ? modifyClassNames.whitespace.prefix : ''
  const mNormal = _.has(modifyClassNames, 'visibility.modifier.normal') ? modifyClassNames.visibility.modifier.normal : 'normal'
  const mNoWrap = _.has(modifyClassNames, 'visibility.modifier.nowrap') ? modifyClassNames.visibility.modifier.nowrap : 'no-wrap'
  const mPre = _.has(modifyClassNames, 'visibility.modifier.pre') ? modifyClassNames.visibility.modifier.pre : 'pre'
  const mPreLine = _.has(modifyClassNames, 'visibility.modifier.preLine') ? modifyClassNames.visibility.modifier.preLine : 'pre-line'
  const mPreWrap = _.has(modifyClassNames, 'visibility.modifier.preWrap') ? modifyClassNames.visibility.modifier.preWrap : 'pre-wrap'
  const mBreakWord = _.has(modifyClassNames, 'visibility.modifier.breakWord') ? modifyClassNames.visibility.modifier.breakWord : 'break-words'
  const mNormalWord = _.has(modifyClassNames, 'visibility.modifier.normalWord') ? modifyClassNames.visibility.modifier.normalWord : 'break-normal'
  const mTruncate = _.has(modifyClassNames, 'visibility.modifier.truncate') ? modifyClassNames.visibility.modifier.truncate : 'truncate'

  return defineClasses({
    [`${prefix}${mNormal}`]: { 'white-space': 'normal' },
    [`${prefix}${mNoWrap}`]: { 'white-space': 'nowrap' },
    [`${prefix}${mPre}`]: { 'white-space': 'pre' },
    [`${prefix}${mPreLine}`]: { 'white-space': 'pre-line' },
    [`${prefix}${mPreWrap}`]: { 'white-space': 'pre-wrap' },

    [`${twPrefix}${mBreakWord}`]: { 'word-wrap': 'break-word' },
    [`${twPrefix}${mNormalWord}`]: { 'word-wrap': 'normal' },

    [`${twPrefix}${mTruncate}`]: {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
  })
}
