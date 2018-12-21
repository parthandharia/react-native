

//functional Component 

import React, {Component } from 'react';
import { View, Text,Image,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

 const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image , image, url } = album;

    const {
        thumbnailimage,
        header,
        thumbnailContainer,
        headertext,
        image1
      } = styles;
    
    return(
        <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image
              style={thumbnailimage}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={header}>
            <Text style={headertext}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
        <Image
          style={image1}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
        </Card>
            
    );
    
};


const styles = {
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headertext: {
    fontSize: 18
  },
  thumbnailimage: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image1: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;