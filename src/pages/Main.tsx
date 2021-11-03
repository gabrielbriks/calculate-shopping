import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TextInput, ScrollView, StatusBar, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Item from '../components/Item-component'

interface ListItems { 
  id: string,
  name: string;
  quatity: number;
  valor: number,
  subtotal: number;
}

const Main: React.FC = () => {

  const [items, setItems] = useState<ListItems[]>([]);
  const [ nameItem, setNameItem] = useState<string>('');
  const [ total, setTotal] = useState<number>(0);
  const [ quantityItem , setQuantityItem] = useState<number>(0);
  const [ subtotalItem , setSubtotalItem] = useState<number>(0);
  const [ valorItem , setValorItem] = useState<number>(0);

  /**
   * Adiciona um novo item na lista
   */
  const AddItemInList = () => {
    
    let newItem: ListItems = {
      id: (items.length + 1).toString(),
      name: nameItem,
      quatity: (1),
      valor: (0),
      subtotal: (0),
    }

    setItems([...items, newItem]);
    
    let totalItems = items.reduce((a, b) => a + b.subtotal, 0)
    totalItems += newItem.subtotal;
   
    setTotal(totalItems);
    setNameItem('');


  };

  /**
   * Atualiza valor do item da lista
   * @param key 
   * @param quantityItem 
   * @param valueItem 
   */
  const UpdateValueItem = (key: string, quantityItem: number, valueItem: number) => {
    let _total = quantityItem * valueItem;
    
    let _item = items.find(index => index.id === key);
    let _indexItem = items.findIndex(index => index.id == key);

    if(_item){
      items[_indexItem].quatity = quantityItem;
      items[_indexItem].valor = valueItem;
      items[_indexItem].subtotal = _total;

    }

    items.forEach(item => {console.log(item.name, item.subtotal)});
    let totalItems = items.reduce((a, b) => a + b.subtotal, 0);
    console.log(totalItems);
  
    _total = totalItems + _total;
    

    setTotal(totalItems);
  }

  

    return (
    <SafeAreaView style={styles.container}>
          <View style={styles.viewHeaderListItens}>
            
          <Text style={[styles.headerList, {textAlign: 'left'}]}> Nome </Text>
          <Text style={styles.headerList}> Quatidade </Text>
          <Text style={styles.headerList}> Valor </Text>
          
          </View>

          <FlatList contentContainerStyle={{padding: 10}}
            data={items} 
            keyExtractor={ item => item.id }
            extraData={items}
            renderItem={({item}) => (
              <View style={styles.viewListItens}>
                
                <Text style={styles.textName} >{ item.name } </Text>
                
                <TextInput

                  style={{ 
                    backgroundColor: '#FFF',
                    borderColor:'#CCC',
                    margin: 20,
                    padding: 10,
                    borderWidth:3,
                    borderRadius: 8,
                    height: 40,
                    width: 50,
                    textAlign: 'center',
                    fontSize: 18,
                  }}


                  defaultValue={item.quatity.toString()}
                  onChangeText={(text) => {

                    if(Number.parseInt(text) > 0){
                      setQuantityItem(Number.parseInt(text));
                      UpdateValueItem(item.id, Number.parseInt(text), item.valor );
                    }
                  }}
                  keyboardType='numeric' 
                />

                 <TextInput

                  style={{ 
                    backgroundColor: '#FFF',
                    borderColor:'#CCC',
                    margin: 20,
                    padding: 10,
                    borderWidth:3,
                    borderRadius: 8,
                    height: 40,
                    width: 50,
                    textAlign: 'center',
                    fontSize: 18,
                    
                  }}

                  defaultValue={item.valor.toString()}
                  onChangeText={(textValor) => {

                    if(Number.parseInt(textValor) >= 0){
                      setValorItem(Number.parseInt(textValor));
                      UpdateValueItem(item.id, item.quatity, Number.parseInt(textValor));
                    }
                  }}
                  keyboardType='numeric' 
                />  

                
              </View>
            
            )}
          /> 
      

        <View style={styles.viewTotalItems}>
          <Text style={[styles.textTotal, {marginRight: 120}]} >TOTAL</Text>   
          <Text style={[styles.textTotal, {fontSize: 28}]} >{ total }</Text>   
        </View>
        <View style={styles.viewAddItem}> 
          <TextInput 
            style={styles.inputAddItem}
            defaultValue={nameItem}
            value={nameItem}  
            onChangeText={text => setNameItem(text)} 
          />    
          <Button onPress={() => {AddItemInList()}} title='ADD'/>
        </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, 
    marginHorizontal: 5
  },

  scrolview: {
    // marginHorizontal: 5,
  },

  viewListItens: {
    flex: 1,
    flexDirection: 'row',
    alignContent:'space-between',
    alignItems: 'center',
  },
 
  text: {
    // fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
    // marginRight: 25,
    flex: 1
  },

  textName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
    // marginRight: 25,
    flex: 1,
    // width: 100,
  },

  textTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
    flex: 1
  },

  viewAddItem: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'space-between',
    
  },

  viewTotalItems: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'space-between',
    
  },

  inputAddItem: {
    backgroundColor: '#FFF',
    borderColor:'#CCC',
    margin: 20,
    padding: 10,
    borderWidth:3,
    borderRadius: 8,
    height: 40,
    flex: 1
  
  },

  
  inputsItems: {
    backgroundColor: '#FFF',
    borderColor:'#CCC',
    margin: 20,
    padding: 10,
    borderWidth:3,
    borderRadius: 8,
    height: 40,
    flex: 1
  
  },

  headerList: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    flex: 1
    
    
  },

  viewHeaderListItens: {
    backgroundColor: '#CCC',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'space-between',
    
  },

 
});

export default Main;  