import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./screens/DashboardScreen";
import MyTabs from "./navigation/DashboardNavigator";

const Main: React.FC=()=>{
    return(
        <NavigationContainer>
           <MyTabs/>
        </NavigationContainer>
    )
}

export default Main;