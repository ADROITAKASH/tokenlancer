import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Avatar, Button, DataTable } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const ProposalCard = (props) => {

 if(props.type === "Client") {
    return (
        <View style={{backgroundColor: 'white', width: width, padding: 20, borderRadius: 10}}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Text size={24} label="tL" />
            <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <View style={styles.desp}>
                <Text>{props.userDetail}</Text>
            </View>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title >Price per hour</DataTable.Title>
      <DataTable.Title >Hours per day</DataTable.Title>
      <DataTable.Title >Approx days</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>{props.price}</DataTable.Cell>
      <DataTable.Cell>{props.hoursPerDay}</DataTable.Cell>
      <DataTable.Cell>{props.approxDays}</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
  <Text style={styles.apply}>Applied for</Text>
  <Text style={styles.title}>{props.clientTitle}</Text>
            <Button style={styles.buttonStyle} icon= { props.type === "Lancer" ? "close" : "check"} mode="contained" color="black" compact={true} onPress={() => props.onPress()}>
             {props.type === "Lancer" ? "Cancel" : "Accept"}
            </Button>
        </View>
    );
 } 
 else {
    return (
        <View style={{backgroundColor: 'white', width: width, padding: 20, borderRadius: 10}}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Text size={24} label="tL" />
            <Text style={styles.userName}>{props.clientName}</Text>
            </View>
            <Text style={styles.title}>{props.clientTitle}</Text>
            <View style={styles.desp}>
                <Text>{props.clientDesp}</Text>
            </View>
            <Text style={styles.apply}>Applied details</Text>
            <View style={styles.desp}>
                <Text>{props.userDetail}</Text>
            </View>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title >Price per hour</DataTable.Title>
      <DataTable.Title >Hours per day</DataTable.Title>
      <DataTable.Title >Approx days</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>{props.price}</DataTable.Cell>
      <DataTable.Cell>{props.hoursPerDay}</DataTable.Cell>
      <DataTable.Cell>{props.approxDays}</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
            <Button style={styles.buttonStyle} icon= { props.type === "Lancer" ? "close" : "check"} mode="contained" color="black" compact={true} onPress={() => props.onPress()}>
             {props.type === "Lancer" ? "Cancel" : "Accept"}
            </Button>
        </View>
    );
 }
}

export default ProposalCard

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10
    },
    desp: {
        width: width * 0.9,
        backgroundColor: "#E5E5E5",
        marginTop: 10,
        borderRadius: 5,
        padding: 15
    },
    buttonStyle: {
        marginTop: 10
    },
    apply: {
        fontSize: 22,
        marginTop: 10
    }
})
