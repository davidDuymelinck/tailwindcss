import defineClasses from '../util/defineClasses'
import _ from 'lodash'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'lists.prefix') ? modifyClassNames.lists.prefix : 'list-'
  const mReset = _.has(modifyClassNames, 'lists.modifier.reset') ? modifyClassNames.lists.modifier.reset : 'reset'

  return defineClasses({
    [`${prefix}${mReset}`]: {
      'list-style': 'none',
      padding: '0',
    },
  })
}
