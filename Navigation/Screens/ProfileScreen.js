import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
            onPress={() => navigation.navigate('Profile')}
            style={{fontSize: 26, fontWeight: 'bold' }}>Profile</Text>
        </View> 
    );
}