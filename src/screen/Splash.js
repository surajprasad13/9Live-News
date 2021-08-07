import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {} from '@react-navigation/native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2500);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default Splash;
