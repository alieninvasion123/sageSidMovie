import React,{Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground,Navigator} from 'react-native';




export default class Splash extends Component
{
    render(){
        return(
            <ImageBackground source={require('../assets/back.jpg')} style= {{height: '100%', width: '100%'}}>
                <View
                  style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
                      <Image source={require('../assets/Octocat.png')} 
                      style={{height:100,width:100}}>

                      </Image>

                </View>
            </ImageBackground>

        );
    }
}