import Welcome from "./screens/Welcome";
import { Provider } from "react-redux";
import { store } from "./toolkit/store";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/Common/TabNavigation";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();


function App() {

  const [showWelcome,setShowWelcome] = useState(true)

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setShowWelcome(false);
    },2500)
    return ()=>clearTimeout(timer);
  },[])

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#1f2340',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="light"/>
      <Stack.Navigator>
        {showWelcome &&
        <Stack.Screen name="Welcome" component={Welcome}
          options={{headerShown : false}}
        />
      }
        <Stack.Screen
          name="Layout"
          component={TabNavigation}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
