import React, { Component } from 'react';
import { Container, Header, Content, Footer, Right, Button, Icon ,Card, List, Body, CardItem} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends Component {

    render(){

return (
    <Container  >

      <ImageBackground source={require('../images/SwaBook-Cuts/firstonboarding2.png')} 
                       style={{width: '100%', height: '100%',}}>
                       
                                    
                 {/* <Text style={{fontSize:15,color:'#6f3950',paddingLeft:20, fontWeight:'bold',
                               paddingRight:10,marginTop:420,alignSelf:"center"}}>
                 SwaBook helps you Find,Exchange and Donate your books
                </Text>

                
                 
                 <Button iconLeft transparent style={{paddingLeft:270,marginTop:90}}
                        onPress={() => {Actions.ScreenTwo();}}>
                    <Text style={{color:'#6f3950',fontWeight:'bold'}}>Next ></Text>
                              
                 </Button> */}

                 
            <List style={{alignItems:'center',marginTop:200,width:'90%',alignItems:'center'}}>
              
                                            
              <Text style={{fontSize:15 ,marginLeft:50, fontWeight:'bold',marginTop:200,color:'#6f3950'}}>
              SwaBook helps you Find,Exchange and Donate your books so fast and easy
              </Text>
            
           </List>

         <List style={{flexDirection:'row'}}>
          
                 <Right>
                  <TouchableOpacity  onPress={() => {Actions.ScreenTwo();}}
                                     style={{marginRight:40,marginTop:120}}>
                     <Text style={{color:'#6f3950',fontWeight:'bold'}}>Next ></Text>
                 </TouchableOpacity>
                 </Right>
                   
         </List>
                 
            </ImageBackground> 

    </Container>
    )}
}