import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Cuadre15 = () => {
  return (
    <View style={styles.cuadre}>
      <Image
        style={styles.cuadreChild}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <View style={styles.cuadreItem} />
      <Image
        style={styles.googleMapsOldRouteUi1Icon}
        resizeMode="cover"
        source={require("../assets/googlemapsoldrouteui-1.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
            </View>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.vectorIcon, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={styles.frameGroup}>
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
      <View style={styles.direccin}>
        <Text style={[styles.dirgeteHacia, styles.textoFlexBox]}>
          Dirígete hacia:
        </Text>
        <Text style={[styles.avGuanajuatoEn, styles.textoFlexBox]}>
          Av. Guanajuato en
        </Text>
        <Text style={[styles.avGuanajuatoEn, styles.textoFlexBox]}>425mts</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={[styles.tabla, styles.tablaFlexBox]}>
          <Text style={[styles.negocio, styles.negocioLayout]}>Negocio</Text>
          <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
          <Text style={[styles.tacosHernandez, styles.textSpaceBlock]}>
            Tacos Hernandez
          </Text>
        </View>
        <Text style={styles.text1}>3</Text>
        <View style={[styles.tabla, styles.tablaFlexBox]}>
          <Text style={[styles.negocio, styles.negocioLayout]}>Dirección</Text>
          <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
          <Text style={[styles.avLasAmricas, styles.textSpaceBlock]}>
            Av. Las Américas 238, esquina
          </Text>
        </View>
      </View>
      <Image
        style={[styles.cuadreInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-20961.png")}
      />
      <View style={[styles.groupView, styles.floatingbubbleLayout]}>
        <View
          style={[styles.floatingbubbleWrapper, styles.floatingbubbleLayout]}
        >
          <View style={[styles.floatingbubble, styles.floatingbubbleLayout]}>
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
      <View style={styles.topbar}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={styles.title}>Cuadre</Text>
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
      <View style={[styles.timer, styles.cardLayout]}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.text3, styles.textTypo1]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text4, styles.textTypo1]}>10/12</Text>
          <Image
            style={[styles.groupChild1, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/group-24545.png")}
          />
        </View>
        <Text style={[styles.aTiempo, styles.aTiempoTypo]}>A tiempo</Text>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic3.png")}
      />
      <View style={styles.mask} />
      <View style={[styles.cuadreInner1, styles.cuadreInner1Layout]}>
        <View style={[styles.groupContainer, styles.cuadreInner1Layout]}>
          <Image
            style={styles.frameChild1}
            resizeMode="cover"
            source={require("../assets/group-28021.png")}
          />
        </View>
      </View>
      <View style={[styles.card, styles.cardLayout]}>
        <View />
        <View style={styles.cardtitle20}>
          <Text style={[styles.title1, styles.textTypo1]}>Haz llegado</Text>
        </View>
        <View style={styles.separadorForms1}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.carddescription16}>
          <Text style={[styles.texto, styles.textoFlexBox]}>
            Recuerda antes de descender del vehículo, tener las siguientes
            precauciones
          </Text>
        </View>
        <View style={styles.verificaciones}>
          <View
            style={[
              styles.verificaTuEntornoAntesDeDWrapper,
              styles.tablaFlexBox,
            ]}
          >
            <Text style={[styles.verificaTuEntorno, styles.titleTypo]}>
              Verifica tu entorno antes de descender, analiza que no haya
              ninguna actividad sospechosa
            </Text>
          </View>
          <Image
            style={[styles.verificacionesChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/frame-24411.png")}
          />
        </View>
        <View style={styles.separadorForms2}>
          <Image
            style={styles.separadorLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-330.png")}
          />
          <Image
            style={[styles.separadorFormsInner, styles.separadorLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-331.png")}
          />
          <Image
            style={[styles.separadorFormsInner, styles.separadorLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-331.png")}
          />
        </View>
        <View style={styles.botonCentradoPpal}>
          <View style={styles.cardFooterDoble}>
            <View style={[styles.button, styles.buttonBorder]}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Iniciar cuadre
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title3, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={[styles.text5, styles.textTypo]}>
              Europe Street beat
            </Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={[styles.text6, styles.textTypo]}>
              www.instagram.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
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
  textoFlexBox: {
    textAlign: "left",
    color: Color.texto,
  },
  tablaFlexBox: {
    paddingVertical: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  negocioLayout: {
    width: 176,
    textAlign: "left",
    color: Color.texto,
  },
  textSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.h4,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  floatingbubbleLayout: {
    height: 66,
    width: 66,
    position: "absolute",
  },
  cardLayout: {
    width: 382,
    alignItems: "center",
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aTiempoTypo: {
    fontWeight: "500",
    fontSize: FontSize.body3_size,
  },
  cuadreInner1Layout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  separadorLayout: {
    height: 10,
    width: 10,
  },
  buttonBorder: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.primario,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
  },
  cuadreChild: {
    height: 709,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  cuadreItem: {
    top: 77,
    height: 520,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
    width: 414,
    backgroundColor: Color.blanco20,
  },
  googleMapsOldRouteUi1Icon: {
    top: 85,
    left: 8,
    width: 398,
    height: 504,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  subtractIcon: {
    height: 1191,
    width: 414,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
  },
  frameChild: {
    height: 28,
    borderRadius: Border.br_sm,
    width: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    backgroundColor: Color.cont,
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    textAlign: "center",
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon: {
    height: 28,
  },
  ranking: {
    marginTop: 8,
    textAlign: "center",
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
    height: 28,
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
    overflow: "hidden",
    width: 414,
  },
  dirgeteHacia: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.bodyRegular_size,
  },
  avGuanajuatoEn: {
    marginLeft: 27,
    fontSize: FontSize.body3_size,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  direccin: {
    top: 530,
    borderColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderBottomWidth: 1,
    borderStyle: "solid",
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  negocio: {
    display: "flex",
    alignItems: "center",
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.bodyRegular_size,
  },
  text: {
    display: "none",
  },
  tacosHernandez: {
    width: 156,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.body3_size,
    textAlign: "left",
    color: Color.texto,
    fontWeight: "500",
  },
  tabla: {
    width: 365,
    paddingHorizontal: 0,
  },
  text1: {
    display: "none",
    fontFamily: FontFamily.h4,
  },
  avLasAmricas: {
    width: 150,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.body3_size,
    textAlign: "left",
    color: Color.texto,
    fontWeight: "500",
  },
  cardBody: {
    top: 582,
    paddingBottom: Padding.p_base,
    width: 381,
    paddingHorizontal: Padding.p_base,
    left: 16,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  cuadreInner: {
    top: 613,
    right: 17,
    height: 24,
    position: "absolute",
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
    backgroundColor: Color.primario,
    borderStyle: "solid",
    width: 66,
    right: 0,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  floatingbubbleWrapper: {
    right: 0,
    width: 66,
    top: 0,
  },
  groupView: {
    top: 464,
    right: 174,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  bellIcon: {
    marginLeft: 16,
    height: 24,
  },
  rightIcon: {
    marginLeft: 16,
    height: 24,
  },
  topbar: {
    height: 45,
    paddingVertical: 0,
    borderColor: Color.primario,
    backgroundColor: Color.primario,
    paddingHorizontal: Padding.p_base,
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  vectorIcon1: {
    width: 22,
    height: 24,
  },
  text3: {
    marginLeft: 25,
    color: Color.blanco20,
  },
  text4: {
    top: 1,
    left: 35,
    color: Color.blanco20,
    position: "absolute",
  },
  groupChild1: {
    height: "105.2%",
    width: "39.44%",
    top: "0%",
    right: "62.13%",
    bottom: "-5.2%",
    left: "-1.57%",
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
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  timer: {
    top: 53,
    left: 20,
    borderTopRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_sm,
    backgroundColor: Color.cont,
    flexDirection: "row",
  },
  buttonpanicIcon: {
    top: 423,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  mask: {
    top: -6,
    left: -2,
    backgroundColor: Color.colorGray_400,
    width: 419,
    height: 866,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild1: {
    width: 35,
    height: 35,
  },
  groupContainer: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.primario,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  cuadreInner1: {
    top: 428,
    left: 334,
  },
  title1: {
    flex: 1,
    color: Color.texto,
    fontWeight: "700",
  },
  cardtitle20: {
    width: 350,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  texto: {
    alignSelf: "stretch",
    fontSize: FontSize.body3_size,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  carddescription16: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  verificaTuEntorno: {
    width: 176,
    textAlign: "left",
    color: Color.texto,
  },
  verificaTuEntornoAntesDeDWrapper: {
    marginTop: -61.5,
    width: "59.14%",
    top: "50%",
    right: "0%",
    left: "40.86%",
    paddingHorizontal: Padding.p_base,
    position: "absolute",
    overflow: "hidden",
  },
  verificacionesChild: {
    height: "82.79%",
    width: "40.57%",
    top: "8.2%",
    right: "59.43%",
    bottom: "9.02%",
    left: "0%",
  },
  verificaciones: {
    height: 122,
    width: 350,
  },
  separadorFormsInner: {
    marginLeft: 16,
  },
  separadorForms2: {
    padding: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
  },
  title2: {
    color: Color.blanco20,
    textAlign: "center",
  },
  button: {
    height: 40,
    backgroundColor: Color.primario,
    borderRadius: Border.br_xl,
  },
  title3: {
    color: Color.primario,
    textAlign: "center",
  },
  button1: {
    borderRadius: Border.br_981xl,
    width: 93,
    marginLeft: 16,
    display: "none",
  },
  cardFooterDoble: {
    paddingVertical: Padding.p_5xs,
    flex: 1,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  text5: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text6: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
  },
  texttext1: {
    alignSelf: "stretch",
    display: "none",
    marginTop: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    display: "none",
  },
  card: {
    top: 158,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    left: 16,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanco20,
  },
  cuadre: {
    height: 741,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default Cuadre15;
