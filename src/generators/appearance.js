import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'appearance.prefix') ? modifyClassNames.appearance.prefix : 'appearance-'
  const mNone = _.has(modifyClassNames, 'appearance.modifier.none') ? modifyClassNames.appearance.modifier.none : 'none'

  return defineClasses({
    [`${prefix}${mNone}`]: { appearance: 'none' },
  })
}
