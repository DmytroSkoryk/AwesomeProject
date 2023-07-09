import { View, Text, Image, StyleSheet } from "react-native";

import Ava from "../Images/Ava.jpg";

const PostsScreen = ({ route }) => {
  const { mail } = route.params;
  return (
    <View style={styles.userInfo}>
      <Image source={Ava} style={styles.photo} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>{mail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: "row",
    marginTop: 32,
    gap: 8,
    marginLeft: 16,
  },
  photo: {
    borderRadius: 16,
  },
  textContainer: {
    justifyContent: "center",
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});
export default PostsScreen;
