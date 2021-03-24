import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "../styles";

import { Scaffold, HotelNotificationCard } from "../../components";

const hotelnotificationData = [
  {
    id: 1,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Taj Hotel",
    rating: 4.9,
    locality: "Colaba",
    city: "Mumbai",
    price: 5000,
    distance: 5,
    booking: {
      adults: 3,
      children: 3,
      rooms: 2,
      date: new Date(),
      numberOfDays: 4,
    },
  },
  {
    id: 2,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYXB-NZtynxeqfGb_S7E6FwuPgQl65tLlXQ&usqp=CAU",
    name: "JW Marriott",
    rating: 4.9,
    locality: "Juhu",
    city: "Mumbai",
    price: 8000,
    distance: 10,
    booking: {
      adults: 4,
      children: 1,
      rooms: 2,
      date: new Date(),
      numberOfDays: 5,
    },
  },
];

const NotificationScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Notifications", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={styles.Section}>
        {hotelnotificationData.map((hotelnotificationDataDetails) => (
          <HotelNotificationCard
            key={hotelnotificationDataDetails.id}
            {...hotelnotificationDataDetails}
            style={[styles.ScreenPadded, styles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default NotificationScreen;
