import React, {Component} from 'react';
import {View} from 'react-native'
import {  createStackNavigator,createAppContainer } from 'react-navigation';
import Splash from '../Pages/CommaonScreen/SplashScreen';
import { connect } from 'react-redux'

class MainFile extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MainStack/>
            </View>
        )
    }
}

const MainStack = createAppContainer(
    createStackNavigator({
        SplashScreen:{
            screen:Splash,
            navigationOptions: {
              header:null,
            },
          },
    })
)

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(MainFile);