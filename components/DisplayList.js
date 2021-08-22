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

const data = [
  { orderID: 12345, fseName: 'John Doe', customer: 'Chase', tid: 'tid1' },
  { orderID: 34567, fseName: 'Tom', customer: 'BoA', tid: 'tid12' },
  { orderID: 98754, fseName: 'Alex', customer: 'T5Bank', tid: 'tid534' },
];

export default function DisplayList({ navigation }) {
  const [list, setList] = useState(data);

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View>
        <Text style={styles.title}>{item.orderID} </Text>
        <Button
          title='Go to Details'
          onPress={() => navigation.navigate('Details', item)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
