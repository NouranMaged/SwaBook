import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Alert ,Image,ImageBackground} from 'react-native'
import { Container,  Content, Text, Icon, Card, CardItem, Button,Item,Header, Left,Body,Input} from 'native-base'
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';


const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',  
  }

export default class Add extends Component {


  constructor(props) {
    super(props);
    this.state = {
     name: '',
     email: '',
     phone:'',
     avatarSource: require('../images/Add.png') ,
     password:"",
     confirmpassword:null,     
    };
  }


  postMsg = (name, email,phone) => {

    if(this.state.name!='' &&( (this.state.email!='' && this.state.phone!='') && (this.state.password == this.state.confirmpassword))){ 
      fetch('https://floating-savannah-39193.herokuapp.com/api/People', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": this.state.name,
          "email": this.state.email,
          "phone": this.state.phone,
          "password":this.state.password,
           "avatar":this.state.avatarSource.uri
          
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
              if(responseData.name != null ){
                console.log(responseData)

              this.setState({
                name: "",
                email: "",
                phone:"",
                password:"",
                confirmpassword:null,
                avatarSource: require('../images/Add.png')  
              });

              Alert.alert('You Registered Successfully'),
              Actions.reset('Home')}

            else{ Alert.alert('Oops !','Something went wrong',
                [{text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},],
                { cancelable: false })}
            })
            .done();
            }
            else if (this.state.name===''){           
                this.setState({Error: 'Please enter your Name'})
            }
            else if (this.state.email!=this.state.email.match(/\S+@\S+\.\S+/)){           
                this.setState({Error: 'Please enter your Email'})
            }

            else if (this.state.phone!=this.state.phone.match(/^\d{11}$/)){ 
                this.setState({Error: 'Please enter valid Phone Number'})
            }
            else if ( this.state.password ==='' ){
                this.setState({Error: 'Please Enter Password'})
               }

            else if ( this.state.password !=  this.state.confirmpassword ){
             this.setState({Error: 'Please confirm password'})
            }
    };

    myfun=()=>{      
      
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
          
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          }
      
          else {
            let source = { uri: response.uri };
      
            this.setState({
               avatarSource: source,
            });
          }
          
        });
    }
                 
    render() {
      return (
        <Container style={{backgroundColor:'#Dbd7ce'}}>
           
               
        <Header style={{height:100,backgroundColor:'#f7f4ed',}}>

        <ImageBackground source={require('../images/../images/Untitled-4.jpg')} 
                             style={{width: '110%', height:100,
                             position:'absolute',alignSelf:'center',}}>
            
                <Image source={require('../images/new-logos/LOGO-4.png')} 
                       style={{width: 300, height: 180,alignSelf:'center'}}>
                </Image>
            </ImageBackground>
            
      </Header>
      <Content>                 

      <View>
        <CardItem style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'#Dbd7ce'}}>

            <Item  style={{}}>

                <TouchableOpacity  onPress={this.myfun}>
                    <Image source={this.state.avatarSource} 
                        style={{width:100,height:100}} />
                </TouchableOpacity>

            </Item>
        </CardItem>    

       <Text style={{alignSelf:'center',color:'red'}}>{this.state.Error}</Text>      
            <CardItem style={{backgroundColor:'#Dbd7ce'}}>
                <Item rounded style={{borderColor:'#361526'}}>
                    <Input placeholder=' User Name' 
                            onChangeText={(name) => this.setState({name})} />
        </Item>
      </CardItem>

      <CardItem style={{backgroundColor:'#Dbd7ce'}}>
          <Item rounded style={{borderColor:'#361526'}}>
              <Input rounded placeholder=' Email' 
                     onChangeText={email => this.setState({email})} keyboardType = {'email-address'} />
          </Item>
      </CardItem>

      <CardItem style={{backgroundColor:'#Dbd7ce'}}>
          <Item rounded style={{borderColor:'#361526'}}>
              <Input rounded placeholder='Mobile Number' 
                     onChangeText={phone => this.setState({phone})}  keyboardType = {'phone-pad'}/>
          </Item>
      </CardItem>
      
      <CardItem style={{backgroundColor:'#Dbd7ce'}}>
          <Item rounded style={{borderColor:'#361526'}}>
              <Input  rounded placeholder='Password'
                      password={true}
                      secureTextEntry={true} 
                      onChangeText={password => this.setState({password})}  />
          </Item>
      </CardItem>

      <CardItem style={{backgroundColor:'#Dbd7ce'}}>
          <Item rounded style={{borderColor:'#361526'}}>
              <Input  rounded placeholder='Confirm Password' 
                      password={true}
                      secureTextEntry={true}
                      onChangeText={confirmpassword => this.setState({confirmpassword})}  />
          </Item>
      </CardItem>

        <CardItem  style={{justifyContent:"center",backgroundColor:'#Dbd7ce'}}>
           <Button rounded style={{ backgroundColor:'#361526'}} onPress={() => this.postMsg()}>

             <Text>Register</Text>
           </Button>
        </CardItem>

     </View>
            </Content>
            </Container>
                );
            }
}