import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const nav = useNavigation()

    return (
      <View>
          <Text>Register Page Goes Here</Text>
          <Button
        title="Goes to home once registered"
        onPress={() => nav.navigate('Home' as never)}
      />

      </View>
    )
}