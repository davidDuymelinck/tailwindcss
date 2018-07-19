import defineClass from "../util/defineClass";
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'display.prefix') ? modifyClassNames.display.prefix : ''
  const displays = {
    block: 'block',
    inlineBlock: 'inline-block',
    inline: 'inline',
    table: 'table',
    tableRow: 'table-row',
    tableCell: 'table-cell',
    hidden: 'hidden',
  }

  return _.map(displays, (value, className) => {
    let modifier = _.has(modifyClassNames, `borderStyle.modifier.${className}`) ? modifyClassNames.borderStyle.modifier[className] : value;

    return defineClass(`${prefix}${modifier}`, {
      display: value,
    })
  })
}
