import React from 'react';
//import './App.css';
import './scss/main.scss';
import TextCapture from './main/TextCapture';
import ContentCapture from './main/ContentCapture';
import Message from './api/Message';

export default class App extends React.Component<{}, AppState> {

  state: Readonly<AppState> = {
    messages: []
  };

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <TextCapture messages={ this.state.messages } onMessageAdded={(m) => this.onMessageAddedHandler(m)} />
        </header>
        <main className="main">
          <ContentCapture messages={ this.state.messages } />
        </main>
      </div>
    );
  }

  onMessageAddedHandler(m: Message) {
    let msg: Message[] = this.state.messages;
    msg.push(m);
    this.setState({
      messages: msg
    });
  }
}

export interface AppState {
  messages: Message[]
}

