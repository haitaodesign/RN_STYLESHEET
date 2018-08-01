import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:[{
        key: 1,
        name: 'StyleSheet'
      },{
        key: 2,
        name: 'Platform'
      },{
        key: 3,
        name: 'Dimensions'
      },{
        key: 4,
        name: 'ScreenUtil'
      }]
    }
  }
  onPress = (item) => {
    this.props.navigation.navigate(item.name)
  }
  render () {
    return (
      <View style={styles.container}>
      {
        this.state.list.map(item => {
          return (
            <TouchableOpacity onPress={()=>this.onPress(item)} key={item.key}>
            <View>
                <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
          )
        })
      }
      </View>
    )
  }
}