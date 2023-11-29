import { ColorValue } from "react-native";

interface Spacing{
    space_2: number;
    space_4: number;
    space_8: number;
    space_10: number;
    space_12: number;
    space_15: number;
    space_16: number;
    space_18: number;
    space_20: number;
    space_24: number;
    space_28: number;
    space_32: number;
    space_36: number;
}
export const SPACING : Spacing = {
    space_2: 2,
    space_4: 4,
    space_8: 8,
    space_10: 10,
    space_12: 12,
    space_15: 15,
    space_16: 16,
    space_18: 18,
    space_20: 20,
    space_24: 24,
    space_28: 28,
    space_32: 32,
    space_36: 36,
}

interface Color{
    Black: ColorValue;
    MainBlue: ColorValue;
    BlueWish: ColorValue;
    BluePaid: ColorValue;
    Blue_BG: ColorValue;
    BlueWish_BG: ColorValue;
    Blue_btn: ColorValue;
    RedButton: ColorValue;
    RedCancel: ColorValue;
    RedCancel_BG: ColorValue;
    OrangeWait: ColorValue;
    OrangeWait_BG: ColorValue;
    LightGray: ColorValue;
    MediumGray: ColorValue;
    DarkGrey: ColorValue;
    Yellow: ColorValue;
    White: ColorValue;
}

export const COLORS : Color = {
    Black: '#000000',
    MainBlue : '#4461F2',
    BlueWish: '#008C95',
    BluePaid: '#008C95',
    Blue_BG : "#F5F8FF",
    BlueWish_BG: "#CDF9FF",
    Blue_btn: '#E2E7FF',
    RedButton: '#E14058',
    RedCancel: '#F86666',
    RedCancel_BG: '#FFD9D9',
    OrangeWait: '#FF9A03',
    OrangeWait_BG: '#FFECCF',
    LightGray: "#C0C0C0",
    MediumGray:'#595959',
    DarkGrey: '#0b0b0b',
    Yellow: "E14058 ",
    White: "#FFFFFF",
}

interface FontFamily {
    exo2_bold: string;
    exo2_extrabold: string;
    exo2_light: string;
    exo2_extralight: string;
    exo2_medium: string;
    exo2_regular: string;
    exo2_semibold: string;
    exo2_thin: string;
}

export const FONT_FAMILY : FontFamily = {
    exo2_bold: 'Exo2-Bold',
    exo2_extrabold: 'Exo2-ExtraBold',
    exo2_light: 'Exo2-Light',
    exo2_extralight: 'Exo2-ExtraLight',
    exo2_medium: 'Exo2-Medium',
    exo2_regular: 'Exo2-Regular',
    exo2_semibold: 'Exo2-Semibold',
    exo2_thin: 'Exo2-Thin',
}

interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_24: number;
    size_30: number;

}

export const FONT_SIZE : FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_24: 24,
    size_30: 30,
}

interface BoderRadius {
    radius_4: number;
    radius_8: number;
    radius_10: number;
    radius_15: number;
    radius_20: number;
    radius_25: number;
}

export const BORDER_RADIUS : BoderRadius = {
    radius_4: 4,
    radius_8: 8,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    radius_25: 25,
}
