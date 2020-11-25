import { StyleSheet, Dimensions } from 'react-native';
import { measures, colors, fonts } from '../../../styles';

const { width } = Dimensions.get('window')

const style = StyleSheet.create ({
    container: {
        width: width,
        marginBottom: measures.padding,
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
        flexDirection: 'row'
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginBottom: measures.padding,
    },
    description :{
        fontSize: fonts.bigger,
        color: colors.light
    },
    items: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.base
    }  
})

export default style;