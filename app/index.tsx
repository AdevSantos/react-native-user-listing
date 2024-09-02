import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/login";
import Home from "../src/screens/home";
import UserDetails from "../src/screens/userDetails";
import { RootStackParamList } from "../src/navigation/types";

const Stack = createStackNavigator<RootStackParamList>();

const AppRouters = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="userDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default AppRouters;
