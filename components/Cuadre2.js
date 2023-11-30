import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Cuadre2 = () => {
  return (
    <View style={styles.cuadre}>
      <Image
        style={[styles.cuadreChild, styles.topbarPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-23333.png")}
      />
      <View style={[styles.topbar, styles.topbarSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleFlexBox]}>
            Entrega de herramientas
          </Text>
        </View>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract4.png")}
      />
      <View style={[styles.navbarinferior, styles.topbarPosition]}>
        <Image
          style={styles.navbarinferiorChild}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.frameWrapper, styles.frameGroupFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
            </View>
            <Text style={styles.homeTypo}>Home</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-923.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.groupWrapper, styles.frameChildLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.ranking, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic1.png")}
      />
      <View style={styles.separadorForms} />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.parentPosition,
        ]}
      >
        <View
          style={[
            styles.sectiontitleYTextoresaltar24,
            styles.frameGroupFlexBox,
          ]}
        >
          <Text style={[styles.title1, styles.textoClr]}>Turno No. 6</Text>
        </View>
        <View style={[styles.carddescription16, styles.topbarSpaceBlock]}>
          <Text style={[styles.texto, styles.textoClr]}>
            Espera tu turno y presentale este QR a tu supervisor asignado
          </Text>
        </View>
        <View />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-2491.png")}
        />
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbarPosition: {
    left: 0,
    position: "absolute",
    width: 414,
  },
  topbarSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  titleFlexBox: {
    textAlign: "center",
    flex: 1,
  },
  parentPosition: {
    left: 17,
    position: "absolute",
  },
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildLayout: {
    height: 28,
    width: 28,
  },
  homeTypo: {
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
  },
  textoClr: {
    color: Color.texto,
    fontFamily: FontFamily.h4,
  },
  cuadreChild: {
    height: 709,
    top: 0,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    fontSize: FontSize.h4_size,
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    textAlign: "center",
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  topbar: {
    backgroundColor: Color.primario,
    borderStyle: "solid",
    borderColor: Color.primario,
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    width: 414,
    top: 0,
  },
  subtractIcon: {
    height: 1191,
    width: 414,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    height: 76,
    bottom: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    width: 44,
    height: 44,
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  ranking: {
    marginTop: 8,
  },
  groupChild: {
    bottom: 12,
  },
  groupItem: {
    bottom: 6,
  },
  groupInner: {
    bottom: 0,
  },
  rectangleParent: {
    height: 14,
    width: 17,
  },
  groupWrapper: {
    backgroundColor: Color.texto20,
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    alignItems: "flex-end",
    height: 76,
    flexDirection: "row",
    top: 0,
  },
  navbarinferior: {
    height: 76,
    bottom: 0,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    right: 16,
    bottom: 113,
    width: 55,
    height: 55,
    position: "absolute",
  },
  separadorForms: {
    top: 180,
    left: 33,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
  },
  texto: {
    fontSize: FontSize.body3_size,
    fontWeight: "300",
    textAlign: "left",
    alignSelf: "stretch",
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  groupIcon: {
    width: 228,
    height: 230,
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 141,
    borderRadius: Border.br_xl,
    width: 381,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    left: 17,
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  cuadre: {
    height: 732,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default Cuadre2;
