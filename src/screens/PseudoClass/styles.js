import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  row: {
    fontSize: '1.5rem',
    borderTopWidth: 1
  },
  'row:nth-child-even': {
    backgroundColor: 'gray' // make stripped
  },
  'row:last-child': {
    borderBottomWidth: 1, // render bottom edge for last row
    backgroundColor: 'red'
  }
});

export default styles;