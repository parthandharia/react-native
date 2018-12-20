import React from 'react';
import { View,Text } from 'react-native';

const Header = () =>
{
    const {text, viewstyle}= styles;
    return(
        <View style={viewstyle}>
            <Text style={text}> Album! </Text>
        </View>
    );
};

const styles= {
    text:{
      fontSize: 20
    },
    viewstyle:{
        
        backgroundColor: '#F8F8F8',
      justifyContent: "center",
      alignItems: "center",
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0 , height: 2 },
      shadowOpacity: 0.9
    }
  }
  export default Header;