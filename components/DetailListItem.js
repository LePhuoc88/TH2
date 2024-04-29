import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import colors from '../utility/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailListItem = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.borderContainer}>
            <View style={styles.wrapper}>
                <View style={{margin: 10}}>
                    <Icon name={"mail"} size={25} style={{color: "black"}}/>
                </View>
                <View style={styles.container}>
                    {icon && (
                        <Icon
                            name={icon}
                            size={24}
                            color={colors.black} 
                            style={{ marginRight: 20 }}
                        />
                    )}
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DetailListItem;

DetailListItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

const styles = StyleSheet.create({
    borderContainer: {
        paddingLeft: 24,
    },
    wrapper: {
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    contentContainer: {
        justifyContent: "center",
        flex: 1,
    },
    title: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        color: colors.black, // Optionally apply a different color for subtitles
    },
});
