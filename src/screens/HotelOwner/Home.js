import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "../styles";
import { Scaffold, Button, HotelListCard } from "../../components";

const hotellistData = [
  {
    id: 1,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWHXd2Ckf1s2P5L6SBUH88TboiF2I6JVAAA&usqp=CAU",
    name: "Taj Hotel",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
    price: 1000,
  },
  {
    id: 2,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWHXd2Ckf1s2P5L6SBUH88TboiF2I6JVAAA&usqp=CAU",
    name: "Taj Hotel",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
    price: 1000,
  },
  {
    id: 3,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWHXd2Ckf1s2P5L6SBUH88TboiF2I6JVAAA&usqp=CAU",
    name: "Taj Hotel",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
    price: 1000,
  },
  {
    id: 4,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWHXd2Ckf1s2P5L6SBUH88TboiF2I6JVAAA&usqp=CAU",
    name: "Taj Hotel",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
    price: 1000,
  },
  {
    id: 5,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWHXd2Ckf1s2P5L6SBUH88TboiF2I6JVAAA&usqp=CAU",
    name: "Taj Hotel",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
    price: 1000,
  },
];

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Business",
          actions: [
            {
              icon: "bell-outline",
              onPress: () => navigate("HotelNotificationScreen"),
            },
            {
              icon: "account-outline",
              // onPress: () => navigate("EditProfileScreen"),
            },
          ],
        }),
        [navigate]
      )}
    >
      <View style={styles.Section}>
        <Button
          mode="contained"
          icon="plus"
          style={styles.ScreenPadded}
          theme={{ colors: { primary: "white" } }}
        >
          Add a hotel
        </Button>
      </View>
      <View style={styles.Section}>
        {hotellistData.map((hotellistDataDataDetails) => (
          <HotelListCard
            key={hotellistDataDataDetails.id}
            {...hotellistDataDataDetails}
            style={[styles.ScreenPadded, styles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default HomeScreen;
