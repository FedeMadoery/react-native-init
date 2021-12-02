import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SampleScreen} from './sampleScreen';
const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Sample Home" component={SampleScreen} />
    </MainStack.Navigator>
  );
};

export {MainNavigator};
