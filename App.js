import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import { Provider } from "react-redux";
import { store } from "./toolkit/store";
import AllMovies from "./screens/AllMovies";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Home/Header";
import Details from './screens/Details'
import BottomNav from "./components/BottomTab";
import Watchlist from "./components/Home/Watchlist";
import Favorite from './screens/Favorite';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
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
              headerTitle: () => (<Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Hello</Text>),
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
            options={{headerShown : false}}
          />
          <Stack.Screen
            name="Watchlist"
            component={Watchlist}
          />
           <Stack.Screen
            name="Favorite"
            component={Favorite}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
