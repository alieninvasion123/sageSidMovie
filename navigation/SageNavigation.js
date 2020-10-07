import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Welcome from '../screen/Welcome';
import SignUp from "../screen/SignUp";
import SignIn from "../screen/SignIn";
import {SplashScreen} from "expo/build/removed.web";


const SageNavigation = createDrawerNavigator({

    welcome: Welcome,
    signIn: SignIn,
    signUp: SignUp,

});
export default createAppContainer(SageNavigation);
