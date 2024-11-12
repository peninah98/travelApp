import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
})
