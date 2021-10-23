import React,{useLayoutEffect,useState} from 'react'
import {  SafeAreaView, Button, View, StyleSheet,Text,  TextInput, onPressLearnMore,Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import FlatButton from '../../../button';
import {auth,db,firebase } from '../../../firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import initializeStripe from '../../../Stripe/initializeStripe';
import { createCheckoutSession } from '../../../Stripe/createCheckoutSession';



const Signup = ({navigation}) => {
    const [firstName, setfirstName] = React.useState("");
    const [lastName, setlastName] = React.useState("");
    const [PhoneNumber, setPhoneNumber] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [imageUrl, setimageUrl] = React.useState("");
    
    

   
    useLayoutEffect(() => {
      navigation.setOptions({headerBackTitle: 'Back', headerStyle:{backgroundColor: '#000000', },headerTitle:{color: '#121111'},headerTintColor: 'white'},
     [navigation])})

    

    const SignUpUser =()=>{ 
       
          auth.createUserWithEmailAndPassword(email.trim(), Password)
        .then(async authUser =>{
                authUser.user.updateProfile({
                    displayName: firstName})
                console.log({ ...authUser.user });})
          .then( async  => { firebase.firestore().collection("customers").doc(auth.currentUser.uid ).set({
         
               uid: auth.currentUser.uid,
               email: email,
               Firstname:firstName,
               lastName:lastName,
               provider: auth.currentUser.providerData[0].providerId,
               Phonenumber:PhoneNumber  
           })
                       .catch(error => alert(error.message))})
                
                   
        // firebase.auth()
        //             .createUserWithEmailAndPassword(email.trim(),Password)
        // console.log(firebase.auth.apply.UserCredential);})


     
    }
        
    //    const uid = (auth.currentUser? auth.currentUser.uid:'unknown user')

            

    // const addUserTodb = async, auth.onAuthStateChanged((authUser) => {

    //      then (firebase.firestore().collection("customers").doc(authUser.uid).set({
    //         uid: authUser.uid,
    //         email: email,
    //         Firstname:firstName,
    //         lastName:lastName,
    //         provider: authUser.providerData[0].providerId,
    //         Phonenumber:PhoneNumber  
    //     })
    //                 .catch(error => alert(error.message)))})


        
        // auth.createUserWithEmailAndPassword(email, Password)
        // .then(authUser =>{
        //     authUser.user.updateProfile({
        //         displayName: firstName
        //         // photoURL:
        //         //     imageUrl ||
        //         //     'https://previews.123rf.com/images/photoplotnikov/photoplotnikov1703/photoplotnikov170300046/74101845-default-male-avatar-profile-picture-icon-man-photo-placeholder-vector-illustration.jpg',
                    
        //         })
                
        //     })
            

        // .catch(error => alert(error.message))

        
        // console.log('worked')
       
    // const addUserTodb = async() => { 
    //     // await db.collection('Users').doc(useCreateUserWithEmailAndPassword.user.uid).set({
    //     // uid:user.uid,
        
    //     // Email: email,
    //     // Phonenumber:PhoneNumber
    //     // })
    //     // }
    //     await db.collection("sub_customers").doc(userCredentials.user.uid).set({
    //         uid: userCredentials.user.uid,
    //         email: email,
    //         Firstname:firstName,
    //         lastName:lastName,
    //         provider: userCredentials.user.providerData[0].providerId,
    //         Phonenumber:PhoneNumber 
    //       });
    //     }

    const SignupAndaddUser = () =>{
        if (!firstName.trim()){
            Alert.alert("Please enter First name")
        }
        if (!lastName.trim()){
            Alert.alert("Please enter Last name")
        }
        if (!PhoneNumber.trim()){
            Alert.alert("Please enter Phone=Number")
        }
        // if (!birthday.trim()){
        //     Alert.alert("Please enter Birthday (MM/DD/YYYY)")
        // }
        else
        
        SignUpUser();
       
        // addUserTodb();
        
        
    }

 

// const SignUp = () =>{


    
    return (
        <ScrollView style={{flex: 1,backgroundColor: '#121111'}}>
        <KeyboardAvoidingView >
        
        <StatusBar style = 'dark-context'/>  
            {/* <Text h3 style = {{marginBottom:50 }}> Create a Knockout account!</Text> */}
            <View style = {styles.inputContainer}>
                
                
                <TextInput
                    style={styles.input}
                    
                
                    
                    placeholder='First Name' 
                    autoFocus type = 'name' 
                    value ={firstName} 
                    onChangeText = {(text) => setfirstName(text)}
                    
                    padding = '5%'
                    
                />
                <TextInput
                    style={styles.input}
                    
                
                    
                    placeholder='Last Name' 
                    
                    value ={lastName} 
                    onChangeText = {(text) => setlastName(text)}
                    
                    padding = '5%'
                    
                />
                <TextInput
                    style={styles.input}
                    
                
                    
                    placeholder='Phone Number' 
                    
                    value ={PhoneNumber} 
                    onChangeText = {(text) => setPhoneNumber(text)}
                    
                    padding = '5%'
                    
                />
                {/* <TextInput
                    style={styles.input}
                    
                
                    
                    placeholder='MM/DD/YYYY' 
                    
                    value ={birthday} 
                    onChangeText = {(text) => setBirthday(text)}
                    
                    padding = '5%'
                    
                /> */}
                
                <TextInput
                    style={styles.input}
                    
                
                    placeholder = 'Email' 
                    
                    value = {email} 
                    onChangeText = {(text) =>setEmail(text)}

                    padding = '5%'
                />
                <TextInput
                    style={styles.input}
                    
                
                    placeholder = 'Password' 
                    
                    value = {Password} 
                    onChangeText = {(text) =>setPassword(text)}

                    padding = '5%'
                />
                {/* <TextInput
                    style={styles.input}
                    
                
                    placeholder = 'Profile Picture URL' 
                    
                    value = {imageUrl} 
                    onChangeText = {(text) =>setimageUrl(text)}

                    padding = '5%'
                /> */}
            <FlatButton
                text = "join the Family" onPress= {SignupAndaddUser} ></FlatButton>
            </View>
            
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {},

    input: {
        height: 65,
        margin: 12,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius:50,
        padding: 30,
        
        
        backgroundColor: '#8C8C8C'
        
    },
})
   
  
    
