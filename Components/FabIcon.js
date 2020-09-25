import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Fab } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class FabIcon extends Component {
  constructor(props) {
    super(props)
      this.state = {
        active: 'False'
      };
    }
   
  render() {
    return (
            <Fab
                  active={!this.state.active}
                  direction="up"
                  containerStyle={{ }}
                  style={{ backgroundColor: '#6f3950' ,marginBottom:30}}
                  position="bottomRight"
                  onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="options" />

                <Button onPress={() => {Actions.Places();}}
                        style={{ backgroundColor: '#8e7065' ,marginBottom:30}}>
                  <Icon name="location" type="Entypo" />
                </Button>



                <Button  onPress={() => {Actions.AddBook();}}
                         style={{ backgroundColor: '#dbd7ce',marginBottom:30 }}>
                  <Icon name="add" style={{color:'#361526'}} />
                </Button>


                <Button onPress={() => {Actions.MyProfile();}}
                        style={{ backgroundColor: '#361526' ,marginBottom:30}}>
                  <Icon name="person" />
                </Button>
               
            </Fab>
    )}
}