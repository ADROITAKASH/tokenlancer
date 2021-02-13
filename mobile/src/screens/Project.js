import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, ScrollView } from 'react-native'
import JobCard from '../components/JobCard';
import { FAB } from 'react-native-paper';
import SearchBar from '../components/SearchBar';

const { width, height } = Dimensions.get('screen');


const Project = ({ navigation }) => {

    const [term,setTerm] = useState("");
    
    const searchTerm = (searchTerm) => {

    }

    const jobAccept = () => {
        navigation.navigate("Accept");
    }


    return (
        <View style={{flex:1, paddingTop: 80, backgroundColor: "white"}}>
           <StatusBar barStyle="dark-content" />
           <SearchBar 
            term={term} 
            onTermChange={(newTerm) => {setTerm(newTerm)}}
            onTermSubmit={() =>  searchTerm(term)}
             />
           <ScrollView bouncesZoom={true} showsVerticalScrollIndicator={false}>
           <JobCard 
            onAccept={() => jobAccept()}   
           />
          <JobCard 
            onAccept={() => jobAccept()}   
           />
          <JobCard 
            onAccept={() => jobAccept()}   
           />
           <JobCard 
            onAccept={() => jobAccept()}   
           />
           </ScrollView>
           <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => navigation.navigate("Post")}
            color= "white"
             />
        </View>
    )
}

export default Project

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: "#0077B5" 
      },
})
