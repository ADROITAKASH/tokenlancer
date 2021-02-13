import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ContractCard from '../components/ContractCard';

const ClientContract = ({ navigation }) => {

    const onPress = () => {
       navigation.navigate("Extra")
    }


    return (
        <ScrollView>
           <ContractCard 
               clientName = "Parasite"
               clientTitle = "Web development"
               userName = "santhosh"
               userDetail = " I am a good frontend developer"
               hoursBought = "10"
               hoursRemainingToday = "4"
               hoursRemainingTotal = "12"
               type = "Client"
               onPress = {() => onPress()}
           />
           
        </ScrollView>
    )
}

export default ClientContract

const styles = StyleSheet.create({})
