"use strict";

import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import Logo from '../../components/Logo.js'
import LoginForm from './LoginForm'
import colour from '../../../config/colors.js'

var width = Dimensions.get('window').width;

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo
                    image={require('../../Images/icons8-gas-pump-96.png')}
                    backgroundColor= 'black'
                    width={styles.Logo.width}
                    height={styles.Logo.height}
                    />
                <LoginForm style={styles.LoginForm}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        minHeight: '100%',
        minWidth: '100%',
        alignItems: 'center',
        backgroundColor: colour.background.signUpSignIn,
    }, 
    Logo: {
         width: width*0.4,
         height: width*0.4,
    },
});
