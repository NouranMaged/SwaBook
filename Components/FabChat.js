import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, View,Icon,Fab } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image,TouchableHighlight,Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class FabChat extends Component {
  constructor(props) {
    super(props)
      this.state = {
        active: 'False'
      };
    }
   
  render() {
    return (
      <View >
      <Fab
            active={!this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: 'green'  ,}}
            position="bottomRight"
            // onPress={() => { Linking.openURL('whatsapp://send?text=hello&phone=+0201289170270')}}>
            onPress={() => { Linking.openURL('whatsapp://send?text=hello&phone=+0201227750709')}}>

          <Icon name="whatsapp"  type='FontAwesome' style={{fontSize:30}}/> 

      </Fab>

      <Fab
        active={!this.state.active}
        containerStyle={{ }}
        style={{ backgroundColor: '#6f3950',marginBottom:70 }}
        position="bottomRight"
        onPress={() => {Actions.Chat()}}
        >
        <Icon name="chatbubbles" /> 

      </Fab>

      </View>

    )}
}