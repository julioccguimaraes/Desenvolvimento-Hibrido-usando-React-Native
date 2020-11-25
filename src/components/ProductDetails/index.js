import React, {useState, useEffect} from 'react';
import {View, Image, Button, Text} from 'react-native';
import {colors} from '../../styles';
import style from './style';
import { useCartContext } from '../../contexts/cart'

const ProductDetails = ({ route, navigation }) => {

    const [{items}, setItems] = useCartContext();

    const [selectecProduct, setSelectecProduct] = useState({});

    useEffect(() => {
        const { product } = route.params;
        setSelectecProduct(product);
    }, [])

    const addToCart = () => {
        // add to cart
        items.push(selectecProduct);

        setItems({items: items});

        navigation.navigate('HomeScreen')
    }
    
    return (
        <View style={style.container}>
            <Image source={{uri: selectecProduct.image}} style={style.image} />
            <View style={style.containerText}>
                <Text style={style.description}>{selectecProduct.description}</Text>
                <Text style={style.price}>{selectecProduct.price}</Text>
            </View>
            <View style={style.buttonAdd}>
                <Button title='Adicionar' color={colors.base} onPress={addToCart} />
            </View>
        </View>
    )
}

export default ProductDetails;