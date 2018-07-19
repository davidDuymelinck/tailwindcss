import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'outline.prefix') ? modifyClassNames.outline.prefix : 'outline-'
  const mNone = _.has(modifyClassNames, 'outline.modifier.none') ? modifyClassNames.outline.modifier.none : 'none'

  return defineClasses({
    [`${prefix}${mNone}`]: { outline: '0' },
  })
}
