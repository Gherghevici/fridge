import {StyleSheet, View,useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedView = ({style,...props})=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return(
        <View 
            style={[{backgroundColor:theme.background},style,styles.view]}
            {...props}
        />
    )
}

export default ThemedView

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  
});