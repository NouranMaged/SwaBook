import React, { Component } from 'react';
import { Image,ScrollView ,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,} from 'native-base';
import { Actions } from 'react-native-router-flux';
import HomeHeader from '../Components/HomeHeader';
import MainFooter from '../Components/MainFooter'
import FabIcon from '../Components/FabIcon'


export default class Favourite extends Component {
  render() {
    return (
      <Container>
       <Content>
       
        <HomeHeader/>
        
        <ScrollView>
          <Card style={{marginBottom:20,width:'90%',alignSelf:'center'}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/MaleProfile.jpg')} />
                <Body>
                  <Text>User Name</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={require('../images/book.jpg')}  
                       style={{height: 200, width: 200, flex: 1,alignSelf:'center'}}/>
                <Text>
                  //Book Discription 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="star" />
                  <Text>Rating</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="star" />
                  <Text>Book status</Text>
              </Left>
            </CardItem>
          </Card>


          <Card style={{marginBottom:20,width:'90%',alignSelf:'center'}} >
            <CardItem>
              <Left>
                <Thumbnail source={require('../images/download.png')} />
                <Body>
                  <Text>User Name</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={require('../images/book.jpg')}  
                       style={{height: 200, width: 200, flex: 1,alignSelf:'center'}}/>
                <Text>
                  //Book Discription 
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="star" />
                  <Text>Rating</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon name="star" />
                  <Text>Book status</Text>
              </Left>
            </CardItem>
          </Card>

          </ScrollView>
       
       
       
        
        </Content>
        <FabIcon/>
      </Container>
    );
  }
}