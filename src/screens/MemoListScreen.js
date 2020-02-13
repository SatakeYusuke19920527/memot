import firebase from 'firebase';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
require('firebase/firestore');

export class MemoListScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memoList:[],
        }
    }

    UNSAFE_componentWillMount = () => {
        const currentUser = firebase.auth().currentUser;
        const uid = currentUser.uid;
        const db = firebase.firestore();
        db.collection(`users/${uid}/memos`)
            .get()
            .then((querySnapshot) => {
                const memoList = [];
                querySnapshot.forEach((doc) => {
                        // keyを配列に付け加える...
                        memoList.push({...doc.data(),key:doc.id})
                    });
                this.setState({ memoList });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    render() {
		return (
			<View style={styles.container}>
                <MemoList
                    navigation={this.props.navigation}
                    memoList={this.state.memoList}
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
