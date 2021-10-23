import React ,{useLayoutEffect,useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { withTheme } from 'react-native-elements';
// import { auth,firebase } from '../../../firebase';
import {onSnapshot} from "@firebase/firestore"
import { firebase,db, database} from '../../../firebase';
// import database from '@react-native-firebase/database';
import { getDatabase, ref, onValue} from "firebase/database";


const getworkoutVideos = () =>{
  
     
  return firebase
    .firestore()
    .collection('images')
    .doc(random_images)
    .get()
    .then((querySnapshot)=> {
      const {image1} =doc.data();
      list.push({
        id:doc.id,
        image1
      })
      // let image1 = querySnapshot.docs.map(doc => doc.data())
      // console.log(image1)
      // return image1
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error)
    })


} 
console.log(getworkoutVideos)


const WorkoutsScreen = ({navigation}) => {
    const video = React.useRef(null); 
    const [status, setStatus] = React.useState({});
  

    
    
     
    
  


    useLayoutEffect(() => {
        navigation.setOptions({
         title: 'Workouts' ,
         headerBackTitle: ''
    

    }); 
    }, [])
            
      
    return (
               
            <ScrollView style = {{flex: 1, backgroundColor: '#FFFFFF', }}>
            <View style={{alignItems:'center'} }>
        <Text> this is a lklkvideo</Text>
        <Image source= {{uri: getworkoutVideos}} style = {{height:100,width:100}}>
          
        </Image>
      <Video
        ref={video}
        source={{uri: getworkoutVideos}}
           
        
        useNativeControls
        resizeMode="contain"
        style={{ width: 400, height: 300 }}
	  
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{alignItems:'center'} }>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
            </View>
        </View>
        <View style={{alignItems:'center'} }>
        <Text style = {{color: 'black'}}> this is a video  </Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        style={{ width: 400, height: 300 }}
	  
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{alignItems:'center'} }>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
            </View>
        </View>
        <View style={{alignItems:'center'} }>
        <Text> this is a video</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        style={{ width: 400, height: 300 }}
	  
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
            </View>
        </View>
    </ScrollView>
    )

     
      }
export default WorkoutsScreen

const styles = StyleSheet.create({})
