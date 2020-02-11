import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component{
    render() {
        return (    
            <View style={styles.memoList}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen')}>
            <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.Date}>2020/2/6</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen')}>
            <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.Date}>2020/2/6</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen')}>
            <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.Date}>2020/2/6</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen')}>
            <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.Date}>2020/2/6</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen')}>
            <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.Date}>2020/2/6</Text>
                </View>
            </TouchableHighlight>                   
        </View>
        );
    }
}

const styles = StyleSheet.create({
    memoList: {
    width: '100%',
    flex:1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor:'#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom:4,
  },
  Date: {
    fontSize: 12,
    marginBottom:4,
  },
})

export default MemoList;