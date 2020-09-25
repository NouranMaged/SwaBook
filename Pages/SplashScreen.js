import React, { Component } from 'react';
import {Image,ImageBackground} from 'react-native'
import { Actions } from 'react-native-router-flux';


export default class SplashScreen extends Component {
//   componentDidMount(){
//     setTimeout(function(){

    
//     AsyncStorage.getItem('Home').then((value) =>{
//       if(value === '1'){  
//          Actions.pop(), Actions.Home()
//         }
//       else {
//          Actions.pop(),Actions.ScreenOne()
       
//       }
//     })
//   },1000);
  
// }

render(){
  setTimeout(() => {Actions.ScreenOne()}, 2000)   


return (


      <ImageBackground source={require('../images/2.jpg')} 
      style={{width: '100%', height: '100%',alignItems:'center'}}>

          <Image source={require('../images/new-logos/last-logo.png')} 
                 style={{width: 300, height: 300,marginTop:100}}/>
                
      </ImageBackground>
    )}
}

