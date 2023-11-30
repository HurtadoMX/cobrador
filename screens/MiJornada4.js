import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MiJornada41 = () => {
  return (
    <View style={styles.miJornada}>
      {/* <Image
        style={[styles.miJornadaChild, styles.jornadaChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-233321.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={styles.miJornadaItem} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group21.png")}
      />
      <View style={styles.miJornadaInner} />
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-472.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-93.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/frame-9221.png")}
              />
            </View>
            <Text style={styles.homeTypo}>Jornada</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.groupWrapper, styles.frameChildLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.home, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.miJornadaChild1, styles.jornadaChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-10871.png")}
      />
      <View style={styles.topbar}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo]}>Mi jornada</Text>
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
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic211.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/group-21062.png")}
        />
        <View />
        <View
          style={[
            styles.sectiontitleYTextoresaltar24,
            styles.cardFooterFlexBox,
          ]}
        >
          <Text style={[styles.title1, styles.titleTypo]}>
            ¿Vas a trabajar hoy?
          </Text>
        </View>
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooter, styles.cardFooterFlexBox]}>
            <View style={[styles.button, styles.buttonBorder]}>
              <Text style={[styles.title2, styles.titleTypo]}>Si</Text>
            </View>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title2, styles.titleTypo]}>No</Text>
            </View>
            <View style={[styles.button2, styles.buttonBorder]}>
              <Text style={[styles.title2, styles.titleTypo]}>Llego tarde</Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaChildLayout: {
    width: 414,
    left: 0,
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  frameChildLayout: {
    height: 28,
    width: 28,
  },
  homeTypo: {
    textAlign: "center",
    color: Color.texto20,
    fontFamily: FontFamily.h4,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
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
  titleTypo: {
    color: Color.blanco20,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  cardFooterFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBorder: {
    height: 40,
    borderWidth: 1,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  miJornadaChild: {
    top: 0,
    position: "absolute",
    height: 710,
  },
  image9Icon: {
    top: 13,
    left: 207,
    width: 0,
    height: 0,
    position: "absolute",
  },
  miJornadaItem: {
    top: 1468,
    left: 447,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 117,
    height: 8,
    position: "absolute",
  },
  groupIcon: {
    height: "0.55%",
    width: "4.11%",
    top: "41.21%",
    right: "-39.86%",
    bottom: "58.24%",
    left: "135.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  miJornadaInner: {
    top: 3314,
    left: 801,
    height: 84,
    position: "absolute",
  },
  navbarinferiorChild: {
    right: -13,
    width: 427,
    bottom: 0,
  },
  frameChild: {
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
  },
  home: {
    marginTop: 8,
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
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
    width: 414,
    left: 0,
    overflow: "hidden",
  },
  miJornadaChild1: {
    top: 255,
    height: 391,
    position: "absolute",
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    fontSize: FontSize.h4_size,
    fontWeight: "500",
    color: Color.blanco20,
    flex: 1,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
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
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonpanicIcon: {
    top: 546,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  frameChild1: {
    width: 100,
    height: 118,
  },
  title1: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    overflow: "hidden",
  },
  title2: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    color: Color.blanco20,
  },
  button: {
    paddingHorizontal: Padding.p_xs,
    width: 83,
    height: 40,
    borderWidth: 1,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    paddingVertical: Padding.p_5xs,
  },
  button1: {
    padding: Padding.p_96xl,
    width: 83,
    height: 40,
    borderWidth: 1,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    marginLeft: 16,
  },
  button2: {
    paddingVertical: Padding.p_96xl,
    height: 40,
    borderWidth: 1,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    marginLeft: 16,
    paddingHorizontal: Padding.p_base,
  },
  cardFooter: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 382,
  },
  tripleButton: {
    flexDirection: "row",
  },
  groupParent: {
    top: 69,
    left: 16,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    width: 382,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  miJornada: {
    backgroundColor: Color.blanco20,
    width: "100%",
    overflow: "hidden",
    height: 710,
    flex: 1,
  },
});

export default MiJornada41;
