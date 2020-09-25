import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,List,Left, Right,Thumbnail} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class ScreenThree extends Component {

    render(){

return (
    <Container >
 
     <ImageBackground source={require('../images/SwaBook-Cuts/thirdonboarding2.png')} 
                        style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>

      
            <List style={{alignItems:'center',marginTop:200,width:'90%'}}>
               
                                            
                 <Text style={{fontSize:15 , fontWeight:'bold',color:'#6f3950',alignSelf:'center',marginTop:180}}>Let's meet new friends</Text>
                 <Text style={{color:'#6f3950'}}>
                 Swabook let you find new books and new friends 
                 </Text>
            </List>

            <List style={{flexDirection:'row'}}>
          
                <Right>
                <TouchableOpacity  onPress={() => {Actions.Login();}}
                                        style={{marginRight:40,marginTop:140}}>
                        <Text style={{color:'#6f3950',fontWeight:'bold'}}>Next ></Text>
                    </TouchableOpacity>
                </Right>        
            </List>
     </ImageBackground> 


    </Container>
    )}
}
