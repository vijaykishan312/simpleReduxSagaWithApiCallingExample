import React, { Component } from 'react';
import {View,TextInput, TouchableOpacity, Text} from 'react-native';
import {loginRequest} from '../../Redux/Action/userAction';
import { connect } from 'react-redux';

class SpalshScreen extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const data = this.props.data?this.props.data:""
        return(
            <View style={{ flex:1, padding:30}}>
                <TextInput style={{height:40, width:"100%", marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Name" onChangeText={(value)=>this.setState({name:value})}/>
                <TextInput style={{height:40, width:"100%", marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Salary" onChangeText={(value)=>this.setState({salary:value})}/>
                <TextInput style={{height:40, width:"100%", marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="Age" onChangeText={(value)=>this.setState({age:value})}/>
                <TextInput style={{height:40, width:"100%", marginBottom:10, borderWidth:1, borderColor:"black"}} placeholder="ID" onChangeText={(value)=>this.setState({id:value})}/>
                <TouchableOpacity style={{height:40, width:200, backgroundColor:"#DDDD"}} onPress={()=>this.onSubmitt()}>
                <Text>SUBMIT</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"column"}}>
                    <Text style={{marginBottom:5}}>{data?data.name:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.salary:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.age:''}</Text>
                    <Text style={{marginBottom:5}}>{data?data.id:''}</Text>
                </View>
            </View>
        )
    }

    onSubmitt=()=>{
        const data =  this.state;
        // send Data 
        this.props.dispatch(loginRequest(data))
    }
   
}

function mapStateToProps(state){
    return {
        data:state.login.UserData?state.login.UserData:{},
    }
}

export default connect(mapStateToProps)(SpalshScreen);