import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import DateHelper from '../../Common/DateHelper';
import images from '../../Theme/Images';

const deviceWidth = Dimensions.get("window").width



export default function BookingTimelineListItem(props) {
    const { item, index } = props;
    const timeText = DateHelper.getStringFromNumber(item.time)
    const data = item?.data || [];

    const currentHour = new Date().getHours()
    const currentMinite = new Date().getMinutes()

    const positionRedline = (currentMinite / 60 * 90) - 5

    function renderItem({item}){
        const itemWidth = (deviceWidth - 90) / data.length
        const avatar = item.avatar ? { uri : item.avatar } : images.defaultAvatar;
        const patientName = data.length === 4 ? item.requester.substring(0,1) : item.requester
        return (
        <TouchableOpacity
        onPress={()=>{}}
        style={{width: itemWidth, height: '100%', flexDirection: 'row'}}>
            <View style={[styles.tickerLeft, {backgroundColor: item.color_code }]} />
            <View style={styles.patiantInfo}>
                <Image
                source={avatar}
                style={styles.avatar}
                />
                <Text style={styles.patientName}>
                    {patientName}
                </Text>
                {
                    bookingStatusHandle(item.status)
                }
            </View>
        </TouchableOpacity>
        )
    }

    function keyExtractor(item, index) {
        return index + " "
    }

    return (
        <View style={styles.itemView}>
            {(index + 8 === currentHour) &&
            <View style={[styles.currentTimeView, {top: positionRedline}]}>
                <View style={styles.currentTimeLeft}/>
                <View style={styles.redline} />
            </View>
            }
            <Text style={styles.timeText}>{timeText}</Text>
            <View style={styles.leftBlock}/>
            <View style={styles.rightBlock}>
                <View style={styles.tickerView}>
                    <FlatList
                    horizontal
                    scrollEnabled={false}
                    style={{flex: 1}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    />
                </View>
            </View>
        </View>
    )
}

export function bookingStatusHandle(type){
    switch (type) {
        case "pending":
            return <View style={styles.pending} />
        case "approved":
            return <View style={styles.approved} />
        case "passed":
            return <View style={styles.passed} />
        default:
            return <View style={styles.pending} />
    }
}

BookingTimelineListItem.defaultProps = {
    calendar: [],
    // ... define your prop validations
};

BookingTimelineListItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

