import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

import MovieCard from "../components/Home/MovieCard";
import Watchlist from "../components/Home/Watchlist";
import {
  useGetGenresQuery,
  useGetPopularQuery,
  useGetSeriesQuery,
  useGetUpcomingQuery,
} from "../toolkit/ApiQuery";
import Genres from "../components/Home/Genres";

const Home = ({ navigation }) => {
  const { data: popularData, isSuccess: popularIsSuccess } =
    useGetPopularQuery();
  const { data: genresData, isSuccess: genresIsSuccess } = useGetGenresQuery();
  const { data: seriesData, isSuccess: seriesIsSuccess } = useGetSeriesQuery();
  const { data: upcomingData, isSuccess: upcomingIsSuccess } =
    useGetUpcomingQuery();

  return (
    <View
      style={{
        backgroundColor: "#1f2340",
        paddingHorizontal: 12,
        paddingTop: 6,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trendings */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.heading}>Trending Movies</Text>
            <Text style={styles.subHeading}>
              Most Trending movies in the world
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllMovie", { path: "movie/popular" })
            }
          >
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularIsSuccess && popularData.results.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              cardWidth={130}
              cardHeight={280}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Genres  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Select Genres</Text>
        </View>
        <FlatList
          data={genresIsSuccess && genresData.genres.slice(0, 11)}
          horizontal
          renderItem={({ item, index }) => (
            <Genres
              data={item}
              index={index}
              cardWidth={130}
              cardHeight={280}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        {/* watchlist */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.heading}>Watchlist Movies</Text>
            <Text style={styles.subHeading}>Your watchlist movie</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllMovie", { path: "movie/popular" })
            }
          >
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <Watchlist />

        {/* Upcoming  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.heading}>Upcoming Movies</Text>
            <Text style={styles.subHeading}>
              Most Upcoming movies in the world
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllMovie", { path: "movie/upcoming" })
            }
          >
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={upcomingIsSuccess && upcomingData.results.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              cardWidth={130}
              cardHeight={280}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Tv series */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.heading}>Latest Tv Series</Text>
            <Text style={styles.subHeading}>Latest TV Series in the world</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllMovie", { path: "trending/tv/day" })
            }
          >
            <Text style={{ color: "rgba(255,255,255,0.7)" }}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={seriesIsSuccess && seriesData.results.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              cardWidth={130}
              cardHeight={280}
              navigation={navigation}
              series= {true}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 19,
    fontWeight: "bold",
  },
  subHeading: {
    color: "rgba(255,255,255,0.5)",
    marginTop: 4,
  },
});

export default Home;
