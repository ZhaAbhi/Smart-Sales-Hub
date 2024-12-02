import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/DashboardNavigator";

const Main: React.FC=()=>{
    return(
        <NavigationContainer>
           <MyTabs/>
        </NavigationContainer>
    )
}

export default Main;