import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.cartItem}>
        <View style={styles.itemDetails}>
          {/* Display item details here */}
        </View>
        <View style={styles.quantityButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleIncrement(item)}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDecrement(item)}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleIncrement = item => {
    // Implement logic to increment quantity
  };

  const handleDecrement = item => {
    // Implement logic to decrement quantity
  };

  return (
    <View>
      <Text style={styles.headerText}>Cart Screen</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartItem: {
    marginHorizontal: 10,
    backgroundColor: 'pink',
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetails: {
    flex: 1,
    // Add styles for item details container
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 8,
    marginHorizontal: 5,
  },
});

export default Cart;
