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
import BackgroundImage from "../Images/BackgroundImage.jpg";
import Input from "../components/input";
import Button from "../components/button";

const LoginScreen = ({ navigation }) => {
  const onLogin = () => {
    Alert.alert("Credentials", `${mail} + ${password}`);
    resetForm();
  };
  const resetForm = () => {
    setMail("");
    setPassword("");
  };
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
            <Text style={styles.formTitle}>Увійти</Text>
            <View style={styles.inputContainer}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
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
                <Button onPress={onLogin} title="Увійти" />
                <View style={styles.link}>
                  <Text style={styles.textQuestion}>Немає акаунту? </Text>
                  <Text onPress={() => navigation.navigate("Registration")}>
                    <Text style={[styles.textQuestion, styles.linkOpen]}>
                      Зареєструватися
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

  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  formTitle: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 32,
  },
  inputContainer: {
    marginTop: 33,
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
  },
  link: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 111,
  },
  textQuestion: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#1B4371",
  },
  linkOpen: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
