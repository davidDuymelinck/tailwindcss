import defineClass from "../util/defineClass";
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'display.prefix') ? modifyClassNames.display.prefix : 'cursor-'
  const values = {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      move: 'move',
      notAllowed: 'not-allowed'
  }

  return _.map(values, (value, className) => {
    let modifier = _.has(modifyClassNames, `borderStyle.modifier.${className}`) ? modifyClassNames.borderStyle.modifier[className] : value;

    return defineClass(`${prefix}${modifier}`, {
      cursor: value,
    })
  })
}
