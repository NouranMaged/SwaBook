import React, { Component } from 'react';
import { Image,ScrollView,TouchableOpacity,Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body ,Right} from 'native-base';
import { Actions } from 'react-native-router-flux';
import MainHeader from '../Components/MainHeader';
import FabChat from '../Components/FabChat';

export default class BookDetails extends Component {
  state = {data: [],loaded: 0 }

 
        componentDidMount(){
        return fetch('https://floating-savannah-39193.herokuapp.com/api/Books/5c87943a2fa3a300041713f3/person')
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
    
  render() {
    return (
      <Container >
          <MainHeader txt={this.props.bookname}/>
        
      
        
          {/* <Container> */}
        
        <Content>
        <ScrollView>
          <Card style={{flex: 0,backgroundColor:'#f7f4ed' }}>


            <CardItem>
             
              <Left>
              <TouchableOpacity onPress={()=>{Actions.FriendProfile()}}>
                <Thumbnail source={{uri: this.state.data.avatar}}/>
                
                </TouchableOpacity>
                <Body> 
                  <Text>{this.state.data.name}</Text>
                  <Text note style={{color:'#6f3950'}}>{this.props.time}</Text>
                  </Body>
              </Left>
              
      
            </CardItem>

            <CardItem>
              <Body>
                <Image  source={{uri: this.props.photo}} style={{height: 200, width: "100%", }}/>
                <Text style={{fontSize:24,color:'#6f3950',fontWeight:'bold',alignSelf:'center',margin:10}} >{this.props.bookname}</Text>
                <Text  style={{color:'brown'}}>Author : {this.props.auther}</Text>

                <Text style={{alignSelf:'center',fontSize:16}}>{this.props.descreption}</Text>
              </Body>
            </CardItem>
             
            </Card>

            <Card style={{alignItems:"flex-start"}}>
              <Text style={{color:'#6f3950',fontWeight:'bold',margin:10}}>Reviews</Text>
              <Text style={{marginLeft:10,marginBottom:10}}>{this.props.review}</Text>
            </Card>

            <Card style={{alignItems:"flex-start",marginBottom:10}}>
              <Text style={{color:'#6f3950',fontWeight:'bold',margin:10,marginLeft:10}}>Book Details</Text>
              <Text style={{marginLeft:10}}>Status : {this.props.deal}</Text>
              <Text style={{marginLeft:10}}>condition : {this.props.condetaion }</Text>
              <Text style={{marginLeft:10,marginBottom:10}}>Category : {this.props.category}</Text>
            </Card>
            </ScrollView>
           
        </Content>
        <FabChat/>
         
    </Container> 
    );
  }
  
}