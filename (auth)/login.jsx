import { View,Text,TextInput } from "react-native"
import { useState } from "react"

export default function Login(){
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    return(
        <View>
            <Text>Login</Text>
            <TextInput 
                placeholder={"Email"} 
                keyboardType={"email-address"} 
                value={email}
            />
            <TextInput 
                placeholder={"Password"}
                value={password}
                secureTextEntry
            />
        </View>
    )
}