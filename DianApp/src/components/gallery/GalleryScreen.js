import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,FlatList} from 'react-native';
import { connect } from 'react-redux';
import  { bindActionCreators} from 'redux';
import {requestImagesData} from '../../modules/ui/action';



class GalleryScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.props.requestImagesData()
     }


    render(){
        
        const { items } =this.props;
        console.log("render_items",items)
        return(
          
            <View style={styles.containerStyle}>
             <Text>Gallery screen on work inProgress</Text>
                 </View>
          
        )
    }
}
const styles=StyleSheet.create({
    containerStyle:{
        flex:1
    },listContainer:{
       margin:16,
       backgroundColor:'#ffffff' 
    },
    imageStyle:{
        height:80
    }
});

const mapStateToProps = (state, ownProps) => {
    console.log("state",state)
    return {
        items:state.ui,
    }
 },
mapDispatchToProps = (dispatch) => {
    return {
      ...bindActionCreators({
       requestImagesData
      },dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);