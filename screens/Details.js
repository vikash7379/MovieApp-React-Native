import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { useGetMovieDetailsQuery, useGetRecosQuery } from "../toolkit/ApiQuery";
import Trailer from "../components/Details/Trailer";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Credits from "../components/Details/Credits";
import MovieCard from "../components/Home/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist } from "../toolkit/watchlistSlice";
import { addFavorite, removeFavorite } from "../toolkit/favoriteSlice";

const Details = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  const watchlistData = useSelector((state) => state.watchlist.watchlistData);
  const favoriteData = useSelector((state) => state.favorite.favData);


  const { data: movieData, isSuccess: movieDataIsSuccess } =
    useGetMovieDetailsQuery(route.params.id);
  const { data: recosData, isSuccess: recosIsSuccess } = useGetRecosQuery(
    movieDataIsSuccess && movieData.id
  );

  const handleWatchlist = (item) => {
    if (user?.name) {
      const data = {
        id: item.id,
        title: item.title.slice(0, 20),
        vote_average: item.vote_average.toFixed(1),
        vote_count: item.vote_count,
        genres: item.genres[0].name,
        runtime: item.runtime,
        poster_path: item.poster_path,
      };
      dispatch(addWatchlist(data));
    } else {
      navigation.navigate("My Profile");
    }
  };

  const handleAddFavorite = (item) => {
    if (user?.name) {
      const data = {
        id: item.id,
        title: item.title.slice(0, 20),
        vote_average: item.vote_average.toFixed(1),
        vote_count: item.vote_count,
        genres: item.genres[0].name,
        runtime: item.runtime,
        poster_path: item.poster_path,
      };
      dispatch(addFavorite(data));
    } else {
      navigation.navigate("My Profile");
    }
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <View style={{ backgroundColor: "#1f2340", flex: 1 }}>
      {movieDataIsSuccess && (
        <>
          <StatusBar backgroundColor="transparent" translucent />
          <ScrollView>
            <Trailer id={movieData.id} series={route.params.series} />
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.heading}>
                  {movieData.title.slice(0, 20)}
                </Text>
                <Text style={{ color: "white" }}>
                  IMDB {movieData.vote_average.toFixed(1)} ⭐ (
                  {movieData.vote_count})
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {movieData.genres.slice(0, 3).map((el) => (
                  <Text
                    key={el.id}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      marginTop: 4,
                      fontSize: 13,
                    }}
                  >
                    {el.name},{" "}
                  </Text>
                ))}
                <Text
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                    fontSize: 13,
                  }}
                >
                  |&nbsp; Runtime : {movieData.runtime} min
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={7}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginVertical: 10,
                    fontSize: 16,
                    letterSpacing: 0.8,
                  }}
                >
                  {movieData.overview}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 25,
                  marginTop: 10,
                  marginBottom: 14,
                }}
              >
                {watchlistData.every((item) => item.id !== movieData.id) ? (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ ...styles.btn, borderColor: "#2dfee4" }}
                    onPress={() => handleWatchlist(movieData)}
                  >
                    <Text style={{ color: "white", fontSize: 18 }}>
                      {" "}
                      Add To Watchlist &nbsp;
                      <FontAwesome
                        name="bookmark-o"
                        color={"white"}
                        size={19}
                      />
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ ...styles.btn, borderColor: "tomato" }}
                    onPress={() => navigation.navigate("My Watchlist")}
                  >
                    <Text style={{ color: "white", fontSize: 18 }}>
                      {" "}
                      Go To Watchlist &nbsp;
                      <FontAwesome
                        name="bookmark-o"
                        color={"white"}
                        size={19}
                      />
                    </Text>
                  </TouchableOpacity>
                )}
                {favoriteData.every((el) => el.id !== movieData.id) ? (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ ...styles.btn2, borderColor: "#2dfee4" }}
                    onPress={() => handleAddFavorite(movieData)}
                  >
                    <Text style={{ fontSize: 30 }}>
                      <FontAwesome name="heart-o" color={"white"} size={25} />
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ ...styles.btn2, borderColor: "tomato" }}
                    onPress={() => handleRemoveFavorite(movieData.id)}
                  >
                    <Text style={{ fontSize: 30 }}>
                      <FontAwesome name="heart" color={"tomato"} size={25} />
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <View>
                <Text style={styles.heading}>The Cast</Text>
                <Credits id={movieData.id} />
              </View>
              <View style={{ marginBottom: 30 }}>
                <Text style={styles.heading}>Similar Recommended Movies</Text>
                <FlatList
                  horizontal
                  data={recosIsSuccess && recosData.results}
                  renderItem={({ item }) => (
                    <MovieCard
                      item={item}
                      cardWidth={110}
                      cardHeight={210}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: "#27374D",
    borderRadius: 7,
    elevation: 1,

    borderWidth: 1,
  },
  btn2: {
    padding: 10,
    elevation: 1,
    borderRadius: 30,

    borderWidth: 1,
  },
});

export default Details;
