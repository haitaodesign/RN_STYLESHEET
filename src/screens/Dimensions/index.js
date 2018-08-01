import * as React from 'react';
import { View, Text, Dimensions , Button } from 'react-native';
import { styles } from '../Home';

export default class DimensionsScreen extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    const {width,height} = Dimensions.get('window')
    return (
      <View style={styles.container}>
       <View>
         <Text>获取屏幕宽高:</Text>
         <Text>width:{width}</Text>
         <Text>height:{height}</Text>
       </View>
       <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}