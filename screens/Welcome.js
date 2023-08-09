import { View, Text, StyleSheet, Image, Animated } from "react-native";
import React, {useEffect} from "react";

const Welcome = () => {

  const bounceValue = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, []);


  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 900,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };
  const translateY = bounceValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -25],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: "https://img.icons8.com/arcade/128/movie-projector.png",
        }}
        style={[styles.icon, { transform: [{ translateY }] }]}
      />
      <Text style={{color : 'white',fontSize : 20,marginTop : 5}}>Welcome to movie IMDB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2730",
  },
  icon: {
    width: 100,
    height: 100,
  },
});


export default Welcome
