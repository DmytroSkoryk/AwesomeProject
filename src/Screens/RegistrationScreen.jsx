import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackgroundImage from "../Images/BackgroundImage.jpg";
import Input from "../components/input";
import Button from "../components/button";

const RegistrationScreen = ({ navigation }) => {
  const onRegistration = () => {
    Alert.alert("Credentials", `${login}, ${mail}, ${password}`);
    resetForm();
  };
  const resetForm = () => {
    setLogin("");
    setMail("");
    setPassword("");
  };
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          style={styles.backgroundImage}
        >
          <SafeAreaView style={styles.form}>
            <View style={styles.photoContainer}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#FF6C00"
                style={styles.addBtn}
              />
            </View>
            <Text style={styles.formTitle}>Реєстрація</Text>
            <View style={styles.inputContainer}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <Input
                  placeholder="Логін"
                  onChangeText={setLogin}
                  value={login}
                />
                <Input
                  placeholder="Адреса електронної пошти"
                  onChangeText={setMail}
                  value={mail}
                />
                <Input
                  placeholder="Пароль"
                  onChangeText={setPassword}
                  value={password}
                />
                <Button onPress={onRegistration} title="Зареєструватися" />
                <View style={styles.link}>
                  <Text style={styles.textQuestion}>Вже є акаунт? </Text>
                  <Text onPress={() => navigation.navigate("Login")}>
                    <Text style={[styles.textQuestion, styles.linkOpen]}>
                      Увійти
                    </Text>
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
    position: "relative",
  },
  inputContainer: {
    marginHorizontal: 16,
  },

  link: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 45,
  },
  textQuestion: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#1B4371",
  },
  linkOpen: {
    textDecorationLine: "underline",
  },
  photoContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addBtn: {
    position: "absolute",

    right: -28,
    bottom: 8,

    paddingHorizontal: 16,
  },
});

export default RegistrationScreen;
