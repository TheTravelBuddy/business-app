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
  Chip,
  BookingLocationModal,
} from "../../components";
import { SCREEN_PADDING } from "../../constants";
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

const EditHotelScreen = () => {
  const locationModal = useToggle(false);
  return (
    <Scaffold header={useMemo(() => ({ title: "Edit Hotel" }), [])}>
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
        <TextInput label="Name of Hotel" style={styles.FormInput} />
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
        <TextInput
          label="Add details..."
          numberOfLines={7}
          multiline={true}
          style={styles.FormInput}
        />
        <View style={styles.FormInput}>
          <HorizontalScroller
            horizontalSpacing={SCREEN_PADDING}
            gap={SCREEN_PADDING / 4}
          >
            <Chip onClose={() => {}}>Parking</Chip>
            <Chip onClose={() => {}}>Wifi</Chip>
            <Chip onClose={() => {}}>Gym</Chip>
          </HorizontalScroller>
        </View>
        <Picker
          label="Amenities"
          items={[
            { value: "Parking", label: "Parking" },
            { value: "Wifi", label: "Wifi" },
            { value: "Gym", label: "Gym" },
            { value: "Parking", label: "Parking" },
          ]}
          style={[styles.FormInput, styles.FormInputLeft]}
        />
        <Button mode="contained" onPress={() => {}}>
          Save
        </Button>
      </View>
      <BookingLocationModal
        visible={locationModal.visible}
        onDismiss={locationModal.hide}
      />
    </Scaffold>
  );
};

export default EditHotelScreen;
