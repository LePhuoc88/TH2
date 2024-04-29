import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { fetchContacts } from "../utility/API";
import ContactListItem from "../components/ContactListItem";
import {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} from '../components/Store'
import { useDispatch, useSelector } from 'react-redux'
import { State } from "react-native-gesture-handler";

const Contacts = ({navigation}) => {
    // const [contacts, setContacts] = useState([])
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    const {contacts, loading, error} = useSelector((state) => state);
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     fetchContacts().then(data => {
    //         setContacts(data)
    //         setLoading(false)
    //         setError(false)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         setLoading(false)
    //         setError(true)
    //     })
    // }, [])

    useEffect(() => {
        dispatch(fetchContactsLoading());
        fetchContacts().then(contacts => {
            dispatch(fetchContactsSuccess(contacts));
        })
        .catch(e => {
            dispatch(fetchContactsSuccess());
        })
    }, [])
    const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));

    const renderItem = ({item}) => {
        return(
            <ContactListItem
            avatar={item.avatar}
            name={item.name}
            phone={item.phone}
            onPress={() => navigation.navigate("Profile", {contact: item}) }/>
            
        )
    }
    return (
        <View style = {{flex:1, justifyContent: "center"}}>
            {loading && <ActivityIndicator size={30} color="blue"/>}
            {error && <Text variant="headlineLarge">Error loading....</Text>}
            <FlatList
                data={contacts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Contacts;