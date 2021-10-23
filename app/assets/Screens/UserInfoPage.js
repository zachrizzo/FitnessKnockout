import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import FlatButton from '../../../button';
import { AntDesign } from '@expo/vector-icons';
import FlatButtonMenuOption from '../../../customMenuItems';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../../firebase';




const UserInfoPage = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
         title: 'User' ,
         headerBackTitle: ''
    

    }); 
    }, []);
    const deleteuser = () =>{}
    const Logout = ( ) => {auth.signOut().then(() => {
        navigation.replace('Login');

    })};

    const settingsPage = () => {
        navigation.navigate('settings')
    }

    const paymentprofile = () => {
        navigation.navigate('Payment Profile')
    }
    const Stripe = () => {
        navigation.navigate('Stripe')
    }
    return (
        <SafeAreaView style = {{flex: 1,backgroundColor: '#FFFFFF'}} >
            <LinearGradient
        // Background Linear Gradient
        colors={['#FFFFFF', '#FFFFFF']}
        style={styles.background}
      ><ScrollView >
            <FlatButtonMenuOption 
                text = "settings" onPress= {deleteuser} style = {[styles.button]}></FlatButtonMenuOption>
                <FlatButtonMenuOption 
                text = "Log out" onPress= {Logout}  ></FlatButtonMenuOption>
                <FlatButtonMenuOption 
                text = "payment profile" onPress= {paymentprofile}  ></FlatButtonMenuOption>
                <FlatButtonMenuOption 
                text = "Delete Account" onPress= {deleteuser}  ></FlatButtonMenuOption>
            </ScrollView> 
            </LinearGradient>
        </SafeAreaView>
       
    )
}

export default UserInfoPage

const styles = StyleSheet.create({
    button:{
        padding: 20,
    }
})
    