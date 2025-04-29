import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { AppBar, CImage, HorizontalLayout, P, Space } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BatteryIcon, CarIcon, PumpIcon, SnowIcon, SpeedIcon, whiteCarImage } from "../../assets/images";
import { SvgProps } from "react-native-svg";
import { shadowStyle } from "../constants/styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MapDetails = () => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()
    const { params: { car } } = useRoute<RouteProp<RootStackParamList, "map_details">>()

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <AppBar title={car.model} bgColor="gunmetal" titleColor="white" backIconColor="white" />
            <View style={{ flex: 1, position: "relative" }}>
                <View style={{ flex: 1, backgroundColor: "red" }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 40.983425,
                            longitude: 29.231314,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={[styles.carDetailsContainer, { backgroundColor: colors.gunmetal, shadowColor: colors.black }]}>
                    <View style={{ padding: 16, paddingVertical: 24, gap: 8 }}>
                        <P color="white" size={24} weight="bold">{car.model}</P>
                        <HorizontalLayout gap={10}>
                            <HorizontalLayout gap={5}>
                                <CarIcon color={colors.white} width={16} height={16} />
                                <P color="white" size={14}>{`${car.distance.toFixed(1)} km`}</P>
                            </HorizontalLayout>
                            <HorizontalLayout gap={5}>
                                <BatteryIcon color={colors.white} width={16} height={16} />
                                <P color="white" size={14}>{car.fuelCapacity.toFixed(1)}</P>
                            </HorizontalLayout>
                        </HorizontalLayout>
                    </View>
                    <View style={[styles.carInnerDetails, { backgroundColor: colors.white, paddingBottom: bottom + 16 }]}>
                        <P color="black" size={24} weight="bold">Features</P>
                        <Space height={8} />
                        <HorizontalLayout justify="space-between">
                            <FeatureIcon Icon={PumpIcon} title="Diesel" subTitle="Common rail" />
                            <FeatureIcon Icon={SpeedIcon} title="Acceleration" subTitle="0 - 100km/s" />
                            <FeatureIcon Icon={SnowIcon} title="Cold" subTitle="Temp Control" />
                        </HorizontalLayout>
                        <Space height={16} />
                        <HorizontalLayout justify="space-between">
                            <P color="black" size={22} weight="bold">{`\$${car.pricePerHour}/day`}</P>
                            <TouchableOpacity
                                activeOpacity={0.75}
                                style={[styles.bookNow, { backgroundColor: colors.gunmetal }]}
                                onPress={() => null}
                            >
                                <P color="white" weight="bold">Book Now</P>
                            </TouchableOpacity>
                        </HorizontalLayout>
                    </View>
                    <View style={{ position: "absolute", top: 25, right: 15 }}>
                        <CImage
                            local={whiteCarImage}
                            width={190}
                            height={125}
                            mode="contain"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const FeatureIcon = ({ Icon, title, subTitle }: {
    Icon: React.ElementType<SvgProps>,
    title: string,
    subTitle: string,
}) => {

    const { colors } = useTheme()

    return (
        <View style={[styles.featureIconContainer, { backgroundColor: colors.white, borderColor: colors.grey }]}>
            <Icon color={colors.black} width={28} height={28} />
            <P color="black">{title}</P>
            <P color="grey" size={10}>{subTitle}</P>
        </View>
    )
}

const styles = StyleSheet.create({
    carDetailsContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        ...shadowStyle
    },
    carInnerDetails: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
    },
    bookNow: {
        paddingHorizontal: 36,
        paddingVertical: 12,
        borderRadius: 99
    },
    featureIconContainer: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        gap: 4,
    }
})

export default MapDetails;

    /*
                        <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 41.00244,   // center latitude
                            longitude: 29.23187, // center longitude
                            latitudeDelta: 0.0922, // zoom level
                            longitudeDelta: 0.0421, // zoom level
                          }}
                    >

                    </MapView>
    */