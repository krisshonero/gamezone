import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import About from '../screens/about'
import Header from '../shared/header';
import React from 'react';

//esto es el enrutador para llegar a la pantalla  Screen --> About
const screens = {
    About:{
        screen: About,
        navigationOptions:({ navigation })=>{
            return {
                headerTitle: ()=> <Header title='About Game Zone' navigation={navigation}/>,
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:'100%'}}/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            backgroundColor:'#eee'
        }
    }
})

export default AboutStack;