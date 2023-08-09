import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { genresImg } from "../../data";

const Genres = ({ data, index,navigation }) => {

  return (
    <View >
      <TouchableOpacity onPress={()=>navigation.navigate('AllMovie',{id:data.id,genres : true })} style={styles.container}>
        <Image source={{ uri: genresImg[index].img }} style={styles.img} />
        <Text
          numberOfLines={1}
          style={{ color: "white", marginTop: 5, fontSize: 13 }}
        >
          {data.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    marginVertical: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 60,
    objectFit: "cover",
  },
});

export default Genres;
