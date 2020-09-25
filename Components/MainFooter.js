import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class MainFooter extends Component {
   
  render() {
    return (
      
      <Footer > 
          <FooterTab style={{backgroundColor:'#302001'}}>
            <Button onPress={() => {Actions.Home();}} >
              <Icon name="home" style={{color:'#b27b11'}}  />                                
              {/* <Text style={{fontSize: 10}} numberOfLines={1}>Home</Text> */}
            </Button>

            <Button onPress={() => {Actions.Home();}}>
              <Icon name="heart" style={{color:'#b27b11'}}/>
            </Button>

            <Button onPress={() => {Actions.Home();}}>
              <Icon name="add" style={{color:'#b27b11'}}/>
            </Button>


            <Button onPress={() => {Actions.Home();}}>
              <Icon name="chatbubbles" style={{color:'#b27b11'}}/>
            </Button>

            <Button onPress={() => {Actions.Profile();}} >
              <Icon  name="person"  style={{color:'#b27b11'}}/>                                
            </Button>

          </FooterTab>
        </Footer>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});