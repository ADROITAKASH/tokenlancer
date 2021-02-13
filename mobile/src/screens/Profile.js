import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button as PaperButton, Avatar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';


import BuyTokenScreen from './BuyNewTokens';


const Stack = createStackNavigator();



const { width, height } = Dimensions.get('screen');


const ProfileStack = ( { navigation }) => {
    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Avatar.Text size={58} label="P" />
            <Text style={styles.userName}>parasite</Text>
        </View>
        <View style={styles.textContainer}>
          <View>
          <Text style={styles.textStyle}>
            Total Token Medals :
            <Text> 20</Text>
            </Text>
          </View>
          <View>
          <Text style={styles.textStyle}>
            Total Token Available :
            <Text> 40</Text>
            </Text>
          </View>
        </View>
          <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.buyButton}
            onPress = {() => navigation.navigate("BuyToken")}
            >
           Buy More Tokens
            </PaperButton>
        </View>
    )
}

const Profile = () => {
    return (
    <Stack.Navigator initialRouteName = "Profile">
    <Stack.Screen name="Profile" component = {ProfileStack} options={{ headerShown: false}} />
    <Stack.Screen name="BuyToken" component = {BuyTokenScreen} options={{ headerShown: false}} />
   </Stack.Navigator>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 30,
        marginTop: height * 0.1
    },
    buyButton: {
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "black",
    },
    textStyle: {
        fontSize: 22,
        marginTop: 10,
        textAlign: 'center'
    },
    userName: {
        fontSize: 40,
        fontWeight: '500',
        marginLeft: 20
    },
    textContainer: {
        marginTop: 50,
        backgroundColor: "#E5E5E5",
        height: 150,
        justifyContent: 'center'
    }
})
