import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = ({ children }) => {
    return (
        <View style = {styles.cardSectionStyle}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd'
    }
});


export { CardSection };  // Can be also written as { Header : Header} but in ES6 if key and value is same name can be written like this.