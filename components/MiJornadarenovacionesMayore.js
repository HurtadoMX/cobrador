import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const MiJornadarenovacionesMayore = () => {
  return (
    <View
      style={[
        styles.miJornadarenovacionesMayore,
        styles.miJornadavendedorLayout,
      ]}
    >
      <View style={[styles.miJornadavendedor, styles.miJornadavendedorLayout]}>
        <Image
          style={[styles.miJornadavendedorChild, styles.navbarLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2333.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout2]}
            resizeMode="cover"
            source={require("../assets/ellipse-378.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <View style={styles.backgroundArco} />
        <View style={styles.button}>
          <Text style={[styles.title, styles.titleTypo3]}>Continuar</Text>
        </View>
        <View style={[styles.navbar, styles.navbarSpaceBlock]}>
          <Image
            style={styles.leftIcon}
            resizeMode="cover"
            source={require("../assets/left.png")}
          />
          <View style={styles.center}>
            <Text style={[styles.title1, styles.titleTypo3]}>Mi jornada</Text>
          </View>
          <Image
            style={[styles.bellIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
          <Image
            style={[styles.rightIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/message.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameLayout2}
              resizeMode="cover"
              source={require("../assets/group-21192.png")}
            />
            <View style={styles.sectiontitle16DescriptionParent}>
              <View
                style={[
                  styles.sectiontitle16Description,
                  styles.sectiontitle16Layout,
                ]}
              >
                <View style={[styles.title24, styles.title24FlexBox]}>
                  <Text style={[styles.title2, styles.titleTypo1]}>
                    Bienvenido a tu jornada
                  </Text>
                </View>
              </View>
              <View
                style={[styles.sectiontitle18, styles.sectiontitle16Layout]}
              >
                <View style={[styles.title24, styles.title24FlexBox]}>
                  <Text style={[styles.title3, styles.titleTypo1]}>
                    Antonio Machado
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sectiontitle16Description1}>
            <View style={[styles.title24, styles.title24FlexBox]}>
              <Text style={[styles.title4, styles.titleTypo1]}>
                <Text
                  style={styles.siTienesDudas}
                >{`Si tienes dudas de los implementos necesarios para tu jornada, ingresa `}</Text>
                <Text style={styles.aqui}>aqui</Text>
              </Text>
            </View>
          </View>
          <View />
          <View style={styles.sectiontitle16Layout}>
            <View style={[styles.title24, styles.title24FlexBox]}>
              <Text style={[styles.title5, styles.titleTypo1]}>
                Ingresa a la siguiente actividad disponible
              </Text>
            </View>
          </View>
          <View />
          <View style={styles.accionesParent}>
            <View style={styles.acciones}>
              <View
                style={[styles.cardrevisitas, styles.cardrevisitasSpaceBlock]}
              >
                <Text style={styles.visitasProgramadas}>
                  Visitas programadas
                </Text>
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
            <View
              style={[styles.accionesDehabilitadas, styles.cardrevisitasLayout]}
            >
              <Image
                style={[
                  styles.accionesDehabilitadasChild,
                  styles.groupChildPosition1,
                ]}
                resizeMode="cover"
                source={require("../assets/group-25551.png")}
              />
              <View style={[styles.groupContainer, styles.groupChildPosition1]}>
                <Image
                  style={[
                    styles.accionesDehabilitadasChild,
                    styles.groupChildPosition1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/group-25481.png")}
                />
                <View
                  style={[
                    styles.cardrevisitas1,
                    styles.cardrevisitasSpaceBlock,
                  ]}
                >
                  <Text style={[styles.volanteo, styles.volanteoTypo]}>
                    Volanteo
                  </Text>
                  <Image
                    style={styles.cardrevisitasChild}
                    resizeMode="cover"
                    source={require("../assets/group-19642.png")}
                  />
                </View>
              </View>
            </View>
            <View
              style={[styles.accionesDehabilitadas, styles.cardrevisitasLayout]}
            >
              <Image
                style={[
                  styles.accionesDehabilitadasChild,
                  styles.groupChildPosition1,
                ]}
                resizeMode="cover"
                source={require("../assets/group-25551.png")}
              />
              <View style={[styles.groupContainer, styles.groupChildPosition1]}>
                <Image
                  style={[
                    styles.accionesDehabilitadasChild,
                    styles.groupChildPosition1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/group-25482.png")}
                />
                <View
                  style={[
                    styles.cardrevisitas1,
                    styles.cardrevisitasSpaceBlock,
                  ]}
                >
                  <Text style={[styles.cierreDeJornada, styles.volanteoTypo]}>
                    Cierre de jornada
                  </Text>
                  <Image
                    style={styles.cardrevisitasItem}
                    resizeMode="cover"
                    source={require("../assets/group-16232.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View />
          <View />
          <View style={styles.title24FlexBox}>
            <Text style={[styles.title6, styles.titleTypo]}>
              Tu posición en el ranking estatal
            </Text>
          </View>
          <View />
          <View style={styles.sliderTopParent}>
            <View style={styles.sliderTop}>
              <View style={styles.alcanzaALisandroGarca50Parent}>
                <Text
                  style={[styles.alcanzaALisandro, styles.simnReyes3432Typo]}
                >{`Alcanza a
Lisandro García:
5.047 pts`}</Text>
                <Text
                  style={[styles.tuRankingActual, styles.simnReyes3432Typo]}
                >{`Tu ranking
actual
4.203 pts`}</Text>
                <View style={[styles.contador, styles.contadorSpaceBlock]}>
                  <Text style={[styles.top1, styles.titleTypo1]}>TOP 1</Text>
                </View>
                <View style={[styles.contador1, styles.contador1Bg]}>
                  <Text style={[styles.top1, styles.titleTypo1]}>TOP 3</Text>
                </View>
                <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                  <View
                    style={[styles.rectangleParent, styles.groupWrapperLayout]}
                  >
                    <View style={[styles.rectangleView, styles.contador2Bg]} />
                    <View style={[styles.groupChild2, styles.contador1Bg]} />
                  </View>
                </View>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-2112.png")}
                />
                <View style={[styles.contador2, styles.contador2Bg]}>
                  <Text style={[styles.top1, styles.titleTypo1]}>TOP 2</Text>
                </View>
                <Image
                  style={[styles.groupChild4, styles.groupChildPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-21141.png")}
                />
                <Image
                  style={[styles.groupChild5, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-2123.png")}
                />
                <Image
                  style={[styles.groupChild6, styles.groupChildPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-21152.png")}
                />
                <Text
                  style={[styles.simnReyes3432, styles.simnReyes3432Typo]}
                >{`Simón Reyes
3.432 pts`}</Text>
                <Image
                  style={[styles.ellipseIcon, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-340.png")}
                />
                <Image
                  style={styles.maskGroupIcon}
                  resizeMode="cover"
                  source={require("../assets/mask-group.png")}
                />
              </View>
            </View>
            <View />
            <View style={[styles.frameView, styles.title24FlexBox]}>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/group-1624.png")}
              />
              <Text style={styles.estasA844Container}>
                <Text style={styles.estasA844Container1}>
                  <Text style={styles.estasA}>{`Estas a: `}</Text>
                  <Text style={styles.puntos}>{`844 puntos `}</Text>
                  <Text
                    style={styles.estasA}
                  >{`para subir de escalafón. `}</Text>
                  <Text style={styles.puntos}>Ánimo, ¡Puedes lograrlo!</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.separadorForms6}>
              <Image
                style={styles.separadorFormsChild}
                resizeMode="cover"
                source={require("../assets/vector-1101.png")}
              />
            </View>
            <View
              style={[styles.separadorForms7, styles.frameParentSpaceBlock]}
            >
              <Image
                style={styles.separadorLayout}
                resizeMode="cover"
                source={require("../assets/ellipse-3301.png")}
              />
              <Image
                style={[styles.separadorFormsInner, styles.separadorLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-3311.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.buttonpanicIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/buttonpanic1.png")}
        />
        <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
          <Image
            style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
            resizeMode="cover"
            source={require("../assets/vector-472.png")}
          />
          <View style={[styles.frameGroup, styles.navbarinferiorLayout]}>
            <View style={[styles.frameContainer, styles.contadorSpaceBlock]}>
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
            <View style={[styles.frameContainer, styles.contadorSpaceBlock]}>
              <Image
                style={styles.frameLayout}
                resizeMode="cover"
                source={require("../assets/vector32.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Ranking</Text>
            </View>
            <View style={[styles.frameContainer, styles.contadorSpaceBlock]}>
              <View style={[styles.frameWrapper, styles.frameLayout2]}>
                <Image
                  style={[styles.frameInner, styles.frameLayout]}
                  resizeMode="cover"
                  source={require("../assets/frame-923.png")}
                />
              </View>
              <Text style={styles.homeTypo}>Jornada</Text>
            </View>
            <View style={[styles.frameContainer, styles.contadorSpaceBlock]}>
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../assets/frame-9231.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Ganancias</Text>
            </View>
            <View style={[styles.frameContainer, styles.contadorSpaceBlock]}>
              <View style={[styles.groupFrame, styles.frameLayout]}>
                <View style={styles.rectangleGroup}>
                  <View style={[styles.groupChild7, styles.groupChildLayout]} />
                  <View style={[styles.groupChild8, styles.groupChildLayout]} />
                  <View style={[styles.groupChild9, styles.groupChildLayout]} />
                </View>
              </View>
              <Text style={[styles.home, styles.homeTypo]}>Mi perfil</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={styles.tittleFormParent}>
        <View style={[styles.tittleForm, styles.navbarSpaceBlock]}>
          <Text style={[styles.title7, styles.titleTypo]}>
            Validar encuentro
          </Text>
        </View>
        <View style={styles.separadorForms6}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.accionesParent}>
          <View style={[styles.title24, styles.title24FlexBox]}>
            <Text style={styles.title8}>
              Por favor ingresa la huella del supervisor en el sensor.
            </Text>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.groupParent1}>
          <View style={[styles.groupContainer, styles.groupChildPosition1]}>
            <Image
              style={[
                styles.accionesDehabilitadasChild,
                styles.groupChildPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>{` `}</Text>
            <Text style={[styles.text1, styles.textTypo1]}>{` `}</Text>
          </View>
          <View style={styles.groupWrapper1}>
            <View style={[styles.groupContainer, styles.groupChildPosition1]}>
              <Text style={[styles.text2, styles.textTypo]}>{` `}</Text>
              <Text style={[styles.text3, styles.textTypo]}>{` `}</Text>
              <Image
                style={[styles.groupChild10, styles.groupChildPosition1]}
                resizeMode="cover"
                source={require("../assets/group-1304.png")}
              />
            </View>
          </View>
        </View>
        <View />
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miJornadavendedorLayout: {
    height: 864,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
  navbarLayout: {
    width: 414,
    left: 0,
  },
  groupChildLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  titleTypo3: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  navbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  sectiontitle16Layout: {
    height: 33,
    flexDirection: "row",
  },
  title24FlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  titleTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  cardrevisitasSpaceBlock: {
    paddingBottom: Padding.p_lg,
    paddingTop: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 55,
    width: 55,
  },
  cardrevisitasLayout: {
    height: 126,
    width: 117,
  },
  groupChildPosition1: {
    right: "0%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  volanteoTypo: {
    color: Color.gris201,
    width: 103,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    fontWeight: "700",
    color: Color.texto,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  simnReyes3432Typo: {
    color: Color.colorBlack,
    fontSize: 8,
    top: 59,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    position: "absolute",
  },
  contadorSpaceBlock: {
    padding: Padding.p_5xs,
    alignItems: "center",
  },
  contador1Bg: {
    backgroundColor: Color.gris20,
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 301,
    height: 6,
    position: "absolute",
  },
  contador2Bg: {
    backgroundColor: Color.primario20,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 33,
    height: 33,
    position: "absolute",
  },
  groupChildPosition: {
    right: "50.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  separadorLayout: {
    height: 10,
    width: 10,
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  frameLayout: {
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
  frameLayout2: {
    height: 44,
    width: 44,
  },
  groupChildLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
  },
  textTypo1: {
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    color: Color.primario201,
    fontSize: 11,
    height: "9.73%",
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  textTypo: {
    height: "14.08%",
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  miJornadavendedorChild: {
    height: 349,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "25.77%",
    right: "-8.6%",
    bottom: "74.23%",
    left: "8.6%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  groupItem: {
    height: "94.33%",
    width: "82.8%",
    top: "5.67%",
    right: "8.6%",
    backgroundColor: Color.blanco201,
    bottom: "0%",
    left: "8.6%",
    position: "absolute",
  },
  ellipseParent: {
    height: "67.36%",
    width: "120.77%",
    top: "34.95%",
    right: "-10.39%",
    bottom: "-2.31%",
    left: "-10.39%",
    position: "absolute",
  },
  backgroundArco: {
    top: 304,
    left: -43,
    width: 500,
    height: 582,
    position: "absolute",
  },
  title: {
    color: Color.primario,
    fontSize: FontSize.h5_size,
  },
  button: {
    top: 628,
    left: 151,
    borderRadius: Border.br_981xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title1: {
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
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
    overflow: "hidden",
  },
  rightIcon: {
    height: 24,
  },
  navbar: {
    borderStyle: "solid",
    borderColor: Color.primario,
    borderBottomWidth: 1,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  title2: {
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    color: Color.blanco20,
  },
  title24: {
    width: 382,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  sectiontitle16Description: {
    width: 250,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title3: {
    color: Color.blanco20,
    flex: 1,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  sectiontitle18: {
    top: 33,
    width: 250,
    left: 0,
    position: "absolute",
  },
  sectiontitle16DescriptionParent: {
    height: 66,
    width: 250,
    marginLeft: 16,
  },
  groupParent: {
    padding: Padding.p_base,
    width: 382,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  siTienesDudas: {
    color: Color.blanco20,
  },
  aqui: {
    textDecoration: "underline",
    color: Color.secundario,
  },
  title4: {
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    fontWeight: "500",
  },
  sectiontitle16Description1: {
    flexDirection: "row",
    height: 40,
  },
  title5: {
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    color: Color.blanco20,
    fontWeight: "500",
  },
  visitasProgramadas: {
    height: 19,
    width: 103,
    display: "flex",
    color: Color.texto,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  groupIcon: {
    marginTop: 16,
  },
  cardrevisitas: {
    height: 126,
    width: 117,
    backgroundColor: Color.blanco20,
  },
  acciones: {
    alignItems: "center",
  },
  accionesDehabilitadasChild: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  volanteo: {
    height: 19,
  },
  cardrevisitasChild: {
    width: 56,
    height: 56,
    marginTop: 16,
  },
  cardrevisitas1: {
    height: "94.37%",
    width: "94.36%",
    top: "2.22%",
    right: "3.25%",
    bottom: "3.41%",
    left: "2.39%",
    position: "absolute",
  },
  groupContainer: {
    left: "0%",
    width: "100%",
  },
  accionesDehabilitadas: {
    marginLeft: 12,
  },
  cierreDeJornada: {
    height: 27,
  },
  cardrevisitasItem: {
    width: 49,
    height: 54,
    marginTop: 16,
  },
  accionesParent: {
    flexDirection: "row",
  },
  title6: {
    fontSize: FontSize.h2_size,
  },
  alcanzaALisandro: {
    left: 279,
  },
  tuRankingActual: {
    left: 125,
  },
  top1: {
    fontSize: 10,
    color: Color.blanco20,
    fontWeight: "500",
  },
  contador: {
    left: 291,
    backgroundColor: Color.primario,
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 31,
    padding: Padding.p_5xs,
    flexDirection: "row",
    position: "absolute",
  },
  contador1: {
    left: 5,
    padding: Padding.p_5xs,
    alignItems: "center",
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 31,
    flexDirection: "row",
  },
  rectangleView: {
    width: 125,
    height: 6,
    left: 0,
    top: 0,
  },
  groupChild2: {
    top: 5,
    left: 137,
    width: 164,
    height: 4,
  },
  rectangleParent: {
    height: 6,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 14,
    height: 6,
    left: 16,
  },
  groupChild3: {
    left: 11,
    top: 1,
    width: 33,
  },
  contador2: {
    left: 124,
    padding: Padding.p_5xs,
    alignItems: "center",
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 31,
    flexDirection: "row",
  },
  groupChild4: {
    height: "10.9%",
    width: "2.78%",
    top: "33.93%",
    bottom: "55.17%",
    left: "46.49%",
  },
  groupChild5: {
    left: 130,
    top: 0,
  },
  groupChild6: {
    height: "19.21%",
    width: "13.62%",
    top: "12.36%",
    bottom: "68.43%",
    left: "35.65%",
  },
  simnReyes3432: {
    left: 0,
  },
  ellipseIcon: {
    left: 297,
    top: 1,
    width: 33,
  },
  maskGroupIcon: {
    top: 2,
    left: 298,
    width: 31,
    height: 31,
    position: "absolute",
  },
  alcanzaALisandroGarca50Parent: {
    width: 345,
    height: 89,
  },
  sliderTop: {
    width: 350,
    height: 105,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameItem: {
    width: 80,
    height: 69,
  },
  estasA: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  puntos: {
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  estasA844Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  estasA844Container: {
    width: 240,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    textAlign: "left",
    marginLeft: 16,
    alignItems: "center",
  },
  frameView: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.blanco20,
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms6: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  separadorFormsInner: {
    marginLeft: 16,
  },
  separadorForms7: {
    paddingHorizontal: Padding.p_7xs,
    flexDirection: "row",
  },
  sliderTopParent: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    borderRadius: Border.br_xl,
    width: 382,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  frameParent: {
    top: 45,
    paddingHorizontal: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  buttonpanicIcon: {
    bottom: 91,
    left: 343,
    position: "absolute",
  },
  navbarinferiorChild: {
    right: -13,
    width: 427,
    bottom: 0,
  },
  frameInner: {
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
  },
  home: {
    marginTop: 8,
  },
  frameContainer: {
    width: 76,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild7: {
    bottom: 12,
  },
  groupChild8: {
    bottom: 6,
  },
  groupChild9: {
    bottom: 0,
  },
  rectangleGroup: {
    height: 14,
    width: 17,
  },
  groupFrame: {
    backgroundColor: Color.texto20,
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
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
  miJornadavendedor: {
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  mask: {
    top: -1,
    left: -3,
    backgroundColor: Color.colorGray_400,
    width: 419,
    height: 865,
    position: "absolute",
    overflow: "hidden",
  },
  title7: {
    fontSize: FontSize.h4_size,
  },
  tittleForm: {
    width: 382,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title8: {
    color: Color.texto,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    flex: 1,
    fontFamily: FontFamily.h4,
  },
  text: {
    top: "12.27%",
    left: "14.27%",
  },
  text1: {
    left: "61.27%",
    top: "0%",
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    color: Color.primario201,
    fontSize: 11,
    height: "9.73%",
  },
  text2: {
    top: "29.61%",
    left: "0%",
  },
  text3: {
    top: "11.84%",
    left: "76.03%",
  },
  groupChild10: {
    width: "78.97%",
    left: "21.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupWrapper1: {
    height: "69.09%",
    width: "61.82%",
    top: "12.73%",
    right: "26.64%",
    bottom: "18.18%",
    left: "11.55%",
    position: "absolute",
  },
  groupParent1: {
    width: 110,
    height: 110,
  },
  tittleFormParent: {
    top: 168,
    left: 16,
    borderRadius: Border.br_xl,
    width: 382,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  miJornadarenovacionesMayore: {
    overflow: "hidden",
  },
});

export default MiJornadarenovacionesMayore;
