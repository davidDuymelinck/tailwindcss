import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ fonts, modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'fonts.prefix') ? modifyClassNames.fonts.prefix : 'font-'

  return _.map(fonts, (families, font) => {
    if (_.isArray(families)) {
      families = families.join(', ')
    }

    return defineClass(`${prefix}${font}`, {
      'font-family': `${families}`,
    })
  })
}
