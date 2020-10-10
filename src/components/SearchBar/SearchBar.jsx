import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
  },
});
