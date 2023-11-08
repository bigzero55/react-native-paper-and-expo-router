import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <View>
      <StatusBar style="dark" />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="home" color="white" />
        <Appbar.Content title="Home" color="white" />
      </Appbar.Header>
      <Text>kanapa tidak seva ada apa inie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "purple",
  },
});
