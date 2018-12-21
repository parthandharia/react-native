

//functional Component 

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  );
};

const styles = {
  con: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
