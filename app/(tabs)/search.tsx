import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
})
