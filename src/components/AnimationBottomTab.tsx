// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React, { MutableRefObject, useEffect, useRef } from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// // import Icon, { Icons } from '../components/Icons';
// import { IC_HOME, IC_HOMEon, IC_BOOK, IC_BOOKon, IC_TRIP, IC_TRIPon, IC_PROFILE, IC_PROFILEon } from '../../assets/images';
// // import COLORS from '../constants/COLORS';
// import COLORScreen from '../screens/COLORScreen';
// import * as Animatable from 'react-native-animatable';
// import { COLORS } from '../themes/theme';

// const TabArr = [
//     { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: COLORScreen },
//     { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: COLORScreen },
//     { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: COLORScreen },
//     { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: COLORScreen },
//     { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: COLORScreen },
// ];

// const Tab = createBottomTabNavigator();

// const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
// const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

// const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
// const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

// const TabButton = (props): React.JSX.Element => {
//     const { item, onPress, accessibilityState } = props;
//     const focused = accessibilityState.selected;
//     const viewRef = useRef<T>(initialValue: T): MutableRefObject<T>;
    
//     const circleRef = useRef(null);
//     const textRef = useRef<MutableRefObject>(null);

//     useEffect(() => {
//         if (focused) {
//             viewRef.current.animate(animate1);
//             circleRef.current.animate(circle1);
//             textRef.current.transitionTo({ scale: 1 });
//         } else {
//             viewRef.current.animate(animate2);
//             circleRef.current.animate(circle2);
//             textRef.current.transitionTo({ scale: 0 });
//         }
//     }, [focused]);

//     return (
//         <TouchableOpacity
//             onPress={onPress}
//             activeOpacity={1}
//             style={styles.container}>
//             <Animatable.View
//                 ref={viewRef}
//                 duration={1000}
//                 style={styles.container}>
//                 <View style={styles.btn}>
//                     <Animatable.View
//                         ref={circleRef}
//                         style={styles.circle} />
//                     <Icon type={item.type} name={item.icon} color={focused ? COLORS.White : COLORS.MainBlue} />
//                 </View>
//                 <Animatable.Text
//                     ref={textRef}
//                     style={styles.text}>
//                     {item.label}
//                 </Animatable.Text>
//             </Animatable.View>
//         </TouchableOpacity>
//     );
// }

// export default function AnimTab1() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 tabBarStyle: styles.tabBar,
//             }}
//         >
//             {TabArr.map((item, index) => {
//                 return (
//                     <Tab.Screen key={index} name={item.route} component={item.component}
//                         options={{
//                             tabBarShowLabel: false,
//                             tabBarButton: (props) => <TabButton {...props} item={item} />
//                         }}
//                     />
//                 )
//             })}
//         </Tab.Navigator>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     tabBar: {
//         height: 70,
//         position: 'absolute',
//         bottom: 16,
//         right: 16,
//         left: 16,
//         borderRadius: 16,
//     },
//     btn: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         borderWidth: 4,
//         borderColor: COLORS.White,
//         backgroundColor: COLORS.White,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     circle: {
//         ...StyleSheet.absoluteFillObject,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: COLORS.MainBlue,
//         borderRadius: 25,
//     },
//     text: {
//         fontSize: 10,
//         textAlign: 'center',
//         color: COLORS.MainBlue,
//     }
// })