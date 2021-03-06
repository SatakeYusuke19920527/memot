import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date:'',
        }
    }

    UNSAFE_componentWillMount = () => {
        const params = this.props.route.params.memo;
        this.setState({
            title: params.body,
            date: params.createOn.toString()
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitle}>{this.state.title}</Text>
                        <Text style={styles.memoHeaderDate}>{this.state.date}</Text>
                    </View>
            </View>
            <View style={styles.memoContents}>
                <Text>
                    {this.state.title}
                </Text>
            </View>
                <CircleButton
                    color='white'
                    style={styles.editButton}
                    navigation={this.props.navigation}
                    screenName={'MemoEditScreen'}
                >
                    <Icon name="pencil" size={20}/>
                </CircleButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313c',  
        justifyContent: 'center',
        paddingLeft:10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom:4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color:'#fff',
    },
    memoContents: {
        flex:1,
        paddingTop:30,
        paddingHorizontal: 20,
        paddingBottom:20,
        backgroundColor:'#fff',
    },
    editButton: {
        top:75,
    }
})

export default MemoDetailScreen
