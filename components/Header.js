import React from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={[styles.header,Platform.select({ios:styles.headerIOS, android:styles.headerAndroid})]}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS==='android'? Colors.secondary:Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIOS:{
    backgroundColor:Colors.secondary,
    borderBottomColor:'#ccc',
    borderBottomWidth:1
  },
  headerAndroid:{
    backgroundColor:Colors.primary

  }
});

export default Header;
