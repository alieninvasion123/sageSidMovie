import React, {useState} from 'react';
import SageNavigation from './navigation/SageNavigation';
import SignIn from "./screen/SignIn";
import View from "react-native-web";

export default function App(){

    const [user, setUser] = useState({token: ""});

    return(
        <SageNavigation />
        );


}
