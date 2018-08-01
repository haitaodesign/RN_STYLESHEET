import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles';
export default class EStyleSheet extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.text}>EStyleSheet</Text>
        <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}