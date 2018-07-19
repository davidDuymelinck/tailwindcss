import defineClass from "../util/defineClass";
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'borderStyle.prefix') ? modifyClassNames.borderStyle.prefix : 'border-'
  const values = ['solid', 'dashed', 'dotted', 'none']

  return _.map(values, (value) => {
    let modifier = _.has(modifyClassNames, `borderStyle.modifier.${value}`) ? modifyClassNames.borderStyle.modifier[value] : value;

    return defineClass(`${prefix}${modifier}`, {
      'border-style': value,
    })
  })
}
