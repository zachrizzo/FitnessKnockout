import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function BigSquareButton({text, onPress}){
  return (
    <TouchableOpacity onPress={onPress}> 
    <View style={styles.button}>
     <Text style={styles.buttonText}>{text}</Text>
    </View>

    </TouchableOpacity>)}

const styles = StyleSheet.create({
    button:{
        borderRadius :40,
        paddingVertical:80,
        paddingHorizontal:10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop:24,
        width: 175
        
    },

    buttonText:{
        color:'red',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 16,
        textAlign:'center',

    }

})
