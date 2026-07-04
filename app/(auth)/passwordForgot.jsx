import { View,Text,TextInput,useColorScheme } from "react-native"
import { useState } from "react"
import { Link } from 'expo-router';

import { Colors } from "../../constants/Colors";

import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";

import { submitHandler,ChangeFieldHandler,blurFieldHandler } from "../../utils/Functions";

const PasswordForgot = ()=>{

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const [form, setForm] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({
        email: null,
    });
    
    return(
        <ThemedView style={{justifyContent:"center"}}>
            <View style={{backgroundColor:theme.navBackground,padding:20,borderRadius:10,gap:10}}>
                <ThemedText style={{alignSelf:"center",fontSize:"24",}}>Password Reset</ThemedText>
                <ThemedInput
                    placeholder={"Email"}
                    inputMode={"email"}
                    textContentType={"emailAddress"}
                    onChangeText={(t) => ChangeFieldHandler("email",t,setForm,setErrors)}
                    onBlur={() => blurFieldHandler("email", form.email,setErrors)}
                    style={errors.email&&{borderWidth:1, borderColor:"red"}}
                    errors={errors.email}
                />
                <ThemedButton style={{width:"130",alignSelf:"center"}} onPress={()=>submitHandler(setErrors,form.email)}><ThemedText>Send Email</ThemedText></ThemedButton>
            </View>
        </ThemedView>
    )

}

export default PasswordForgot;