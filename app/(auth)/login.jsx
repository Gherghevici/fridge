import { StyleSheet, View, Text, TextInput, useColorScheme, LogBox } from "react-native"
import { useState } from "react"

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/Colors";

import { checkEmailFormat, checkPasswordFormat, submitHandler, ChangeFieldHandler, blurFieldHandler } from "../../utils/Functions";

import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import { Link } from "expo-router";

const Login = () => {
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


    return (
        <ThemedView style={{ justifyContent: "center" }}>
            <View style={{ backgroundColor: theme.navBackground, padding: 20, borderRadius: 16, gap: 10, alignItems: "center" }}>
                <ThemedText style={{ alignSelf: "center", fontSize: "24", fontWeight: "900" }}>Welcome Back</ThemedText>
                <ThemedText style={{ alignSelf: "center", fontSize: "16", marginBottom: "25", color: Colors.neutral.T60 }}>Log in to continue your cooking streak</ThemedText>
                <ThemedInput
                    placeholder={"Email"}
                    inputMode={"email"}
                    textContentType={"emailAddress"}
                    onChangeText={(t) => ChangeFieldHandler("email", t, setForm, setErrors)}
                    onBlur={() => blurFieldHandler("email", form.email, setErrors)}
                    style={errors.email && { borderWidth: 2, borderColor: "red" }}
                    errors={errors.email}
                    lable={"Email Address"}
                    ionIconsType={"mail-outline"}
                />

                <ThemedInput
                    placeholder={"Password"}
                    typeKeyboard={"text"}
                    secureTextEntry
                    onChangeText={(t) => ChangeFieldHandler("password", t, setForm, setErrors)}
                    onBlur={() => blurFieldHandler("password", form.password, setErrors)}
                    style={errors.password && { borderWidth: 2, borderColor: "red" }}
                    errors={errors.password}
                    lable={"Password"}
                    pass={true}
                    ionIconsType={"lock-closed-outline"}
                />

                <ThemedButton style={{ width: "200", alignSelf: "center", boxShadow:`0px 0px 8px ${Colors.primary.T20}` }} onPress={() => submitHandler(setErrors, form.email, form.password)}><ThemedText style={{color:"white"}}>Log in <Ionicons name="arrow-forward" size={18} /></ThemedText></ThemedButton>
                <View style={styles.separator}>
                    <View style={styles.line} />

                    <Text style={styles.separatorText}>
                        Or continue with
                    </Text>
                </View>
                <ThemedButton style={{ width: "200", alignSelf: "center",backgroundColor:"white",boxShadow:`0px 2px 2px ${Colors.neutral.T20}` }}><ThemedText>Goggle</ThemedText></ThemedButton>
                <View style={{display:"flex", flexDirection:"row",gap:4 }}>
                    <ThemedText style={{ alignSelf: "center", fontSize: "16", marginBottom: "25", color: Colors.neutral.T60 }}>Don't have an account?</ThemedText>
                    <Link href={"/register"}><ThemedText style={{ alignSelf: "center", fontSize: "16", marginBottom: "25", color: Colors.primary.T40 }}>Sign up</ThemedText></Link>
                </View>
            </View>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    separator: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },

    line: {
        position: 'absolute',
        left: 0,
        left: -70,
        height: 2,
        width: "80%",
        backgroundColor: Colors.neutral.T20,
    },

    separatorText: {
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 12,
        color: '#6B7280',
        fontSize: 12,
        borderRadius: 8,
        boxShadow: `0px 0px 2px ${Colors.neutral.T40}`
    },
});
export default Login
