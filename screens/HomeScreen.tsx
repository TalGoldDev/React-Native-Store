import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import EditScreenInfo from "../components/EditScreenInfo";
import HeroSection from "../components/home-page/HeroSection";
import Search from "../components/home-page/Search";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import ProductImages from "../constants/ProductImages";
import { RootTabScreenProps } from "../types";

const ItemsList = [
  {
    id: 0,
    name: "Instax Mini 9",
    price: 49.99,
    image: ProductImages.cameras.yellow,
    color: Colors.pallete.yellow,
  },
  {
    id: 1,
    name: "Instax Mini X",
    price: 49.99,
    image: ProductImages.cameras.blue,
    color: Colors.pallete.blue,
  },
  {
    id: 2,
    name: "Instax Mini X",
    price: 49.99,
    image: ProductImages.cameras.green,
    color: Colors.pallete.green,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.logo}>Camera Store</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <ScrollView>
          <HeroSection />
          <Search />
        </ScrollView>
        {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 8,
  },
  separator: {
    marginVertical: 12,
    height: 1,
    width: "100%",
  },
  logo: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
});
