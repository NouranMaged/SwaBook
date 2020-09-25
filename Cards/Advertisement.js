import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Thumbnail } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Advertisement extends Component {
   
  render() {
    return (
      
      <Footer style={{backgroundColor:'#dbd7ce',height:40,width:'90%',alignSelf:'center'}}> 

        <Thumbnail square 
                  style={{height:40,width:40,marginLeft:20}}
                  source={require('../images/antikhrestos.jpg')} />
                                        
        <Text style={{fontSize: 12,color:'#6f3950',marginLeft:5,marginTop:5}} numberOfLines={2}>
          Find the newest Novels by Ahmed Khaled Moustafa in stores Now!
        </Text>
 
        </Footer>
      
    );
  }
}
