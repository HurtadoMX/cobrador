import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const MiJornada11 = () => {
  return (
    <View style={styles.miJornada}>
      <Image
        style={[styles.miJornadaChild, styles.jornadaPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-23331.png")}
      />
      <View style={[styles.miJornadaItem, styles.miJornadaItemLayout]} />
      <Image
        style={[styles.googleMapsOldRouteUi1Icon, styles.miJornadaItemLayout]}
        resizeMode="cover"
        source={require("../assets/googlemapsoldrouteui-1.png")}
      />
      <View style={[styles.subtractParent, styles.jornadaPosition]}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
          source={require("../assets/subtract.png")}
        />
        <View style={styles.groupWrapper}>
          <View style={styles.floatingbubbleWrapper}>
            <View style={[styles.floatingbubble, styles.frameGroupFlexBox]}>
              <Image
                style={styles.messageIcon}
                resizeMode="cover"
                source={require("../assets/message1.png")}
              />
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.direccin, styles.topbarSpaceBlock]}>
          <Text style={[styles.dirgeteHacia, styles.dirgeteHaciaTypo]}>
            Dirígete hacia:
          </Text>
          <Text style={[styles.avGuanajuatoEn, styles.abastosTypo]}>
            Av. Guanajuato en
          </Text>
          <Text style={[styles.avGuanajuatoEn, styles.abastosTypo]}>
            425mts
          </Text>
        </View>
        <View style={[styles.cardBody, styles.topbarSpaceBlock]}>
          <View style={styles.tabla}>
            <Text style={[styles.zona, styles.zonaFlexBox]}>Zona</Text>
            <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
            <Text style={[styles.abastos, styles.textSpaceBlock]}>Abastos</Text>
          </View>
          <Text style={[styles.text1, styles.textTypo1]}>3</Text>
          <View style={styles.tabla}>
            <Text style={[styles.zona, styles.zonaFlexBox]}>
              Punto de encuentro
            </Text>
            <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
            <Text style={[styles.avJbSierra, styles.textSpaceBlock]}>
              Av. J.B Sierra
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.topbar, styles.topbarSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo]}>
            Punto de encuentro
          </Text>
        </View>
        <Image
          style={[styles.bellIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
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
            <View style={[styles.frameWrapper, styles.timerBg]}>
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
            <View style={[styles.groupContainer, styles.frameChildLayout]}>
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
        source={require("../assets/buttonpanic6.png")}
      />
      <View style={[styles.timer, styles.timerBg]}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.text3, styles.textTypo]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text4, styles.textTypo]}>10/12</Text>
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/group-24545.png")}
          />
        </View>
        <Text style={[styles.aTiempo, styles.titleTypo]}>A tiempo</Text>
      </View>
      <Image
        style={[styles.miJornadaInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-20962.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaPosition: {
    left: 0,
    width: 414,
  },
  miJornadaItemLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameGroupFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  topbarSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    position: "absolute",
  },
  dirgeteHaciaTypo: {
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
  },
  abastosTypo: {
    fontWeight: "500",
    fontSize: FontSize.body3_size,
  },
  zonaFlexBox: {
    display: "flex",
    textAlign: "left",
    color: Color.texto,
    alignItems: "center",
  },
  textSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.h4,
  },
  textTypo1: {
    textAlign: "center",
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    display: "none",
  },
  titleTypo: {
    color: Color.blanco20,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  timerBg: {
    backgroundColor: Color.cont,
    alignItems: "center",
  },
  frameChildLayout: {
    width: 28,
    height: 28,
  },
  homeTypo: {
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    width: 17,
    right: 0,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  miJornadaChild: {
    top: 0,
    position: "absolute",
    height: 733,
  },
  miJornadaItem: {
    top: 77,
    height: 520,
    left: 0,
    width: 414,
    backgroundColor: Color.blanco20,
  },
  googleMapsOldRouteUi1Icon: {
    top: 85,
    left: 8,
    width: 398,
    height: 504,
  },
  subtractIcon: {
    height: 1191,
    width: 414,
  },
  messageIcon: {
    width: 32,
    height: 32,
    display: "none",
    overflow: "hidden",
  },
  groupIcon: {
    width: 42,
    marginLeft: 10,
    height: 28,
  },
  floatingbubble: {
    borderRadius: Border.br_29xl,
    borderColor: Color.secundario,
    borderWidth: 3,
    flexDirection: "row",
    borderStyle: "solid",
    padding: Padding.p_5xs,
    backgroundColor: Color.primario,
    right: 0,
    height: 66,
    width: 66,
    top: 0,
    position: "absolute",
  },
  floatingbubbleWrapper: {
    right: 0,
    height: 66,
    width: 66,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    right: 174,
    height: 66,
    width: 66,
    top: 0,
    position: "absolute",
  },
  dirgeteHacia: {
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
  },
  avGuanajuatoEn: {
    marginLeft: 27,
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
  },
  direccin: {
    top: 66,
    borderColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_xs,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    left: 16,
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  zona: {
    width: 176,
    fontFamily: FontFamily.h4,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
  },
  text: {
    textAlign: "center",
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    display: "none",
  },
  abastos: {
    width: 156,
    display: "flex",
    textAlign: "left",
    color: Color.texto,
    alignItems: "center",
    fontWeight: "500",
    fontSize: FontSize.body3_size,
  },
  tabla: {
    width: 365,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontFamily: FontFamily.h4,
  },
  avJbSierra: {
    width: 189,
    display: "flex",
    textAlign: "left",
    color: Color.texto,
    alignItems: "center",
    fontWeight: "500",
    fontSize: FontSize.body3_size,
  },
  cardBody: {
    top: 118,
    width: 381,
    paddingBottom: Padding.p_xs,
    left: 16,
    overflow: "hidden",
    justifyContent: "center",
  },
  subtractParent: {
    top: 464,
    height: 1224,
    position: "absolute",
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    fontSize: FontSize.h4_size,
    color: Color.blanco20,
    flex: 1,
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    marginLeft: 16,
  },
  rightIcon: {
    height: 24,
    marginLeft: 16,
  },
  topbar: {
    borderColor: Color.primario,
    height: 45,
    paddingVertical: 0,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    backgroundColor: Color.primario,
    left: 0,
    top: 0,
    width: 414,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
  },
  frameChild: {
    borderRadius: Border.br_sm,
    width: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  frameGroup: {
    width: 76,
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
  groupContainer: {
    backgroundColor: Color.texto20,
    borderRadius: Border.br_sm,
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
    top: 554,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  vectorIcon1: {
    width: 22,
    height: 24,
  },
  text3: {
    marginLeft: 25,
  },
  text4: {
    top: 1,
    left: 35,
    position: "absolute",
  },
  groupChild1: {
    height: "105.2%",
    width: "39.44%",
    top: "0%",
    right: "62.13%",
    bottom: "-5.2%",
    left: "-1.57%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    width: 89,
    height: 27,
    marginLeft: 25,
  },
  aTiempo: {
    marginLeft: 25,
    color: Color.blanco20,
    fontSize: FontSize.body3_size,
  },
  timer: {
    top: 53,
    left: 20,
    borderTopRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 382,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_sm,
    flexDirection: "row",
    position: "absolute",
  },
  miJornadaInner: {
    right: 17,
    bottom: 96,
    height: 24,
    position: "absolute",
  },
  miJornada: {
    overflow: "hidden",
    height: 733,
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada11;
