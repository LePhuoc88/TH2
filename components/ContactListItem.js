import { Avatar, Divider, Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";


const ContactListItem = ({name, avatar, phone, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={{flexDirection: "row", padding: 10}}>
                <Avatar.Image source={{uri: avatar}} size={40}/>
                <View style={{marginLeft: 10}}>
                    <Text>{name}</Text>
                    <Text style={{marginTop: 5}}>{phone}</Text>
                </View>
            </View>
            <Divider/>
        </TouchableOpacity>
        
    )
}

export default ContactListItem;