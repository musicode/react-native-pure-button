'use strict'

import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

const styleType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.object,
  PropTypes.array,
])

let textPropTypes = Text.propTypes
let touchablePropTypes = TouchableOpacity.propTypes

export default class Button extends Component {

  static propTypes = {
    ...touchablePropTypes,
    disabledActiveOpacity: touchablePropTypes.activeOpacity,
    disabledStyle: styleType,
    disabledTextStyle: styleType,
    textStyle: styleType,
    numberOfLines: textPropTypes.numberOfLines,
  }

  defaultProps = {
    numberOfLines: 1,
    activeOpacity: 0.6,
    disabledActiveOpacity: 1,
  }

  render() {

    let {
      children,
      disabled,
      numberOfLines,

      style,
      textStyle,
      activeOpacity,

      disabledStyle,
      disabledTextStyle,
      disabledActiveOpacity,
    } = this.props

    if (disabled) {
      if (disabledStyle != null) {
        style = disabledStyle
      }
      if (disabledTextStyle != null) {
        textStyle = disabledTextStyle
      }
      if (disabledActiveOpacity != null) {
        activeOpacity = disabledActiveOpacity
      }
    }

    if (typeof children === 'string') {
      children = (
        <Text
          style={textStyle}
          numberOfLines={numberOfLines}
        >
          {children}
        </Text>
      )
    }
    else if (children && children.length > 1) {
      children = (
        <View style={{flex: 1}}>
          {children}
        </View>
      )
    }

    return (
      <TouchableOpacity
        {...this.props}
        style={style}
        activeOpacity={activeOpacity}
      >
        {children}
      </TouchableOpacity>
    )
  }
}
