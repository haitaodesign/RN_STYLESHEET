import EStyleSheet from 'react-native-extended-stylesheet';



const styles = EStyleSheet.create({
  // 局部变量定义
  $primaryColor: '#fff',
  text: {
    // 在组件中全局变量的使用
    // 另外一种内联样式使用全局变量
    color: '$textColor'
  }
});

export default styles;