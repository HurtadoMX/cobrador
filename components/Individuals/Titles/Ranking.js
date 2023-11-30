import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const Ranking = ({text}) => {
  return (
    <View style={styles.sectiontitleYTextoresaltar241}>
        <Text style={[styles.title1, styles.titleTypo3]}>{text}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    sectiontitleYTextoresaltar241: {
        top: 0,
        bottom: 0,
        height: 150,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        width: 202,
        left: 106,
        // position: "absolute",
        overflow: "hidden",
      },
      title1: {
        color: Color.texto,
        flex: 1,
      },
      titleTypo3: {
        fontSize: FontSize.h2_size,
        textAlign: "center",
        fontFamily: FontFamily.h4,
        fontWeight: "700",
      },
});

export default Ranking;
