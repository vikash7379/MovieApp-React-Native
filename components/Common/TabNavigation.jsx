import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import { StatusBar } from "expo-status-bar";
import Watchlist from "../../screens/Watchlist";
import AllMovies from "../../screens/AllMovies";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../../screens/Details";
import Header from "../Home/Header";
import Favorite from "../../screens/Favorite";
import Profile from '../../screens/Profile'
import Search from "../../screens/Search";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Temp() {
  return (
    <>
    <StatusBar style='light'/>
    <Stack.Navigator
      screenOptions={{

        headerStyle: { backgroundColor: "#181A2A" },
        headerTintColor: "white",
        backgroundColor: "#1f2340",
        loadingScreen: () => (
          <View style={{ flex: 1, backgroundColor: "#YOUR_CUSTOM_COLOR" }}>
            <Text>Loading</Text>
          </View>
        ),
      }}
      >
      <Stack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "#181A2A" },
          headerTintColor: "white",
          backgroundColor: "#1f2340",

        }}
        >
        <Stack.Screen
          name="Home"
          component={Home}

          options={{

            headerTitle: () => (
              <Text
              style={{
                color: "white",
                fontSize: 20, fontWeight: "bold" }}
              >
                Hello
              </Text>
            ),
            headerRight: () => <Header />,
          }}
        />
        <Stack.Screen
          name="AllMovie"
          component={AllMovies}
          options={{ title: "All Movies" }}
          />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
          />
      </Stack.Group>
    </Stack.Navigator>
  </>
  );
}

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: '#c5c5c5',
         tabBarStyle : {
          backgroundColor : '#181A2A',
          borderColor : "black",
          paddingHorizontal :10,
          height : 60,
          paddingBottom : 10
        }
        })}

        >
        <Tab.Screen
          name="HomeScreen"
          component={Temp}
          options={{
            tabBarLabel : "home",
            headerShown: false,
            tabBarIcon :()=><FontAwesome5 name="home" color="#c5c5c5" size={20}/>
          }}
        />
        <Tab.Screen
          name="Search" component={Search}
          options={{
            headerShown: false,
            tabBarIcon :()=><FontAwesome5 name="search" color="#c5c5c5" size={20}/>
          }}
          />
        <Tab.Screen name="My Watchlist" component={Watchlist}
         options={{
          headerStyle : {backgroundColor : '#181A2A'},
          headerTitleStyle : {color : 'white'},
          tabBarIcon :()=><FontAwesome5 name="bookmark" color="#c5c5c5" size={20}/>
        }}/>
        <Tab.Screen name="My Favorite" component={Favorite}
         options={{
          headerStyle : {backgroundColor : '#181A2A'},
          headerTitleStyle : {color : 'white'},
          tabBarIcon :()=><FontAwesome5 name="star" color="#c5c5c5" size={20}/>
        }}/>
        <Tab.Screen name="Profile" component={Profile}
         options={{
          headerShown: false,
          tabBarIcon :()=><FontAwesome5 name="user" color="#c5c5c5" size={20}/>
        }}/>
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
