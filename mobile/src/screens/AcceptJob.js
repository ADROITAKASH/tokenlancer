import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, ScrollView, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button as PaperButton } from 'react-native-paper';



const { width, height } = Dimensions.get('screen');


const AcceptJob = ({ navigation }) => {

    const [price,setPrice] = useState("");
    const [hourPerDay,setHourPerDay] = useState("");
    const [apprDays,setApprDays] = useState("");
    const [userDetails,setUserDetails] = useState("");


    const onSubmit = () => {
      
    }

    return (
        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.keyContainer}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={{backgroundColor: 'white'}}>
         <View style={styles.container}>
            <Text style={styles.headingStyle}>
                Application
            </Text>

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="Price of hourly tokem"
                value={price}
                onChangeText = {(price) => setPrice(price)}
            />

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="how many hours do you work a day"
                value={hourPerDay}
                onChangeText = {(hourPerDay) => setHourPerDay(hourPerDay)}
            />

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="Approximate no. of days to finish"
                value={apprDays}
                onChangeText = {(apprDays) => setApprDays(apprDays)}
            />

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="Tell me about yourself" 
                multiline = {true}
                numberOfLines = {10}
                value={userDetails}
                onChangeText = {(userDetails) => setUserDetails(userDetails)}
            />

            <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => onSubmit()}
            >
           Submit
            </PaperButton>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    inputBox: {
        width: width * 0.9,
        padding: 10,
        fontSize: 16,
    },
    registerButton: {
        marginTop: 20,
        width: width * 0.8, 
        marginLeft: width / 2 - 190,
        backgroundColor: 'black',
        marginBottom: 30
    },
    headingStyle: {
        fontSize: 40,
        color: 'black',
        marginTop: height * 0.27
    },
    keyContainer: {
        flex: 1
    }
})

export default AcceptJob


