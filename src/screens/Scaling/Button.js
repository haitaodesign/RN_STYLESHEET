import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
export default class Button extends React.Component {
  static propTypes = {
    scale: PropTypes.number
  };
  render() {
    let style = getStyle(this.props.scale)
    return (
      <View style={style.button}>
      </View>
    );
  }
}

let getStyle = function (scale = 1) {
  return EStyleSheet.create({
    $scale: scale,
    button: {
      width: 100,
      height: 60,
      marginLeft: 10,
      backgroundColor: 'blue',
    }
  });
}