"use strict";

import React, { Component } from 'react';
import { 
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Button } from '../../components/Button.js'


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput 
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            placeholder='username'
            selectionColor={'black'}
            style={styles.TextInput}/>
        <TextInput
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            placeholder='password'
            secureTextEntry={true}
            style={styles.TextInput}
        />
        <Button> Login </Button>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex:.7,
      width:'100%',
      height:'40%',
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 150,
    },
    TextInput: {
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,0.2)',
      fontSize: 22,
      height: '23%',
      width: '80%',
      color:'#FFF',
      marginBottom: 30,
    },
});
