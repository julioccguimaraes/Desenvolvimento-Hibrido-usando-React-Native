import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const Help = () => {
    return (
        <View style={style.container}>
            <Text style={style.item}>Pedido</Text>
            <Text style={style.item}>Pagamento</Text>
            <Text style={style.item}>Entrega</Text>
            <Text style={style.item}>Contato</Text>
        </View>
    )
}

export default Help;