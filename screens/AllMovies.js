import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import MovieCard from "../components/Home/MovieCard";
import { useGetAllMovieQuery, useGetGenresQuery, useGetMoviesByGenresQuery } from "../toolkit/ApiQuery";

const AllMovies = ({ navigation, route}) => {

    const {data: allMovies, isSuccess : allMoviesIsSuccess} = useGetAllMovieQuery(route.params.path);
    const {data: genresData, isSuccess : genresIsSuccess} = useGetMoviesByGenresQuery(route.params.id);

    let genres = route.params.genres;

    console.log("this is routqeshh",route.params)

    return (
    <View style={{backgroundColor : '#1f2340',paddingHorizontal : 10}}>
      <View >
        <FlatList
          horizontal={false}
          data={ genres ?  (genresIsSuccess && genresData.results)  : (allMoviesIsSuccess && allMovies.results)}
          renderItem={({ item }) => <MovieCard item={item} cardWidth={160} cardHeight={320} navigation={navigation}/>}
          keyExtractor={(item)=>item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default AllMovies;
