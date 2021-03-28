import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {selectSong} from '../actions';
 class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        songs:this.props.songs
    };
  }
componentDidMount(){
    console.log(this.props,"pppppp")
}

  render() {
    return (
      <View>
          <FlatList 
             data={this.state.songs}
             keyExtractor={(item,index)=>index.toString()}
             renderItem={({item,index})=>{
                 return(
                     <View style={{flexDirection:"row",marginTop:10}}>
                         <Text>{item.title}</Text>
                         <TouchableOpacity style={{backgroundColor:'green',padding:10,marginLeft:10}}
                             onPress={() => { this.props.selectSong(item)}}
                         >
                             <Text>select</Text>
                         </TouchableOpacity>
                     </View>
                 )
             }}
          />
          <View>
              <Text>Seleted song is {this.props?.selectedSong?.title||"Not yet selected"}</Text>
          </View>
      </View>
    );
  }
}
const mapStateToProps =(state)=>{
    return{
        songs:state.songs,
        selectedSong:state.selectedSong
    }
}
export default connect(mapStateToProps,{selectSong})(Home)