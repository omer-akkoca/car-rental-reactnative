import React from "react";
import { useTheme } from "../providers";
import { ActivityIndicator, FlatList, View } from "react-native";
import { ICar } from "../types";
import { CarCard } from "../widgets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppBar } from "../components";
import { useCollection } from "../hooks/useCollection";

const CarList = () => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    const { data: cars, loading } = useCollection<ICar>("cars")

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                title="Choose Your Car"
                leading={<></>}
            />
            <View style={{ flex: 1 }}>
                {
                    loading
                        ? (
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <ActivityIndicator size={"large"} color={colors.gunmetal}/>
                            </View>
                        )
                        : (
                            <FlatList
                                data={cars}
                                keyExtractor={(car) => car.id}
                                renderItem={(props) => {
                                    const car = props.item;
                                    return <CarCard car={car} />
                                }}
                                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                                contentContainerStyle={{ padding: 16, paddingBottom: bottom + 16 }}
                                showsVerticalScrollIndicator={false}
                            />
                        )
                }
            </View>
        </View>
    )
}

export default CarList;