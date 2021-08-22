import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default function DisplayTicketDetail({ route, navigation }) {
  const item = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>OrderId : {item.orderID}</Text>
      <Text>fseName : {item.fseName}</Text>
      <Text>customer : {item.customer}</Text>
      <Text>tid : {item.tid}</Text>
      <Button title='Go to List' onPress={() => navigation.navigate('List')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
