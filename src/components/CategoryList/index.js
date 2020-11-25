import React, { useState } from 'react';
import { View } from 'react-native';
import style from './style';
import Item from '../CategoryList/Item';
import dataJson from '../../data.json';

const CategoryList = ({ navigation }) => {
    const [categories, setCategories] = useState(dataJson)

    return (
        <View style={style.container}>
            {
                categories.map(category => <Item
                    navigation={navigation}
                    category={category}
                    key={category.id}
                />)
            }
        </View>
    )
}

export default CategoryList;
