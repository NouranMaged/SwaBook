import React, { Component } from 'react'
import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List,Thumbnail,Left} from 'native-base';
import { TouchableOpacity, Text,ScrollView ,View,Image,WebView ,Icon} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainHeader from '../Components/MainHeader';
import FabIcon from '../Components/FabIcon';



export default class Places extends React.Component {

    state = {data: [],loaded: 0 }
  
    componentDidMount(){
      return fetch('https://floating-savannah-39193.herokuapp.com/api/places')
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
            <Container style={{backgroundColor:'#f7f4ed'}}>
              <MainHeader txt='Meeting Points' icon='arrowleft'/> 

                <ScrollView>  
                    {this.info()}
                </ScrollView>
                <FabIcon/>

            </Container>
        );
    }
  

    info(){
        if(this.state.loaded ===0){
           return( <Spinner/>)
             }else{
                return(
                  this.state.data.map((response) => {
                return(
                 <Content  key={response.id}>   
                  <Card style={{marginBottom:20,width:'100%',marginTop:40,backgroundColor:'#f7f4ed'}}>
 
                <CardItem>

                <Left style={{flex:7}}>
                      <Thumbnail square 
                                 style={{flex:1, height: 150, borderRadius: 10, marginEnd:15}}
                                 resizeMode='cover'
                                 source={{ uri: response.image }} />
                </Left>



                  <Body  style={{flex:10}}>

                        <Text style={{fontSize:20,fontWeight:'bold',color:'#361526'}}>{response.name} </Text>
                        <Text style={{fontSize:12}}>{response.dayOff} </Text>
                        <Text style={{fontSize:12}}>{response.hours} </Text>

                    <Button style={{backgroundColor: '#8e7065', borderRadius: 10, 
                              height:30, width: 100, justifyContent:'center',marginTop:20}}
                            onPress={() => {
                            Actions.MapLocation({
                            "map":response.location
                        })
                          }}>
                        <Text style={{alignSelf: 'center',color:'#dbd7ce',fontWeight:'bold'}} uppercase={false} >Location</Text>
                      </Button>
                  
                    </Body>

                  </CardItem>
                    
                </Card>
                </Content>  
              )
          })
         )
        }
    }    
}