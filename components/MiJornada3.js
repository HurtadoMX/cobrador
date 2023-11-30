import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const MiJornada31 = () => {
  return (
    <View style={styles.miJornada}>
      <Image
        style={[styles.miJornadaChild, styles.miJornadaChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-233321.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract41.png")}
      />
      <View style={styles.topbar}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleFlexBox]}>Incidencias</Text>
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
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
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
              source={require("../assets/frame-9221.png")}
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
        source={require("../assets/buttonpanic21.png")}
      />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.frameGroupFlexBox,
        ]}
      >
        <View
          style={[
            styles.sectiontitleYTextoresaltar24,
            styles.frameGroupFlexBox,
          ]}
        >
          <Text style={[styles.title1, styles.titleFlexBox]}>
            Cuéntanos al respecto ¿De qué tipo es tu incidencia?
          </Text>
        </View>
        <View />
        <View />
        <View />
        <View />
        <View style={styles.selectorx3}>
          <View style={styles.selectorItem}>
            <Text style={[styles.mdica, styles.mdicaTypo]}>Médica</Text>
          </View>
          <View style={[styles.selectorItem1, styles.selectorItemBorder]}>
            <Text style={[styles.mdica1, styles.mdicaTypo]}>Vehicular</Text>
          </View>
          <View style={[styles.selectorItem1, styles.selectorItemBorder]}>
            <Text style={[styles.mdica1, styles.mdicaTypo]}>Personal</Text>
          </View>
        </View>
        <View style={styles.selectorx3}>
          <View style={styles.selectorItemBorder}>
            <Text style={[styles.mdica1, styles.mdicaTypo]}>Opción 4</Text>
          </View>
          <View style={[styles.selectorItem1, styles.selectorItemBorder]}>
            <Text style={[styles.mdica1, styles.mdicaTypo]}>Opción 5</Text>
          </View>
          <View style={[styles.selectorItem1, styles.selectorItemBorder]}>
            <Text style={[styles.mdica1, styles.mdicaTypo]}>Opción 6</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miJornadaChildPosition: {
    left: 0,
    width: 414,
  },
  titleFlexBox: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
    color: Color.blanco20,
    flex: 1,
  },
  navbarinferiorLayout: {
    height: 76,
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
  mdicaTypo: {
    fontSize: FontSize.body3_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  selectorItemBorder: {
    borderWidth: 1,
    borderColor: Color.primario20,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mid_5,
    height: 24,
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    borderStyle: "solid",
    overflow: "hidden",
  },
  miJornadaChild: {
    top: 0,
    position: "absolute",
    height: 710,
  },
  subtractIcon: {
    height: 551,
    width: 414,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    fontSize: FontSize.h4_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  topbar: {
    backgroundColor: Color.primario,
    borderColor: Color.primario,
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
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
    justifyContent: "center",
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
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
    left: 17,
    alignItems: "flex-end",
    flexDirection: "row",
    top: 0,
  },
  navbarinferior: {
    bottom: 0,
    left: 0,
    width: 414,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    top: 546,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  mdica: {
    color: Color.blanco20,
    fontSize: FontSize.body3_size,
  },
  selectorItem: {
    backgroundColor: Color.primario20,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mid_5,
    height: 24,
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  mdica1: {
    color: Color.primario20,
  },
  selectorItem1: {
    marginLeft: 16,
  },
  selectorx3: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 69,
    left: 16,
    width: 382,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  miJornada: {
    backgroundColor: Color.blanco20,
    overflow: "hidden",
    height: 710,
    width: 414,
  },
});

export default MiJornada31;
