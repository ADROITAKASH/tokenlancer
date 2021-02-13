import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ProposalCard from '../components/ProposalCard';

const ClientProposal = ({ navigation }) => {

    const onPress = () => {
       navigation.navigate("Hire")
    }


    return (
        <ScrollView>
           <ProposalCard 
                clientName = "Parasite"
               clientTitle = "Web development"
               userName = "santhosh"
               userDetail = " I am a good frontend developer"
               price = "10"
               hoursPerDay = "4"
               approxDays = "12"
               type = "Client"
               onPress = {() => onPress()}
           />
           
        </ScrollView>
    )
}

export default ClientProposal

const styles = StyleSheet.create({})
