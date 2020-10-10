import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text
        style={styles.rateStyle}
      >{`${result.rating} Stars, ${result.review_count} Reviews`}</Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 4,
  },
  textStyle: {
    fontWeight: "bold",
  },
  rateStyle: {
    fontWeight: "bold",
    color: "#ccc",
  },
});
