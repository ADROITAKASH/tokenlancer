import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, ScrollView, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button as PaperButton } from 'react-native-paper';



const { width, height } = Dimensions.get('screen');


const PostJob = ({ navigation }) => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [skill, setSkill] = useState("");


    const onPost = () => {
      
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
                Post a job
            </Text>

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="title"
                value={title}
                onChangeText = {(title) => setTitle(title)}
            />

            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="description"
                multiline = {true}
                numberOfLines = {10}
                value={description}
                onChangeText = {(description) => setDescription(description)}
            />

             <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="Skills required"
                value={skill}
                onChangeText = {(skill) => setSkill(skill)}
            />


            <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => onPost()}
            >
           Post
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

export default PostJob


