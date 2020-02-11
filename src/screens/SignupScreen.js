import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export class SignupScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password:'',
		}
	}

	handleSubmit = (email, password) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((usr) => {
			console.log(usr);
			alert("登録が完了しました。");
			this.props.navigation.navigate("MemoListScreen");
		})
		.catch(function (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			alert("登録失敗しました。")
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>メンバー登録</Text>
				<TextInput
					style={styles.input}
					value={this.state.email}
					placeholder="Email"
					autoCapitalize="none"
					onChangeText={(email) => this.setState({email:email})}
				/>
				<TextInput
					style={styles.input}
					value={this.state.password}
					placeholder="Password"
					autoCapitalize="none"
					secureTextEntry
					onChangeText={(password) => this.setState({password:password})}
				/>
				<TouchableHighlight
					underlayColor="#C70F66"
					style={styles.button}
					title="送信"
					onPress={() => this.handleSubmit(this.state.email, this.state.password)}
					activeOpacity={0.85}
				>
					<Text style={styles.buttonTitle}>登録する</Text>
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

export default SignupScreen;
