import { View,Text,TextInput,useColorScheme } from "react-native"
import { useState } from "react"
import { Link } from 'expo-router';

import { Colors } from "../../constants/Colors";

import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";

const Login=()=>{
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null
    });

    
    const checkEmailFormat = ()=>{
        const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return regex.test(form.email);
    }
    const checkPasswordFormat = ()=>{
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(form.password);
    }
    const submitHandler = ()=>{
        const newErrors = {};

        if (!checkEmailFormat()) 
            newErrors.email = "Email invalid";
        
        if (!checkPasswordFormat()) 
            newErrors.password = "Parola invalidă";
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        return;
    }

    const ChangeFieldHandler = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));

        setErrors(prev => ({
            ...prev,
            [field]: null
        }));
    };
    const blurFieldHandler = (field, value) => {
        let error = null;

        if (field === "email") {
            if (!checkEmailFormat(value)&&value.length>0) {
                error = "Email invalid";
            }
        }

        if (field === "password") {
            if (!checkPasswordFormat(value)&&value.length>0) {
                error = "Parolă invalidă";
            }
        }

        setErrors(prev => ({
            ...prev,
            [field]: error
        }));
    };

    return(
        <ThemedView style={{justifyContent:"center"}}>
            <View style={{backgroundColor:theme.navBackground,padding:20,borderRadius:10,gap:10}}>
                <ThemedText style={{alignSelf:"center",fontSize:"24",}}>Login page</ThemedText>
                <ThemedInput
                    placeholder={"Email"}
                    inputMode={"email"}
                    textContentType={"emailAddress"}
                    onChangeText={(t) => ChangeFieldHandler("email",t)}
                    onBlur={() => blurFieldHandler("email", form.email)}
                    style={errors.email&&{borderWidth:1, borderColor:"red"}}
                />
               { errors.email && (
                    <Text style={{ color: "red" }}>
                        {errors.email}
                    </Text>
                )}
                <ThemedInput
                    placeholder={"Password"}
                    typeKeyboard={"text"}
                    secureTextEntry
                    onChangeText={(t) => ChangeFieldHandler("password",t)}
                    onBlur={() => blurFieldHandler("password", form.password)}
                    style={errors.password&&{borderWidth:1, borderColor:"red"}}
                />
                { errors.password && (
                    <Text style={{ color: "red" }}>
                        {errors.password}
                    </Text>
                )}
                <ThemedButton style={{width:"120",alignSelf:"center"}}><ThemedText>Login</ThemedText></ThemedButton>
            </View>
        </ThemedView>
    )
}
export default Login
