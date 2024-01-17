import { StyleSheet, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";

type Props = {
  height?: number;
};

const Loading: React.FC<Props> = (props) => {
  const { height } = props;
  return (
    <SafeAreaView
      style={[styles.container, styles.horizontal, { height: height }]}
    >
      <ActivityIndicator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Loading;
