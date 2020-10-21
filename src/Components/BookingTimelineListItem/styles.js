import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../Theme/Colors/Colors';
export default StyleSheet.create({
    
    itemView: {
        height: 90,
        width: '100%',
        borderTopWidth: .2,
        borderBottomWidth: .2,
        borderColor: Colors.blue,
        flexDirection: 'row'
    },
    
    timeText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: Colors.black,
        position: 'absolute',
        top: -7,
        left:0,
        paddingHorizontal: 4,
        backgroundColor: Colors.white
    },
    leftBlock: {
        width: 60,
        height: '100%',
        borderRightWidth: .2,
        borderColor: Colors.blue
    },
    rightBlock: {
        flex: 1,
        padding: 5
    },
    tickerView: {
        borderWidth: .2,
        borderRadius: 10,
        borderColor: Colors.blue,
        flex: 1
    },
    tickerLeft:  { 
        height: '100%', 
        width: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    patiantInfo: {
        flex: 1,
        height: '100%',
        padding: 10,
        justifyContent: 'space-between'
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    patientName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: Colors.grey
    },
    pending: {
        height: 8,
        width: 8,
        borderRadius: 4,
        borderWidth: 2.5,
        borderColor: Colors.orange
    },
    approved: {
        height: 8,
        width: 8,
        borderRadius: 4,
        borderWidth: 2.5,
        borderColor: Colors.green
    },
    passed: {
        height: 8,
        width: 8,
        borderRadius: 4,
        borderWidth: 2.5,
        borderColor: Colors.blue
    },
    currentTimeView: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        left: 55,
        top: 0,
        height: 10,
        width: Dimensions.get("window").width - 60,
        zIndex: 10
    },
    currentTimeLeft: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'red'
    },
    redline: {
        width: '100%',
        height: 3,
        backgroundColor: 'red'
    }
  });