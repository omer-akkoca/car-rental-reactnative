import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { AppBar, CImage, HorizontalLayout, P, Space } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BatteryIcon, CarIcon, PumpIcon, SnowIcon, SpeedIcon } from "../../assets/images";
import { SvgProps } from "react-native-svg";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapDetails = () => {

    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()
    const { params: { car } } = useRoute<RouteProp<RootStackParamList, "map_details">>()

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <AppBar title={car.model} bgColor="gunmetal" titleColor="white" backIconColor="white" />
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: car.location.latitude,
                            longitude: car.location.longitude,
                            latitudeDelta: 1,
                            longitudeDelta: 1,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: car.location.latitude, longitude: car.location.longitude }}
                        />
                    </MapView>
                </View>
                <View style={{ position: "relative", backgroundColor: colors.gunmetal }}>
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
                        <HorizontalLayout justify="space-between" >
                            <FeatureIcon Icon={PumpIcon} title="Diesel" subTitle="Common rail" />
                            <FeatureIcon Icon={SpeedIcon} title="Acceleration" subTitle="0 - 100km/s" />
                            <FeatureIcon Icon={SnowIcon} title="Cold" subTitle="Temp Control" />
                        </HorizontalLayout>
                        <Space height={16} />
                        <HorizontalLayout justify="space-between" >
                            <P color="black" size={22} weight="bold">{`\$${car.pricePerHour}/day`}</P>
                            <TouchableOpacity
                                activeOpacity={0.75}
                                style={[styles.bookNow, { backgroundColor: colors.gunmetal }]}
                                onPress={() => null}
                            >
                                <P color="white" weight="bold" size={14}>Book Now</P>
                            </TouchableOpacity>
                        </HorizontalLayout>
                    </View>
                    <View style={{ position: "absolute", top: 25, right: 15 }}>
                        <CImage
                            url={car.image}
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