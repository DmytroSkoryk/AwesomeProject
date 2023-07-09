import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOut from "../components/LogOut";
import { useNavigation, useRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const {
    params: { mail },
  } = useRoute();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Публікації") {
            iconName = (
              <View
                style={[
                  styles.footerItems,
                  styles.leftItem,
                  focused && styles.activeItem,
                ]}
              >
                <SimpleLineIcons name="grid" size={24} color={color} />
              </View>
            );
          } else if (route.name === "Створити публікацію") {
            iconName = (
              <View style={[styles.footerItems, focused && styles.activeItem]}>
                <AntDesign name="plus" size={size} color={color} />
              </View>
            );
          } else if (route.name === "ProfileScreen") {
            iconName = (
              <View
                style={[
                  styles.footerItems,
                  styles.rightItem,
                  focused && styles.activeItem,
                ]}
              >
                <Feather name="user" size={size} color={color} />
              </View>
            );
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FFF",
        inactiveTintColor: "rgba(33, 33, 33, 0.8)",
      }}
    >
      <Tabs.Screen
        initialParams={{ mail }}
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitle: () => <LogOut navigation={navigation} />,
          headerTitleAlign: "center",
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Medium",
            color: "#212121",
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Medium",
            color: "#212121",
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          tabBarLabel: "",
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  footerItems: {
    backgroundColor: "transparent",
    marginTop: 20,
    marginBottom: 1,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  leftItem: {
    alignSelf: "flex-end",
  },
  rightItem: {
    alignSelf: "flex-start",
  },
  activeItem: {
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
});

export default Home;
