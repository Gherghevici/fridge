import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, useColorScheme, View, Image, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';


const ThemedProfilePhoto = ()=>{


    return(
        <View style={styles.container}>
            <Image
                style = {styles.image}
                source={require('../assets/images/avatar.png')}
            />
            <Pressable style={styles.button}><Ionicons size={26} name="pencil" color="#000"/></Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",        
    },

    image:{
        width:150,
        height:150,
        borderRadius:"50%",
        borderWidth:4,
        borderColor:"white",
        boxShadow:`0px 0px 3px ${Colors.neutral.T30} `,
    },

    button:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        transform:"translate(100%)",
        bottom:0,
        width:50,
        height:50,
        borderRadius:"50%",
        backgroundColor:Colors.primary.T30,
        boxShadow:`0px 1px 2px ${Colors.neutral.T30} `,
    }
  
});

export default ThemedProfilePhoto