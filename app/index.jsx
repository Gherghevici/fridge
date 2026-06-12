import { StyleSheet, Text, View, } from 'react-native';

const Home = ()=>{
    return(
        <View style={{margin:"150"}}>
            <Text>Hi</Text>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
