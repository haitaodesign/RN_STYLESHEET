
import { Platform, PixelRatio } from 'react-native';
/**
 * 工具类
 * 
 * 
*/

export const isIOS = Platform.OS === 'ios'

export const isAndroid = Platform.OS === 'android'

export const borderWidth = 1 / PixelRatio.get()  
