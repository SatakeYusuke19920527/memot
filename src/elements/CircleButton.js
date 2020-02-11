import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

/**
 * 
 * CircleButton
 * 
 * 使用方法
 * chirdrenにFontAwesomeのアイコンを挿入する。
 * 
 * [ForExample]
 * 
 * <CircleButton color='white' style={styles.editButton}>
 *       <Icon name="pencil" size={20}/>
 * </CircleButton>
 * 
 */
class CircleButton extends React.Component {
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
				onPress={()=> this.props.navigation.navigate(this.props.screenName)}
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
