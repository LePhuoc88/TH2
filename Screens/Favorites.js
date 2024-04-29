import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import { fetchContacts } from "../utility/API";
import ContactThumbnail from "../components/ContactThumbnail";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactsLoading, fetchContactsSuccess } from "../components/Store";

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => { // Add navigation as a prop
    // const [contacts, setContacts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const { contacts, loading, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactsLoading());
        fetchContacts().then(data => {
            dispatch(fetchContactsSuccess(data));
        })
        .catch(e => {
            dispatch(fetchContactsSuccess());
        })
    }, [])

    const renderFavoriteThumbnail = ({ item }) => {
        const { avatar } = item;
        return (
            <ContactThumbnail
                avatar={avatar}
                onPress={() => navigation.navigate('Profile', { contact: item })} />
        )
    }

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={favorites}
                    keyExtractor={keyExtractor}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                    renderItem={renderFavoriteThumbnail} />
            )}
        </View>
    )

}

export default Favorites;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
    },
    list: {
        alignItems: "center",
    },
})
