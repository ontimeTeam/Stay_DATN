import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  View,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../themes/theme';
interface HeaderProps {
  iconLeft?: ImageSourcePropType;
  textLeft?: string;
  textCenter?: string;
  textCenterMini?: string;
  iconCenter?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  eventLeft?: () => void;
  eventRight?: () => void;
  eventCenter?: () => void;
  styleIconLeft?: StyleProp<ImageStyle>;
  styleIconCenter?: StyleProp<ImageStyle>;
  styleTextCenter?: StyleProp<TextProps>;
  styleTextCenterMini?: StyleProp<TextProps>;
  styleIconRight?: StyleProp<ImageStyle>;
  styleTextLeft?: StyleProp<TextProps>;
  styleContainer?: StyleProp<ImageStyle>;
  isCheck?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  iconLeft,
  textLeft,
  textCenter,
  textCenterMini,
  iconCenter,
  iconRight,
  eventLeft,
  eventRight,
  styleIconLeft,
  styleIconCenter,
  styleTextCenter,
  styleTextCenterMini,
  styleIconRight,
  styleTextLeft,
  styleContainer,
  isCheck,
}) => {
  const renderIconLeft = () => {
    if (iconLeft && isCheck) {
      return (
        <Pressable onPress={eventLeft}>
          <Image source={iconLeft} style={[_styles.icon, styleIconLeft]} />
        </Pressable>
      );
    } else if (iconLeft && !isCheck) {
      return (
        <View style={_styles.styleGrLeft}>
          <Pressable onPress={eventLeft}>
            <Image source={iconLeft} style={[_styles.icon, styleIconLeft]} />
          </Pressable>
          <Text style={[_styles.textLeft, styleTextLeft]}>{textLeft}</Text>
        </View >
      );
    }
    return <View style={_styles.iconPlaceholder} />;
  };

  const renderTextCenter = () => {
    if (textCenter && isCheck) {
      return (
        <Pressable style={_styles.viewTextCenter}>
          <Text style={[_styles.textCenterHeader, styleTextCenter]}>{textCenter}</Text>
          <Text style={[_styles.textCenterHeaderMini, styleTextCenterMini]}>{textCenterMini}</Text>
        </Pressable>
      );
    } else if (iconCenter && !isCheck) {
      return (
        <Pressable style={[_styles.centerHeaderContainer, styleIconCenter]}>
          <Image source={iconCenter} style={[_styles.iconCenter, styleIconCenter]} />
        </Pressable>
      );
    }
    return <View style={_styles.centerHeaderContainer} />;
  };

  const renderIconRight = () => {
    if (iconRight) {
      return (
        <Pressable onPress={eventRight}>
          <Image source={iconRight} style={[_styles.iconRight, styleIconRight]} />
        </Pressable>
      );
    }
    return <View style={_styles.iconPlaceholder} />;
  };

  return (
    <View style={[_styles.container, styleContainer]}>
      <View style={_styles.containerChidren} >
        {renderIconLeft()}
        {renderTextCenter()}
        {renderIconRight()}
      </View>

    </View >
  );
};

const _styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerChidren: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },
  iconRight: {
    width: 18,
    height: 24,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    opacity: 0, // Ẩn phần tử
  },
  centerHeaderContainer: {
    width: 'auto',
    flex: 1,
    alignItems: 'center',
  },
  textCenterHeader: {
    width: 'auto',
    fontFamily: 'Exo2-Bold',
    fontSize: 24,
    color: '#202020',
    textAlign: 'center',
    lineHeight: 33.6,
    letterSpacing: 0.2,
  },
  btnRight: {
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderColor: '#E5E5E5',
    backgroundColor: 'E5E5E5',
  },
  textLeft: {
    fontFamily: 'Exo2-Bold',
    fontSize: 24,
    color: '#202020',
    textAlign: 'center',
    lineHeight: 33.6,
    letterSpacing: 0.2,
    marginLeft: 10,
  },
  styleGrLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCenter: {
    width: 64,
    height: 64,
  },
  viewTextCenter: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 'auto'
  },
  textCenterHeaderMini: {
    fontFamily: 'Exo2-Regular',
    fontSize: 16,
    color: COLORS.Black,
    textAlign: 'center',
    width: 'auto'
  },
});
export default Header;
