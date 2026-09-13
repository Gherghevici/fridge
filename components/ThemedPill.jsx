
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, useColorScheme,View } from 'react-native';

const ThemedPill = ({title,colorText,colorBackground,iconIcon})=>{
    return(
        <View style={[styles.container,{backgroundColor:colorBackground }]}>
            <Ionicons size={16} name={iconIcon} color={colorText}/>
            <Text style={[styles.title,{color:colorText}]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:2,
    },
    title:{
        fontWeight:700,
    },
    
    
  
});

export default ThemedPill