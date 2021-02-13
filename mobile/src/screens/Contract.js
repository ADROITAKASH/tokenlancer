import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


import LancerContractScreen from './LancerContract';
import ClientContractScreen from './ClientContract';
import ExtraToken from './ExtraToken';


const ContractStack = () => {
    return (
        <View style={{flex: 1, marginTop: 100}}>
        <Tab.Navigator
        initialRouteName = "Freelancer"
        tabBarPosition = "bottom"
        initialLayout = {{ width: Dimensions.get('window').width }}
        tabBarOptions={{
          labelStyle: { fontSize: 12, fontWeight: '400' },
           style: { backgroundColor: 'white' },
  }}
        >
          <Tab.Screen name="Freelancer" component={LancerContractScreen} />
          <Tab.Screen name="Client" component={ClientContractScreen} />
        </Tab.Navigator>
        </View>
      );
}


const Contract = () => {
  return (
    <Stack.Navigator initialRouteName = "Proposal">
    <Stack.Screen name="Contract" component = {ContractStack} options={{ headerShown: false}} />
    <Stack.Screen name="Extra" component = {ExtraToken} options={{ headerShown: false}} />
  </Stack.Navigator>
  )
}


export default Contract

const styles = StyleSheet.create({})
