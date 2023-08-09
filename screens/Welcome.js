import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";

import backgroundImg from "../assets/wall.jpg";

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
    <ImageBackground
      source={backgroundImg}
      style={styles.bgImg}
      imageStyle={{ opacity: 1}}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Animated.Image
            source={{
              uri: "https://img.icons8.com/arcade/128/movie-projector.png",
            }}
            style={[styles.icon, { transform: [{ translateY }] }]}
          />
          <Text style={{ color: "white", fontSize: 20, marginTop: 5 }}>
            Welcome to movie IMDB
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    backgroundColor: "black",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default Welcome;
