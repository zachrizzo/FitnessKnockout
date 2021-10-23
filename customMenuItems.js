import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, icon} from 'react-native';

import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function FlatButtonMenuOption({text, onPress,iconName}){
  return (
    <TouchableOpacity onPress={onPress}> 
    <View style={styles.button}>
   
     <Text style={styles.buttonText}> {text}</Text>
    <AntDesign style = {styles.icon} name={iconName}size={40} color="black"  />
     
    </View>

    </TouchableOpacity>)}

const styles = StyleSheet.create({
    button:{
        borderRadius :40,
        // paddingVertical:14,
        // paddingHorizontal:20,
        backgroundColor: '#757575A6',
        alignSelf: 'center',
        marginTop:30,
        width: 325,
        paddingTop: 15

    },

    buttonText:{
        color:'#ffffff',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 25,
        textAlign:'center',
        //  paddingTop: 50,
        // paddingLeft: 40,

    },

    icon: {
        // flexDirection: 'column',
        // alignItems :'center',
        paddingBottom: 2 ,
        paddingRight: 10,
        paddingTop: -50,
        paddingLeft: 10 ,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

