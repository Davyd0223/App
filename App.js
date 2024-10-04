import {StyleSheet, View, TextInput, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Plan from './components/Plan';
import Audiopage from './components/Audiopage';


export default function App() {


  return (

    <View style={styles.screen}>
        <View style={styles.search}>
          {/* <View style={styles.input}>
            <Image style={styles.icon} source={require('./assets/home_page/ser.png')}/>

            <TextInput style={styles.ti} placeholder="Поиск" onTextInput={'ghbtdn'}/>

          </View> */}
          {/* <TouchableOpacity style={styles.setting}>
            <Image source={require('./assets/home_page/Hicon 3/Outline/Filter 5.png')}/>
          </TouchableOpacity> */}
        </View>
        {/* <Plan/> */}
        <Audiopage/>
        <View style={styles.buttonicon}>
          <TouchableOpacity>
            <Image source={require('./assets/home_page/Active 2/Inactive=Off.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/home_page/Active 4/Inactive=Off.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/home_page/Active 6/Inactive=Off.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/home_page/Active 7/Inactive=On.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/home_page/Active 10/Inactive=Off.png')}/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 16,
    width: '100%',
    paddingTop: 54,
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    columnGap: 10,
    fontSize: 17,
    flex: 1,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F3F3F3',
  },
  ti: {
    flexDirection: 'row',
    alignItems: 'center'
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
    width: '100%',
    height: 76,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
});

