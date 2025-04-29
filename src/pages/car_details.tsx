import React, { useEffect } from "react";
import { Animated, StyleSheet, TouchableOpacity, useAnimatedValue, View } from "react-native";
import { AppBar, CImage, HorizontalLayout, P, Space } from "../components";
import { NavigationProp, RootStackParamList } from "../types";
import { useTheme } from "../providers";
import { CarCard, MoreCard } from "../widgets";
import { shadowStyle } from "../constants/styles";
import { mapsImage, userAvatarImage } from "../../assets/images";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

const CarDetails = () => {

    const navigation = useNavigation<NavigationProp>()
    const { colors } = useTheme()
    const { params: { car } } = useRoute<RouteProp<RootStackParamList, "car_details">>()

    const scaleAnim = useAnimatedValue(1);

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: 1.5,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                title="Information"
            />
            <View style={{ flex: 1 }}>
                <View style={{ padding: 16 }}>
                    <CarCard car={car} />
                </View>
                <HorizontalLayout customStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={[styles.userInfoContainer, shadowStyle, { backgroundColor: colors.white, shadowColor: colors.black }]}>
                        <CImage
                            local={userAvatarImage}
                            width={80}
                            height={80}
                        />
                        <Space height={10} />
                        <P color="black" weight="bold" align="center">Jane Cooper</P>
                        <P color="grey">$4,253</P>
                    </View>
                    <Space width={16} />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={[styles.mapsContainer, shadowStyle, { backgroundColor: colors.white, shadowColor: colors.black }]}
                        onPress={() => navigation.navigate("map_details", { car })}
                    >
                        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                            <CImage
                                local={mapsImage}
                                height={175}
                                width={"100%"}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </HorizontalLayout>
                <View style={{ paddingHorizontal: 16, gap: 8 }}>
                    <MoreCard car={car} />
                    <MoreCard car={car} />
                    <MoreCard car={car} />
                    <MoreCard car={car} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoContainer: {
        flex: 1,
        height: 175,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    mapsContainer: {
        flex: 1,
        height: 175,
        borderRadius: 20,
        overflow: "hidden",
    }
})

export default CarDetails;