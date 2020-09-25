import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image ,View,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeHeader extends Component {
  render() {
    return (

        <Header style={{height:100,backgroundColor:'#f7f4ed',}}>
          
            <ImageBackground source={require('../images/../images/Untitled-4.jpg')} 
                             style={{width: '110%', height:100,
                             position:'absolute',alignSelf:'center',}}>
            
                <Image source={require('../images/new-logos/LOGO-4.png')} 
                       style={{width: 300, height: 180,alignSelf:'center'}}>
                </Image>
            </ImageBackground>

            <Button iconCenter
                    onPress={() => {Actions.Search();}}
                    transparent
                    style={{marginLeft:260,marginTop:20}}>
            <Icon name='search'style={{color:'#6f3950',fontSize:40}} />
          </Button>
        </Header>
    );
  }
}