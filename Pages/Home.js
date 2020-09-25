import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Right,Card,CardItem,Body, Button, Spinner,ListItem, Icon,List} from 'native-base';
import { Text,AsyncStorage,CheckBox,FlatList,Alert, ActivityIndicator, StyleSheet,View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HomeHeader from '../Components/HomeHeader';
import FabIcon from '../Components/FabIcon'
import ThreeTabs from '../Components/ThreeTabs'
import Advertisement from '../Cards/Advertisement'


export default class Home extends React.Component {
    // componentDidMount(){AsyncStorage.setItem('Home','1')}

    render(){
        
        return(    
            <Container >
              <HomeHeader /> 
               
                  <ThreeTabs/>

              <FabIcon/>
              <Advertisement/>
            </Container>
    )}    
}
