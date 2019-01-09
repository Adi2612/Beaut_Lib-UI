import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './main';
import Middle from './middle';
import Test from './test';
class App extends Component {
  render() {
    return (
      <div>
          <Header />
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Test />
          <Middle title= "Your recent searches" />
          <Middle title= "Comedies" />
          <Middle title= "Literature" />
          <Middle title= "Biographies" />
          <Middle title= "LOve Stories" />

       </div>
    );
  }
}

export default App;
