import { View, Text,TouchableOpacity  } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomNav = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        paddingHorizontal: 22,
        justifyContent: "space-between",
        backgroundColor :"#181A2A",
      }}
    >
      <Icon icon="home" text="home" path={'Home'} navigation={navigation}/>
      <Icon icon="search" text="Browse"  path={'Home'} navigation={navigation}/>
      <Icon icon="bookmark" text="Watchlist"  path={'Watchlist'} navigation={navigation}/>
      <Icon icon="star" text="Favorite" path={'Favorite'} navigation={navigation}/>
      <Icon icon="user" text="Account" path={'Home'} navigation={navigation}/>
    </View>
  );
};

const Icon = ({ icon, text,path,navigation }) => (
  <View>
    <TouchableOpacity onPress={()=>navigation.navigate(path)}>
      <FontAwesome5
        name={icon}
        size={20}
        color ="white"
        style={{ marginBottom: 3, alignSelf: "center", }}
      />
      <Text style={{ fontSize: 13, fontWeight: "600", color : "white" }}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default BottomNav;
