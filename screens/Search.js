import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import useDebounce from "../components/hooks/useDebounce";
import { useGetNowPlayingQuery, useGetSearchQuery } from "../toolkit/ApiQuery";
import { posterURL } from "../constants/url";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Serach = ({navigation}) => {
  const [searchInp, setSearchInp] = useState("");
  const [query, setQuery] = useState("");
  const debounceApi = useDebounce(searchInp, 500);

  const { data: movieData, isSuccess } = useGetSearchQuery(query);
  const { data: nowPlaying, isSuccess: nowPlayingIsSucc } =
    useGetNowPlayingQuery();

  const handleChange = (text) => {
    setSearchInp(text);
  };

  useEffect(() => {
    setQuery(debounceApi);
  }, [debounceApi]);


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ position: "relative" }}>
          <FontAwesome5
            name="search"
            color={"#2dfee4"}
            size={21}
            style={{
              position: "absolute",
              right: 20,
              top: 26,
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Serach Movies"
            value={searchInp}
            onChangeText={handleChange}
            placeholderTextColor={"white"}
          />
        </View>
        {isSuccess && movieData.results.length > 0 ? (
          <View style={styles.list}>
            <FlatList
              data={isSuccess && movieData.results.slice(0,12)}
              renderItem={({item : movie})=><RenderItem movie={movie} navigation={navigation}/>}
              keyExtractor={(item)=>item.id}
              showsVerticalScrollIndicator={false}

            />
          </View>
        ) : (
          <View style={styles.list}>
            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 22, color: "white", marginBottom: 12 }}>
                Now trending <Feather name="trending-up" size={20} />
              </Text>
            </View>
            <FlatList
              data={nowPlayingIsSucc && nowPlaying.results.slice(0, 12)}
              renderItem={({ item: movie }) => <RenderItem movie={movie}  navigation={navigation}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}

            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const RenderItem = ({ movie,navigation }) => (
  <View key={movie.id}>
    <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Details',{id : movie.id})}>
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `${posterURL}${movie.poster_path}` }}
        style={styles.movieImage}
        />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{movie.title.slice(0,26)}</Text>
        <Text style={styles.movieReleaseDate}>
          Released | {movie.release_date}
        </Text>
      </View>
    </View>
      </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "auto",
    marginTop: 20,
    padding: 16,
  },
  input: {
    height: 50,
    marginVertical: 12,
    borderBottomWidth: 2.5,
    borderWidth: 0.6,
    borderColor: "#2dfee4",
    padding: 10,
    paddingHorizontal: 20,
    color: "white",
    borderRadius: 10,
  },
  list: {
    borderRadius: 5,
    flexDirection :"column",
    flexGrow : 1,
    zIndex: 1,
  },
  movieItem: {
    flex : 0.7,
    borderRadius: 4,
    backgroundColor: "#2A2E3A",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    padding: 4,
  },
  movieImage: {
    borderRadius: 4,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  movieTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  movieReleaseDate: {
    color: "#e1e1e1",
  },
});

export default Serach;
