import React, { Component } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Alert ,Image,AsyncStorage,ScrollView,Linking} from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button,Fab, Input, Form, Textarea, Left, Picker,Spinner } from 'native-base'
import { Actions } from 'react-native-router-flux';
import MainHeader from '../Components/MainHeader';
import FabIcon from '../Components/FabIcon';
import DonationCards from '../Cards/DonationCards';
import FriendBooks from '../Cards/FriendBooks';
import FabChat from '../Components/FabChat'


export default class FriendProfile extends React.Component {
    // componentDidMount(){AsyncStorage.setItem('HomeScreen','1')}
    state = {data: [],dataTwo: [],loaded: 0 ,loadedT:0}

    componentDidMount(){
    // fetch('https://floating-savannah-39193.herokuapp.com/api/Books/5c86b223b0a1a8000405e956/person')
        fetch('https://floating-savannah-39193.herokuapp.com/api/Books/5c87943a2fa3a300041713f3/person')

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
        <Container >        
          <MainHeader txt={this.state.data.name}/>              
            <ScrollView >  
                {this.info()}
            </ScrollView>          

          <Fab
            active={!this.state.active}
            containerStyle={{ }}
            style={{ backgroundColor: 'green' ,marginBottom:300}}
            position="bottomRight"
            // onPress={() => { Linking.openURL('whatsapp://send?text=hello&phone=+0201289170270')}}>
            onPress={() => { Linking.openURL('whatsapp://send?text=hello&phone=+0201227750709')}}>

      
          <Icon name="whatsapp"  type='FontAwesome' style={{fontSize:30}}/> 

           
      </Fab>

      <Fab
        active={!this.state.active}
        containerStyle={{ }}
        style={{ backgroundColor: '#6f3950',marginBottom:230 }}
        position="bottomRight"
        onPress={() => {Actions.Chat()}}
        >
        <Icon name="chatbubbles" /> 

      </Fab>
                  
        </Container>
        );
    }

    info(){
        if(this.state.loaded ===0){
        return( <Spinner/>)
        }else{
        // return(
        //   this.state.data.map((response) => {
        return(
    
    
    
        <View>
        <Content>
    
        <CardItem style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'#f7f4ed'}}>
    
        <Image source={{uri: this.state.data.avatar}}

        style={{width:150,height:150,borderRadius:90,marginTop:20}} /> 
        </CardItem>
    
    
         <CardItem style={{alignSelf:'center'}}>
          <Text>{this.state.data.name}</Text>
        </CardItem> 
    
    
       
        <CardItem >
            <Image source={require('../images/call.png')}
              style={{width:25,height:25,marginRight:10,}} />
      
          <TouchableOpacity onPress={()=>{ 
                            Linking.openURL(`tel:+20${this.state.data.phone}`);  }}>
            <Text >{+0}{this.state.data.phone}</Text>
          </TouchableOpacity>
    
        </CardItem>
    
  
        <CardItem>
          <Image source={require('../images/email.png')}
                        style={{width:30,height:30,marginRight:10,}} />
      
      
              <TouchableOpacity onPress={()=>{ 
                  Linking.openURL(`mailto:${this.state.data.email}?subject=mailsubject&body=mailbody`);  }}>
                  <Text >{this.state.data.email}</Text>
              </TouchableOpacity>
        </CardItem>
    
        <CardItem >  

        <FriendBooks/>
    
        </CardItem>  
    
        </Content>

      
    
        </View>   
    
        )}}
}