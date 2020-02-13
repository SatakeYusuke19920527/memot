import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import firebase from '../elements/firebase';

export class LoginScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'a@a.com',
			password:'asdfgh',
		}
	}

	handleSubmit = (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((usr) => {
			// Success Login
			this.props.navigation.navigate(`MemoListScreen`);
		})
		.catch(function (error) {
  			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert("ログイン失敗");
		});
	}

	render() {
		const {navigation} = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>ログイン</Text>
				<TextInput
					style={styles.input}
					placeholder="Email Adress"
					value={this.state.email}
					onChangeText={(email) => this.setState({email:email})}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TextInput
					style={styles.input}
					placeholder="password"
					value={this.state.password}
					onChangeText={(password) => { this.setState({ password: password }) }}
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
				/>
				<TouchableHighlight
					underlayColor="#C70F66"
					style={styles.button}
					title="送信"
					onPress={() => this.handleSubmit(this.state.email, this.state.password)}
				>
					<Text style={styles.buttonTitle}>ログインする</Text>
				</TouchableHighlight>
				<Button
					style={styles.registerButton}
					title="メンバー登録"
					onPress={() => navigation.navigate('SignupScreen')}
				/>
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
		alignSelf: 'center',
		marginTop:20,
		marginBottom:20,
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18
	},
});

export default LoginScreen;
