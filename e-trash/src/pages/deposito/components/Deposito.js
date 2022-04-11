import { 
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";

import Imagem1 from '../../../../assets/1.png';
import Imagem2 from '../../../../assets/2.png';

export default function Deposito(){
    return <View>
                <Text style={styles.empresa}>Depósito A</Text>
                <View style={styles.imagens}>
                    <Image  style={styles.imagem} source={Imagem1}/>
                    <Image style={styles.imagem} source={Imagem2}/>
                </View>
            </View>
    
}

const styles = StyleSheet.create({
    empresa:{
        fontSize:36,
        color:'#222222',
        fontWeight:'bold',
        marginLeft:20,
        marginTop:40
    },
    imagens:{
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between',
        marginTop:35
    },
    imagem:{
        width:'45%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
    

})