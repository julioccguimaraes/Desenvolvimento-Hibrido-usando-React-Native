import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

const Item = ({navigation, category}) => {

    const openList = () => {
        navigation.navigate('ProductList', {
            category: category
        })
    }    

    return (
        <View style={style.container}>
            <TouchableOpacity key={category.id} onPress={openList}>
                <View style={style.imgbox}>
                    <Image source={{uri: category.image}} style={style.image}/>
                </View>
                <View style={style.text}>
                    <Text style={style.description}>{category.description}</Text>
                    <Text style={style.price}>{category.items} items(s)</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Item;