import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from '../../../components/ThemedView';
import ThemedCardRecipe from '../../../components/ThemedCardRecipe';


const RecipesPage = ()=>{
    return(
        <ThemedView>
            <ThemedCardRecipe/>
        </ThemedView>
    )
}

export default RecipesPage