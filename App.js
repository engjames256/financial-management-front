import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import Header from "./components/Header";

export default function App() {
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
      </ScrollView>
      <ScrollView>
        <Text>Income</Text>
      </ScrollView>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="ADD INCOME" />
        </View>
        <View style={styles.button}>
          <Button title="ADD EXPENSE" />
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
    margin: 25
  },
  button: {
    width: 150
  }
});
