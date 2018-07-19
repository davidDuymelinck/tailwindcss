import defineClasses from '../util/defineClasses'
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'visibility.prefix') ? modifyClassNames.visibility.prefix : 'align-'
  const mVisible = _.has(modifyClassNames, 'visibility.modifier.visible') ? modifyClassNames.visibility.modifier.visible : 'visible'
  const mHidden = _.has(modifyClassNames, 'visibility.modifier.hidden') ? modifyClassNames.visibility.modifier.hidden : 'invisible'

  return defineClasses({
    [`${prefix}${mVisible}`]: { visibility: 'visible' },
    [`${prefix}${mHidden}`]: { visibility: 'hidden' },
  })
}
