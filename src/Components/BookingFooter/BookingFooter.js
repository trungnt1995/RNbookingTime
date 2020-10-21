import React from 'react';
import { FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { bookingStatusHandle } from "../BookingTimelineListItem/BookingTimelineListItem"
export default function BookingFooter (props) {
    
    return (
           <View style={styles.container}>
               <View style={styles.statusContainer}>
                   <View style={styles.statusItem}>
                        {bookingStatusHandle("passed")}
                        <Text style={styles.statusText}>
                            Passed
                        </Text>
                   </View>
                   <View style={styles.statusItem}>
                        {bookingStatusHandle("pending")}
                        <Text style={styles.statusText}>
                            Pending
                        </Text>
                    </View>

                   <View style={styles.statusItem}>
                        {bookingStatusHandle("approve")}
                        <Text style={styles.statusText}>
                            Approve
                        </Text>
                    </View>
               </View>
           </View>
    )
}


BookingFooter.defaultProps = {
    date: "",
    // ... define your prop validations
};

BookingFooter.propTypes = {
    date: PropTypes.string
}

