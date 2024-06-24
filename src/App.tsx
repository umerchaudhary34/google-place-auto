import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './routers/MainStack';
import {themeContext} from './config/themeContext';
import theme from './config/theme';
import {useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  const isDarkMode: boolean = useColorScheme() === 'dark';
  return (
    <themeContext.Provider value={isDarkMode ? theme.dark : theme.light}>
      <Provider store={store}>
        <NavigationContainer>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootStack />
          </GestureHandlerRootView>
        </NavigationContainer>
      </Provider>
    </themeContext.Provider>
  );
};
export default App;
