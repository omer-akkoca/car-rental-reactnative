import React from "react";
import { useTheme } from "../providers";
import { FlatList, View } from "react-native";
import { ICar } from "../types";
import { CarCard } from "../widgets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppBar } from "../components";
import { useCollection } from "../hooks/useCollection";

const CarList = () => {
    
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const { data: cars } = useCollection<ICar>("cars")

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar title="Choose Your Car"/>
            <FlatList
                data={cars}
                renderItem={(props) => {
                    const car = props.item;
                    return <CarCard car={car}/>
                }}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}/>}
                contentContainerStyle={{ padding: 16, paddingBottom: bottom + 16 }}
            />
        </View>
    )
}

export default CarList;