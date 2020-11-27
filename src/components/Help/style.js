import { StyleSheet } from 'react-native';
import { measures, colors, fonts } from '../../styles';

const style = StyleSheet.create ({
    container: {
        padding: measures.padding,
        justifyContent: 'space-between',
    },
    item: {
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.base,
        borderBottomWidth: 1,
        borderBottomColor: colors.dark,
        padding: measures.padding,        
    }  
})

export default style;