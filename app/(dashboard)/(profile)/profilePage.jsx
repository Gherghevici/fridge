import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ThemedView from '../../../components/ThemedView'
import ThemedProfilePhoto from '../../../components/ThemedProfilePhoto';
import ThemedText from '../../../components/ThemedText';
import ThemedPill from '../../../components/ThemedPill';
import { Colors } from '../../../constants/Colors';

const ProfilePage = ()=>{
    const ocupation =null;
    const joinedAt = null;
    return(
        <ThemedView style={styles.container}>
            <View style={styles.containerProfile}>
                <ThemedProfilePhoto/>
                <View style={styles.containerProfileDetails}>
                    <ThemedText style={{fontWeight:800, fontSize:24}}>Gherghevici Andrei</ThemedText>
                    <ThemedText>{ocupation ?? "Developer"} - Joined {joinedAt ?? "Dec 2000"}</ThemedText>
                </View>
                <View style={styles.containerPills}>
                    <ThemedPill title={"Vegetarian"} colorText={Colors.secondary.T60} colorBackground={Colors.secondary.T10} iconIcon={"leaf-outline"}/>
                    <ThemedPill title={"Quick Meals"} colorText={Colors.tertiary.T60} colorBackground={Colors.tertiary.T10} iconIcon={"timer-outline"}/>
                </View>
            </View>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
    },

    containerProfile:{
        backgroundColor:"white",
        width:"100%" ,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        padding:35
        
    },
    containerProfileDetails:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    containerPills:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
    },
  
});
export default ProfilePage