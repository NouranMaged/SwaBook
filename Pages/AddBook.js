import React, { Component } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Alert ,Image,AsyncStorage} from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left, Picker } from 'native-base'
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import { Rating, AirbnbRating } from 'react-native-elements';
import MainHeader from '../Components/MainHeader';
import FabIcon from '../Components/FabIcon';

const options={
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  }
  
export default class AddBook extends Component {


  constructor(props) {
    super(props);
    this.state = {
          name: '',
          author: '',
          condition:'',
          description: '',
          category: '',   ///
          selectedstatus:'',  //
          avatarSource: require('../images/addphoto.png') ,

    };
    // this.save=this.save.bind(this);
    }

    onValueChange(value: string) {
    this.setState({
    category: value,

    });}

    onValueChangestatus(value: string) {
    this.setState({

    selectedstatus:value
    });}

    onValueChangecondition(value: string) {
      if (value==1){

    this.setState({
    condition:"Poor"})}

    else if (value==2){
      this.setState({
        condition:"Good"
      })}

      else if (value==3){
        this.setState({
          condition:"Very Good"
        })}

      else if (value==4){
        this.setState({
          condition:"Great"
        })}

    }


postMsg= (name, author,condition , description,category,status)=>{
if(this.state.name!='' && this.state.condition!='' && this.state.selectedstatus!=''){ 
  
 fetch('https://contact-form-db-133.firebaseio.com/contacts.json', {
  // fetch('https://floating-savannah-39193.herokuapp.com/api/Books', {

    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body:JSON.stringify({


     "bookName":this.state.bookName,
     "author": this.state.author,
     "condetaion": this.state.condition,
     "category":this.state.category,
     "deal": this.state.selectedstatus,
     "descreption": this.state.description,
     "photo":this.state.avatarSource.uri , //////
     "time": "12:30 am",
     "personId": "5c86a1efb0a1a8000405e952",

    }),
    })
    // )
      
    .then((response) =>  response.json())
    .then((responseData) => {
    if(responseData.name != null ){

    console.log(responseData)
    this.setState({
    name: null,
    author: null,
    condition:null,
    description: null,
    category: null, 
    selectedstatus:null,
    avatarSource: require('../images/addphoto.png'),
    isSubmited: true,

    })              
    }
    else{
    Alert.alert(
    'Something went wrong',
    [
    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: false }
    )
    }

    })
    .done();
    }
    else{
    Alert.alert(
    'Oops !',
    'Press ADD button after Entering Title , Status & Condition .',
    [
    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    ],
    { cancelable: false }
    )        
    }      };

  


    _togglePostCard(){
    this.setState({
    isSubmited: false
    })}


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
    <Container style={{backgroundColor:'#f7f4ed'}}>
  
    <MainHeader txt='Add Book' icon='arrowleft'/>
    <Content>


    <Card style={styles.postCard}>
    {this.state.isSubmited ?
    <View>
    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>
    <Icon active name="ios-checkmark-circle" style={{fontSize: 30, color: '#4CAF50', marginLeft:5, marginRight:10}} />
    <Text style = {{flex:1}}>Your book has been Added Successfully</Text>
    </Item>
    </CardItem>
    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Left>
    </Left>
    <Body>
    <TouchableOpacity success onPress={() => this._togglePostCard()}>
    <Icon active name="refresh" style={{fontSize: 40, color: '#64DD17', marginLeft:10}} />
    </TouchableOpacity>
    </Body>
    <Right>
    </Right>
    </CardItem>
    </View>



    :



    <View>
    <CardItem style={{justifyContent: 'center',alignItems: 'center'}}>
    <Item  rounded style={{borderRadius:20,borderTopColor:"black"}}>
    <TouchableOpacity      onPress={this.myfun}>
    <Image  
    source={this.state.avatarSource} 
     style={{width:100,height:100,borderRadius:10}} />
    </TouchableOpacity>
     </Item>
    </CardItem>


    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>
    <Input placeholder='Title*' onChangeText={(name) => this.setState({name})} />
    </Item>
    </CardItem>
    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>
    <Input placeholder='Author' onChangeText={(author) => this.setState({author})}  />
    </Item>
    </CardItem>


    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>

    <Picker
    mode="dropdown"
    iosHeader="Select your Category"

    iosIcon={<Icon name="arrow-down"  />}
    style={{ width: undefined }}
    selectedValue={this.state.category}
    onValueChange={this.onValueChange.bind(this)}
    >


    <Picker.Item label="Select Category" value="no selection" />
    <Picker.Item label="History" value="History" />
    <Picker.Item label="Sport" value="Sport" />
    <Picker.Item label="Language" value="Language" />
    <Picker.Item label="Law" value="Law" />
    <Picker.Item label="Religion" value="Religion" />
    </Picker>
    </Item>

    </CardItem>



    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>

    <Picker
    mode="dropdown"
    iosHeader="Select Status"

    iosIcon={<Icon name="arrow-down"  />}

    selectedValue={this.state.selectedstatus}
    onValueChange={this.onValueChangestatus.bind(this)}>

    <Picker.Item label="Status" value="no Status Selected" />
    <Picker.Item label="Exchange" value="Exchange" />
    <Picker.Item label="Donate" value="Donate" />
    <Picker.Item label="As Agreement" value="As Agreement" />

    </Picker>
    </Item>

    </CardItem>



    <CardItem style={{backgroundColor:'#f7f4ed'}}>
    <Item>


    <Text>Condition</Text>


    <AirbnbRating

    count={4}
    reviews={["Poor", "Good", "Very Good","Great"]}
    defaultRating={0}
    size={35}
   
    onFinishRating={this.onValueChangecondition.bind(this)}

    />
    </Item>
    </CardItem>

    <Form style = {{ marginLeft: 20, marginRight:20 }}>
    <Textarea rowSpan={5} bordered placeholder="Description" onChangeText={(description) => this.setState({description})}   />
    </Form> 
    <CardItem style={{backgroundColor:'#f7f4ed'}} >
    
    <Body >
    <Button  rounded style={{backgroundColor: '#8e7065'}} onPress={() => this.postMsg()}>
    <Text>ADD</Text>
    </Button>

    </Body>
   
    </CardItem>
    </View>
    }
    </Card>
    </Content>
    </Container>
    );
    }
    }

    const styles = StyleSheet.create({
    loading:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f7f4ed'
    },
    alertBox: {
    backgroundColor: '#f7f4ed',
    },
    alertText: {
    fontSize:12,
    color: '#ffffff',
    },
    conCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    backgroundColor:'#f7f4ed'
    },
    conCardItem: {
    marginLeft: 5,
    marginTop:5,
    backgroundColor:'#f7f4ed'
    },
    conDetails: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
    backgroundColor:'#f7f4ed'
    },
    postCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor:'#f7f4ed'
    }
    });