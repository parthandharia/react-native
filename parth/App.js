

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
        <Card/>
      </View>
        
    );
  }
}


