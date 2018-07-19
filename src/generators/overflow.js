import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'overflow.prefix') ? modifyClassNames.overflow.prefix : 'overflow-'
  const webkitPrefix = _.has(modifyClassNames, 'overflow.webkitPrefix') ? modifyClassNames.overflow.webkitPrefix : 'scrolling-'
  const mAuto = _.has(modifyClassNames, 'overflow.modifier.auto') ? modifyClassNames.overflow.modifier.auto : 'auto'
  const mHidden = _.has(modifyClassNames, 'overflow.modifier.hidden') ? modifyClassNames.overflow.modifier.hidden : 'hidden'
  const mVisible = _.has(modifyClassNames, 'overflow.modifier.visible') ? modifyClassNames.overflow.modifier.visible : 'visible'
  const mScroll = _.has(modifyClassNames, 'overflow.modifier.scroll') ? modifyClassNames.overflow.modifier.scroll : 'scroll'
  const mHorizontalAuto = _.has(modifyClassNames, 'overflow.modifier.horizontalAuto') ? modifyClassNames.overflow.modifier.horizontalAuto : 'x-auto'
  const mVerticalAuto = _.has(modifyClassNames, 'overflow.modifier.verticalAuto') ? modifyClassNames.overflow.modifier.verticalAuto : 'y-auto'
  const mHorizontalHidden = _.has(modifyClassNames, 'overflow.modifier.horizontalHidden') ? modifyClassNames.overflow.modifier.horizontalHidden : 'x-hidden'
  const mVerticalHidden = _.has(modifyClassNames, 'overflow.modifier.verticalHidden') ? modifyClassNames.overflow.modifier.verticalHidden : 'y-hidden'
  const mHorizontalVisible = _.has(modifyClassNames, 'overflow.modifier.horizontalVisible') ? modifyClassNames.overflow.modifier.horizontalVisible : 'x-visible'
  const mVerticalVisible = _.has(modifyClassNames, 'overflow.modifier.verticalVisible') ? modifyClassNames.overflow.modifier.verticalVisible : 'y-visible'
  const mHorizontalScroll = _.has(modifyClassNames, 'overflow.modifier.horizontalScroll') ? modifyClassNames.overflow.modifier.horizontalScroll : 'x-scroll'
  const mVerticalScroll = _.has(modifyClassNames, 'overflow.modifier.verticalScroll') ? modifyClassNames.overflow.modifier.verticalScroll : 'y-scroll'
  const mScrollingTouch = _.has(modifyClassNames, 'overflow.modifier.scrollingTouch') ? modifyClassNames.overflow.modifier.scrollingTouch : 'touch'
  const mScrollingAuto = _.has(modifyClassNames, 'overflow.modifier.scrollingAuto') ? modifyClassNames.overflow.modifier.scrollingAuto : 'auto'

  return defineClasses({
    [`${prefix}${mAuto}`]: { overflow: 'auto' },
    [`${prefix}${mHidden}`]: { overflow: 'hidden' },
    [`${prefix}${mVisible}`]: { overflow: 'visible' },
    [`${prefix}${mScroll}`]: { overflow: 'scroll' },
    [`${prefix}${mHorizontalAuto}`]: { 'overflow-x': 'auto' },
    [`${prefix}${mVerticalAuto}`]: { 'overflow-y': 'auto' },
    [`${prefix}${mHorizontalHidden}`]: { 'overflow-x': 'hidden' },
    [`${prefix}${mVerticalHidden}`]: { 'overflow-y': 'hidden' },
    [`${prefix}${mHorizontalVisible}`]: { 'overflow-x': 'visible' },
    [`${prefix}${mVerticalVisible}`]: { 'overflow-y': 'visible' },
    [`${prefix}${mHorizontalScroll}`]: { 'overflow-x': 'scroll' },
    [`${prefix}${mVerticalScroll}`]: { 'overflow-y': 'scroll' },
    [`${webkitPrefix}${mScrollingTouch}`]: { '-webkit-overflow-scrolling': 'touch' },
    [`${webkitPrefix}${mScrollingAuto}`]: { '-webkit-overflow-scrolling': 'auto' },
  })
}
