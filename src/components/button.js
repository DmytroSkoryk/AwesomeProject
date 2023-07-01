import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, title }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
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
});

export default Button;
