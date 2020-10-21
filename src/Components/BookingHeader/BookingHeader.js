import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Theme/Colors/Colors';

export default function BookingHeader (props) {
    const { date } = props

    return (
        <LinearGradient 
        colors={[Colors.green, Colors.blue]}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={styles.container}>
            <Text style={styles.headerTitle}>
                Lịch khám ngày {date}
            </Text>
        </LinearGradient>
    )
}


BookingHeader.defaultProps = {
    date: "",
    // ... define your prop validations
};

BookingHeader.propTypes = {
    date: PropTypes.string
}

