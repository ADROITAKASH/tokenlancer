import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Avatar, Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const JobCard = ({ onAccept }) => {
    return (
        <View style={{backgroundColor: 'white', width: width, padding: 20, borderRadius: 10}}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Text size={24} label="P" />
            <Text style={styles.userName}>parasite</Text>
            </View>
            <Text style={styles.title}>Web development</Text>
            <View style={styles.desp}>
                <Text>I'm running a shoe company for many years. I want to move my store online. I want to hire a web developer to develop a e-commerce website for my store</Text>
            </View>
            <Text style={styles.skills}>Skills: react native, redux</Text>
            <Button style={styles.buttonStyle} icon="check" mode="contained" color="black" compact={true} onPress={() => onAccept()}>
             Apply
            </Button>
        </View>
    )
}

export default JobCard

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
        height: 100,
        marginTop: 10,
        borderRadius: 5,
        padding: 15
    },
    buttonStyle: {
        marginTop: 10
    },
    skills: {
        fontSize: 16,
        marginTop: 10
    }
})
