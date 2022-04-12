import { 
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";

import Imagem1 from "../../../../assets/teste1.png";
import Imagem2 from "../../../../assets/teste2.png";

const Storage = () => {
    return (
        <View>
            <Text style={styles.storage}>Depósito A</Text>
            <View style={styles.images}>
                <Image  style={styles.image} source={Imagem1}/>
                <Image style={styles.image} source={Imagem2}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    storage:{
        fontSize:36,
        color:'#222222',
        fontWeight:'bold',
        marginLeft:20,
        marginTop:40
    },
    images:{
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between',
        marginTop:35
    },
    image:{
        width: 45,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    }
})

export default Storage;