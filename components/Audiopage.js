import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function Audiopage() {
    return(
        <View style={styles.screen}>
            <View>
                <Image source={require('../assets/Audiopage/foto/bible.png')}/>
            </View>
            <View>
                <Text slyle={styles.text}>
                  Михея 1:1
                  1.Слово Господне, которое было 
                  к Михею Морасфитину во дни
                  Иоафама, Ахаза и Езекии, царей 
                  Иудейских, и которое открыто ему 
                  о Самарии и Иерусалиме. 
                </Text>
            </View>
            <View><Text>-----------------------------------------------------------------------------</Text></View>
            <View slyle={styles.player}>
                <TouchableOpacity>
                    <Image source={require('../assets/Audiopage/musicnote/musicnote.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Audiopage/backward/backward.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Audiopage/pause/pause.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Audiopage/forward/forward.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Audiopage/menu/menu.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    rowGap: 'activeIndex',
  },
  text: {
    width: 20,
  },
  player: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      width: '100%',
  }
})
