import {StyleSheet, TextInput,useColorScheme,Text,View } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedInput = ({style,placeholder,type,changeHandler,blurHandler,errors,...props})=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return(
      <>
      
        <TextInput 
            inputMode={type}
            
            placeholder={`${placeholder}...`}
            style={[{color:theme.text,backgroundColor:theme.uiBackground},styles.input,style]}
           

            {...props}
        />
        { errors && (
                    <Text style={{ color: Colors.warning,width:250,textAlign:"center" }}>
                        {errors}
                    </Text>
        )}
      </>
    )
}

export default ThemedInput

const styles = StyleSheet.create({
  input: {
   
    paddingHorizontal:"12",
    paddingVertical:"10",
    width:"250",
    borderRadius:10,
  },
  
});