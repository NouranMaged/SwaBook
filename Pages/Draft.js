import React, { Component } from 'react'
import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List} from 'native-base';
import { TouchableOpacity, Text,ScrollView ,View,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class AllCards extends React.Component {

    state = {data: [],loaded: 0 }

    componentDidMount(){
      return fetch(`https://floating-savannah-39193.herokuapp.com/api/Books`)
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            loaded: 1,
            data: responseJson.concat(responseJson),
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        })
    .then(
          fetch(`https://floating-savannah-39193.herokuapp.com/api/People`)
        .then((res) => res.json())
        .then((resJson) => {
  
          this.setState({
            loaded: 1,
            data: resJson.concat(resJson),
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        })


         )
    }


    render(){

        return(
            <Container >
                <ScrollView>  
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
                  this.state.data.map((response,res) => {
                return(
                 <Content key={(response.id,res.id)}>   
                  <Card style={{marginBottom:20,width:'50%',alignSelf:'center'}} >
 
                <CardItem>
                  <Body>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{res.phone} </Text>
                         

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