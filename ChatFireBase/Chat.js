import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import Fire from './fire';
import {Actions} from 'react-native-router-flux';
import MainHeader from '../Components/MainHeader';
import { Container } from 'native-base';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  state = {
    messages: [],
  };

  get user() {
    return {
       name:this.props.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <Container>
      <MainHeader txt="Chat"/>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </Container>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;