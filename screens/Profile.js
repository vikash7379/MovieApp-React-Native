import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../toolkit/userSlice";
import { removeAllFavorite } from "../toolkit/favoriteSlice";
import { removeAllWatchlist } from "../toolkit/watchlistSlice";
import { logoutUser } from "../utils/authUtils";

const Profile = ({ navigation }) => {

  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.data);
  const store = useSelector((state)=>state.user)

  const handleLogout = () =>{
    dispatch(removeAllFavorite());
    dispatch(removeAllWatchlist());
    dispatch(removeUser());
    navigation.navigate("LoginScreen")
  }

  console.log("user data s",store)


  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center",marginTop :40 }}>
        <Image
          source={{
            uri: "https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png",
          }}
          style={{
            width: 95,
            height: 95,
            borderRadius: 60,
          }}
        />
        <Text
          style={{
            color: "#c1c1c1",
            marginTop: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {user?.name}
        </Text>
      </View>
      <View style={{ padding: 16,marginTop : 20 }}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>navigation.navigate('LoginScreen', {msg : 'Update Profile'})}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="account-edit-outline"
              color="green"
              size={28}
            />
          </View>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>navigation.navigate('My Watchlist')}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="bookmark-check-outline"
              color="green"
              size={28}
            />
          </View>
          <Text style={styles.menuText}>My Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=>navigation.navigate('My Favorite')}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="heart-outline"
              color="green"
              size={28}
            />
          </View>
          <Text style={styles.menuText}>My Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={handleLogout}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="logout"
              color="green"
              size={28}
            />
          </View>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center",marginTop : 10}}>
          <Text style={{color : "#b0b0b0" , fontSize : 16}}>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom : 24
  },
  icon: {
    backgroundColor: "lightblue",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Profile;
