import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Pages/Home'
import FriendProfile from './Pages/FriendProfile'
import SplashScreen from './Pages/SplashScreen'
import ScreenOne from './OnBoardingScreens/ScreenOne'
import ScreenTwo from './OnBoardingScreens/ScreenTwo'
import ScreenThree from './OnBoardingScreens/ScreenThree'
// import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import Register from './Pages/Register'
// import Draft from './Pages/Draft'
import Places from './Pages/Places'
// import Favourite from './Pages/Favourite'
import BookDetails from './Pages/BookDetails'
import AllCards from './Cards/AllCards'
import DonationCards from './Cards/DonationCards'
import ExchangeCards from './Cards/ExchangeCards'
import AddBook from './Pages/AddBook'
import Search from './Pages/Search'
import Main from './ChatFireBase/Main';
import Chat from './ChatFireBase/Chat';
import MapLocation from './Pages/MapLocation'
import MyProfile from './Pages/MyProfile'

import { Container } from 'native-base';

export default class App  extends Component<Props> {
render(){
  return(
    <Container>
      <Router>
        <Scene key='root' hideNavBar={true}  >
        <Scene key = "SplashScreen" component = {SplashScreen} title = "SplashScreen" initial = {true} />
          <Scene key = "ScreenOne" component = {ScreenOne} title = "ScreenOne" />
          <Scene key = "ScreenTwo" component = {ScreenTwo} title = "ScreenTwo"    />
          <Scene key = "ScreenThree" component = {ScreenThree} title = "ScreenThree"  />


          <Scene key = "Login" component = {Login} title = "Login"   />
          <Scene key = "Register" component = {Register} title = "Register"   />
          <Scene key = "MyProfile" component = {MyProfile} title = "MyProfile"  />


          <Scene key = "Home" component = {Home} title = "Home"       />
          <Scene key = "AllCards" component = {AllCards} title = "AllCards"  />
          <Scene key = "DonationCards" component = {DonationCards} title = "DonationCards"  />
          <Scene key = "ExchangeCards" component = {ExchangeCards} title = "ExchangeCards"  />
          <Scene key = "BookDetails" component = {BookDetails} title = "BookDetails"    />


          <Scene key = "FriendProfile" component = {FriendProfile} title = "FriendProfile"  />
          <Scene key = "AddBook" component = {AddBook} title = "AddBook"    />
          <Scene key = "Search" component = {Search} title = "Search"  />
          <Scene key = "Places" component = {Places} title = "Places" />
          <Scene key = "MapLocation" component = {MapLocation} title = "MapLocation" />



          <Scene key = "Main" component = {Main} title = "Main"  />
          <Scene key = "Chat" component = {Chat} title = "Chat"  />


          {/* <Scene key = "Favourite" component = {Favourite} title = "Favourite"  />  */}
          {/* <Scene key = "Draft" component = {Draft} title = "Draft"    /> */}


        </Scene>
      </Router>
    </Container>
  )
}
}