import React from 'react';
import {ScrollView} from 'react-native';
import style from './style';
import Header from '../Header';
import CategoryList from '../CategoryList';

const Category = ({ navigation }) => {
    return (
        <>
        <Header />
        <ScrollView style={style.container}>
            <CategoryList navigation={navigation}/>
        </ScrollView>
        </>
    )
}

export default Category;