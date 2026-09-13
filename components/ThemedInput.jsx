import { StyleSheet, TextInput, useColorScheme, Text, View } from "react-native"
import { Colors } from "../constants/Colors"
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react"

import ThemedText from "./ThemedText";

const ThemedInput = ({ style, placeholder, type, changeHandler, blurHandler, errors, lable, pass, ionIconsType, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const [focused,setFocused] = useState(null);
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginBottom:"4" }}>
        {lable && <Text style={{ fontWeight: "800",color:Colors.neutral.T80 }}>{lable}</Text>}
        {pass &&
          <Link href={"/passwordForgot"} ><ThemedText style={[{ textAlign: "right", fontSize: 12 ,color:Colors.primary.T40},]}>Forgot password?</ThemedText></Link>
        }
      </View>

      {ionIconsType && <Ionicons name={ionIconsType} size={22} style={{ position: "absolute", zIndex: "10", top: "34", left: "15", color: "grey" }} />}

      <TextInput
        inputMode={type}

        placeholder={`${placeholder}...`}
        style={[{ color: theme.text }, styles.input, style]}
        

        {...props}
      />
      {errors && (
        <Text style={{ color: Colors.warning, width: 250, textAlign: "center" }}>
          {errors}
        </Text>
      )}
    </View>
  )
}

export default ThemedInput

const styles = StyleSheet.create({
  input: {

    paddingHorizontal: "40",
    paddingVertical: "15",
    width: "250",
    borderRadius: 10,
    borderColor: Colors.neutral.T20,
    borderWidth: "2",
    borderStyle: "solid"
  },

});