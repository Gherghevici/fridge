import { StyleSheet, Text, useColorScheme, View ,Image, ImageBackground} from 'react-native';
import ThemedText from './ThemedText';
import ThemedPill from './ThemedPill';
import { Colors } from '../constants/Colors';
import ThemedRating from './ThemedRating';



const ThemedCardRecipe = ({title, description, prepTime, calories, rating, dietaryPatterns, iconIcon })=>{
    return (
        <ImageBackground source={require('../assets/images/Salami_Delicio.webp')} style={styles.container}>
            <View style={styles.pillContainer}>
                <ThemedPill colorBackground={Colors.neutral.T30+"75"} colorText={Colors.neutral.T10} iconIcon={iconIcon} title={prepTime + " min"}/>
                <ThemedPill colorBackground={Colors.neutral.T30+"75"} colorText={Colors.neutral.T10} iconIcon={iconIcon} title={calories + " kcal"}/>
                <ThemedPill colorBackground={Colors.neutral.T30+"75"} colorText={Colors.neutral.T10} iconIcon={iconIcon} title={dietaryPatterns}/>
            </View>

            <View>
                <ThemedRating rating={rating}/>
                <ThemedText>{title ?? "sal"}</ThemedText>
                <ThemedText>{description ?? "descriere"}</ThemedText>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        width:330,
        height:500,
        display:"flex",
        justifyContent:"space-between",
    },
    pillContainer:{
        display:"flex",
        flexDirection:"column",
        flexGrow:2,
        
    },
   
  
});

export default ThemedCardRecipe;