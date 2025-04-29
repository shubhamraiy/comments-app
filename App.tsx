import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { store } from "./src/store/store";
import CommentsScreen from "./src/screens/CommentsScreen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <CommentsScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
