

// Class Component  

// main class has called two components  in single view

//  Header and  AlbumList 

import React, {Component} from 'react';
import {  View} from 'react-native';
import Header from './src/screen/Header.js';
import AlbumList from './src/screen/AlbumList.js';




export default class App extends Component {
  render() {
    return (
      <View>
        <Header/>
        <AlbumList/>
      </View>
        
    );
  }
}
