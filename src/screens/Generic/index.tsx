import React from "react";
import { View, Text } from "react-native";
import theme from "../../global/styles/theme";

export function Generic() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Generic</Text>
    </View>
  );
}
