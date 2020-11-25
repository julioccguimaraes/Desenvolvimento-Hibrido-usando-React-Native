import { StyleSheet } from 'react-native';
import { measures, colors } from '../../styles';

const style = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: measures.padding,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    }
})

export default style;