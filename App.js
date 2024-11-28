import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider, VStack, useColorModeValue } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import LoginScreen from './src/screens/LoginScreen';
import ToggleDarkMode from './ToggleDarkMode';
import Theme from './Theme';
import RegisterScreen from "./src/screens/RegisterScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ConfigurationScreen from "./src/screens/ConfigScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import TabTwoScreen from "./src/screens/Badges";
import LoginScreen2 from "./src/screens/Hooks";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }else if(route.name === 'Profile'){
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }else if(route.name === 'Configuration'){
            iconName = focused ? 'settings' : 'settings-outline';
          {/*}}else if(route.name === 'Connect'){
            iconName = focused ? 'link' : 'link-outline';}*/}
          {/*}else if(route.name === 'Badges'){
            iconName = focused ? 'badge' : 'badge-outline';*/}
          }else if(route.name === 'Hooks'){
            iconName = focused ? 'code-slash' : 'code-slash-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })} 
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Configuration" component={ConfigurationScreen} options={{ headerShown: false }} />
      {/*<Tab.Screen name="Connect" component={ConnectScreen} options={{ headerShown: false }} />*/}
      {/*<Tab.Screen name="Badges" component={TabTwoScreen} options={{ headerShown: false }} />*/}
      <Tab.Screen name="Hooks" component={LoginScreen2} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <VStack flex={1} bg={useColorModeValue("light.background.50", "dark.background.900")}>
          <Box safeAreaTop bg={useColorModeValue('light.background.100', 'dark.background.900')}>
            <ToggleDarkMode />
          </Box>
          <Stack.Navigator initialRouteName={isAuthenticated ? "MainTab" : "Login"}>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          </Stack.Navigator>
        </VStack>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
