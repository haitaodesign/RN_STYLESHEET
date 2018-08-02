import * as React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles';
export default class Percents extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{marginTop:20}}>
        <View style={styles.column}>
          <View style={styles.subColumnLeft}>
            <Text>1</Text>
          </View>
          <View style={styles.subColumnRight}>
          <Text>2</Text>
          </View>
        </View>
        <View>
          <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}