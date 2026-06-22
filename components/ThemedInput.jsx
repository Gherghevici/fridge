import {StyleSheet, TextInput,useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedInput = ({style,placeholder,type,changeHandler,blurHandler,...props})=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return(
        <TextInput 
            inputMode={type}
            
            placeholder={`${placeholder}...`}
            style={[{color:theme.text,backgroundColor:theme.uiBackground},styles.input,style]}
           

            {...props}
        />
    )
}

export default ThemedInput

const styles = StyleSheet.create({
  input: {
   
    paddingHorizontal:"10",
    paddingVertical:"6",
    width:"250",
    borderRadius:10,
  },
  
});