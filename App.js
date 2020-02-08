import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
				<Stack.Screen name="MemoListScreen" component={MemoListScreen} />
				<Stack.Screen name="MemoDetailScreen" component={MemoDetailScreen} />
				<Stack.Screen name="MemoEditScreen" component={MemoEditScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
