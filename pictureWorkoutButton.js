import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function PictureWorkoutButton({text, onPress,image}){

  return (
    <TouchableOpacity onPress={onPress} > 
    <View style = {[styles.container]}>
    <Image
    source={
    require({image})}>
    </Image>
    </View>
   
     <Text style={styles.buttonText}>{text}</Text>
   

    </TouchableOpacity>)}

const styles = StyleSheet.create({

    container:{
        width: 400,
        height:800,
        borderRadius:0,
    },

    button:{
        borderRadius :40,
        paddingVertical:80,
        paddingHorizontal:40,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop:24,
        width: 400,
        height: 300,
        flex:1
        
    },

    buttonText:{
        color:'red',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 16,
        textAlign:'center',

    }

})