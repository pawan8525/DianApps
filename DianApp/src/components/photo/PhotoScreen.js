import React, { Component } from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';


class PhotoScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View>
                <Text>PhotoScreen</Text>
            </View>
        )
    }
}
const Styles=StyleSheet.create({
    containerStyle:{
        flex:1
    }
});

export default PhotoScreen;