import React, { useEffect, useState } from "react";
import { View, Text,StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-paper";
import { fetchRandomContact } from "../utility/API";
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
import colors from "../utility/colors";

const Profile = ({route}) => {
    // const [contact, setContact] = useState({});

    // useEffect(() => {
    //     fetchRandomContact()
    //     .then(data => {
    //         setContact(data);
    //     })
    //     .catch(e => console.log(e));
    // }, []);
    const{contact} = route.params;
    const {name, phone, cell, email, avatar} = contact

    return (
        <View style = {styles.container}>
            <View style = {styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>

            </View>
            <View style = {styles.detailsSection}>
                <DetailListItem Icon="mail" title="Email" subtitle={email}/>
                <DetailListItem Icon="phone" title="work" subtitle={phone}/>
                <DetailListItem Icon="smartphone" title="Personal" subtitle={cell}/>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColer: "white",
    },
})