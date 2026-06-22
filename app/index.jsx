import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';

import ThemedView from '../components/ThemedView';
import ThemedButton from '../components/ThemedButton';
import ThemedText from '../components/ThemedText';


const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  
    return(
        <ThemedView>
            <ThemedText style={styles.title}>  What is in your fridge? </ThemedText>
            <Link href="/login" asChild>
              <ThemedButton style={{width:"120", marginBottom:"10"}}>
                <ThemedText>Login</ThemedText>
              </ThemedButton>
            </Link>
            <Link href="/register" asChild>
              <ThemedButton style={{width:"120"}}>
                <ThemedText>Register</ThemedText>
              </ThemedButton>
            </Link>
        </ThemedView>
    )
}
export default Home

const styles = StyleSheet.create({
  title:{
    fontSize:"24",
    marginVertical:"120"
  },
  
});
