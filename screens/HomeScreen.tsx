import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import EditScreenInfo from "../components/EditScreenInfo";
import HeroSection from "../components/home-page/HeroSection";
import Search from "../components/home-page/Search";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

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
