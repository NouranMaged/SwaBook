import React, { Component } from 'react'
import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List} from 'native-base';
import { TouchableOpacity, Text,ScrollView ,View,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class AllCards extends React.Component {

    state = {data: [],loaded: 0 }
  
    componentDidMount(){
      return fetch('https://floating-savannah-39193.herokuapp.com/api/Books')
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
            <Container style={{backgroundColor:'#f7f4ed'}}>
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
                  this.state.data.map((response) => {
                return(
                 <Content  key={response.id}>   
                  <Card style={{marginBottom:20,width:'70%',alignSelf:'center'}}>
 
                <CardItem  style={{alignSelf:"center",width:'100%',backgroundColor:'#f7f4ed'}} >
                {/* // style={{alignItems:'center'}}> */}
                  <Body  style={{alignSelf:"center",width:'100%',alignItems:'center'}}> 

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
                    
                          // "username":res.name,
                          // "userID":res.id,
                          // "userAvatar":res.avatar,
                          // "userPhone":res.phone
                        })                   
                        }}
                    >

                    <Image source={{uri: response.photo}} 
                       style={{height:340,width:250,alignSelf:'center'}}/>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#361526',alignSelf:'center'}}>{response.bookName} </Text>
                        <Text style={{fontSize:15,color:'#361526',alignSelf:'center'}}>{response.author} </Text>
                        <Text style={{fontSize:15,color:'#8e7065',}}>{response.deal} </Text>

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
}// import React, { Component } from 'react'
// import { Container, Header, Content, Body, Right, Button, Spinner,ListItem, Card,CardItem, List} from 'native-base';
// import { TouchableOpacity, Text,ScrollView ,View,Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';


// export default class AllCards extends React.Component {

//     state = {data: [],loaded: 0 }
  
//     componentDidMount(){
//       return fetch('https://floating-savannah-39193.herokuapp.com/api/Books')
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
//             <Container >
//                 <ScrollView>  
//                     {this.info()}
//                 </ScrollView>
//             </Container>
//         );
//     }
  

//     info(){
//         if(this.state.loaded ===0){
//            return( <Spinner/>)
//              }else{
//                 return(
//                   this.state.data.map((response) => {
//                 return(
//                  <Content  key={response.id}>   
//                   <Card style={{marginBottom:10,alignItems:'center'}}>
 
//                 {/* <CardItem style={{alignItems:'center'}}> */}
//                   <Body > 

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
                    
//                           // "username":res.name,
//                           // "userID":res.id,
//                           // "userAvatar":res.avatar,
//                           // "userPhone":res.phone
//                         })                   
//                         }}
//                     >

//                     <Image source={{uri: response.photo}} 
//                            style={{height:150,width:150,alignSelf:'center'}} />
//                         <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{response.bookName} </Text>
//                         <Text style={{fontSize:10}}>{response.author} </Text>
//                         <Text style={{fontSize:10,color:'green'}}>{response.deal} </Text>

//                     </TouchableOpacity>
//                     </Body>
//                   {/* </CardItem> */}
                    
//                 </Card>
//                 </Content>  
//               )
//           })
//          )
//         }
//     }    
// }