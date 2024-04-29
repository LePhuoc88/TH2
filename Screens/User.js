import React, {useState, useEffect} from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { fetchContacts, fetchUserContact } from "../utility/API";
import ContactThumbnail from "../components/ContactThumbnail";
import colors from "../utility/colors";
import { Avatar, Text } from "react-native-paper";

const User = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUserContact().then(users => {
            setUser(users)
            setLoading(false)
            setError(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
            setError(true)
        })
    }, [])

    const {avatar, name, phone} = user;

    // return(
    //     <View style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         backgroundColor: colors.blue,
    //     }}>
    //         {loading && <ActivityIndicator size='large'/>}
    //         {error && <Text style={{fontSize: 20}}>Error....</Text>}
    //         {!loading && !error &&(
    //             <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
    //         )}
    //     </View>
    // )
    // return(
    //     <View style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         backgroundColor: colors.blue,
    //     }}>
    //         {loading && <ActivityIndicator size='large'/>}
    //         {error && <Text style={{fontSize: 20}}>Error....</Text>}
    //         {!loading && !error &&(
    //             <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
    //         )}
    //     </View>
    // )

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'aqua'
        }}>
            <Avatar.Image source={{uri: 'https://randomuser.me/api/portraits/men/55.jpg'}} size={150}/>
            <Text style={{
                fontSize: 30,
                color: "white",
                fontWeight: 'bold'
            }}>Yandel</Text>
            <Text style={{fontSize: 24, color: "white"}}>610 851 5342</Text>
        </View>
    )
}

export default User;