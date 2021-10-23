
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Button, icon} from 'react-native';

import { Icon } from 'react-native-elements';

import { Video, AVPlaybackStatus } from 'expo-av';


export default function ClickableListItem({text}){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

  return (
    
    <View style={styles.container}>
        <Text> {text}</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>

  )
        }

const styles = StyleSheet.create({
    button:{
        borderRadius :40,
        // paddingVertical:14,
        // paddingHorizontal:20,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop:30,
        width: 400,
        paddingTop: 15,
       

    },

    buttonText:{
        color:'black',
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
    },
    container: {
        width: 400,

        alignSelf: "center",
    }
})
