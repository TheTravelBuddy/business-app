import React, { useMemo } from "react";
import { View } from "react-native";
import styles from "../styles";
import { Scaffold, Button, ShopListCard } from "../../components";

const shoplistData = [
  {
    id: 1,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 2,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 3,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 4,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
  {
    id: 5,
    coverUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55wRXAj9yVvUjMEbtZDixoiQCb_da9YEbaQ&usqp=CAU",
    name: "Monginis Cake shop",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    timings: "10:00 AM - 9:30 PM, Mon - Fri",
  },
];
const ShopOwnerHomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Business",
          actions: [
            {
              icon: "account-outline",
              onPress: () => navigate("EditProfileScreen"),
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
          onPress={() => {
            navigate("AddShopScreen");
          }}
        >
          Add a shop
        </Button>
      </View>
      <View style={styles.Section}>
        {shoplistData.map((shoplistDataDetails) => (
          <ShopListCard
            key={shoplistDataDetails.id}
            {...shoplistDataDetails}
            style={[styles.ScreenPadded, styles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default ShopOwnerHomeScreen;
