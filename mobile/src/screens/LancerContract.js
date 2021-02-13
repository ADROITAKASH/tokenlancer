import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ContractCard from '../components/ContractCard';

const LancerContract = () => {

    const onPress = () => {

    }


    return (
        <ScrollView>
           <ContractCard 
               clientName = "Parasite"
               clientTitle = "Web development"
               clientDesp = "I'm running a shoe company for many years. I want to move my store online. I want to hire a web developer to develop a e-commerce website for my store"
               userName = "santhosh"
               userDetail = " I am a good frontend developer"
               hoursBought = "10"
               hoursRemainingToday = "4"
               hoursRemainingTotal = "12"
               type = "Lancer"
               onPress = {() => onPress()}
           />
           
        </ScrollView>
    )
}

export default LancerContract

const styles = StyleSheet.create({})
