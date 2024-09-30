import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {useState} from "react";

export default function Plan()  {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const [activeIndex, setActiveIndex] = useState(3)

    return(
        <View style={styles.screen}>
                    <View style={{justifyContent: 'space-around'}}>
                            <Text style={{fontSize: 20}}> План чтения </Text>
                        <View style={styles.switch}>
                            <TouchableOpacity style={styles.switchActive}><Text> Всемирный план </Text></TouchableOpacity>
                            <TouchableOpacity style={styles.switchPassive}><Text> Мои планы </Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{rowGap: activeIndex}}>
                      <Text style={{fontSize: 13, color: '#898C93'}}> Воскресенье </Text>
                      <Text styles={{fontSize: 14}}> Июль 12. 2023</Text>
                      <Text styles={{fontSize: 17}}> 1-я Паралипоменон 6 глава</Text>
                    </View>
                    <View style={styles.slider}>
                      <TouchableOpacity style={{width: 24, height: 24, alignItems: 'center', justifyContent: 'center'}}>
                       <Image source={require('../assets/Vector2.png')}/>
                      </TouchableOpacity>

                        {
                            arr.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActiveIndex(index)
                                        }}
                                        style={index === activeIndex ? styles.activevSlider : styles.passiveSlider }
                                    >
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )

                            })
                        }

                       {/*<TouchableOpacity style={styles.passiveSlider}><Text> 12 </Text></TouchableOpacity>*/}
                       {/*<TouchableOpacity style={styles.passiveSlider}><Text> 13 </Text></TouchableOpacity>*/}
                       {/*<TouchableOpacity style={styles.activevSlider}><Text> 14 </Text></TouchableOpacity>*/}
                       {/*<TouchableOpacity style={styles.passiveSlider}><Text> 15 </Text></TouchableOpacity>*/}
                       {/*<TouchableOpacity style={styles.passiveSlider}><Text> 16 </Text></TouchableOpacity>*/}
                       {/*<TouchableOpacity style={styles.passiveSlider}><Text> 17 </Text></TouchableOpacity>*/}
                      <TouchableOpacity style={{width: 24, height: 24, alignItems: 'center', justifyContent: 'center'}}>
                       <Image source={require('../assets/Vector.png')}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity style={styles.button}><Text> Читать главу по плану </Text></TouchableOpacity>
                    </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        flexDirection: 'column',
        justifyContent: "space-between",
        width: '100%',
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
        width: '50%',
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
      width: '100%',
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
        borderColor: '#212224',
    }
});



