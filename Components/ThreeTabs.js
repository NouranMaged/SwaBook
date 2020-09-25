import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import AllCards from '../Cards/AllCards';
import DonationCards from '../Cards/DonationCards';
import ExchangeCards from '../Cards/ExchangeCards';


export default class ThreeTabs extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:'#dbd7ce'}}>
            <Text style={{color:'#361526'}}>All</Text></TabHeading>}>
            <AllCards />
          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor:'#dbd7ce'}}>
            <Text style={{color:'#361526'}}>Donation</Text></TabHeading>}>
            <ExchangeCards />
          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor:'#dbd7ce'}}>
            <Text style={{color:'#361526'}}>Exchange</Text></TabHeading>}>
            <DonationCards />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}