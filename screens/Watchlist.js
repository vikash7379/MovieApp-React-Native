import { View, Text, Image,FlatList , TouchableOpacity, Button } from "react-native";
import React from "react";
import NoMovies from "../components/Common/NoMovies";
import { useDispatch, useSelector } from "react-redux";
import WatchlistCard from "../components/watchlist/WatchlistCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Watchlist = ({ navigation }) => {

  const data = useSelector((state) => state.watchlist.watchlistData);

  return (
    <View
      style={{
        backgroundColor: "#1f2340",
        flex: 1,
      }}
    >
      <StatusBar style="light"/>
      {!data.length > 0 ? (
        <>
          <NoMovies
            navigation={navigation}
            msg={"Watchlist"}
            icon={"https://img.icons8.com/nolan/96/wish-list.png"}
          />
        </>
      ) : (
        <>
          <View>
              <FlatList
                data={data}
                renderItem={({item})=><WatchlistCard item={item} navigation={navigation}/>}
                keyExtractor={(item)=>item.id}
              />
          </View>
        </>
      )}
    </View>
  );
};

export default Watchlist;
