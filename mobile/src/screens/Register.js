import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Dimensions, ImageBackground, Keyboard, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button as PaperButton, HelperText } from 'react-native-paper';



const { width, height } = Dimensions.get('screen');


const Register = ({ navigation }) => {

    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");


    const onSignUp = () => {
      
    }

    const hasErrors = () => {
        return !text.includes('@');
      };
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
         <View style={styles.container}>

            <Text style={styles.headingStyle}>
                Register
            </Text>

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="name"
                value={name}
                onChangeText = {(name) => setName(name)}
            />

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="username"
                placeholder="enter unique username"
                value={userName}
                onChangeText = {(userName) => setUserName(userName)}
                error = {false}
            />
            <HelperText type="error" visible={false}>
            username already exists
            </HelperText>

            <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => onSignUp()}
            >
            signup
            </PaperButton>

            <TouchableOpacity
              onPress = {() => {
                    navigation.navigate("Login")      
                }}>
            <Text
            style={styles.buttonText}>
                <Text style={styles.loginPara}>Already have an account?  </Text>
                Login in
            </Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    inputBox: {
        width: width * 0.9,
        padding: 10,
        fontSize: 16,
    },
    buttonText: {
        fontSize: 17,
        color: 'blue',
        marginTop: 20,
        marginRight: width * 0.1
    },
    loginPara: {
        color: 'black'
    },
    registerButton: {
        marginTop: 20,
        width: width * 0.8, 
        marginLeft: width / 2 - 190,
        backgroundColor: 'black'
    },
    headingStyle: {
        fontSize: 40,
        color: 'black',
        marginTop: height * 0.27
    }
})

export default Register


