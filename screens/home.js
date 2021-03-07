import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
 
export default function Home({ navigation }) {

    const [reviews, setReviews]= useState([
        {title:'zelda',rating:5,body:'lorem ipsum',key:'1'},
        {title:'zelda2',rating:4,body:'lorem ipsum',key:'2'},
        {title:'zelda3',rating:3,body:'lorem ipsum',key:'3'}
    ])

    const pressHandler= (item) =>{
        console.log(item.key)
        navigation.navigate('reviewDetails',item);
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Home Screen</Text>
            <FlatList
                data={reviews}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={()=>pressHandler(item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title='go to review' onPress={pressHandler}/>
        </View>
    )
}


