import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        headerMode="screen"
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#265366' },
          headerBackTitleVisible:false
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Memot',
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            title: 'Memot',
          }}
        />
        <Stack.Screen
          name="MemoListScreen"
          component={MemoListScreen}
          options={{
            title: 'Memot',
          }}
        />
        <Stack.Screen
          name="MemoDetailScreen"
          component={MemoDetailScreen}
          
        />
        <Stack.Screen
          name="MemoEditScreen"
          component={MemoEditScreen}
          
        />
        <Stack.Screen
          name="MemoCreateScreen"
          component={MemoCreateScreen}
          
        />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
