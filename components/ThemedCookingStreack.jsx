import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';

const ThemedCookingStreack = ()=>{
    const days = null;

    return(
        <View style = {styles.container}>
            <View>
                <ThemedText></ThemedText>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  
    container:{
        backgroundColor:"white",
        width:"100%" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        padding:35
        
    },
    
  
});
export default ThemedCookingStreack