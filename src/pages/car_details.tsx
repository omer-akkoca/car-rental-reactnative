import React from "react";
import { StyleSheet, View } from "react-native";
import { AppBar, CImage, HorizontalLayout, P, Space } from "../components";
import { ICar } from "../types";
import { useTheme } from "../providers";
import { CarCard, MoreCard } from "../widgets";
import { shadowStyle } from "../constants/styles";
import { mapsImage, userAvatarImage } from "../../assets/images";

const CarDetails = () => {

    const car: ICar = { model: "Fortune FR", distance: 870, fuelCapacity: 50, pricePerHour: 45 };

    const { colors } = useTheme()

    return(
        <View style={{ flex: 1, backgroundColor: colors.pageBg }}>
            <AppBar
                title="Information"
            />
            <View style={{ flex: 1, }}>
                <View style={{ padding: 16 }}>
                    <CarCard car={car}/>
                </View>
                <HorizontalLayout customStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={[styles.userInfoContainer, shadowStyle("black"), { backgroundColor: colors.white }]}>
                        <CImage
                            local={userAvatarImage}
                            width={80}
                            height={80}
                        />
                        <Space height={10}/>
                        <P color="black" weight="bold" align="center">Jane Cooper</P>
                        <P color="grey">$4,253</P>
                    </View>
                    <Space width={16}/>
                    <View style={[styles.mapsContainer, shadowStyle("black"), { backgroundColor: colors.white }]}>
                        <CImage
                            local={mapsImage}
                            height={175}
                            width={"100%"}
                        />
                    </View>
                </HorizontalLayout>
                <View style={{ paddingHorizontal: 16, gap: 8 }}>
                    <MoreCard car={car}/>
                    <MoreCard car={car}/>
                    <MoreCard car={car}/>
                    <MoreCard car={car}/>
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
    }
})

export default CarDetails;