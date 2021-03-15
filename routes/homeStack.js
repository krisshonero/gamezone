import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

//esto es el enrutador para llegar a la pantalla  Screen --> Home
const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation })=>{
            return {
                headerTitle: ()=> <Header title='Game Zone' navigation={navigation}/>,
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>
            }
        }
    },
    reviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            backgroundColor:'#eee'
        }
    }
})

export default HomeStack;