import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import style from './style';

const Item = ({navigation, category}) => {

    const openDetails = () => {
        navigation.navigate('CategoryList', {
            category: category
        })
    }    

    return (
        <View>
            <TouchableOpacity key={category.id} onPress={openDetails}>
                <View style={style.container}>
                    <View style={style.imgbox}>
                        <Image source={{uri: category.image}} style={style.image}/>
                    </View>
                    <View style={style.text}>
                        <Text style={style.description}>{category.description}</Text>
                        <Text style={style.items}>{category.items} items(s)</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Item;