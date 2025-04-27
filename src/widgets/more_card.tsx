import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../providers";
import { shadowStyle } from "../constants/styles";
import { HorizontalLayout, P, Space } from "../components";
import { ICar, NavigationProp } from "../types";
import { BatteryIcon, CarIcon, RighChevrontIcon } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

const MoreCard = ({ car }: { car: ICar }) => {

    const navigation = useNavigation<NavigationProp>();
    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate("car_details", { car })}
        >
            <HorizontalLayout
                justify="space-between"
                customStyle={[shadowStyle("black"), styles.container, { backgroundColor: colors.moreCardBg }]}
            >
                <View style={{ flex: 1 }}>
                    <P color="white" size={16} weight="bold">{car.model}</P>
                    <Space height={8} />
                    <HorizontalLayout gap={10}>
                        <HorizontalLayout gap={5}>
                            <CarIcon color={colors.white} width={16} height={16} />
                            <P color="white" size={14}>{car.distance} km</P>
                        </HorizontalLayout>
                        <HorizontalLayout gap={5}>
                            <BatteryIcon color={colors.white} width={16} height={16} />
                            <P color="white" size={14}>{car.fuelCapacity}</P>
                        </HorizontalLayout>
                    </HorizontalLayout>
                </View>
                <Space width={16} />
                <RighChevrontIcon color={colors.white} width={25} height={25} />
            </HorizontalLayout>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
    }
})

export default MoreCard;