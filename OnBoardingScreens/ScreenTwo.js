import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,List ,Thumbnail, Left, Right} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenTwo extends Component {

    render(){

return (
    <Container >

       <ImageBackground source={require('../images/SwaBook-Cuts/secondonboarding2.png')} 
                        style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>
            
            <List style={{alignItems:'center',marginTop:200,width:'90%'}}>
              
                                            
                 <Text style={{fontSize:15 , fontWeight:'bold',marginTop:150,alignSelf:'center',color:'#6f3950'}}>
                 Have you found your desired Book ?</Text>
                 <Text style={{color:'#6f3950'}}>
                 Save Money.. Save Enviroment
                 </Text>
            </List>

            <List style={{flexDirection:'row'}}>
             
                    <Right>
                     <TouchableOpacity  onPress={() => {Actions.ScreenThree();}}
                                        style={{marginRight:40,marginTop:120}}>
                        <Text style={{color:'#6f3950',fontWeight:'bold'}}>Next ></Text>
                    </TouchableOpacity>
                    </Right>
                      
            </List>
     </ImageBackground> 

    </Container>
    )}
}



// import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon,List ,Thumbnail, Left, Right} from 'native-base';
// import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
// import { TouchableOpacity, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// export default class ScreenTwo extends Component {

//     render(){

// return (
//     <Container >

//        <ImageBackground source={require('../images/SwaBook-Cuts/secondonboarding2.png')} 
//                         style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>

       
//                  {/* <Image source={require('../images/new-logos/LOGO-5.png')} 
//                         style={{width: 350, height: 300,marginTop:270,}}/> */}
            
//             <List style={{alignItems:'center',marginTop:200,width:'90%'}}>
              
                                            
//                  <Text style={{fontSize:15 , fontWeight:'bold',alignSelf:'center',color:'black'}}>
//                  Found Your Desired book ?</Text>
//                  <Text style={{color:'black'}}>
//                  Save Money.. Save Enviroment
//                  </Text>
//             </List>

//             <List style={{flexDirection:'row'}}>
             
//                     <Right>
//                      <TouchableOpacity  onPress={() => {Actions.ScreenThree();}}
//                                         style={{marginRight:40}}>
//                         <Text style={{color:'black',fontWeight:'bold'}}>Next ></Text>
//                     </TouchableOpacity>
//                     </Right>
                      
//             </List>
//      </ImageBackground> 

//     </Container>
//     )}
// }

