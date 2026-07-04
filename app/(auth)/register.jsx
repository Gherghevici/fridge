import {View,TextInput,useColorScheme} from 'react-native'

import {useState} from 'react'

import { Colors } from "../../constants/Colors";

import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";

import { submitHandler,ChangeFieldHandler,blurFieldHandler } from "../../utils/Functions";


const Register = () =>{

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const [form, setForm] = useState({
            email: "",
            password: "",
            name:"",
        });
    
    const [errors, setErrors] = useState({
            email: null,
            password: null,
            name:null,
    });
    
    

    return(
        <ThemedView style={{justifyContent:"center"}}>
            <View style={{backgroundColor:theme.navBackground,padding:20,borderRadius:10,gap:10}}>
                <ThemedText style={{alignSelf:"center",fontSize:"24",}}>Register page</ThemedText>
                <ThemedInput
                    placeholder={"Name"}
                    typeKeyboard={"text"}
                    onChangeText={(t) => ChangeFieldHandler("name",t,setForm,setErrors)}
                    onBlur={() => blurFieldHandler("name", form.name,setErrors)}
                    style={errors.name&&{borderWidth:1, borderColor:"red"}}
                    errors={errors.name}
                />
                <ThemedInput
                    placeholder={"Email"}
                    inputMode={"email"}
                    textContentType={"emailAddress"}
                    onChangeText={(t) => ChangeFieldHandler("email",t,setForm,setErrors)}
                    onBlur={() => blurFieldHandler("email", form.email,setErrors)}
                    style={errors.email&&{borderWidth:1, borderColor:"red"}}
                    errors={errors.email}
                />
               
                <ThemedInput
                    placeholder={"Password"}
                    typeKeyboard={"text"}
                    secureTextEntry
                    onChangeText={(t) => ChangeFieldHandler("password",t,setForm,setErrors)}
                    onBlur={() => blurFieldHandler("password", form.password,setErrors)}
                    style={errors.password&&{borderWidth:1, borderColor:"red"}}
                    errors={errors.password}
                />
                
                <ThemedButton style={{width:"120",alignSelf:"center"}} onPress={()=>submitHandler(setErrors,form.email,form.password,form.name)}><ThemedText>Register</ThemedText></ThemedButton>
            </View>
        </ThemedView>
    )
}

export default Register;

