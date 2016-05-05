'use strict'

import React, {
  Component,
  PropTypes,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class Button extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    disabledActiveOpacity: PropTypes.number,
    disabledStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    disabledTextStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    textStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
  }

  defaultProps = {
    activeOpacity: 0.6,
    disabledActiveOpacity: 1,
  }

  render() {

    let {
      children,
      disabled,

      style,
      textStyle,
      activeOpacity,

      disabledStyle,
      disabledTextStyle,
      disabledActiveOpacity,
    } = this.props

    if (disabled) {
      if (disabledStyle) {
        style = disabledStyle
      }
      if (disabledTextStyle) {
        textStyle = disabledTextStyle
      }
      if (typeof disabledActiveOpacity === 'number') {
        activeOpacity = disabledActiveOpacity
      }
    }

    if (typeof children === 'string') {
      children = (
        <Text style={textStyle}>
          {children}
        </Text>
      )
    }
    else if (children.length > 1) {
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
