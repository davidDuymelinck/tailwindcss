import defineClass from "../util/defineClass";
import _ from "lodash";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'backgroundPosition.prefix') ? modifyClassNames.backgroundPosition.prefix : 'bg-'
  let backgroundPositions = {
    'bottom': 'bottom',
    'center': 'center',
    'left': 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    'right': 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    'top': 'top'
  }

  return _.map(backgroundPositions, (position, className) => {
    let modifier = _.has(modifyClassNames, `backgroundPosition.modifier.${className}`) ? modifyClassNames.backgroundPosition.modifier[className] : className

    return defineClass(`${prefix}${modifier}`, {
      'background-position': position,
    })
  })
}
