import { 
    Text,
    View,
    StyleSheet,
    Image,
} from "react-native";

import clock from '../../../../assets/clock.png';
import location from '../../../../assets/location.png';
import phone from '../../../../assets/phone.png';

export default function Info(){
    return <View style={styles.divInfo}>
            <View style={styles.info}>
                <Image source={clock} style={styles.icon}/>
                <Text style={styles.information}>
                    Aberto das 7h às 17h
                </Text >
            </View>
            <View style={styles.info}>
                <Image source={location} style={styles.icon}/>
                <Text style={styles.information}>
                    Rua X, n°0, bairro Y
                </Text>
            </View>
            <View style={styles.info}>
                <Image source={phone} style={styles.icon}/>
                <Text style={styles.information}>
                    (xx) xxxxx-xxxx
                </Text>
            </View>
        </View>
}

const styles = StyleSheet.create({
    divInfo:{
        marginTop:70,
    },
    info:{
        marginLeft:20,
        flexDirection:'row',
    },
    information:{
        fontSize:18,   
        paddingBottom:15,
        marginLeft: 10,
    },
    icon:{
        width:22,
        height:25    
    }
})

