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

     renderItems=({item})=>{
        return (
           
              <View  style={styles.listContainer}>
                  {console.log("flatList_item_media",item.media.m)}
                  <Image source={{uri:item.media.m}} style={styles.imageStyle}/>
                  <View style={styles.listContentStyle}>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.tagsStyle}>{item.tags}</Text>

                  </View>
            
              </View>
          
          );

     }

    render(){
        
        const { items } =this.props;
        console.log("render_items",items)
        return(
          
            <View style={styles.containerStyle}>
               
               <FlatList
                  data={items}
                  renderItem={this.renderItems}
                  keyExtractor={item => item.id}
                /> 
                </View>
          
        )
    }
}


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
const styles=StyleSheet.create({
    containerStyle:{
        flex:1
    },listContainer:{
       margin:16,
       backgroundColor:'#ffffff', 
       borderRadius: 4,     
       borderStyle: "solid",
       borderWidth: 1,
       borderColor: "#dbe0e8"
    },
    imageStyle:{
        height:180,
        margin:4,
        borderRadius: 7.4,
        backgroundColor:'#ffffff', 
    },
    listContentStyle:{
        marginHorizontal:8  ,
    },titleStyle:{
        marginVertical:8 ,
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#58687e"

    },tagsStyle:{
        marginVertical:4 ,
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#58687e"
    }
});