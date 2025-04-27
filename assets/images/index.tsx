import Svg, { Path, SvgProps } from "react-native-svg";
import onboardingImage from "./onboarding.png";
import carImage from "./car_image.png";
import userAvatarImage from "./user.png";
import mapsImage from "./maps.png";

export { onboardingImage, carImage, userAvatarImage, mapsImage }

export const GpsIcon = (props: SvgProps) => (
    <Svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M21.3046 4.69335C21.908 3.41959 20.5806 2.09225 19.3069 2.69561L2.83473 10.4982C1.56185 11.1011 1.74664 12.9674 3.11305 13.309L9.17556 14.8247L10.6912 20.8872C11.0328 22.2536 12.8991 22.4384 13.502 21.1655L21.3046 4.69335Z"
            fill="#000000"
        />
    </Svg>
);

export const PumpIcon = (props: SvgProps) => (
    <Svg
        fill={props.color}
        width="800px"
        height="800px"
        viewBox="0 0 512 512"
        {...props}
    >
        <Path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z" />
    </Svg>
);

export const BackArrowIcon = (props: SvgProps) => (
    <Svg
        fill={props.color}
        width="800px"
        height="800px"
        viewBox="0 0 52 52"
        {...props}
    >
        <Path d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0 L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29 h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z" />
    </Svg>
);

export const RighChevrontIcon = (props: SvgProps) => {
    return (
        <Svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M9 6l6 6-6 6"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const CarIcon = (props: SvgProps) => (
    <Svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            fill={props.color}
        />
    </Svg>
);

export const BatteryIcon = (props: SvgProps) => (
    <Svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M15.803 4.8H14.3V3H10.7V4.8H9.197C8.54 4.8 8 5.34 8 5.997V19.794C8 20.46 8.54 21 9.197 21H15.794C16.46 21 17 20.46 17 19.803V5.997C17 5.34 16.46 4.8 15.803 4.8Z"
            fill={props.color}
        />
    </Svg>
);