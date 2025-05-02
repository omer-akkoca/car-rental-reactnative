import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { CImage, P } from "../components";
import { onboardingImage } from "../../assets/images";
import { height, width } from "../constants/responsive";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OnboardingPage = () => {

    const navigation = useNavigation<NavigationProp>();
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()

    return (
        <View style={{ flex: 1, backgroundColor: colors.onboardingBg }}>
            <View style={{ flex: 1 }}>
                <CImage
                    local={onboardingImage}
                    height={height * (3 / 5)}
                    width={width}
                    mode="cover"
                />
            </View>
            <View style={{ paddingHorizontal: 32, paddingTop: 16, paddingBottom: bottom + 16 }}>
                <P color="white" size={32} weight="bold" align="center">Premium cars.</P>
                <P color="white" size={32} weight="bold" align="center">Enjoy the luxury.</P>
                <View style={{ height: 10 }} />
                <P color="grey" size={16} align="center">Premium and prestige card daily rental.</P>
                <P color="grey" size={16} align="center">Experience the thrill at a lower price.</P>
                <View style={{ height: 20 }} />
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={{ ...styles.button, backgroundColor: colors.white, shadowColor: colors.black }}
                    onPress={() => navigation.replace("car_list")}
                >
                    <P color="black" size={16} weight="bold" align="center">Let's Go</P>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 99,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
})

export default OnboardingPage;