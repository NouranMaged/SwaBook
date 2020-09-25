import React, { Component } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Alert ,Image,AsyncStorage,ScrollView,Linking} from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button,Fab, Input, Form, Textarea, Left, Picker,Spinner } from 'native-base'
import { Actions } from 'react-native-router-flux';
import MainHeader from '../Components/MainHeader';
import FabIcon from '../Components/FabIcon';
import DonationCards from '../Cards/DonationCards';
import FabChat from '../Components/FabChat'
import Advertisement from '../Cards/Advertisement';


export default class FriendProfile extends React.Component {
    // componentDidMount(){AsyncStorage.setItem('HomeScreen','1')}
    state = {data: [],dataTwo: [],loaded: 0 ,loadedT:0}

    componentDidMount(){
    fetch('https://floating-savannah-39193.herokuapp.com/api/Books/5c8788642fa3a300041713ef/person')
    .then((response) => response.json())
    .then((responseJson) => {

    this.setState({
    loaded: 1,
    data: responseJson,
    }, function(){

    });

    })
    .catch((error) =>{
    console.error(error);
    });

    }

  render(){
        return(
        <Container style={{backgroundColor:'#f7f4ed'}} >        
          <MainHeader txt='My Profile'/>              
            <ScrollView >  
                {this.info()}
            </ScrollView>      
                  
        </Container>
        );
    }

    info(){
        if(this.state.loaded ===0){
        return( <Spinner/>)
        }else{
      
        return(
    
        <View>
        <Content>
    
        <CardItem style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'#f7f4ed'}}>
          <Image source={{uri: this.state.data.avatar}}
                style={{width:150,height:150,borderRadius:90,marginTop:20}} /> 
        </CardItem>
    
    
         <CardItem style={{alignSelf:'center',backgroundColor:'#f7f4ed'}}>
          
          <Text>{this.state.data.name}</Text>
         
        </CardItem> 

    
       
        <CardItem style={{backgroundColor:'#f7f4ed'}} >
          <Image source={require('../images/call.png')}
                 style={{width:25,height:25,marginRight:10,}} />
          <Text >{+0}{this.state.data.phone}</Text>
        </CardItem>
    
    
        <CardItem style={{backgroundColor:'#f7f4ed'}}>
          <Image source={require('../images/email.png')}
                 style={{width:30,height:30,marginRight:10,}} />
          <Text >{this.state.data.email}</Text>
        </CardItem>

    
    
             <Card style={{marginTop:20,backgroundColor:'#f7f4ed'}}>
        
               <Text style={{fontSize:20,fontWeight:'bold',color:'#361526',marginLeft:20}} >My Books</Text>
                  <CardItem style={{marginTop:20,backgroundColor:'#f7f4ed'}}>
                <Button rounded block style={{width:'90%',height:40,alignSelf:'center',
                        marginBottom:120,backgroundColor: '#8e7065'}}
                        onPress={() =>{Actions.AddBook()}}
                          >
                  <Text style={{color:'#361526' ,fontSize:15,fontWeight:'bold'}}>Add Your Book Now !</Text>
                  </Button>
                  </CardItem>
                

              </Card> 
        </Content>

        <Fab active={!this.state.active}
             containerStyle={{ }}
             style={{ backgroundColor: 'grey' }}
             position="topRight"
             onPress={()=>{Actions.Login()}}>
       
           <Icon name="log-out" type="Entypo"/>

        </Fab>
  
      </View>   
    
        )}}
}