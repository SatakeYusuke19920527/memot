import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircleButton from '../elements/CircleButton';

export class MemoCreateScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
        }
    }
	render() {
		return (
			<View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput}
                    multiline={true}
                    onChangeText={(text)=>this.setState({body:text})}
                />
				<CircleButton
					navigation={this.props.navigation}
                    screenName={'MemoDetailScreen'}
                    mode='save'
                    body={this.state.body}
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
		backgroundColor: '#fff'
	}
});

export default MemoCreateScreen;
