import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ICar from "./models/car";

export type RootStackParamList = {
    onboarding: undefined;
    car_list: undefined;
    car_details: { car: ICar };
    map_details: { car: ICar };
  };

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
