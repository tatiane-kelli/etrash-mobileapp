import { 
    Text,
    View,
    StyleSheet
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Info(){
    return <View style={styles.divInfo}>
            <View style={styles.info}>
                <FontAwesome5 name="clock" size={22} color="black" />
                <Text style={styles.information}>
                    Aberto das 7h às 17h
                </Text >
            </View>
            <View style={styles.info}>
                <Entypo name="location-pin" size={22} color="#0892d1" />
                <Text style={styles.information}>
                    Rua X, n°0, bairro Y
                </Text>
            </View>
            <View style={styles.info}>
                <FontAwesome5 name="phone-alt" size={24} color="black" />
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
    }
})

