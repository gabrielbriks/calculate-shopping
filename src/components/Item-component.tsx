import React from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";

interface ItemList {
  key: string,
  name: string, 
  quantity: number, 
  subtotal: number
}

const Item = (props: ItemList) => {

  return (
    <View style={styles.viewListItens}>
                
      <Text style={styles.text} >{ props.name } </Text>
      <Text style={styles.text} >{ props.quantity }</Text>
      <Text style={styles.text} >{ props.subtotal }</Text>          
      
      
    </View>
  );
}

const styles = StyleSheet.create({

   viewListItens: {
    flex: 1,
    flexDirection: 'row',
    alignContent:'space-between',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
    // marginRight: 25,
    flex: 1
  },
});


export default Item;