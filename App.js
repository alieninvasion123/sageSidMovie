
import React from 'react';


import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import SignUp from './screen/SignUp';
import SignIn from './screen/SignIn';
import Splash from './screen/Splash';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import Welcome from './screen/Welcome';





 
 
 export default class App extends React.Component {
   render(){
     return (
       <View style={styles.container}>
             <Welcome/>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
    
     

   }
 });



