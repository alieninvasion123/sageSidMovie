import React,{Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground,Navigator} from 'react-native';





export default class Welcome extends Component
{
    render(){
        return(

            
            <ImageBackground source={require('../assets/back1.jpg')}
            style={styles.container}>
                <Image 
                     style={styles.welcome}
                     source={require('../assets/welcome.png')}/>
            <View style={styles.inner}>
                <Text>Hellooo!!!!</Text>

            </View>

                
         
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inner: {
        marginBottom: 60,
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(225,225,225,0.6)',

        },
    
    welcome: {
       
        resizeMode: "contain",
        width: 200
        
     
    }
});