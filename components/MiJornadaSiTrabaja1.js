import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const MiJornadaSiTrabaja1 = () => {
  return (
    <View style={styles.miJornadaSiTrabaja}>
      <Image
        style={styles.miJornadaSiTrabajaChild}
        resizeMode="cover"
        source={require("../assets/rectangle-2333.png")}
      />
      <View style={styles.button}>
        <Text style={[styles.title, styles.titleTypo2]}>Continuar</Text>
      </View>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract1.png")}
      />
      <View style={[styles.navbar, styles.verticalSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title1, styles.titleTypo2]}>Mi jornada</Text>
        </View>
        <Image
          style={styles.bellIcon}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={styles.rightIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={styles.frameParent}>
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
              <View style={[styles.title24, styles.verticalSpaceBlock]}>
                <Text style={[styles.title2, styles.titleTypo1]}>
                  Bienvenido a tu jornada
                </Text>
              </View>
            </View>
            <View style={[styles.sectiontitle18, styles.sectiontitle16Layout]}>
              <View style={[styles.title24, styles.verticalSpaceBlock]}>
                <Text style={[styles.title3, styles.titleTypo1]}>
                  Antonio Machado
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectiontitle16Description1}>
          <View style={[styles.title24, styles.verticalSpaceBlock]}>
            <Text style={[styles.title4, styles.titleTypo1]}>
              <Text
                style={styles.siTienesDudas}
              >{`Si tienes dudas de los implementos necesariós para tu jornada, ingresa `}</Text>
              <Text style={styles.aqui}>aqui</Text>
            </Text>
          </View>
        </View>
        <View style={styles.sectiontitle16Layout}>
          <View style={[styles.title24, styles.verticalSpaceBlock]}>
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
              <Text
                style={[styles.renovacionesMayores, styles.rutaPrincipalTypo]}
              >
                Renovaciones mayores
              </Text>
              <Image
                style={styles.cardrevisitasChild}
                resizeMode="cover"
                source={require("../assets/group-25422.png")}
              />
            </View>
          </View>
          <View
            style={[styles.accionesDehabilitadas, styles.cardrevisitasLayout]}
          >
            <Image
              style={[
                styles.accionesDehabilitadasChild,
                styles.groupChildLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/group-25551.png")}
            />
            <View
              style={[styles.groupContainer, styles.groupContainerPosition]}
            >
              <Image
                style={[
                  styles.accionesDehabilitadasChild,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/group-25482.png")}
              />
              <View
                style={[styles.cardrevisitas1, styles.cardrevisitasSpaceBlock]}
              >
                <Text style={[styles.rutaPrincipal, styles.rutaPrincipalTypo]}>
                  Ruta principal
                </Text>
                <Image
                  style={styles.cardrevisitasItem}
                  resizeMode="cover"
                  source={require("../assets/group-25442.png")}
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
                styles.groupChildLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/group-25551.png")}
            />
            <View
              style={[styles.groupContainer, styles.groupContainerPosition]}
            >
              <Image
                style={[
                  styles.accionesDehabilitadasChild,
                  styles.groupChildLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/group-25481.png")}
              />
              <View
                style={[styles.cardrevisitas1, styles.cardrevisitasSpaceBlock]}
              >
                <Text style={[styles.rutaPrincipal, styles.rutaPrincipalTypo]}>
                  Ruta revisitas
                </Text>
                <Image
                  style={styles.cardrevisitasChild}
                  resizeMode="cover"
                  source={require("../assets/group-25462.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title6, styles.titleTypo]}>
            Tu posición en el ranking estatal
          </Text>
        </View>
        <View />
        <View style={styles.frameView}>
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
            <View style={styles.contador1}>
              <Text style={[styles.top1, styles.titleTypo1]}>TOP 3</Text>
            </View>
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-340.png")}
            />
            <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
              <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
                <View
                  style={[styles.rectangleView, styles.contador2Position]}
                />
                <View style={styles.groupChild1} />
              </View>
            </View>
            <Image
              style={[styles.groupIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-2112.png")}
            />
            <View style={styles.contadorParent}>
              <View style={[styles.contador2, styles.contador2Position]}>
                <Text style={[styles.top1, styles.titleTypo1]}>TOP 2</Text>
              </View>
              <Image
                style={[styles.groupChild2, styles.groupChildLayout1]}
                resizeMode="cover"
                source={require("../assets/group-21141.png")}
              />
            </View>
            <Image
              style={[styles.groupChild3, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-2123.png")}
            />
            <Image
              style={styles.maskGroupIcon}
              resizeMode="cover"
              source={require("../assets/mask-group.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-21152.png")}
            />
            <Text
              style={[styles.simnReyes3432, styles.simnReyes3432Typo]}
            >{`Simón Reyes
3.432 pts`}</Text>
          </View>
          <View />
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-1624.png")}
            />
            <Text style={[styles.estasA844Container, styles.labelTypo]}>
              <Text style={styles.estasA844Container1}>
                <Text style={styles.estasA}>{`Estas a: `}</Text>
                <Text style={styles.puntos}>{`844 puntos `}</Text>
                <Text style={styles.estasA}>{`para subir de escalafón. `}</Text>
                <Text style={styles.puntos}>Ánimo, ¡Puedes lograrlo!</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.separadorForms5}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-1101.png")}
            />
          </View>
          <View style={styles.separadorForms6}>
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
        style={styles.buttonpanicIcon}
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
                <View style={[styles.groupChild5, styles.groupChildLayout]} />
                <View style={[styles.groupChild6, styles.groupChildLayout]} />
                <View style={[styles.groupChild7, styles.groupChildLayout]} />
              </View>
            </View>
            <Text style={[styles.home, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={styles.portraitOfAttractiveYoungFParent}>
        <Image
          style={styles.portraitOfAttractiveYoungFIcon}
          resizeMode="cover"
          source={require("../assets/portraitofattractiveyoungfemaleentrepreneurshowingsmartphonewhilestandingagainstisolatedbackground-1.png")}
        />
        <View style={[styles.flechita056Parent, styles.flechita056Position]}>
          <Image
            style={[styles.flechita056Icon, styles.flechita056Position]}
            resizeMode="cover"
            source={require("../assets/flechita05-6.png")}
          />
          <Image
            style={styles.flechita057Icon}
            resizeMode="cover"
            source={require("../assets/flechita05-7.png")}
          />
        </View>
      </View>
      <View style={styles.cardtitle20Parent}>
        <View style={styles.cardtitle20}>
          <Text style={[styles.title7, styles.titleTypo]}>
            Herramientas de tu jornada
          </Text>
        </View>
        <View style={styles.separadorForms5}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.carddescription16Parent}>
          <View
            style={[styles.carddescription16, styles.carddescriptionSpaceBlock]}
          >
            <Text style={[styles.texto, styles.titleTypo2]}>Base</Text>
          </View>
          <View style={styles.verticalFormItem}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={styles.main}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      ¿Cuál es tu nombre completo?
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childLayout]}>
                    <Text style={[styles.placeholder, styles.titleTypo]}>
                      $60.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.verticalFormItem1}>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content1}>
                <View style={styles.main}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      ¿Cuál es tu nombre completo?
                    </Text>
                  </View>
                  <View style={[styles.child1, styles.childLayout]}>
                    <Text style={[styles.title7, styles.titleTypo]}>7</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.carddescription161, styles.carddescriptionSpaceBlock]}
        >
          <Text style={[styles.texto1, styles.titleTypo1]}>
            {`Adicionalmente no olvides que es indispensable que lleves:
El cargador del teléfono movil
Licencia de conducción
Tarjeta de circulación del vehiculo
Buena presentación personal
Publicidad o tarjetas de presentación`}
          </Text>
        </View>
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={styles.cardFooterDoble}>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title8, styles.titleTypo2]}>Entendido</Text>
            </View>
            <View style={[styles.button2, styles.buttonBorder]}>
              <Text style={[styles.title, styles.titleTypo2]}>No</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  verticalSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  sectiontitle16Layout: {
    height: 33,
    flexDirection: "row",
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
  rutaPrincipalTypo: {
    height: 19,
    width: 103,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  cardrevisitasLayout: {
    height: 126,
    width: 117,
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupContainerPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  titleTypo: {
    fontWeight: "700",
    color: Color.texto,
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
  groupLayout: {
    width: 33,
    height: 33,
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 301,
    height: 4,
    position: "absolute",
  },
  contador2Position: {
    backgroundColor: Color.primario20,
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    textAlign: "left",
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
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    height: 2,
    position: "absolute",
  },
  flechita056Position: {
    width: 41,
    top: 0,
    position: "absolute",
  },
  carddescriptionSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  childLayout: {
    marginTop: 4,
    backgroundColor: Color.blanco201,
    borderRadius: Border.br_xl,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: Color.primario,
    borderStyle: "solid",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  miJornadaSiTrabajaChild: {
    height: 349,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  title: {
    color: Color.primario,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  button: {
    top: 628,
    left: 151,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    borderRadius: Border.br_981xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  subtractIcon: {
    height: 1151,
    width: 414,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title1: {
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
    flex: 1,
    fontWeight: "500",
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  rightIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  navbar: {
    borderBottomWidth: 1,
    height: 45,
    borderColor: Color.primario,
    borderStyle: "solid",
    paddingVertical: 0,
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
    color: Color.blanco20,
    flex: 1,
  },
  title24: {
    alignSelf: "stretch",
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    color: Color.secundario20,
  },
  title4: {
    fontSize: FontSize.body3_size,
    flex: 1,
    fontWeight: "500",
  },
  sectiontitle16Description1: {
    flexDirection: "row",
    height: 40,
  },
  title5: {
    fontSize: FontSize.body3_size,
    color: Color.blanco20,
    flex: 1,
    fontWeight: "500",
  },
  renovacionesMayores: {
    color: Color.texto,
  },
  cardrevisitasChild: {
    width: 56,
    height: 56,
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
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  rutaPrincipal: {
    color: Color.gris201,
  },
  cardrevisitasItem: {
    width: 52,
    height: 52,
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
    position: "absolute",
  },
  accionesDehabilitadas: {
    marginLeft: 12,
  },
  accionesParent: {
    flexDirection: "row",
  },
  title6: {
    fontSize: FontSize.h2_size,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.primario,
    top: 31,
    position: "absolute",
  },
  contador1: {
    left: 5,
    backgroundColor: Color.gris20,
    padding: Padding.p_5xs,
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 31,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupInner: {
    left: 297,
    top: 1,
  },
  rectangleView: {
    width: 125,
    height: 4,
    top: 0,
  },
  groupChild1: {
    top: 3,
    left: 137,
    width: 164,
    height: 2,
    backgroundColor: Color.gris20,
    position: "absolute",
  },
  rectangleParent: {
    height: 4,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 15,
    height: 4,
    left: 16,
  },
  groupIcon: {
    left: 11,
    top: 1,
  },
  contador2: {
    top: 1,
    padding: Padding.p_5xs,
    alignItems: "center",
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
  },
  groupChild2: {
    height: "46.63%",
    width: "20.87%",
    bottom: "53.37%",
    left: "79.13%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  contadorParent: {
    top: 30,
    left: 124,
    width: 46,
    height: 21,
    position: "absolute",
  },
  groupChild3: {
    left: 130,
    top: 0,
  },
  maskGroupIcon: {
    top: 2,
    left: 298,
    width: 31,
    height: 31,
    position: "absolute",
  },
  groupChild4: {
    height: "19.21%",
    width: "13.62%",
    top: "12.36%",
    right: "50.72%",
    bottom: "68.43%",
    left: "35.65%",
  },
  simnReyes3432: {
    left: 0,
  },
  alcanzaALisandroGarca50Parent: {
    width: 345,
    height: 89,
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
    color: Color.texto,
    marginLeft: 16,
    alignItems: "center",
  },
  groupParent1: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  separadorFormsChild: {
    height: 1,
    width: 351,
  },
  separadorForms5: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  separadorFormsInner: {
    marginLeft: 16,
  },
  separadorForms6: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameView: {
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
    top: 69,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  buttonpanicIcon: {
    bottom: 91,
    left: 343,
    width: 55,
    height: 55,
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
  groupChild5: {
    bottom: 12,
  },
  groupChild6: {
    bottom: 6,
  },
  groupChild7: {
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
  mask: {
    backgroundColor: Color.colorGray_400,
    height: 747,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  portraitOfAttractiveYoungFIcon: {
    width: 295,
    height: 197,
    left: 0,
    top: 0,
    position: "absolute",
  },
  flechita056Icon: {
    height: 42,
    left: 0,
  },
  flechita057Icon: {
    top: 37,
    left: 7,
    height: 25,
    width: 24,
    position: "absolute",
  },
  flechita056Parent: {
    left: 4,
    height: 62,
  },
  portraitOfAttractiveYoungFParent: {
    top: 60,
    left: 129,
    width: 156,
    height: 194,
    position: "absolute",
    overflow: "hidden",
  },
  title7: {
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    alignSelf: "stretch",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  texto: {
    width: 350,
    display: "flex",
    color: Color.texto,
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    justifyContent: "center",
    alignItems: "center",
  },
  carddescription16: {
    left: 15,
    width: 351,
    top: 0,
    position: "absolute",
  },
  label: {
    color: Color.texto,
    flex: 1,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  formItemTitle: {
    display: "none",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    width: 175,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.h4_size,
    justifyContent: "center",
  },
  child: {
    width: 210,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  main: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  content: {
    width: 210,
  },
  verticalFormIteminput: {
    width: 382,
    alignItems: "center",
  },
  verticalFormItem: {
    top: 35,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  child1: {
    alignSelf: "stretch",
  },
  content1: {
    alignSelf: "stretch",
  },
  verticalFormIteminput1: {
    width: 382,
  },
  verticalFormItem1: {
    top: 108,
    left: -1,
    position: "absolute",
  },
  carddescription16Parent: {
    height: 75,
    width: 382,
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  texto1: {
    color: Color.texto,
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    alignSelf: "stretch",
  },
  carddescription161: {
    height: 145,
    width: 382,
  },
  title8: {
    color: Color.blanco20,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  button1: {
    backgroundColor: Color.primario,
    borderRadius: Border.br_xl,
    height: 40,
  },
  button2: {
    width: 93,
    display: "none",
    marginLeft: 16,
    borderRadius: Border.br_981xl,
    borderWidth: 1,
  },
  cardFooterDoble: {
    paddingHorizontal: 0,
    flex: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  cardtitle20Parent: {
    top: 213,
    height: 350,
    left: 16,
    borderRadius: Border.br_xl,
    width: 382,
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  miJornadaSiTrabaja: {
    height: 739,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornadaSiTrabaja1;
