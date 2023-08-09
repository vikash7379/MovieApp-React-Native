import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { posterURL } from "../../constants/url";

const MovieCard = ({ item, cardWidth, cardHeight,navigation, series = false }) => {
  // console.log("moviecard data",item)
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('Details',{id : item.id,series : series})}>
      <View
        style={{ ...styles.container, width: cardWidth, height: cardHeight }}
      >
        <Image
          source={{ uri: posterURL + item.poster_path }}
          style={styles.img}
        />
        <View style={{ flexBasis: "auto", alignItems: "center", marginTop: 6 }}>
          <Text
            numberOfLines={1}
            style={{ color: "white", fontWeight: "bold", marginBottom: 3 }}
          >
            {item.title || item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{ color: "white", fontSize: 11, fontWeight: "bold" }}
          >
            IMDB : {item.vote_average} ⭐ ({item.vote_count})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    marginRight: 17,
  },
  img: {
    width: "100%",
    height: "65%",
    marginTop: 15,
    borderRadius: 10,
    objectFit: "contain",
  },
});

export default MovieCard;
