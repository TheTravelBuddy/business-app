import React, { useCallback } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./styles/authStyles";
import { Scaffold, Button, Picker, Title, Tagline, Label } from "../components";
import useTextInput from "../hooks/useTextInput";
import usePicker from "../hooks/usePicker";
import useToggle from "../hooks/useToggle";
import { useAuth } from "../stores/Auth";

const SignUpScreen = () => {
  const logout = useAuth((state) => state.logout);
  const register = useAuth((state) => state.register);
  const logoutLoading = useToggle(false);
  const registerLoading = useToggle(false);
  const name = useTextInput();
  const businessType = usePicker("AGENCY");

  const handleLogout = useCallback(() => {
    logoutLoading.start();
    logout().catch(() => {
      logoutLoading.stop();
    });
  }, [logoutLoading, logout]);

  const handleRegister = useCallback(() => {
    registerLoading.start();
    register({
      name: name.value,
      businessType: businessType.value,
    }).catch(() => {
      registerLoading.stop();
    });
  }, [name.value, businessType.value, registerLoading, register]);

  return (
    <Scaffold>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Title style={styles.HeaderTitle}>Travel Buddy</Title>
          <Tagline>Manage Your Travel Business</Tagline>
        </View>
        <View>
          <Label>Before we start, tell us something about you.</Label>
          <TextInput
            label="Name"
            {...name.props}
            disabled={logoutLoading.state || registerLoading.state}
            style={styles.FormInput}
          />
          <Picker
            label="Business Type"
            {...businessType.props}
            items={[
              { value: "TRAVEL_AGENCY", label: "Travel Agency" },
              { value: "HOTEL_OWNER", label: "Hotel Owner" },
              { value: "SHOP_OWNER", label: "Shop Owner" },
            ]}
            disabled={logoutLoading.state || registerLoading.state}
            style={styles.FormInput}
          />
          <View style={styles.FormInputContainer}>
            <Button
              disabled={logoutLoading.state || registerLoading.state}
              loading={logoutLoading.state}
              style={styles.FormInputLeft}
              onPress={handleLogout}
              mode="outlined"
            >
              Cancel
            </Button>
            <Button
              disabled={logoutLoading.state || registerLoading.state}
              loading={registerLoading.state}
              style={styles.FormInputRight}
              mode="contained"
              onPress={handleRegister}
            >
              Save
            </Button>
          </View>
        </View>
      </View>
    </Scaffold>
  );
};

export default SignUpScreen;
