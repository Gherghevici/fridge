import { Text,useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedText = ({style,...props})=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return(
        <Text 
            style={[
                {
                    color:theme.text,
                    fontSize:"18",
                    alignItems:"center",
                },style]}
            {...props}
        />
    )
}

export default ThemedText