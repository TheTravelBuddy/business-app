import React, { useMemo } from "react";
import { Text } from "react-native";

import styles from "./styles";
import { Scaffold } from "../components";
import { useAuth } from "../stores/Auth";

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Travel Buddy Business",
          actions: [],
        }),
        []
      )}
    >
      <Text style={styles.ScreenPadded}>
        Hello{" "}
        {
          {
            TRAVEL_AGENCY: "Travel Agency",
            HOTEL_OWNER: "Hotel Owner",
            SHOP_OWNER: "Shop Owner",
          }[user.businessType]
        }
      </Text>
    </Scaffold>
  );
};

export default HomeScreen;
