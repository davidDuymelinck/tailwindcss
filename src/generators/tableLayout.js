import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'tableLayout.prefix') ? modifyClassNames.tableLayout.prefix : 'table-'
  const layouts = ['auto', 'fixed']

  return _.map(layouts, (value) => {
    let modifier = _.has(modifyClassNames, `tableLayout.modifier.${value}`) ? modifyClassNames.tableLayout.modifier[value] : value

    return defineClass(`${prefix}${modifier}`, {
      'table-layout': value,
    })
  })
}
