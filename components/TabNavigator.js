import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../Screens/Contacts";
import Profile from "../Screens/Profile";
import Favorites from "../Screens/Favorites";
import User from "../Screens/User";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utility/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Options from "../Screens/Options";

const getDrawerItemIcon = icon => ({ tintColor }) => (
    <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
)

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
                // headerTintColor: 'white',
                // headerStyle: { backgroundColor: colors.blue },
                // headerTitleAlign: 'center',
                headerShown: false
            }}>
            <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Contacts' }} />
            <Stack.Screen name="Profile" component={Profile} options={({ route }) => {
                const { Contact } = route.params;
                const { name } = Contact
                return {
                    title: name.split(' ')[0],
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colors.blue,
                    }
                }
            }} />
        </Stack.Navigator>
    )
}

const FavoritesScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
            screenOptions={{
                // headerTintColor: 'white',
                // headerStyle: { backgroundColor: colors.blue },
                // headerTitleAlign: 'center',
                headerShown: false
            }}
        >
            <Stack.Screen name="Favorites" component={Favorites}
                options={{ title: "Favorites" }} />
            <Stack.Screen name="Profile" component={Profile}
                options={{ title: "profile" }} />
        </Stack.Navigator>
    )
}

const UserScreens = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="User"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: colors.blue },
                headerTitleAlign: 'center',
                headerShown: false
            }}>
            <Stack.Screen name="User" component={User}
                options={{
                    headerTitle: "Me",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colors.blue,
                    },
                    headerRight: () => (
                        <MaterialIcons
                            name="settings"
                            size={24}
                            style={{ color: 'white', marginRight: 10 }}
                            onPress={() => navigation.navigate('Options')} />
                    )
                }}
            />
            <Stack.Screen name="Options" component={Options}
                options={{
                    title: "Options",
                    headerTintColor: 'black',
                    headerStyle: {
                        backgroundColor: 'white'
                    }
                }} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="ContactsScreens">
                <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('list'),
                    }} />
                <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('star'),
                    }} />
                <Drawer.Screen name="UserScreens" component={UserScreens}
                    options={{
                        drawerIcon: getDrawerItemIcon('person'),
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default DrawerNavigator;
