import React from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { PricingCard } from 'react-native-elements';



export default function SubscriptionScreen() {
    return (
        <SafeAreaView style = {{flex: 1,backgroundColor: '#121111'}}>
            
            <PricingCard
            color="#333435"
            title="Free"
            price="$0"
            info={['Meal Plans', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: '' }}
        ></PricingCard>
           
     </SafeAreaView>
        
          
    )
}

const styles = StyleSheet.create({})
