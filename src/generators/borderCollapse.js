import defineClasses from '../util/defineClasses'
import _ from "lodash";
import defineClass from "../util/defineClass";

export default function({ modifyClassNames }) {
  const prefix = _.has( modifyClassNames, 'borderCollapse.prefix') ? modifyClassNames.borderCollapse.prefix : 'border-'
  const values = ['collapse', 'separate']

  return _.map(values, (value) => {
    let modifier = _.has(modifyClassNames, `borderCollapse.modifier.${value}`) ? modifyClassNames.borderCollapse.modifier[value] : value;

    return defineClass(`${prefix}${modifier}`, {
      'border-collapse': value,
    })
  })
}
