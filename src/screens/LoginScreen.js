import firebase from 'firebase';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import ENV from "../../env.json";


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER_ID,
    appId: ENV.FIREBASE_APP_ID,
    measurementId: ENV.FIREBASE_MM_ID
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export class LoginScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password:'',
		}
	}

	handleSubmit = () => {
		console.log("submit");
		this.props.navigation.navigate('MemoListScreen')
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
					onPress={() => this.handleSubmit()}
				>
					<Text style={styles.buttonTitle}>ログインする</Text>
				</TouchableHighlight>
				<Button
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
		alignSelf: 'center'
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18
	}
});

export default LoginScreen;
