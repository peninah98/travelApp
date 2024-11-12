import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import React from "react"
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
} from "react-native"
import { useHeaderHeight } from "@react-navigation/elements"

const Page = () => {
  const headerHeight = useHeaderHeight()
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <Pressable
              onPress={() => {
                console.log("I am clicked!")
              }}
              style={{
                marginLeft: 20,
              }}>
              <Image
                source={{
                  uri: "https://avatar.iran.liara.run/public/1",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: Colors.primaryColor,
                }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                console.log(
                  "I am clicked!, and I am notification icon ofcourse"
                )
              }}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowOffset: { width: 2, height: 4 },
                shadowColor: "#171717",
                shadowOpacity: 0.2,
                elevation: 5,
              }}>
              <Ionicons
                name="notifications"
                size={24}
                color={Colors.black}
              />
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={[styles.text, { paddingTop: headerHeight }]}>
          Explore the Beautify of Rwanda!!
        </Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              color={Colors.black}
              style={{ marginRight: 5 }}
            />
            <TextInput placeholder="Search..." />
          </View>
          <Pressable style={styles.filterButton}>
            <Ionicons
              name="options"
              size={28}
              color={Colors.white}
            />
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  text: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignContent: "center",
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    elevation: 5,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})
