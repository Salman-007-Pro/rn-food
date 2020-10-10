import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "./../components/SearchBar/SearchBar";
import useResults from "./../hooks/useResults/useResults";
import ResultsList from "./../components/ResultsList/ResultsList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((el) => el.price === price);
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective :"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title="Bit Pricer :"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title="Bit Spender :"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
