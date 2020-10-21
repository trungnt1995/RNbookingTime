/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BookingHeader from './Components/BookingHeader/BookingHeader';
import BookingTimeline from './Components/BookingTimeline/BookingTimeline';
import BookingFooter from './Components/BookingFooter/BookingFooter';
import DateHelper from './Common/DateHelper';
import customData from '../data.json';

const App = () => {

  function renderHeader(){
    const date = new Date()
    const dateString = DateHelper.formatDate(date)
    return <BookingHeader date={dateString} />
  }

  function renderBookingTimeline(){
    const calendar = customData?.data[0].appoitment_calendar
    return <BookingTimeline calendar={calendar} />
  }

  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          {renderHeader()}
          {renderBookingTimeline()}
          <BookingFooter />
        </SafeAreaView>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  safeArea:{
    flex: 1
  },  
  header: {
    height: 60,
    width: "100%"
  },
  footer: {
    height: 40,
    width: "100%"
  },
});

export default App;
