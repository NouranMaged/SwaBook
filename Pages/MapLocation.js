import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {WebView} from 'react-native';



export default class MapLocation extends Component {


  render() {
    return (

      <Container >
        
        <WebView
            source={{uri: this.props.map}}
            style={{marginTop: 10}}
            />

      </Container>
    );
  }
}