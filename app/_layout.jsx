import { Slot,Stack } from "expo-router";
import { StyleSheet, View , Text } from "react-native";

const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{title:"Home"}}/>
        </Stack>
    )
}

export default RootLayout