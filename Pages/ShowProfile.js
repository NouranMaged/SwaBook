import React, { Component } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Alert ,Image,Linking} from 'react-native'
import {  Content, Text, Icon, Card, CardItem,Button  } from 'native-base'
import { Actions } from 'react-native-router-flux';
import AllCards from '../Cards/AllCards';
import MainHeader from '../Components/MainHeader';

export default class MyProfile extends Component {

  render(){
    return(

    <Content>
      <MainHeader txt='My Profile' icon='arrowleft'/>

      <CardItem style={{justifyContent: 'center',alignItems: 'center'}}> 

        <Image source={this.props.avatar}
               style={{width:150,height:150,borderRadius:90,marginTop:20}} /> 
      

      </CardItem>

      <CardItem>
        <Image source={require('../images/profileone.png')}
                      style={{width:25,height:25,marginRight:10,}} />
        <Text>{this.props.person}</Text>
      </CardItem> 
 
      <CardItem >
     

          <TouchableOpacity onPress={()=>{ 
                            Linking.openURL(`tel:+20${this.props.phone}`);  }}>
            <Text >{+0}{this.props.phone}</Text>
          </TouchableOpacity>

      </CardItem>

      <CardItem>
        <Image source={require('../images/email.png')}
                      style={{width:25,height:25,marginRight:10,}} />

        <TouchableOpacity onPress={()=>{ 
                          Linking.openURL(`mailto:${this.props.email}?subject=mailsubject&body=mailbody`);  }}>
          <Text >{this.props.email}</Text>
        </TouchableOpacity>
      </CardItem>
      <Card style={{marginTop:20}}>
        
          <Text style={{fontSize:20,fontWeight:'bold'}} >My Books</Text>
          <CardItem>
          <Button rounded block style={{width:'90%',height:40,alignSelf:'center',marginBottom:120,backgroundColor:'white'}}
                  onPress={() =>{Actions.AddBook()}}
                  
                  >
          <Text style={{color:'green' ,fontSize:15,fontWeight:'bold'}}>Add Your Book Now !</Text>
          </Button>
          </CardItem>
       
      </Card>

   
       <Fab
            active={!this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: 'blue' ,marginBottom:140}}
            position="bottomRight"
            onPress={()=>{Actions.Login()}}>
            <Icon name="home" />        

      </Fab>

    </Content>

  )}
}