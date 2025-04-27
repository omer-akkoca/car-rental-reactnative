import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pages from "../constants/pages";
import { CarDetails, CarList, Onboarding } from "../pages";
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
        </Stack.Navigator>
    )
}

export default AppStack;