import * as React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
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
      },{
        key: 5,
        name: 'EStyleSheet'
      },{
        key: 6,
        name: 'REM'
      },{
        key: 7,
        name: 'Percents'
      },{
        key: 8,
        name: 'Scaling'
      },{
        key: 9,
        name: 'PseudoClass'
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