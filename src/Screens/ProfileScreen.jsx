import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from "react-native";
import Posts from "../components/Posts";
import BackgroundImage from "../Images/BackgroundImage.jpg";
import UserPhoto from "../components/UserPhoto";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={BackgroundImage}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <SafeAreaView style={styles.form}>
              <View style={styles.photoContainer}>
                <UserPhoto />
              </View>
              <Text style={styles.formTitle}>Natali Romanova</Text>
              <Posts />
              <Posts />
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    paddingTop: 147,
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
});
export default ProfileScreen;
