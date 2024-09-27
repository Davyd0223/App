import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function Plan() {
    return(
        <View style={styles.screen}>
                    <View style={{justifyContent: 'space-around'}}>
                            <Text style={{fontSize: 19}}> План чтения </Text>
                        <View style={styles.switch}>
                            <TouchableOpacity style={styles.switchActive}> Всемирный план </TouchableOpacity>
                            <TouchableOpacity style={styles.switchPassive}> Мои планы </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                      <Text style={{fontSize: 13, color: '#898C93'}}> Воскресенье </Text>
                      <Text styles={{fontSize: 14}}> Июль 12. 2023</Text>
                      <Text styles={{fontSize: 17}}> 1-я Паралипоменон 6 глава</Text>
                    </View>
                    <View style={styles.slider}>
                      <TouchableOpacity style={{width: 24, height: 24, alignItems: 'center', justifyContent: 'center'}}>
                       <Image source={require('../assets/Vector2.png')}/>
                      </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 11 </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 12 </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 13 </TouchableOpacity>
                       <TouchableOpacity style={styles.activevSlider}> 14 </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 15 </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 16 </TouchableOpacity>
                       <TouchableOpacity style={styles.passiveSlider}> 17 </TouchableOpacity>
                      <TouchableOpacity style={{width: 24, height: 24, alignItems: 'center', justifyContent: 'center'}}>
                       <Image source={require('../assets/Vector.png')}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity style={styles.button}> Читать главу по плану </TouchableOpacity>
                    </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        flexDirection: 'column',
        justifyContent: "space-between",
        width: 343,
        height: 272,
        borderRadius: 12,
        padding: 12,
        backgroundColor: "#F3F3F3",
    },
    switch: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        fontSize: 14,

    },
    switchActive: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 156.5,
        height: 26,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        backgroundColor:'#F3F3F3'
    },
    switchPassive: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 156.5,
        height: 26,
        backgroundColor: '#D9D9D9',
    },
    slider: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 319,
      height: 40,
      fontSize: 16,
    },
    activevSlider: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#D9D9D9',
    },
    passiveSlider: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 12,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 319,
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderColor: '#212224',
    }
});



