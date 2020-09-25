import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image ,View,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class MainHeader extends Component {

 

  render() {
    return (

<View >
        <Header style={{backgroundColor:'#f7f4ed'}}>
          
            <ImageBackground source={require('../images/Untitled-4.jpg')} 
                             style={{width: '120%', height: 70,justifyContent:'center',position:'absolute',
                             alignItems:'center'}}>
            </ImageBackground>

            <Left>
              <Button iconLeft transparent
                       onPress={this.goBack}
                       onPress={() => { Actions.pop();}}>
                <Icon name='arrow-back' style={{color:'#361526'}}/>
              </Button>
            </Left>


            <Body>
              <Title style={{fontWeight:'bold',fontSize:20,color:'#6f3950'}}>
              {this.props.txt}
              </Title>
            </Body>

            <Right>
              <Button iconLeft transparent
                      onPress={() => {Actions.Home()}}>
                <Icon name='home' style={{color:'#361526',fontSize:30}}/>
              </Button>
            </Right>   

            
          
        </Header>
</View>
    );
  }
}