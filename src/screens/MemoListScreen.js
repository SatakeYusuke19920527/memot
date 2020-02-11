import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export class MemoListScreen extends React.Component {
    render() {
		return (
			<View style={styles.container}>
                <MemoList
                    navigation={this.props.navigation}
                />
                <CircleButton
                    navigation={this.props.navigation}
                    screenName={'MemoEditScreen'}
                >
					<Icon name="plus" size={20} />
				</CircleButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        width: '100%',
        backgroundColor: '#FFFDF6'
	}
});

export default MemoListScreen;
