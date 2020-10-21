import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BookingTimelineListItem from '../BookingTimelineListItem/BookingTimelineListItem'

export default function BookingTimeline (props) {
    const { calendar } = props
    const [height, setHeight] = useState(0);

    let formatCalendar = []

    function keyExtractor(item, index) {
        return item.time + " "
    }

    function renderItem({ item, index })
    {
        return <BookingTimelineListItem item={item} index={index} />
    }

    useEffect(()=>{
        for(let i = 8 ; i <= 17 ; i++){
            const hoursData = calendar.filter(c => i === parseInt(c.start_time.split(" ")[1].substring(0,2)))
            const blockHour = { time: i , data: hoursData}
            formatCalendar.push(blockHour)
        }
    }, [props.calendar])

    
    return (

           <FlatList 
                data={formatCalendar}
                style={styles.container}
                scrollEnabled={false}
                contentContainerStyle={styles.contentStyle}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
    )
}


BookingTimeline.defaultProps = {
    calendar: [],
    // ... define your prop validations
};

BookingTimeline.propTypes = {
    calendar: PropTypes.array
}

