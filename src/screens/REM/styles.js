import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  // default 1rem = 16 ,暂时没有找到合适的适用场景
  // 自定义全局$rem的默认值，可以根据屏幕的宽度判断
  text: {
    fontSize: '1.5rem'
  }
});

export default styles;