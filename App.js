import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

class homeScreen extends Component {

    render() {
        return (
            <View>
                <Text>User Dashboard</Text>
                <Button
                    title = 'Details'
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View> )

    } }

class detailScreen extends Component {
    render() {
        return (
            <View>
                <Text>placeholder</Text>
            </View>
        )
    }
}




const RootStack = StackNavigator(
    {
        Home: {
            screen: homeScreen,
        },
        Detail: {
            screen: detailScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);


export default class App extends Component {
    render() {
        return <RootStack/>
    }
}