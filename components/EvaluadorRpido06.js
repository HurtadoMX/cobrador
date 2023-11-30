import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EvaluadorRpido06 = () => {
  return (
    <View style={styles.evaluadorRpido06}>
      <Image
        style={[styles.evaluadorRpido06Child, styles.navbarPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-233341.png")}
      />
      <View style={styles.evaluadorRpido06Item} />
      <Image
        style={styles.evaluadorRpido06Inner}
        resizeMode="cover"
        source={require("../assets/polygon-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector38.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector37.png")}
      />
      <View style={[styles.groupParent, styles.groupParentSpaceBlock]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-1117.png")}
        />
        <View style={styles.separadorForms} />
        <View style={styles.cardtitle20}>
          <Text style={[styles.title, styles.titleFlexBox]}>Verificación</Text>
        </View>
        <View style={styles.separadorForms} />
        <View
          style={[styles.carddescription16, styles.cardFooterDobleSpaceBlock]}
        >
          <Text style={[styles.texto, styles.titleFlexBox]}>
            Ingresa el código enviado a tu celular
          </Text>
        </View>
        <View style={[styles.inputNumberx4, styles.groupParentSpaceBlock]}>
          <View style={[styles.inputNumber, styles.buttonFlexBox]}>
            <View style={styles.input}>
              <Text style={[styles.input1, styles.titleTypo2]}>0</Text>
            </View>
          </View>
          <View style={styles.inputNumber1}>
            <View style={styles.input}>
              <Text style={[styles.input1, styles.titleTypo2]}>0</Text>
            </View>
          </View>
          <View style={styles.inputNumber1}>
            <View style={styles.input}>
              <Text style={[styles.input1, styles.titleTypo2]}>0</Text>
            </View>
          </View>
          <View style={styles.inputNumber1}>
            <View style={styles.input}>
              <Text style={[styles.input1, styles.titleTypo2]}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.separadorForms} />
        <View style={styles.title14botones}>
          <View style={[styles.title24, styles.navbarSpaceBlock]}>
            <Text style={[styles.title1, styles.titleTypo1]}>
              El código ingresado es incorrecto, vuelve a intentarlo
            </Text>
          </View>
        </View>
        <View style={styles.botonCentradoPpal}>
          <View
            style={[styles.cardFooterDoble, styles.cardFooterDobleSpaceBlock]}
          >
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Reenviar código
              </Text>
            </View>
            <View style={[styles.button1, styles.centerSpaceBlock]}>
              <Text style={[styles.title3, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={[styles.center, styles.centerSpaceBlock]}>
          <Text style={[styles.title4, styles.titleTypo1]}>
            Evaluador rápido
          </Text>
        </View>
        <Image
          style={[styles.bellIcon, styles.centerSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  titleFlexBox: {
    textAlign: "center",
    color: Color.blanco20,
  },
  cardFooterDobleSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleTypo2: {
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
  },
  navbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo1: {
    fontWeight: "500",
    fontFamily: FontFamily.h4,
    flex: 1,
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  centerSpaceBlock: {
    display: "none",
    marginLeft: 16,
  },
  evaluadorRpido06Child: {
    height: 732,
  },
  evaluadorRpido06Item: {
    top: 672,
    left: 425,
    backgroundColor: Color.colorGainsboro_200,
    width: 33,
    height: 64,
    position: "absolute",
  },
  evaluadorRpido06Inner: {
    top: 180,
    left: 37,
    borderRadius: Border.br_31xl,
    width: 281,
    height: 309,
    position: "absolute",
  },
  vectorIcon: {
    right: "62.92%",
    left: "17.87%",
    width: "19.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
  },
  vectorIcon1: {
    width: "14.78%",
    right: "85.22%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
  },
  vectorIcon2: {
    right: "40.7%",
    left: "40.1%",
    width: "19.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
  },
  vectorIcon3: {
    right: "18.48%",
    left: "62.32%",
    width: "19.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
  },
  vectorIcon4: {
    width: "15.46%",
    right: "0%",
    left: "84.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "3.28%",
    top: "82.28%",
    height: "14.44%",
  },
  frameChild: {
    width: 105,
    height: 100,
  },
  separadorForms: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  texto: {
    fontSize: FontSize.body3_size,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    alignSelf: "stretch",
  },
  carddescription16: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  input1: {
    lineHeight: 24,
    color: Color.colorIndigo_100,
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  inputNumber: {
    height: 65,
    width: 65,
    borderWidth: 2,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.primario,
    borderStyle: "solid",
    backgroundColor: Color.blanco20,
  },
  inputNumber1: {
    marginLeft: 16,
    paddingHorizontal: Padding.p_xs,
    height: 65,
    width: 65,
    borderWidth: 2,
    borderColor: Color.primario,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  inputNumberx4: {
    width: 350,
    flexDirection: "row",
    justifyContent: "center",
  },
  title1: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.cont1,
    textAlign: "left",
  },
  title24: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  title14botones: {
    width: 349,
    height: 33,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    textDecoration: "underline",
    color: Color.secundario,
  },
  button: {
    height: 40,
    flex: 1,
    borderRadius: Border.br_xl,
  },
  title3: {
    color: Color.primario,
  },
  button1: {
    borderRadius: Border.br_981xl,
    borderWidth: 1,
    width: 93,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderColor: Color.primario,
    borderStyle: "solid",
    display: "none",
  },
  cardFooterDoble: {
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    flex: 1,
    flexDirection: "row",
  },
  botonCentradoPpal: {
    width: 354,
    flexDirection: "row",
  },
  groupParent: {
    top: 170,
    left: 16,
    width: 382,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title4: {
    textAlign: "center",
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
    fontWeight: "500",
  },
  center: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  bellIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  navbar: {
    height: 45,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  evaluadorRpido06: {
    overflow: "hidden",
    height: 732,
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default EvaluadorRpido06;
