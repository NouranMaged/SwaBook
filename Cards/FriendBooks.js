import React, { Component } from 'react'
import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List} from 'native-base';
import { TouchableOpacity, Text,ScrollView ,View,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class FriendBooks extends React.Component {

    state = {data: [],loaded: 0 }
  
    componentDidMount(){
      return fetch('https://floating-savannah-39193.herokuapp.com/api/People/5c86a61bb0a1a8000405e954/books')
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
            <Container>
                <ScrollView horizontal="true">  
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
                 <Content  key={[response.id,res.id]}>   
                  <Card style={{backgroundColor:'#f7f4ed'}}>
 
                <CardItem>
                  <Body>

                    <TouchableOpacity onPress={() =>{
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
                        }}
                    >

                    <Image source={{uri: response.photo}} 
                           style={{height:150,width:150,alignSelf:'center'}} />
                        <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{response.bookName} </Text>
                        <Text style={{fontSize:10}}>{response.author} </Text>
                
                    </TouchableOpacity>
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
// import React, { Component } from 'react'
// import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List} from 'native-base';
// import { TouchableOpacity, Text,ScrollView ,View,Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';


// export default class FriendBooks extends React.Component {

//     state = {data: [],loaded: 0 }
  
//     componentDidMount(){
//       return fetch('https://floating-savannah-39193.herokuapp.com/api/People/5c86a716b0a1a8000405e952/books')
//         .then((response) => response.json())
//         .then((responseJson) => {
  
//           this.setState({
//             loaded: 1,
//             data: responseJson,
//           }, function(){
  
//           });
  
//         })
//         .catch((error) =>{
//           console.error(error);
//         });
//     }

//     render(){
//         return(
//             <Container>
//                 <ScrollView >  
//                     {this.info()}
//                 </ScrollView>
//             </Container>
//         );
//     }
  

//     info(){
//         if(this.state.loaded ===0){
//            return( <Spinner/>)
//              }else{
//               return(
//                 this.state.data.map((response,res) => {
//               return(
//                <Content  key={[response.id,res.id]}>  
//                   <Card style={{marginBottom:20,width:'50%',alignSelf:'center'}}>
 
//                 <CardItem>
//                   <Body>

//                     <TouchableOpacity onPress={() =>{
//                       Actions.BookDetails({
//                           "bookname":response.bookName,
//                           "photo": response.photo,
//                           "auther": response.author,
//                           "category" :response.category,
//                           "condetaion" :response.condetaion,
//                           "descreption" :response.descreption,
//                           "review" :response.review,
//                           "time" :response.time,
//                           "deal" :response.deal,
//                           "personId" :response.personId,
//                           "id" :response.id,
//                         })                   
//                         }}
//                     >

//                     <Image source={{uri: response.photo}} 
//                            style={{height:150,width:150,alignSelf:'center'}} />
//                         <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{response.bookname} </Text>
//                         <Text style={{fontSize:10}}>{response.author} </Text>
                
//                     </TouchableOpacity>
//                     </Body>
//                   </CardItem>
                    
//                 </Card>
//                 </Content>  
//               )
//           })
//          )
//         }
//     }    
// }