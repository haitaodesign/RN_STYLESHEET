import * as React from 'react'
import { View, Text, Button } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
export default class PseudoClass extends React.Component {
  constructor (props) {
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
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{marginTop:20}}>
        <Text style={styles.text}>PseudoClass</Text>
        {this.state.list.map((item, index) => {
          return (
            <View key={index} style={EStyleSheet.child(styles, 'row', index, this.state.list.length)}>
              <Text>item.name</Text>
            </View>
          );
        })}
        <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}