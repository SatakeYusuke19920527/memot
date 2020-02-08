import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export class LoginScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>ログイン</Text>
				<TextInput style={styles.input} value="Email Adress" />
				<TextInput style={styles.input} value="password" />
				<TouchableHighlight
					underlayColor="#C70F66"
					style={styles.button}
					title="送信"
					onPress={() => {}}
					activeOpacity
				>
					<Text style={styles.buttonTitle}>ログインする</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		padding: 24,
		backgroundColor: '#fff'
	},
	input: {
		backgroundColor: '#eee',
		height: 48,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: '#eee',
		padding: 0,
		color: '#0e0e0e',
		paddingLeft: 10
	},
	title: {
		fontSize: 28,
		alignSelf: 'center',
		marginBottom: 24
	},
	button: {
		backgroundColor: '#E31676',
		height: 48,
		width: '70%',
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18
	}
});

export default LoginScreen;
