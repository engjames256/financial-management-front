import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput
} from "react-native";
import Header from "./components/Header";

export default function App() {
  const [enteredItem, setEnteredItem] = useState("");

  const [enteredItems, setEnteredItems] = useState([]);

  const itemInputHandler = enteredText => {
    setEnteredItem(enteredText);
  };

  const addItemHandler = () => {
    setEnteredItems(currentItems => [...currentItems, enteredItem]);
  };

  return (
    <View style={styles.screen}>
      <Header title="Personal Finanacial Management" />
      <View style={styles.totals}>
        <View style={styles.totalexpense}>
          <Text>Total Expense: 10,000</Text>
        </View>
        <View style={styles.totalexpense}>
          <Text>Total Income: 20,000</Text>
        </View>
      </View>
      <ScrollView>
        <Text>Expenses</Text>
        {enteredItems.map((item) => <Text>{item}</Text>)}
        
      </ScrollView>
      <View>
        <Text>Income</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="ADD INCOME" />
        </View>
        <View style={styles.button}>
          <TextInput
            placeholder="Item"
            style={styles.input}
            onChangeText={itemInputHandler}
            value={enteredItem}
          />
          <Button title="ADD EXPENSE" onPress={addItemHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  totals: {
    flexDirection: "row"
  },
  totalexpense: {
    borderBottomColor: "black",
    margin: 10,
    padding: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50
  },
  button: {
    width: 150
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10
  }
});
