import React from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BackgroundImage from "../Images/BackgroundImage.jpg";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          style={styles.backgroundImage}
        />

        <SafeAreaView style={styles.form}>
          <Text style={styles.formTitle}>Увійти</Text>
          <View style={styles.inputContainer}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
                placeholderTextColor="#BDBDBD"
              />
              <TextInput
                placeholder="Пароль"
                style={styles.input}
                placeholderTextColor="#BDBDBD"
              />
              <TouchableOpacity
                style={styles.registrationButton}
                onPress={() => {}}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.linkOpen}>
                Немає акаунту? Зареєструватися
              </Text>
            </KeyboardAvoidingView>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  formTitle: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    marginTop: 92,
    marginBottom: 17,
    textAlign: "center",
  },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    width: windowWidth,
    height: 549,
    marginTop: 263,
  },
  inputContainer: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    width: "100%",
    marginTop: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
  },
  registrationButton: {
    marginTop: 43,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  linkOpen: {
    textAlign: "center",
    marginTop: 16,
  },
});

export default RegistrationScreen;
