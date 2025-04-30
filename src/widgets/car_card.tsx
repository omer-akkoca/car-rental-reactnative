import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { ICar, NavigationProp } from "../types";
import { CImage, HorizontalLayout, P } from "../components";
import { GpsIcon, PumpIcon } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

const CarCard = ({ car }: { car: ICar }) => {

    const navigation = useNavigation<NavigationProp>();
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("car_details", { car })}
        >
            <View style={{ ...style.container, backgroundColor: colors.carCardBg, shadowColor: colors.black }}>
                <CImage
                    url={car.image}
                    width={"100%"}
                    height={120}
                    mode="contain"
                />
                <P color="black" size={20} weight="bold" align="center">{car.model}</P>
                <HorizontalLayout justify="space-between">
                    <HorizontalLayout gap={12}>
                        <HorizontalLayout gap={4}>
                            <GpsIcon color={colors.black} width={16} height={16} />
                            <P color="black">{car.distance}KM</P>
                        </HorizontalLayout>
                        <HorizontalLayout gap={4}>
                            <PumpIcon color={colors.black} width={16} height={16} />
                            <P color="black">{car.fuelCapacity}L</P>
                        </HorizontalLayout>
                    </HorizontalLayout>
                    <P color="black" size={16}>{`$${car.pricePerHour.toFixed(2)}`}</P>
                </HorizontalLayout>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 20,
        gap: 8,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    }
})

export default CarCard;