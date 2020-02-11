import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircleButton from '../elements/CircleButton';

export class MemoEditScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.memoEditInput} multiline={true} />
				<CircleButton
					navigation={this.props.navigation}
                    screenName={'MemoDetailScreen'}
				>
					<Icon name="check" size={20} />
				</CircleButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},
	memoEditInput: {
		flex: 1,
		paddingTop: 32,
		paddingLeft: 16,
		fontSize: 24,
		backgroundColor: '#ddd'
	}
});

export default MemoEditScreen;
