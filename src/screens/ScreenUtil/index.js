import * as React from 'react';
import { View, Text, Dimensions , Button, PixelRatio } from 'react-native';
import { styles } from '../Home';

import { Px, Px2, PxText } from '../../utils/util'

export default class DimensionsScreen extends React.Component {
  onPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    const {width,height} = Dimensions.get('window')
    return (
      <View style={styles.container}>
       <View>
         <Text>屏幕适配工具类:</Text>
         <Text>设备的像素密度:{PixelRatio.get()}</Text>
         <Text>字体大小缩放比:{PixelRatio.getFontScale()}</Text>
         {/* px转dp与像素密度有关 */}
         <Text>1px转dp:{PixelRatio.getPixelSizeForLayoutSize(1)/PixelRatio.get()}</Text>
         <Text>1dp转px:{PixelRatio.roundToNearestPixel(1)}</Text>
       </View>
       <View>
         <Text>
           假设有一个宽100px ,高50px的元素
         </Text>
         <Text>第一种方案：Px</Text>
         <View style={{width:Px(100),height:Px(50),backgroundColor:"red"}}>
         </View>
         <Text>字体大小</Text>
         <Text style={{fontSize:Px(24)}}>react-native</Text>
         <Text>第二种方案：Px2</Text>
         <View style={{width:Px(100),height:Px(50),backgroundColor:"blue"}}>
         </View>
         <Text>字体大小,增加字体缩放比PxText</Text>
         <Text style={{fontSize:PxText(24)}}>react-native</Text>
       </View>
       <View>
         <Button title="返回" onPress={this.onPress}></Button>
       </View>
      </View>
    )
  }
}