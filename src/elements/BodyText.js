import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class BodyText extends React.Component {
  
    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>Hello Hello</Text>
            <Text>{this.props.name}</Text>
            <Text>{this.props.children}</Text>
        </View>
    )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    red:{
        color: 'red',
    }
})

export default BodyText;