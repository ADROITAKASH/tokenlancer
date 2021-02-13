import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Avatar, Button, DataTable } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const ContractCard = (props) => {

 if(props.type === "Client") {
    return (
        <View style={{backgroundColor: 'white', width: width, padding: 20, borderRadius: 10}}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Text size={24} label="tL" />
            <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title >Hours bought</DataTable.Title>
      <DataTable.Title >Hours remaining today</DataTable.Title>
      <DataTable.Title >Total hours remaining</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>{props.hoursBought}</DataTable.Cell>
      <DataTable.Cell>{props.hoursRemainingToday}</DataTable.Cell>
      <DataTable.Cell>{props.hoursRemainingTotal}</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
  <Text style={styles.apply}>Applied for</Text>
  <Text style={styles.title}>{props.clientTitle}</Text>
            <Button style={styles.buttonStyle} icon= "plus" mode="contained" color="black" compact={true} onPress={() => props.onPress()}>
             Buy more tokens
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
            <Text style={styles.apply}>Progress</Text>
            <DataTable>
    <DataTable.Header>
      <DataTable.Title >Hours sold</DataTable.Title>
      <DataTable.Title >Hours remaining today</DataTable.Title>
      <DataTable.Title >Total hours remaining</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>{props.hoursBought}</DataTable.Cell>
      <DataTable.Cell>{props.hoursRemainingToday}</DataTable.Cell>
      <DataTable.Cell>{props.hoursRemainingTotal}</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
        </View>
    );
 }
}

export default ContractCard

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
