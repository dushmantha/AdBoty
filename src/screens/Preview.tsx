import React from 'react';
import {SafeAreaView, StyleSheet, useWindowDimensions} from 'react-native';
import { HomeNavigationProps } from '../navigation/HomeNavigation';
import RenderHtml from 'react-native-render-html';

export const Preview:  React.FC<HomeNavigationProps<'Preview'>> = ({route, navigation}) => {
  var {html, css} = route.params
  const source = { html: `<html><head><meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">${css}</head><body>${html}</body></html>`};

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <RenderHtml
      contentWidth={width}
      source={source}
      defaultTextProps={{selectable:true}}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});