import IP from "./views/p"
import IColors from "./models/color"

type alignType = "auto" | "left" | "justify" | "right" | "center"
type transformType = "capitalize" | "lowercase" | "none" | "uppercase"
type fontWeight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal"

type colorsType = keyof IColors

export type { IP, IColors, alignType, transformType, fontWeight, colorsType }