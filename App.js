
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchContacts,  fetchRandomContacts, fetchUserContacts} from "./utility/API"
import Contacts from './Screens/Contacts';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './Screens/Profile';
import StackNavigator from './components/StackNavigator';
import Favorites from './Screens/Favorites';
import User from './Screens/User';
import TabNavigator from './components/TabNavigator';
import Store from './components/Store';
import DrawerNavigator from './components/TabNavigator';
import { Provider } from 'react-redux';

const App = () => {
  // useEffect(() => {
  //   fetchContacts()
  //   .then(data=> console.log(data))
  // }, [])

  return (
    // <SafeAreaProvider>
    //   <TabNavigator/>
    // </SafeAreaProvider>
    
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
