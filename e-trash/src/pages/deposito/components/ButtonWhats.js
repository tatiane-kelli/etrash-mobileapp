import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import WhatsIcon from '../../../../assets/whatsappicon.png';

export default function ButtonWhats(){
    return<View>
        <TouchableOpacity style={styles.button}>
            <Image style={styles.icon}source={WhatsIcon}/>
            <Text style={styles.text}>FALAR</Text>
        </TouchableOpacity>
    </View>
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
    },
})
