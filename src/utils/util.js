
import { Platform, PixelRatio, Dimensions } from 'react-native';
/**
 * 工具类
 * 
 * 
*/

/**
 * 系统判断
 */
export const isIOS = Platform.OS === 'ios'

export const isAndroid = Platform.OS === 'android'

/**
 * 细线边框
 */ 
export const borderWidth = 1 / PixelRatio.get()  

/**
 * 获取屏幕宽高
 */
const { width, height } = Dimensions.get('window')
export const screenWidth = width
export const screenHeight = height

