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
  size = Math.round(size * scale)
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
## 提供的扩展功能
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
媒体查询功能可以使不同屏幕、平台和屏幕方向有不同的样式，支持@media作为属性前缀
允许设置的值：
- 媒体类型：iso|android
- width,min-width,max-width
- height,min-height,max-height
- orientation(landscape|portrait)
- aspect-ratio

三种使用方式
- global level
- sheet level
- style level

```
// global level
EStyleSheet.build({
  '@media ios': {
    $fontSize: 12,
  },
  '@media android': {
    $fontSize: 16,
  },
});

// sheet level
const styles = EStyleSheet.create({
  column: {
    width: '80%',
  },
  '@media (min-width: 350) and (max-width: 500)': {
    column: {
      width: '90%',
    }
  }
});

// style level
const styles = EStyleSheet.create({
  header: {
    '@media ios': {
      color: 'green',
    },
    '@media android': {
      color: 'blue',
    },
  }
});

```

### 数值操作
任何的值都可以包含+，-，*，/数值操作，操作数可以是数值，变量，和百分比。看一下渲染圆的例子：

```
const styles = EStyleSheet.create({
  $size: 20,
  circle: {
    width: '$size',
    height: '$size',
    borderRadius: '0.5 * $size'
  }
});
```
> 这种实现方式语法简单，代码量少，易维护

### REM单位
与CSS3的rem unit 允许定义相对于根元素的一个整数值，rem默认值是16。依赖屏幕的尺寸或者其他条件可以很容易的去扩展应用。

```
// component
const styles = EStyleSheet.create({
  text: {
    fontSize: '1.5rem',
    marginHorizontal: '2rem'
  }
});
// app entry
let {height, width} = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? 18 : 16
});
```

### 百分比
百分比支持是从React Native 0.43开始的。EStyleSheet通过扩展原有的StyleSheet可以使用百分比计算。百分比算通过应用的屏幕去计算。

```
const styles = EStyleSheet.create({
  column: {
    width: '100% - 20'
  }
});
```
在嵌套的组件中使用百分比


```
render() {
  return (
    <View style={styles.column}>
      <View style={styles.subColumnLeft}></View>
      <View style={styles.subColumnRight}></View>
    </View>
  );
}

...

const styles = EStyleSheet.create({
  $columnWidth: '80%',
  column: {
    width: '$columnWidth',
    flexDirection: 'row'
  },
  subColumnLeft: {
    width: '0.3 * $columnWidth'
  },
  subColumnRight: {
    width: '0.7 * $columnWidth'
  }
});
```
> 在一些布局场景中很有用
### 缩放
通过设置一个特殊变量去缩放（改变组件的width,height,以及margin）组件


```
const styles = EStyleSheet.create({
  $scale: 1.5,
  button: {
    width: 100,
    height: 20,
    marginLeft: 10
  }
});
```

可以通过传递一个属性去控制组件的尺寸

```
class Button extends React.Component {
  static propTypes = {
    scale: React.PropTypes.number
  };
  render() {
    let style = getStyle(this.props.scale)
    return (
      <View style={style.button}>
      </View>
    );
  }
}

let getStyle = function (scale = 1) {
  return EStyleSheet.create({
    $scale: scale,
    button: {
      width: 100,
      height: 20,
      marginLeft: 10
    }
  });
}
```

> 应用场景：Button组件的尺寸

### 划线样式（翻译的不够准确）
通过react-native stylesheets计算的数值以及原始值不可用的，但是有时候我们需要使用原始的值去做一些事情，比如，保持<Icon>与<Text>组件的大小以及颜色，下划线样式可以很方便的使得text与icon的大小以及颜色保持一致。

```
const styles = EStyleSheet.create({
  text: {
    fontSize: '1rem',
    color: 'gray'
  }
});
```
在运行时，原生的样式表创建的样式结构如下：


```
styles = {
  text: 0
}
```
但是扩展样式表保存计算值通过_text属性：

```
styles = {
  text: 0,
  _text: {
    fontSize: 16,
    color: 'gray'
  }
}
```
使用_text去渲染icon样式

### 伪类
EStyleSheet支持4中类型：
- :first-child
- :nth-child-even
- :nth-child-odd
- :last-child

EStyleSheet.child()方法可以通过索引去得到一个样式：EStyleSheet.child(stylesObj, styleName, index, count)


```
const styles = EStyleSheet.create({
  row: {
    fontSize: '1.5rem',
    borderTopWidth: 1
  },
  'row:nth-child-even': {
    backgroundColor: 'gray' // make stripped
  },
  'row:last-child': {
    borderBottomWidth: 1 // render bottom edge for last row
  }
});
...
render() {
  return (
    <View>
      {items.map((item, index) => {
        return (
          <View key={index} style={EStyleSheet.child(styles, 'row', index, items.length)}></View>
        );
      })}
    </View>
  );
}

```

### 值作为函数
可以将样式的值作为一个函数在EStyleSheet构建。
有一个很好的例子就是开发中我们需要一个颜色变暗或者变亮，这需要color的库去做支撑，这个方法在自定义页面跳转交互效果的时候非常有用。例子如下：

```
import Color from 'color';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $buttonColor: 'green'
});
...
const styles = EStyleSheet.create({
  button: {
    backgroundColor: () => Color(EStyleSheet.value('$buttonColor')).darken(0.1).hexString()
  }
});
...
render() {
  return (
    <TouchableHighlight style={styles.button}>
      ...
    </TouchableHighlight>
  );
}
```

### 缓存
编写的样式依赖于动态属性或者通过动态属性去编写可复用的组建时，样式表的创建在每次渲染的时候都会被调用。
一般我们会像下面编写组件：

```
class Button extends React.Component {
  static propTypes = {
    scale: React.PropTypes.number
  };
  render() {
    let style = getStyle(this.props.scale)
    return (
      <View style={style.button}>
      </View>
    );
  }
}

let getStyle = function (scale = 1) {
  return EStyleSheet.create({
    $scale: scale,
    button: {
      width: 100,
      height: 20,
      marginLeft: 10
    }
  });
}
```

为了避免重复渲染，我们可以使用loash.memoize函数实现缓存。

```
import memoize from 'lodash.memoize';

let getStyle = memoize(function (scale = 1) {
  return EStyleSheet.create({
    $scale: scale,
    button: {
      width: 100,
      height: 20,
      marginLeft: 10
    }
  });
});
```
改造成如上写法之后，如果此样式被使用了3次，后面两次都是从缓存直接取出来的。
### Outline for debug
给所有使用EStyleSheet的组件设置一个全局的外边框变量($outline)，由于RN组件是没有默认样式，所以对于没有使用EStyleSheet的组件是不会生效的。

```
EStyleSheet.build({$outline: 1});
```
也可以给一个特定的组件设置局部的外边框变量

```
const styles = EStyleSheet.create({
  $outline: 1,
  column: {
    width: '80%',
    flexDirection: 'row'
  },
  ...
});
```
### 模块热加载

EStyleSheet是支持模块热加载的，允许我们去实时更新样式却不会失去应用的状态。
1. 支持组件更新
2. 通过改变全局变量以及主题，通过HMR去强制重新计算样式。
3. 
```
// app.js
EStyleSheet.build({
  $fontColor: 'black'
});

...

module.hot.accept(() => {
  EStyleSheet.clearCache();
  EStyleSheet.build(); // force style re-calculation
});
```
# EStyleSheet API

### .build()
所有样式变的全局样式，必须放在入口文件
### .create()
构建组件的局部样式扩展，继承全局样式
### value()
可以通过此函数获取扩展样式具体的值，比如获取某个变量的值。
> 正确的使用方式是在函数内使用

```
// 正确！
const styles = EStyleSheet.create({
   color: () => EStyleSheet.value('$primaryFontColor'),
});

// 错误！
const styles = EStyleSheet.create({
   color: EStyleSheet.value('$primaryFontColor'),
});
```

> 这种方式的使用场景暂时没有用到，可能会有bug，请大家注意。

### .child()
返回伪类的样式，与伪类结合使用

```
/**
 * Returns styles with pseudo classes :first-child, :nth-child-even, :last-child according to index and count
 *
 * @param {Object} stylesheet
 * @param {String} styleName
 * @param {Number} index index of item for style
 * @param {Number} count total count of items
 * @returns {Object|Array} styles
 */
 child (styles, styleName, index, count) {...}
```

### .subscribe()
在应用初始化的时候预渲染组件，此方法的应用场景待定
```
const styles = EStyleSheet.create({
  button: {
    width: '80%',
  }
});

// this will NOT work as styles.button is not calculated yet
let Button = <View style={styles.button}></View>;

// but this will work
let Button;
EStyleSheet.subscribe('build', () => {
  Button = <View style={styles.button}></View>;
});

```