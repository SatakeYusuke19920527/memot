import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MemoList />
                <CircleButton>
                    <Icon name="plus" size={20}></Icon>
                </CircleButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
    }
})

export default MemoListScreen;

