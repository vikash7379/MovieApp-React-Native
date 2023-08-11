import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { posterURL } from "../../constants/url";
import { useDispatch } from "react-redux";
import { removeWatchlist } from "../../toolkit/watchlistSlice";

const WatchlistCard = ({ item,navigation }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeWatchlist(id));
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Details',{id :item.id})}>
        <View
          style={{
            margin: 10,
            marginTop: 18,
            height: 150,
            flexDirection: "row",
            backgroundColor: "#2A2E3A",
            borderRadius: 10,
          }}
        >
          <Image
            source={{ uri: posterURL + item.poster_path }}
            style={{
              width: 120,
              height: "100%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              objectFit: "cover",
            }}
          />
          <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 17, fontWeight: "bold" }}
              >
                {item.title}
              </Text>
            </View>
            <Text style={{ color: "#e1e1e1", fontSize: 14, marginTop: 10 }}>
              IMDB &nbsp; {item.vote_average} ⭐ &nbsp;( {item.vote_count} )
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#e1e1e1", marginTop: 7, fontSize: 14 }}>
                {item.genres}{" "}
              </Text>
              <Text style={{ color: "#e1e1e1", marginTop: 7, fontSize: 14 }}>
                |&nbsp; Time : {item.runtime} min
              </Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ marginTop: 14 }}
                onPress={() => handleRemove(item.id)}
              >
                <Text style={{ color: "tomato", fontSize: 18 }}>Remove 🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WatchlistCard;
