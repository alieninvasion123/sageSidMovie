import React, {useState} from 'react';
import SageNavigation from './navigation/SageNavigation';

export default function App(){

    const [user, setUser] = useState([]);

    return(
        <SageNavigation />

    { user &&

    }
    );


}
