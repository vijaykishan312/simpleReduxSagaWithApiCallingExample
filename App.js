import React, { Component } from 'react';
import {Provider} from "react-redux";
import Store from './Src/Store/configureStore';
import MainFile from "./Src/Pages/Main.file";
import {  createStackNavigator,createAppContainer } from 'react-navigation';

const store = Store()

const MainStack = createAppContainer(createStackNavigator({

  FirstScreen:{
    screen:MainFile,
    navigationOptions: {
      header:null,
    }
  },

}));

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <MainStack/>
      </Provider>
    )
  }
}

export default App;
