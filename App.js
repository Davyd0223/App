import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Plan from './components/Plan';


export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.search}>
       <View style={styles.input}>
        <Image style={styles.icon} source={require('./assets/ser.png')}/>
        <TextInput onTextInput={'ghbtdn'}/>
       </View>
        <TouchableOpacity style={styles.setting}>
          <Image source={require('./assets/Hicon 3/Outline/Filter 5.png')}/>
        </TouchableOpacity>
      </View>
      <Plan/>
        <View style={styles.buttonicon}>
        <TouchableOpacity>
          <Image source={require('./assets/Active 2/Inactive=Off.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/Active 4/Inactive=Off.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/Active 6/Inactive=Off.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/Active 7/Inactive=On.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/Active 10/Inactive=Off.png')}/>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    justifyContent: "flex-end",
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 56,
    paddingLeft: 16,
  },
  input: {
    fontSize: 17,
    width: 287,
    height: 38,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#F3F3F3',
  },
  setting: {
    justifyContent: 'center',
    alignItems:'center',
    width: 44,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
  },
  buttonicon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: '#435861',
    width: 375,
    height: 76,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
});

