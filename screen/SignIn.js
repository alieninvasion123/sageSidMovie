import React from 'react';

import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ImageBackground,AsyncStorage} from 'react-native';
import { ceil } from 'react-native-reanimated';


export default class SignIn extends React.Component {
    render(){
        return(
            
           <View style={styles.container}>
              <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                <View style={styles.content}>
                 <View style={styles.logoContainer}>
                     <Image 
                     style={styles.logo}
                     source={require('../assets/Octocat.png')}/>
                     <Text style={styles.title}>Welcome Back Meeoww!!</Text>
                 </View>

                 <View style={styles.inputContainer}>
                     <TextInput underlineColorAndroid='transparent' style={styles.input}
                     placeholder='Username'></TextInput>
                         <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                     placeholder='Password'>

                     </TextInput>
                    
                  </View>
                  <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                         <Text style={styles.buttonText}>LOGIN</Text>
                     </TouchableOpacity>
                </View>
             </ImageBackground>
        </View>                 

           
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center'
    },

    content:{
      alignItems: 'center'
    },
       
    logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100
       
        
    },
    title: {
      color: '#fff',
      marginTop: 10,
      marginBottom: 20
    },

    inputContainer:{
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(225,225,225,0.2)'
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.7)'
        
        
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',

    },
    buttonText: {
        fontSize: 16,
        
        textAlign: 'center',
    }
    


});
