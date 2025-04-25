import Svg, { Path, SvgProps } from "react-native-svg";
import onboardingImage from "./onboarding.png";
import carImage from "./car_image.png";

export { onboardingImage, carImage, }

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