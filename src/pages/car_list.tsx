import React from "react";
import { useTheme } from "../providers";
import { FlatList, View } from "react-native";
import { ICar } from "../types";
import { CarCard } from "../widgets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppBar } from "../components";

const CarList = () => {
    
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const cars: ICar[] = [
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
        { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 },
    ]

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar title="Choose Your Car"/>
            <FlatList
                data={cars}
                renderItem={({index, item}) => {
                    return <CarCard car={item}/>
                }}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
                contentContainerStyle={{ padding: 16, paddingBottom: bottom + 16 }}
            />
        </View>
    )
}

export default CarList;