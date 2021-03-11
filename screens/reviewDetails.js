import React from 'react'
import { StyleSheet, Text, View, Button , Image} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card'

export default function ReviewDetails({ navigation }) {

    const pressHandler = () =>{
        navigation.goBack();
    }
    //guardamos el valor rating que viene desde el home
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Text>Details Screen</Text>
            <Card>                
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
                <View style={styles.rating}>
                    <Text>Game rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
            <Button title='go back' onPress={pressHandler} />
        </View>
    )
}

const styles=StyleSheet.create({

})
