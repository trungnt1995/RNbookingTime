import { StyleSheet } from 'react-native';
import Colors from '../../Theme/Colors/Colors';
export default StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    statusContainer: {
        flexDirection: 'row',
        width: '55%',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: .2,
        borderRadius: 20,
        backgroundColor: Colors.white
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        marginLeft: 3,
        fontFamily: 'Roboto-Regular',
        fontSize: 12
    }
  });