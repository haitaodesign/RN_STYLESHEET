# 布局篇
##  FlexBox布局
基本使用方法以及注意事项之前文档已有说明，这里不再赘述。
## 图片适配
开发应用必不可少的会用到图标或者固定的图片展示，为了能够适配不同分辨率的屏幕，我们需要提供三种格式图片，RectNative会根据分辨率的不同而动态的加载不同尺寸的图片。图片尺寸如下：

```
└── images
    ├── icon.png
    ├── icon@2x.png
    └── icon@3x.png
```
引入图片的正确姿势

```
<Image source={require('./images/check.png')} />
```
> 提示：请使用标准分辨率的图片，不要使用==icon@2x.png== ，这样只会显示icon@2x.png的图片，不会达到自动适配的效果
```
<Image source={require('./images/check@2x.png')} /> 错误用法
```
## 设计稿适配
- ReactNative提供的屏幕方面的API
1. PixelRatio：提供了访问设备的像素密度的方法。

```
设备的像素密度：
const num = PixelRatio.get() // eg: iphone6 为2

字体的缩放比：
PixelRatio.getFontScale()

eg: 实现一个细线边框
const borderWidth = 1 / PixelRatio.get()  
```

2. Dimensions：用于获取设备屏幕的宽高。

```
const { width, height } = Dimensions.get('window')
```
- 基于ReactNative提供的API进行设计稿适配
1. UI设计稿基准（iPhone6）

```
//width: 750px, height: 1334px //以此尺寸进行等比缩放
// 默认基准屏幕
const DEFAULT_DENSITY = 2 // 像素密度
const defaultWidth = 375  // 宽
const defaultHeight = 667 // 高

const { width, height } = Dimensions.get('window')
export const screenWidth = width
export const screenHeight = height

const w2 = defaultWidth / DEFAULT_DENSITY
const h2 = defaultHeight / DEFAULT_DENSITY

/**
 * 适配方法（第一种方案）
 * @param {设计稿尺寸（px）} size 
 */
export function Px2(size) {
  let scaleWidth = screenWidth / w2
  let scaleHeight = screenHeight / h2
  let scale = Math.min(scaleWidth, scaleHeight)
  size = Math.round((size * scale))
  return size / DEFAULT_DENSITY
}

/**
 * 屏幕适配（第二种方案）
 * @param {设计稿尺寸（px）} size 
 */
export function Px(size) {
  return size / defaultWidth * screenWidth
}
```

# React Native Extended StyleSheet（样式扩展库）

> 由于原有的StyleSheet API提供的能力很弱，缺乏一些高级特性，比如媒体查询、百分比布局等，所以需要一个扩展样式库去支撑比较高级的开发需求，提高开发效率。

## 源码以及demo地址
github地址：https://github.com/vitalets/react-native-extended-stylesheet

demo地址：https://github.com/haitaodesign/RN_STYLESHEET

## 如何使用？


```
npm i react-native-extended-stylesheet --save
// 推荐使用yarn
```
基本的编写方式在文档里面写的很清楚，这里重点强调一点：

```
/* app.js */
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});
```
在app.js(或者其他名字)入口文件里面必须要引入EStyleSheet.build()，即使不需要全局变量
## 提高的扩展功能
### 全局变量
在入口文件里面通过EStyleSheet.build()构建并在所有的样式表中使用，注意变量定义以$开头

```
// app.js程序入口
EStyleSheet.build({
  $textColor: '#0275d8'
});
// 在组件样式中使用
const styles = EStyleSheet.create({
  text: {
    color: '$textColor'
  }
});
// 作为内联样式或者组件属性使用
<View style = {{
  backgroundColor: EStyleSheet.value('$textColor')
}}>
...
</View>
```
> 应用场景：全局的主题颜色定义

### 局部变量
局部变量优先于全局变量，可以覆盖全局变量，局部变量可以直接通过**styles.$textColor**获取数值。

```
const styles = EStyleSheet.create({
  $textColor: '#0275d8',
  text: {
    color: '$textColor'
  },
  icon: {
    color: '$textColor'
  },
});
```
> 应用场景：组件内多次使用的样式，比如颜色，宽高

### 主题
改变应用主题的步骤：
1. re-build 重新构建全局样式
2. re-render 使用重新构建好的样式渲染组件树

```
EStyleSheet.build({
  $theme: 'light',  // $theme变量是必须的，为了能够正确的计算缓存样式
  $bgColor: 'white',
});
```
重新渲染整个组件树在React中是一个很大的开销，应当尽量避免。
有一种选择就是把整个应用使用一个组件包裹起来，在主题改变的时候重新渲染。

```
toggleTheme() {
    const theme = EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
    EStyleSheet.build(theme);
    this.setState({render: false}, () => this.setState({render: true}));
  }
  render() {
    return this.state.render ? <App/> : null;
 }
```
> 这种实现主题切换的方式不太优雅，需要进一步讨论。


### 媒体查询

### 数值操作
### REM单位
### 百分比
### 缩放
### 划线样式（翻译的不够准确）
### 伪类
### 值作为函数
### 缓存
### Outline for debug
### 模块热加载