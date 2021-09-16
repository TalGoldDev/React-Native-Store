import React from "react";
import { Text, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  navigation: any;
  route: any;
}

const ProductPage = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>This is {props.route.params.productId}'s profile</Text>
          <Button
            title="Go to Details"
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;
