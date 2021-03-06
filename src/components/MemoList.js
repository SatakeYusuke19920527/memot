import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class MemoList extends React.Component{
    
    
    renderMemo({item}) {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('MemoDetailScreen', { memo:item })}>
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>{item.body}</Text>
                    <Text style={styles.Date}>{item.createOn.seconds}</Text>
                    </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (    
            <View
                style={styles.memoList}
            >
                <FlatList
                    data={this.props.memoList}
                    renderItem={this.renderMemo.bind(this)}
                />
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