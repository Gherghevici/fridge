import {StyleSheet, Pressable, View,useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedButton = ({style,...props})=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return(
        <Pressable 
            style={({pressed})=>[styles.btn, pressed && styles.btnPressed, style]}
            {...props}
        />
    )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn:{
        backgroundColor:Colors.primary,
        paddingHorizontal:"20",
        paddingVertical:"8",
        borderRadius:10,
        alignItems:"center"
  },
  btnPressed:{
        opacity:0.7
  }
  
});