import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const W = (x: number) => width * x / 100;
const H = (x: number) => height * x / 100

export { width, height, W, H, }