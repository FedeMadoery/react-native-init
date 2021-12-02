import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store';
import {MainNavigator} from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
