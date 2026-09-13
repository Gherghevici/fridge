import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <LinearGradient
      colors={[
        Colors.primary.T10,
        Colors.secondary.T10+"30",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.view, style]}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

export default ThemedView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
});