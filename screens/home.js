import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, 
    TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from "@expo/vector-icons";
import  ReviewForm  from './reviewForm'

export default function Home({ navigation }) {

    const [miModal, setMiModal] = useState(false);

    const [reviews, setReviews]= useState([
        {title:'zelda',rating:1,body:'lorem ipsum',key:'1'},
        {title:'zelda2',rating:2,body:'lorem ipsum',key:'2'},
        {title:'zelda3',rating:3,body:'lorem ipsum',key:'3'},
        {title:'zelda4',rating:4,body:'lorem ipsum',key:'4'},
        {title:'zelda5',rating:5,body:'lorem ipsum',key:'5'}
    ])

    const addReview=( review )=>{
        review.key = Math.random().toString();
        setReviews((currentReview)=>{
            return [review, ...currentReview]
        });
        setMiModal(false);
    }

    const pressHandler= (item) =>{
        console.log(item.key)
        navigation.navigate('reviewDetails',item);
    }
    return (
        <View style={globalStyles.container}>

            <Modal visible={miModal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons name='close' size={28} onPress={()=>setMiModal(false)} />
                    <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>

            </Modal>
            <MaterialIcons name='add' size={28} onPress={()=>setMiModal(true)} />
            <Text style={globalStyles.titleText}> Home Screen</Text>
            <FlatList
                data={reviews}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={()=>pressHandler(item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button title='go to review' onPress={pressHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    modalContent:{
        flex:1
    }
})