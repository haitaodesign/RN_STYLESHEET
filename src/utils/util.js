
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

/**
 * 获取设备像素密度以及字体缩放比
 */
export let pixelRatio = PixelRatio.get()
export const fontScale = PixelRatio.getFontScale()

/**
 * UI设计基准，以iphone为准
 * width:750px
 * height:1334px
 * px转dp
 */

 // 像素密度
const DEFAULT_DENSITY = 2
const defaultWidth = 375
const defaultHeight = 667

const w2 = defaultWidth / DEFAULT_DENSITY
const h2 = defaultHeight / DEFAULT_DENSITY

/**
 * 屏幕适配（第一种方案）
 * @param {设计稿尺寸（px）} size 
 */
export function Px(size) {
  return size / defaultWidth * screenWidth
}

/**
 * 屏幕适配（第二种方案）
 * @param {设计稿尺寸（px）} size 
 */
export function Px2(size) {
  let scaleWidth = screenWidth / w2
  let scaleHeight = screenHeight / h2
  let scale = Math.min(scaleWidth, scaleHeight)
  size = Math.round((size * scale + 0.5))
  return size / DEFAULT_DENSITY
}

/**
 * 字体适配（第一种方案）
 * 第二种方案同上，是否加fontScale有待考证,不加直接用Px方法即可
 * @param {字体大小（px）} size 
 */
export function PxText(size) {
  return size / defaultWidth * screenWidth * fontScale
}





