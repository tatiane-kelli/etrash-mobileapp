import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


export default function ButtonBack(){
    return<View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>VOLTAR</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FF7979',
        padding:10,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:15,
        height:60,
        width:130,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    text:{
        fontSize:20,
        color:'#FFF'
    }
})
