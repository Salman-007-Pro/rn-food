import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "./../api/yelp";
const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <>
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />;
        }}
      />
    </>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
  },
  textStyle: {
    fontWeight: "bold",
    marginVertical: 10,
  },
});
