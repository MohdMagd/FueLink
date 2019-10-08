"use strict";

import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Content, Badge } from 'native-base';

var width = Dimensions.get('window').width;

var badgeWidth = width * .4;
var badgeHeight = width * .4;
var badgeRadius = width * .4;

export default class Logo extends Component {
  render() {
    return (
        <Content>
          <Badge primary style={[
            styles.Badge,
            {backgroundColor:this.props.backgroundColor},
            (this.props.width == null)? {width:styles.Badge.width} : {width : this.props.width},
            (this.props.height == null)? {height:styles.Badge.height} : {height : this.props.height},
            ]}>
            <Image source={this.props.image} style={[
              styles.Image,
              (this.props.width == null)? {width:styles.Image.width} : {width : this.props.width*.7},
              (this.props.height == null)? {height:styles.Image.height} : {height : this.props.height*.7},
              ]}/>
          </Badge>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
    Badge: {
      width: badgeWidth,
      height: badgeHeight,
      borderRadius: badgeRadius,
      backgroundColor:'#5E4085',
      alignContent: 'center',
      flexDirection: 'column',
      flex: 1,
      marginVertical: width * .2,
      borderWidth: 4,
      borderColor: "black"
    },
    Image: {
      // TODO: Fix Image Sizing ratio relative to badge
      marginVertical: badgeRadius * .15,
      alignSelf: 'center',
      justifyContent: 'center',
      width: badgeWidth*.4,
      height: badgeHeight*.4,
    }
});
