import { 
    View,
    StyleSheet
} from "react-native";

import Info from './components/Info';
import Storage from './components/Storage';
import ButtonWhats from '../../components/ButtonWhats';

const StorageDetails = ({navigation}) => {
    return(
        <View>
            <View>
                <Storage/>
            </View>
            <View>
                <Info/>
            </View>
            <View style={styles.buttons}>
                <ButtonWhats/>
            </View>
        </View>
    );
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

export default StorageDetails;