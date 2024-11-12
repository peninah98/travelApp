import Colors from "@/constants/Colors"
import { destinationCategories } from "@/data/categories"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useRef, useState } from "react"
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"

const CategoryButtons = () => {
  const itemRef = useRef<Array<View | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const handleSelectCategory = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <View>
      <Text style={styles.title}>Categories </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
        {destinationCategories.map((category, index) => (
          <Pressable
            key={index}
            ref={(element) => (itemRef.current[index] = element)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }>
            <MaterialCommunityIcons
              name={category.iconName as any}
              size={20}
              color={Colors.black}
              style={{
                color: activeIndex === index ? Colors.white : Colors.black,
              }}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryBtnTxtActive
                  : styles.categoryTitle
              }>
              {category.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButtons

const styles = StyleSheet.create({
  categoryBtn: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 8,
    elevation: 2,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    padding: 10,
    marginVertical: 10,
  },
  categoryTitle: {
    color: Colors.black,
    marginLeft: 8,
  },
  categoryBtnActive: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 8,
    elevation: 2,
  },
  categoryBtnTxtActive: {
    color: Colors.white,
    fontWeight: "400",
    marginLeft: 8,
  },
})
