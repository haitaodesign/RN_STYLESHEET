import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  // $columnWidth: '80%',
   $columnWidth: '100%',
  column: {
    width: '$columnWidth',
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  subColumnLeft: {
    width: '0.3 * $columnWidth',
    backgroundColor: 'red',
  },
  subColumnRight: {
    width: '0.7 * $columnWidth',
    backgroundColor: 'blue',
  }
});

export default styles;