import React, { Component } from 'react';
import { Container,Text,Icon, Button ,Item,Input} from 'native-base';
import {Image,Alert} from 'react-native'
import { SocialIcon,} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from "react-native-fbsdk";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
    }

    loginfb=()=>{
        LoginManager.logInWithReadPermissions(["public_profile",'email']).then(
        function(result) {
        if (result.isCancelled) {
        console.log("Login cancelled");
        } else {
        console.log(
        "Login success with permissions: " +
        result.grantedPermissions.toString()
        );
        AccessToken.getCurrentAccessToken().then(
                (data) => {
        console.log(data);
        console.log(data.accessToken.toString());
                }
                );Actions.Home()
            }
            
            },
            function(error) {
            console.log("Login fail with error: " + error);
            }
        );}



    myFun=() =>{
        const{email: email,password: password } =this.state;
        if( email=="" && password=="" ){
            this.setState({Error: 'Please Fill the Data'},Alert.alert('Please fill data to Login'))
        }
        else if (email =="" ){
            this.setState({Error: 'Please enter email'})
        }
        else if (email!=email.match(/\S+@\S+\.\S+/)){
            this.setState({Error: 'Please enter a valid  email'})
        }
        else if (password ==""){
            this.setState({Error: 'Enter password'})
        }

        else if (password.length<6 ){
            this.setState({Error: 'Password minimum Length is 6'})
        }
 
        else{    
            // Actions.Home()
            Alert.alert(
                'Sorry !',
                'You are not Registered',
                [
                {text: 'Register Now!', onPress: () => {Actions.Register()}},
                 ],
                )
            ;
        }
        
    }

render(){
  
return (
    <Container style={{backgroundColor:'#Dbd7ce'}}>

    <Image source={require('../images/new-logos/last-logo.png')} 
           style={{width: 200, height: 200,alignSelf:'center',margin:10}}/> 

        <Text style={{alignSelf:'center',color:'red'}}>{this.state.Error}</Text>

        <Item rounded style={{marginBottom:10,marginLeft:20,marginRight:20,borderColor:'#361526'}}>
        <Icon name="email-open" type="MaterialCommunityIcons" />

            < Input  style={{width: 200,}}
                     placeholder='Email'
                     onChangeText={
                     email => this.setState({email})
                    }/>
        </Item>

        <Item rounded style={{marginBottom:30,marginLeft:20,marginRight:20,borderColor:'#361526'}}>
        
        <Icon name="textbox-password" type="MaterialCommunityIcons" />

            <Input placeholder='Password'
                   password={true}
                   secureTextEntry={true}
                   onChangeText={
                   password => this.setState({password})}
                  />
        </Item>

        <Button rounded block 
                style={{backgroundColor:'#361526',width:'90%',height:40,alignSelf:'center',marginBottom:100}}
                onPress={this.myFun}
                >
            <Text>Sign In</Text>
        </Button> 

        <SocialIcon title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={{width:'90%',height:40,alignSelf:'center'}}
                    onPress={this.loginfb}/>

        <Button transparent dark 
                style={{alignSelf:'center'}}
                onPress={() => {Actions.Register();}}>
            <Text style={{fontSize:18,fontWeight:'normal',color:'#361526'}}>No Account ? Join us!</Text>
        </Button>

  
    </Container>
    )}
}