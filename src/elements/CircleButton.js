import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
require('firebase/firestore');
/**
 * 
 * CircleButton
 * 
 * 使用方法
 * chirdrenにFontAwesomeのアイコンを挿入する。
 * 行きたい画面をscreenNameで指定
 * DBにアクセスできる要素
 * 
 * [ForExample]
 * 
 * <CircleButton color='white' style={styles.editButton}>
 *       <Icon name="pencil" size={20}/>
 * </CircleButton>
 * 
 */
class CircleButton extends React.Component {

	pressAction = () => {
		// 新規入力した本文の内容
		const body = this.props.body;
		if (this.props.mode === 'save') {
			firebase.auth().onAuthStateChanged(function(user) {
				// User is signed in.
				const db = firebase.firestore();
				const uid = user.uid;
				db.collection(`users/${uid}/memos`).add({
					body: body,
					createOn: new Date(),
				})
				.then(function (docRef) {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch(function (error) {
					console.error("Error adding document: ", error);
				});
		});
		} else {
			firebase.auth().onAuthStateChanged(function(user) {
				// User is signed in.
				const db = firebase.firestore();
				const uid = user.uid;
				db.collection(`users/${uid}/memos`).add({
					body: "elseの方に来てるよ3",
					createOn: new Date(),
				})
				.then(function (docRef) {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch(function (error) {
					console.error("Error adding document: ", error);
				});
		});
		}
		this.props.navigation.push(this.props.screenName);
	}

	render() {
		// styleをpropsで上書きできるように。
		const { style, color } = this.props;

		let bgColor = '#E31676';
		let textColor = '#fff';

		if (color === 'white') {
			bgColor = '#fff';
			textColor = '#E31676';
		}

		return (
			// style複数もつ書き方
			<TouchableHighlight
				onPress={()=> this.pressAction()}
				style={[styles.circleButton, style, { backgroundColor: bgColor }]}
				underlayColor="transparent"
			>
				<Text style={[styles.circleButtonTitle, { color: textColor }]}>{this.props.children}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	circleButton: {
		position: 'absolute',
		bottom: 32,
		right: 32,
		width: 48,
		height: 48,
		borderRadius: 24,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		zIndex: 10
	},
	circleButtonTitle: {
		fontSize: 32,
		color: '#fff'
	}
});

export default CircleButton;
