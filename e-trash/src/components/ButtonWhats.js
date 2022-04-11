import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const ButtonWhats = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="whatsapp" size={22} color="black" />
                <Text style={styles.text}>FALAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#60D86C',
        justifyContent:'center',
        alignItems:"center",
        borderRadius:15,
        flexDirection:'row',
        padding:10,
        height:60,
        width:'100%',
    },
    text:{
        fontSize:20,
        color:'#FFF',
        marginLeft:5
    }
})
export default ButtonWhats;