import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const onPublish = () => {
    if (name && locality !== "") {
      resetForm();
    }
  };
  const resetForm = () => {
    setName("");
    setlocality("");
  };
  const [name, setName] = useState("");
  const [locality, setlocality] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <View style={styles.publicationPhoto}>
          <View style={styles.circleForCamera}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </View>
        </View>
      </View>
      <Text style={styles.publicationTitle}>Завантажте фото</Text>
      <View style={styles.publicationInputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.publicationInput}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </TouchableOpacity>

          <TextInput
            style={styles.publicationInput}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
            value={locality}
            onChangeText={setlocality}
          />
        </View>
      </View>
      <Button
        onPress={onPublish}
        title="Опубліковати"
        disabled={!name || locality === ""}
      />
      <View style={styles.trashBtn}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  photoContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  publicationPhoto: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  circleForCamera: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 30,
  },
  publicationTitle: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,
  },
  publicationInputContainer: {
    marginTop: 16,
  },
  inputWrapper: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginTop: 16,
    width: "100%",
    borderBottomColor: "#E8E8E8",

    gap: 4,
  },
  publicationInput: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  trashBtn: {
    backgroundColor: "#F6F6F6",
    marginTop: 111,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    left: "50%",
    marginLeft: -35,
  },
});

export default CreatePostsScreen;
