import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component{
    render() {
        return (
        <View style={styles.appBar}>
            <Text style={styles.appBarTitle}>Memot</Text>
        </View>
        );
    }
}


const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left:0,
    height: 78,
    paddingTop:30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex:10,
  },  
  appBarTitle: {
    color: 'white',
    fontSize:18,
  },
})



export default Appbar;