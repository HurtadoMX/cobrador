import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MiJornada5 = () => {
  return (
    <View style={[styles.miJornada, styles.jornadaLayout]}>
      <Image
        style={[styles.miJornadaChild, styles.jornadaLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-23331.png")}
      />
      <View style={styles.miJornadaItem} />
      <Image
        style={styles.googleMapsOldRouteUi1Icon}
        resizeMode="cover"
        source={require("../assets/googlemapsoldrouteui-1.png")}
      />
      <View style={styles.subtractParent}>
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
        <View style={styles.direccin}>
          <Text style={[styles.dirgeteHacia, styles.textoTypo]}>
            Dirígete hacia:
          </Text>
          <Text style={[styles.avGuanajuatoEn, styles.textoTypo]}>
            Av. Guanajuato en
          </Text>
          <Text style={[styles.avGuanajuatoEn, styles.textoTypo]}>425mts</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.tabla}>
            <Text style={[styles.zona, styles.zonaFlexBox]}>Zona</Text>
            <Text style={[styles.text, styles.textSpaceBlock]}>3</Text>
            <Text style={[styles.abastos, styles.textSpaceBlock]}>Abastos</Text>
          </View>
          <Text style={styles.text1}>3</Text>
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
      <View style={[styles.topbar, styles.childSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={styles.title}>Punto de encuentro</Text>
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
            <View style={styles.frameWrapper}>
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
      <View style={styles.timer}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.text3, styles.textTypo1]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text4, styles.textTypo1]}>10/12</Text>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-24545.png")}
          />
        </View>
        <Text style={styles.aTiempo}>A tiempo</Text>
      </View>
      <Image
        style={[styles.miJornadaInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-20961.png")}
      />
      <View style={[styles.mask, styles.jornadaLayout]} />
      <View style={[styles.cardParent, styles.cardLayout]}>
        <View style={[styles.card, styles.cardLayout]}>
          <View />
          <View />
          <View />
          <View style={styles.cardtitle20}>
            <Text style={[styles.title1, styles.textTypo1]}>
              Ruta a oficina
            </Text>
          </View>
          <View style={styles.separadorForms3}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={styles.carddescription16}>
            <Text style={[styles.texto, styles.textoTypo]}>
              Inicia tu jornada dirigiendote hacia la oficina para completar las
              herramientas de trabajo.
            </Text>
          </View>
          <View style={styles.carddescription16}>
            <Text style={[styles.texto, styles.textoTypo]}>
              Adicionalmente no olvides que es indispensable que lleves:
            </Text>
          </View>
          <View style={styles.frameParent2}>
            <View style={styles.frameParent2}>
              <View style={styles.carddescription16Parent}>
                <View
                  style={[
                    styles.carddescription162,
                    styles.carddescriptionSpaceBlock,
                  ]}
                >
                  <Text style={styles.texto2}>Boligrafo</Text>
                </View>
                <View style={styles.carddescription162SpaceBlock}>
                  <View style={styles.content}>
                    <View style={styles.main}>
                      <View style={styles.formItemTitle}>
                        <Text style={[styles.label, styles.textoTypo]}>
                          ¿Cuál es tu nombre completo?
                        </Text>
                      </View>
                      <View style={[styles.child, styles.childSpaceBlock]}>
                        <Text style={[styles.title1, styles.textTypo1]}>
                          Minimo 1
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameParent2}>
              <View style={styles.carddescription16Parent}>
                <View
                  style={[
                    styles.carddescription163,
                    styles.carddescription163SpaceBlock,
                  ]}
                >
                  <Text style={styles.texto2}>Huellero</Text>
                </View>
                <View style={styles.carddescription163SpaceBlock}>
                  <View style={styles.content}>
                    <View style={styles.main}>
                      <View style={styles.formItemTitle}>
                        <Text style={[styles.label, styles.textoTypo]}>
                          ¿Cuál es tu nombre completo?
                        </Text>
                      </View>
                      <View style={[styles.child, styles.childSpaceBlock]}>
                        <Text style={[styles.title1, styles.textTypo1]}>
                          Minimo 1
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.carddescription16}>
            <Text
              style={[styles.texto, styles.textoTypo]}
            >{`El cargador del teléfono movil
El powerbank
Identificación
Buena presentación personal`}</Text>
          </View>
          <View />
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
          <View style={styles.botonCentradoPpal}>
            <View style={styles.cardFooterDoble}>
              <View style={[styles.button, styles.buttonBorder]}>
                <Text style={[styles.title2, styles.titleTypo]}>Entendido</Text>
              </View>
              <View style={[styles.button1, styles.buttonBorder]}>
                <Text style={[styles.title3, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-2682.png")}
        />
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaLayout: {
    height: 733,
    width: 414,
  },
  frameGroupFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTypo: {
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
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
  childSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
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
  textTypo1: {
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    width: 382,
    position: "absolute",
  },
  carddescriptionSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
  },
  carddescription163SpaceBlock: {
    paddingLeft: Padding.p_5xs,
    alignSelf: "stretch",
    paddingRight: Padding.p_base,
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
  },
  buttonBorder: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.primario,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  miJornadaChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  miJornadaItem: {
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
    fontWeight: "500",
    fontSize: FontSize.body3_size,
  },
  direccin: {
    top: 66,
    borderColor: Color.colorWhitesmoke_200,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderBottomWidth: 1,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
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
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    textAlign: "center",
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
    paddingBottom: Padding.p_xs,
    width: 381,
    paddingHorizontal: Padding.p_base,
    left: 16,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  subtractParent: {
    top: 464,
    height: 1224,
    left: 0,
    position: "absolute",
    width: 414,
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
    fontWeight: "500",
    fontFamily: FontFamily.h4,
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
    height: 45,
    borderColor: Color.primario,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.primario,
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
    overflow: "hidden",
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
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.body3_size,
    fontFamily: FontFamily.h4,
  },
  timer: {
    top: 53,
    left: 20,
    borderTopRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_sm,
    paddingRight: Padding.p_base,
    width: 382,
    backgroundColor: Color.cont,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  miJornadaInner: {
    right: 17,
    bottom: 96,
    height: 24,
    position: "absolute",
  },
  mask: {
    backgroundColor: Color.colorGray_400,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title1: {
    flex: 1,
    color: Color.texto,
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
  separadorForms3: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  texto: {
    alignSelf: "stretch",
    fontSize: FontSize.body3_size,
    fontWeight: "300",
  },
  carddescription16: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  texto2: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: FontSize.body3_size,
    color: Color.texto,
    fontFamily: FontFamily.h4,
    fontWeight: "300",
  },
  carddescription162: {
    paddingRight: Padding.p_5xs,
    paddingLeft: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontWeight: "500",
    fontSize: FontSize.bodyRegular_size,
  },
  formItemTitle: {
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  child: {
    backgroundColor: Color.blanco201,
    marginTop: 4,
    alignSelf: "stretch",
    height: 24,
    borderRadius: Border.br_xl,
  },
  main: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  content: {
    alignSelf: "stretch",
  },
  carddescription162SpaceBlock: {
    paddingRight: Padding.p_5xs,
    paddingLeft: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  carddescription16Parent: {
    width: 191,
    alignItems: "center",
  },
  frameParent2: {
    flexDirection: "row",
  },
  carddescription163: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
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
    marginTop: 8,
    display: "none",
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    display: "none",
  },
  title2: {
    color: Color.blanco20,
  },
  button: {
    height: 40,
    backgroundColor: Color.primario,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_xl,
  },
  title3: {
    color: Color.primario,
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
  card: {
    top: 54,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    alignItems: "center",
    borderRadius: Border.br_xl,
    left: 0,
    backgroundColor: Color.blanco20,
  },
  groupChild2: {
    height: "20.33%",
    width: "26.18%",
    right: "36.91%",
    bottom: "79.67%",
    left: "36.91%",
  },
  cardParent: {
    top: 74,
    height: 521,
    left: 16,
  },
  buttonpanicIcon: {
    top: 586,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  miJornada: {
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada5;
