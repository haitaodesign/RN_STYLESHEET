import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles';
export default class REM extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.text}>REM</Text>
        <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}