import _ from 'lodash'
import postcss from 'postcss'
import defineClasses from '../util/defineClasses'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'float.prefix') ? modifyClassNames.float.prefix : 'float-'
  const mRight = _.has(modifyClassNames, 'float.modifier.right') ? modifyClassNames.float.modifier.right : 'right'
  const mLeft = _.has(modifyClassNames, 'float.modifier.left') ? modifyClassNames.float.modifier.left : 'left'
  const mNone = _.has(modifyClassNames, 'float.modifier.none') ? modifyClassNames.float.modifier.none : 'none'

  return _.concat(
    defineClasses({
      [`${prefix}${mRight}`]: { float: 'right' },
      [`${prefix}${mLeft}`]: { float: 'left' },
      [`${prefix}${mNone}`]: { float: 'none' },
    }),
    postcss.parse(`
      .clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
    `).nodes
  )
}
