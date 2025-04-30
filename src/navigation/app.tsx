import React from "react";
import pages from "../constants/pages";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails, CarList, CarMap, Onboarding } from "../pages";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList, "AppStack">();

const AppStack = () => {
    return (
        <Stack.Navigator
            id="AppStack"
            initialRouteName={pages.onboarding}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={pages.onboarding} component={Onboarding} />
            <Stack.Screen name={pages.car_list} component={CarList} />
            <Stack.Screen name={pages.car_details} component={CarDetails} />
            <Stack.Screen name={pages.map_details} component={CarMap} />
        </Stack.Navigator>
    )
}

export default AppStack;