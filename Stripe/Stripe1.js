import { gzip } from "pako";
import React, { useState } from "react";
import { ScrollView } from 'react-native'
import { SafeAreaView, Button, View, StyleSheet,  TextInput, onPressLearnMore,Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {  Input, Image, text } from 'react-native-elements';
import { CardField,useConfirmPayment } from "@stripe/stripe-react-native";
import FlatButton from "../button";
import { post } from "got";
const Stripe = props => {
    const [email,setEmail] = useState();
    const [cardDetails,setCardDetails] = useState();
    const {confirmPayment, loading} = useConfirmPayment();

    const fetchPaymentIntentClientSecret = async() => {
        const response = await fetch({$API_URL}/
            create-payment-intent,{
                method: 'POST',
                headers:{"content-Type" : "application/jason",},
            },


        )}
        
    const handlePayPress = async() =>{
        if (!cardDetails?.complete || !email ){
            Alert.alert("Please enter complete card details and valid Email ")
        }
    }

    const billingDetails = {
        email:email
    }

    return(
        <KeyboardAvoidingView  behavior="position"  style={{flex: 1,backgroundColor: '#121111'}}>
        <TextInput
                style={styles.input}
                
              
                
                placeholder='Email' 
                autoFocus type = 'Email' 
                keyboardType = 'email-address'
                // value ={Email} 
                onChangeText = {value => setEmail(value.nativeEvent.text)}
                
                padding = '5%'
                
            />
            <CardField
            postalCodeEnabled = {true}
            placeholder ={{
                number: "4242 4242 4242 4242",
            }}
            cardStyle = {styles.card}
            style = {styles.cardContainer}
            onCardChange = {cardDetails => {setCardDetails(cardDetails);}}></CardField>
            <FlatButton
               text = "pay" onPress= {handlePayPress} disabled = {loading} ></FlatButton>
        </KeyboardAvoidingView>
    )
}

export default Stripe;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    input: {
        height: 65,
        margin: 12,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius:30,
        padding: 30,
        justifyContent: 'center',
        alignItems:'center',
        
        backgroundColor: '#8C8C8C'
        
    },
    card:{
        
            
        borderRadius:30,      
            
    backgroundColor: '#8C8C8C'},
            
    cardContainer:{
        height: 65,
        margin: 12,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius:30,
        padding: 30,

        },
    
});