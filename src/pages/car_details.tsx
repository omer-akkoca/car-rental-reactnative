import React, { useEffect } from "react";
import { Animated, ScrollView, StyleSheet, TouchableOpacity, useAnimatedValue, View } from "react-native";
import { AppBar, CImage, HorizontalLayout, P, Space } from "../components";
import { ICar, NavigationProp, RootStackParamList } from "../types";
import { useTheme } from "../providers";
import { CarCard, MoreCard } from "../widgets";
import { shadowStyle } from "../constants/styles";
import { mapsImage, userAvatarImage } from "../../assets/images";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCollection } from "../hooks/useCollection";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CarDetails = () => {

    const scaleAnim = useAnimatedValue(1);

    const navigation = useNavigation<NavigationProp>()
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()
    const { params: { car } } = useRoute<RouteProp<RootStackParamList, "car_details">>()

    const { data: cars } = useCollection<ICar>("cars")

    useEffect(() => {
        const animation = Animated.timing(scaleAnim, {
            toValue: 1.5,
            duration: 2000,
            useNativeDriver: true,
        })
        animation.start();
        () => animation.stop();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar title="Information" />
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: bottom + 16 }}
                >
                    <View style={{ padding: 16 }}>
                        <CarCard car={car} navigate={false}/>
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
                        <P color="gunmetal" weight="bold" size={24}>More Cars</P>
                        {
                            cars.filter(e => e.id !== car.id).map(item => <MoreCard key={item.id} car={item} />)
                        }
                    </View>
                </ScrollView>
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