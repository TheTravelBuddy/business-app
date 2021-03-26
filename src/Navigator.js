import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoardingScreen from "./screens/OnBoarding";
import LoginScreen from "./screens/Login";
import OtpScreen from "./screens/Otp";
import SignUpScreen from "./screens/SignUp";
import ReviewsScreen from "./screens/Reviews";

import HotelOwnerHomeScreen from "./screens/HotelOwner/Home";
import HotelOwnerNotificationScreen from "./screens/HotelOwner/Notification";
import HotelBookingScreen from "./screens/HotelOwner/HotelBooking";
import HotelDetailsScreen from "./screens/HotelOwner/HotelDetails";
import AddHotelScreen from "./screens/HotelOwner/AddHotel";
import EditHotelScreen from "./screens/HotelOwner/EditHotel";

import { useAuth, authStates, businessTypes } from "./stores/Auth";
import LoadingScreen from "./screens/Loading";

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const Navigator = () => {
  const initAuthHandler = useAuth((state) => state.initAuthHandler);
  const authState = useAuth((state) => state.authState);
  const user = useAuth((state) => state.user);

  useEffect(initAuthHandler, [initAuthHandler]);

  return (
    <NavigationContainer>
      {authState === authStates.NO_AUTH ? (
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen
            name="OnBoardingScreen"
            component={OnBoardingScreen}
          />
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
          <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
        </AuthStack.Navigator>
      ) : authState === authStates.UNREGISTERED ? (
        <SignUpScreen />
      ) : authState === authStates.LOGGED_IN ? (
        <AppStack.Navigator headerMode="none">
          {user?.businessType === businessTypes.TRAVEL_AGENCY ? (
            <>
              <AuthStack.Screen
                name="HotelOwnerHomeScreen"
                component={HotelOwnerHomeScreen}
              />
            </>
          ) : user?.businessType === businessTypes.HOTEL_OWNER ? (
            <>
              <AuthStack.Screen
                name="HomeScreen"
                component={HotelOwnerHomeScreen}
              />
              <AuthStack.Screen
                name="HotelOwnerNotificationScreen"
                component={HotelOwnerNotificationScreen}
              />
              <AuthStack.Screen
                name="HotelBookingScreen"
                component={HotelBookingScreen}
              />
              <AuthStack.Screen
                name="HotelDetailsScreen"
                component={HotelDetailsScreen}
              />
              <AuthStack.Screen
                name="AddHotelScreen"
                component={AddHotelScreen}
              />
              <AuthStack.Screen
                name="EditHotelScreen"
                component={EditHotelScreen}
              />
            </>
          ) : user?.businessType === businessTypes.SHOP_OWNER ? (
            <>
              <AuthStack.Screen
                name="HomeScreen"
                component={HotelOwnerHomeScreen}
              />
            </>
          ) : (
            <LoadingScreen />
          )}
          <AuthStack.Screen name="ReviewsScreen" component={ReviewsScreen} />
        </AppStack.Navigator>
      ) : (
        <LoadingScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
