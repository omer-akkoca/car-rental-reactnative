import { colorsType } from "../types";

export const shadowStyle = (color: colorsType) => (
    {
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        shadowColor: color,
    }
)