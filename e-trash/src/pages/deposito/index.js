import { 
    View,
    StyleSheet
} from "react-native";

import Info from './components/Info';
import Deposito from './components/Deposito';
import ButtonWhats from './components/ButtonWhats';
import ButtonBack from './components/ButtunBack';

export default function infoDeposito(){
    return <View>
        <View>
            <Deposito/>
        </View>
        <View>
            <Info/>
        </View>
        <View style={styles.buttons}>
            <ButtonWhats/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        padding: 20,
        marginTop:20
        
    }
})