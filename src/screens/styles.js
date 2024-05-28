import { StyleSheet,} from 'react-native';
import Colors from '../common/Colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  tableHeading: {
    width: '80%',
    height: 30,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    width: '25%',
    backgroundColor: Colors.lightGreen,
    borderColor: 'green',
    borderWidth: 1,
  },
  titleTxt: {
    alignSelf: 'center',
    marginTop: 4,
    fontWeight: 'bold',
    color: Colors.black,
  },
  row:{
    flexDirection:'row',
    marginTop: 15,
  },
  input1:{
    color: Colors.black,
    borderWidth:1,
    marginTop: 10,
    borderWidth:1,
    borderRadius:10,
    width:'46%',
    marginHorizontal:12,
    fontSize:16,
    paddingLeft:20
  },
  btn:{
    marginTop:10,
    backgroundColor: 'purple',
    width:'46%',
    alignItems:'center',
    borderRadius:10,
  },
  txt1:{
    fontSize:16,
   marginTop:12,
   color:Colors.white,
  },
});
