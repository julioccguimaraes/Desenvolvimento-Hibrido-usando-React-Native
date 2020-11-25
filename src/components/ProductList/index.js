import React, { useState } from 'react';
import { View } from 'react-native';
import style from './style';
import Product from './Product';
import dataJson from '../../data.json';

const ProductList = ({ navigation }) => {

    // a categoria de id 3 será a destaque na Home
    const featureProducts =  dataJson.find(item => item.id === 3);

    const [products, setProducts] = useState(featureProducts.products);

    return (
        <View style={style.container}>
            {
                products.map(product => <Product
                    navigation={navigation}
                    product={product}
                    key={product.id}
                />)
            }
        </View>
    )
}

export default ProductList;


