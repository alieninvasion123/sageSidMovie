import React,{Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground,Navigator} from 'react-native';




export default class Splash extends Component
{
    render(){
        return(
            <ImageBackground source={require('../assets/back1.png')} style= {{height: '100%', width: '100%'}}>
                <View
                  style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
                      <Image source={require('../assets/splash.png')}
                      style={{height:100,width:100}}>

                      </Image>

                </View>
            </ImageBackground>

        );
    }
}
