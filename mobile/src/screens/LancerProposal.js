import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ProposalCard from '../components/ProposalCard';

const LancerProposal = () => {

    const onPress = () => {

    }


    return (
        <ScrollView>
           <ProposalCard 
               clientName = "Parasite"
               clientTitle = "Web development"
               clientDesp = "I'm running a shoe company for many years. I want to move my store online. I want to hire a web developer to develop a e-commerce website for my store"
               userName = "santhosh"
               userDetail = " I am a good frontend developer"
               price = "10"
               hoursPerDay = "4"
               approxDays = "12"
               type = "Lancer"
               onPress = {() => onPress()}
           />
           
        </ScrollView>
    )
}

export default LancerProposal

const styles = StyleSheet.create({})
