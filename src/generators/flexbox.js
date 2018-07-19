import defineClasses from '../util/defineClasses'
import _ from "lodash";
import defineClass from "../util/defineClass";

export default function({ modifyClassNames }) {
  const prefix = _.has(modifyClassNames, 'flexbox.prefix') ? modifyClassNames.flexbox.prefix : ''
  const styles = {
    flex: {
      class: 'flex',
      style: { display: 'flex' },
    },
    inlineFlex: {
      class: 'inline-flex',
      style: { display: 'inline-flex'},
    },
    flexRow: {
      class: 'flex-row',
      style: {'flex-direction': 'row'},
    },
    flexRowReverse: {
      class: 'flex-row-reverse',
      style: {'flex-direction': 'row-reverse'},
    },
    flexCol: {
      class: 'flex-col',
      style: {'flex-direction': 'column'},
    },
    flexColReverse: {
      class: 'flex-col-reverse',
      style: {'flex-direction': 'column-reverse'},
    },
    flexWrap: {
      class: 'flex-wrap',
      style: {'flex-wrap': 'wrap'},
    },
    flexWrapReverse: {
      class: 'flex-wrap-reverse',
      style: {'flex-wrap': 'wrap-reverse'},
    },
    flexNoWrap: {
      class: 'flex-no-wrap',
      style: {'flex-wrap': 'nowrap'},
    },
    itemsStart: {
      class: 'items-start',
      style: {'align-items': 'flex-start'},
    },
    itemsEnd: {
      class: 'items-end',
      style: {'align-items': 'flex-end'},
    },
    itemsCenter: {
      class: 'items-center',
      style: {'align-items': 'center'},
    },
    itemsBaseline: {
      class: 'items-baseline',
      style: {'align-items': 'baseline'},
    },
    itemsStretch: {
      class: 'items-stretch',
      style: {'align-items': 'stretch'},
    },
    selfAuto: {
      class: 'self-auto',
      style: {'align-self': 'auto'},
    },
    selfStart: {
      class: 'self-start',
      style: {'align-self': 'flex-start'},
    },
    selfEnd: {
      class: 'self-end',
      style: {'align-self': 'flex-end'},
    },
    selfCenter: {
      class: 'self-center',
      style: {'align-self': 'center'},
    },
    selfStretch: {
      class: 'self-stretch',
      style: {'align-self': 'stretch'},
    },
    justifyStart: {
      class: 'justify-start',
      style: {'justify-content': 'flex-start'},
    },
    justifyEnd: {
      class: 'justify-end',
      style: {'justify-content': 'flex-end'},
    },
    justifyCenter: {
      class: 'justify-center',
      style: {'justify-content': 'center'},
    },
    justifyBetween: {
      class: 'justify-between',
      style: {'justify-content': 'space-between'},
    },
    justifyAround: {
      class: 'justify-around',
      style: {'justify-content': 'space-around'},
    },
    contentCenter: {
      class: 'content-center',
      style: {'align-content': 'center'},
    },
    contentStart: {
      class: 'content-start',
      style: {'align-content': 'flex-start'},
    },
    contentEnd: {
      class: 'content-end',
      style: {'align-content': 'flex-end'},
    },
    contentBetween: {
      class: 'content-between',
      style: {'align-content': 'space-between'},
    },
    contentAround: {
      class: 'content-around',
      style: {'align-content': 'space-around'},
    },
    flex1: {
      class: 'flex-1',
      style: {flex: '1'},
    },
    flexAuto: {
      class: 'flex-auto',
      style: {flex: 'auto'},
    },
    flexInitial: {
      class: 'flex-initial',
      style: {flex: 'initial'},
    },
    flexNone: {
      class: 'flex-none',
      style: {flex: 'none'},
    },
    flexGrow: {
      class: 'flex-grow',
      style: {'flex-grow': '1'},
    },
    flexShrink: {
      class: 'flex-shrink',
      style: {'flex-shrink': '1'},
    },
    flexNoGrow: {
      class: 'flex-no-grow',
      style: {'flex-grow': '0'},
    },
    flexNoShrink: {
      class: 'flex-no-shrink',
      style: {'flex-shrink': '0'},
    },
  }

  return _.map(styles, (style, className) => {
    let modifier = _.has(modifyClassNames, `borderStyle.flexbox.${className}`) ? modifyClassNames.borderStyle.flexbox[className] : style.class;

    return defineClass(`${prefix}${modifier}`, style.style)
  })
}
