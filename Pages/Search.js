import React, { Component } from 'react';
import {Icon, Item, Input, Container, Thumbnail, Text, Left, Body, Button, Card, CardItem, Content, View } from 'native-base'
import { Image ,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FabIcon from '../Components/FabIcon';
import MainHeader from '../Components/MainHeader';
import Advertisement from '../Cards/Advertisement';


export default class Search extends Component {
	state = {
		data: [],
		text: '',
    }
    

	componentDidMount() {

		fetch('https://floating-savannah-39193.herokuapp.com/api/Books?filter=%7B%22where%22%3A%7B%22deal%22%3A%22exchange%22%7D%7D')
			.then((response) =>response.json())
			.then((responseJson) => {
                this.setState({
                    loaded: 1,
                    data: responseJson,
                    }, function(){
            
                    });			
    })
			.catch((error) => {
				console.log(error);
            })
    }        

	render() {
        
		const { text } = this.state;
		const { data } = this.state;
		let result;
		if (text === '') {
			result = [];
        } 
        else {
			result = data.filter((i) => {
				return (i.author.toLowerCase().includes(text.toLowerCase()))
			});
	    }

		return (
			<Container style={{backgroundColor:'#f7f4ed'}}>
				<Content>
                     <MainHeader txt='Search' icon='arrowleft'/>
                        <Item rounded style={{marginTop:30 ,marginBottom:30,borderColor:'#361526'}}>
                            <Icon name={'search'} style={{marginLeft: 20, color:'grey'}} />
                            <Input onChangeText={(txt) => this.setState((prevState) => ({
                                ...prevState,
                                text: txt.trim()
                            }))}type='text' placeholder='Search for Books!' value={this.text} />
					  </Item>
					{result.length === 0 &&
						<Container style={{backgroundColor:'#f7f4ed'}}>
							{/* <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 10 }}>Search for Books!</Text> */}
						</Container>
					}
					{result.length !== 0 &&
						result.map((response) => (



				<Card style={{marginTop: 10, borderRadius:8,backgroundColor:'#f7f4ed'}} key={response.id}>
                  <CardItem thumbnail style={{marginTop:5,backgroundColor:'#f7f4ed'}}>

                    <Left style={{flex:7}}>
                      <Thumbnail square 
                                 style={{flex:1, height: 150, borderRadius: 10, marginEnd:15}}
                                 resizeMode='cover'
                                 source={{ uri: response.photo }} />
                    </Left>



                    <Body  style={{flex:10}}>
                        <Text numberOfLines={1} 
                              style={{fontFamily:'Serif', fontSize: 20, fontWeight: 'bold',color: '#6f3950'}}>
                              {response.bookName}
                        </Text>

                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                       
                        <Text style={{marginLeft:8, fontSize: 13,color:'#361526'}} >
                          {response.author}
                        </Text>

                      </View>
                      <Text style={{color:'#361526', marginLeft:8, fontSize: 15}} >
                          {response.deal}
                        </Text>

                      <Text note numberOfLines={4}
                            style={{marginBottom: 12, fontSize: 10}}>
                            {response.descreption}
                      </Text>
                      <TouchableOpacity style={{backgroundColor: '#8e7065', borderRadius: 10, height:30, width: 100, 
                                      justifyContent:'center'}}
                             onPress={() => {
                            Actions.BookDetails({
                                "bookname":response.bookName,
                                "photo": response.photo,
                                "auther": response.author,
                                "category" :response.category,
                                "condetaion" :response.condetaion,
                                "descreption" :response.descreption,
                                "review" :response.review,
                                "time" :response.time,
                                "deal" :response.deal,
                                "personId" :response.personId,
                                "id" :response.id,
                            })
                          }}>

                        <Text style={{alignSelf: 'center',color:'#dbd7ce'}} uppercase={false} >Details</Text>
                      </TouchableOpacity>
                      
                    </Body>
                  </CardItem>
                </Card>
						))
					}
					
				</Content>
        <FabIcon />
        <Advertisement/>
      </Container>
		)
	}
}