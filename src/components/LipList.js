import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../features/cartSlice';

const LipList = () => {
    const cart = useSelector(state => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();
  const [lipstick, setlipstick] = useState([
    {
      lipstick: 'Red',
      id: '1',
      source: require('../images/lipstick/red.png'),
    },
    {
      lipstick: 'Pink',
      id: '2',
      source: require('../images/lipstick/pink.png'),
    },
    {
      lipstick: 'Mauve',
      id: '3',
      source: require('../images/lipstick/mauve.png'),
    },
    {
      lipstick: 'Peach',
      id: '4',
      source: require('../images/lipstick/peach.png'),
    },
    {
      lipstick: 'Purple',
      id: '5',
      source: require('../images/lipstick/purple.png'),
    },
  ]);

  const itemAdd = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={lipstick}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text>{item.lipstick}</Text>
              <View style={styles.box}>
                <Image style={{width: 100, height: 100}} source={item.source} />
              </View>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => itemAdd(item)}>
                  <Text style={styles.button}>ADD TO CART</Text>
                  </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 170,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 105,
    marginVertical: 5,
    padding: 5,
  },
});

export default LipList;
