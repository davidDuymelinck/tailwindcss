import defineClass from "../util/defineClass";
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'backgroundAttachment.prefix') ? modifyClassNames.backgroundAttachment.prefix : 'bg-'
  const values = ['fixed', 'local', 'scroll']

  return _.map(values, (value) => {
    let modifier = _.has(modifyClassNames, `backgroundAttachment.modifier.${value}`) ? modifyClassNames.backgroundAttachment.modifier[value] : value;

    return defineClass(`${prefix}${modifier}`, {
      'background-attachment': value,
    })
  })
}
