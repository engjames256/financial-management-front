import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Modal,
  Dimensions
} from "react-native";
import Header from "./components/Header";

export default class App extends React.Component {
  state = {
    enteredItem: {},
    enteredAmount: {},
    enteredIncome: {},
    enteredItems: [],
    enteredIncomes: [],
    isAddExpense: false,
    isAddIncome: false
  };

  itemInputHandler = enteredText => {
    this.setState({
      enteredItem: {
        id: Math.random()
          .toString(36)
          .substring(7),
        enteredItem: enteredText
      }
    });
  };

  itemInputHandlerAmount = enteredAmount => {
    this.setState({
      enteredAmount: {
        id: Math.random()
          .toString(36)
          .substring(7),
        enteredAmount: enteredAmount
      }
    });
  };
  incomeInputHandler = enteredText => {
    this.setState({
      enteredIncome: {
        id: Math.random()
          .toString(36)
          .substring(7),
        enteredIncome: enteredText
      }
    });
  };
  computeTotal = arrayOfItems => {
    let total = 0;
    arrayOfItems.length &&
      arrayOfItems.forEach(item => {
        total = total + parseInt(item.enteredAmount);
      });
    return total;
  };

  addItemHandler = () => {
    const { enteredItems } = this.state;
    const newList = enteredItems;
    const newData = {
      id: this.state.enteredItem.id,
      enteredItem: this.state.enteredItem.enteredItem,
      enteredAmount: this.state.enteredAmount.enteredAmount
    };
    newList.push(newData);

  addItemHandler = () => {
    const { enteredItems } = this.state;
    const newList = enteredItems;
    newList.push(this.state.enteredItem);

    this.setState({
      enteredItems: newList,
      isAddExpense: false
    });
  };

  addIncomeHandler = () => {
    const { enteredIncomes } = this.state;
    const newList = enteredIncomes;

    const newData = {
      id: this.state.enteredIncome.id,
      enteredIncome: this.state.enteredIncome.enteredIncome,
      enteredAmount: this.state.enteredAmount.enteredAmount
    };
    newList.push(newData);

    newList.push(this.state.enteredIncome);

    this.setState({
      enteredIncomes: newList,
      isAddIncome: false
    });
  };

  cancelAddition = () => {
    this.setState({ isAddExpense: false, isAddIncome: false });
  };

  render() {
    return (
      <View style={styles.screen}>
        <Header title="Personal Finanacial Management" />
        <View style={styles.totals}>
          <View style={styles.totalexpense}>

            <Text>
              Total Expense: {this.computeTotal(this.state.enteredItems)}
            </Text>
          </View>
          <View style={styles.totalexpense}>
            <Text>
              Total Income: {this.computeTotal(this.state.enteredIncomes)}
            </Text>

            <Text>Total Expense: 10,000</Text>
          </View>
          <View style={styles.totalexpense}>
            <Text>Total Income: 20,000</Text>

          </View>
        </View>
        <View>
          <Text style={styles.pagebody}>Expenses</Text>
        </View>
        <FlatList
          style={styles.pagebody}
          keyExtractor={item => item.id}
          data={this.state.enteredItems}
          renderItem={itemData => (
            <View style={styles.itemlist}>
              <Text>{itemData.item.enteredItem}</Text>

              <Text>{itemData.item.enteredAmount}</Text>

            </View>
          )}
        />

        <View>
          <Text style={styles.pagebody}>Income</Text>
        </View>
        <FlatList
          style={styles.pagebody}
          keyExtractor={item => item.id}
          data={this.state.enteredIncomes}
          renderItem={itemData => (
            <View style={styles.itemlist}>
              <Text>{itemData.item.enteredIncome}</Text>

              <Text>{itemData.item.enteredAmount}</Text>


            </View>
          )}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="ADD INCOME"
              onPress={() => this.setState({ isAddIncome: true })}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD EXPENSE"
              onPress={() => this.setState({ isAddExpense: true })}
            />
          </View>
        </View>
        <Modal
          visible={this.state.isAddExpense}
          animationType="slide"
          style={styles.modal}
        >
          <Text style={styles.pagebody}>Expenditure Records Page</Text>

          <View style={[styles.button, styles.modal]}>
            <TextInput
              placeholder="Item"
              style={styles.input}
              onChangeText={this.itemInputHandler}
              value={this.state.enteredItem.enteredItem}
            />
            <TextInput
              placeholder="Amount"
              style={styles.input}

              onChangeText={this.itemInputHandlerAmount}
              value={this.state.enteredAmount.enteredAmount}

              onChangeText={this.itemInputHandler}
              value={this.state.enteredItem.enteredItem}

            />
          </View>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button title="CANCEL" onPress={this.cancelAddition} />
            </View>
            <View style={styles.button}>
              <Button title="ADD EXPENSE" onPress={this.addItemHandler} />
            </View>
          </View>
        </Modal>

        <Modal visible={this.state.isAddIncome} animationType="slide">
          <Text style={styles.pagebody}>Income Records Page</Text>
          <View style={[styles.button, styles.modal]}>
            <TextInput
              placeholder="Item"
              style={styles.input}
              onChangeText={this.incomeInputHandler}
              value={this.state.enteredIncome.enteredIncome}
            />
            <TextInput
              placeholder="Amount"
              style={styles.input}

              onChangeText={this.itemInputHandlerAmount}
              value={this.state.enteredAmount.enteredAmount}

              onChangeText={this.incomeInputHandler}
              value={this.state.enteredIncome.enteredIncome}

            />
          </View>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button title="CANCEL" onPress={this.cancelAddition} />
            </View>
            <View style={styles.button}>
              <Button title="ADD INCOME" onPress={this.addIncomeHandler} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  totals: {

    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "grey"

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
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 20
  },
  button: {
    width: 165
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    margin: 10,
    width: Dimensions.get("window").width - 20,
    justifyContent: "center",
    alignItems: "center"
  },
  itemlist: {
    padding: 5,
    margin: 1,
    backgroundColor: "#ccc",

    flexDirection: "row",
    justifyContent: "space-between"

    borderColor: "black",
    borderWidth: 1

  },
  pagebody: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  modal: {
    marginTop: "40%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
