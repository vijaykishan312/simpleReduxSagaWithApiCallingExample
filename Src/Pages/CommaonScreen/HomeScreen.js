import React, { Component } from 'react';
import {View,TextInput, TouchableOpacity, Text} from 'react-native';
import {getSingleEmployeeData} from '../../Redux/Action/userAction';
import { connect } from 'react-redux';

class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        // const data = this.props.data?this.props.data:""
        return(
            <View style={{ flex:1, padding:30}}>
                <TextInput style={{height:40, width:"100%", marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="ID" onChangeText={(value)=>this.setState({ID:value})}/>
                <TouchableOpacity style={{height:40, width:200, backgroundColor:"#DDDD"}} onPress={()=>this.onSubmitt()}>
                <Text>SUBMIT</Text>
                </TouchableOpacity>

                {/* <View style={{flexDirection:"column"}}>
                    <Text style={{marginBottom:5}}>{data?data.name:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.salary:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.age:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.id:''}</Text>
                </View> */}
            </View>
        )
    }

    onSubmitt=()=>{
        const data =  this.state;
        // send Data 
        this.props.dispatch(getSingleEmployeeData(data))
    }
   
}

function mapStateToProps(state){
    return {
        // data:state.login.UserData?state.login.UserData:{},
    }
}

export default connect(mapStateToProps)(HomeScreen);