import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MiJornada = () => {
  return (
    <View style={[styles.miJornada, styles.miJornadaLayout]}>
      <Image
        style={[
          styles.istockphoto688917906612x612Icon,
          styles.subtractChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/istockphoto688917906612x612-2.png")}
      />
      <Image
        style={styles.avisorecibo2Icon}
        resizeMode="cover"
        source={require("../assets/avisorecibo-2.png")}
      />
      <View style={[styles.subtract, styles.subtractLayout]}>
        <View style={[styles.subtractChild, styles.subtractBg]} />
        <View style={[styles.subtractItem, styles.subtractBg]} />
      </View>
      <Image
        style={styles.miJornadaChild}
        resizeMode="cover"
        source={require("../assets/group-2023.png")}
      />
      <View style={styles.sectiontitleYTextoresaltar24}>
        <Text style={styles.title}>
          Por favor registra tu comprobante de incidencia
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miJornadaLayout: {
    height: 710,
    width: 414,
  },
  subtractChildPosition: {
    left: 0,
    top: 0,
  },
  subtractLayout: {
    height: 713,
    width: 414,
  },
  subtractBg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  istockphoto688917906612x612Icon: {
    position: "absolute",
    height: 710,
    width: 414,
  },
  avisorecibo2Icon: {
    top: 141,
    left: 24,
    width: 368,
    height: 452,
    position: "absolute",
  },
  subtractChild: {
    height: 713,
    width: 414,
    left: 0,
    top: 0,
  },
  subtractItem: {
    top: 140,
    left: 20,
    borderRadius: Border.br_3xs,
    width: 375,
    height: 460,
  },
  subtract: {
    backgroundColor: Color.textSecondary,
  },
  miJornadaChild: {
    top: 605,
    left: 1,
    height: 105,
    position: "absolute",
    width: 414,
  },
  title: {
    flex: 1,
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    color: Color.blanco20,
    textAlign: "center",
  },
  sectiontitleYTextoresaltar24: {
    top: 48,
    left: 16,
    width: 382,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  miJornada: {
    backgroundColor: Color.blanco20,
    overflow: "hidden",
  },
});

export default MiJornada;
