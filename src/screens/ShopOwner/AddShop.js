import React, { useMemo } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../styles";
import {
  Scaffold,
  Button,
  Picker,
  HorizontalScroller,
  BlogImageCard,
  BookingLocationModal,
} from "../../components";

import useToggle from "../../hooks/useToggle";

const cardData = [
  {
    id: 1,
    coverUri: "https://picsum.photos/1003",
  },
  {
    id: 2,
    coverUri: "https://picsum.photos/1003",
  },
];

const AddShopScreen = () => {
  const locationModal = useToggle(false);
  return (
    <Scaffold header={useMemo(() => ({ title: "Add Shop" }), [])}>
      <View style={styles.Section}>
        <Button
          mode="contained"
          icon="plus"
          style={[styles.ScreenPadded]}
          theme={{ colors: { primary: "white" } }}
          onPress={() => {}}
        >
          Add Images
        </Button>
      </View>
      <View style={styles.Section}>
        <HorizontalScroller>
          {cardData.map((cardDatadetails) => (
            <BlogImageCard key={cardDatadetails.id} {...cardDatadetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={[styles.Section, styles.ScreenPadded]}>
        <TextInput label="Name" style={styles.FormInput} />
        <TextInput label="Address" style={styles.FormInput} />
        <View style={styles.FormInputContainer}>
          <TextInput
            label="Locality"
            style={[styles.FormInput, styles.FormInputLeft]}
          />
          <TextInput
            label="Postal Code"
            style={[styles.FormInput, styles.FormInputRight]}
          />
        </View>
        <Button
          mode="contained"
          icon="map-marker-outline"
          style={[styles.FormInput]}
          theme={{ colors: { primary: "white" } }}
          onPress={locationModal.show}
        >
          Detect Location
        </Button>
        <TextInput
          label="Phone Number"
          style={styles.FormInput}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          maxLength={10}
          returnKeyType="done"
          left={<TextInput.Affix text="+91 " />}
        />
        <View style={styles.FormInputContainer}>
          <TextInput
            label="Opening Time"
            style={[styles.FormInput, styles.FormInputLeft]}
          />
          <TextInput
            label="Closing Time"
            style={[styles.FormInput, styles.FormInputRight]}
          />
        </View>

        <View style={styles.FormInputContainer}>
          <Picker
            label="Day From"
            items={[
              { value: "Sunday", label: "Sunday" },
              { value: "Monday", label: "Monday" },
              { value: "Tuesday", label: "Tuesday" },
              { value: "Wednesday", label: "Wednesday" },
              { value: "Thursday", label: "Thursday" },
              { value: "Friday", label: "Friday" },
              { value: "Saturday", label: "Saturday" },
            ]}
            style={[styles.FormInput, styles.FormInputLeft]}
          />
          <Picker
            label="Day To"
            items={[
              { value: "Sunday", label: "Sunday" },
              { value: "Monday", label: "Monday" },
              { value: "Tuesday", label: "Tuesday" },
              { value: "Wednesday", label: "Wednesday" },
              { value: "Thursday", label: "Thursday" },
              { value: "Friday", label: "Friday" },
              { value: "Saturday", label: "Saturday" },
            ]}
            style={[styles.FormInput, styles.FormInputRight]}
          />
        </View>
        <TextInput
          label="Add details..."
          numberOfLines={7}
          multiline={true}
          style={styles.FormInput}
        />

        <Button mode="contained" onPress={() => {}}>
          Add Shop
        </Button>
      </View>
      <BookingLocationModal
        visible={locationModal.visible}
        onDismiss={locationModal.hide}
      />
    </Scaffold>
  );
};

export default AddShopScreen;
