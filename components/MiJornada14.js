import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MiJornada14 = () => {
  return (
    <View style={styles.miJornada}>
      <Image
        style={styles.miJornadaChild}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract7.png")}
      />
      <View style={[styles.topbar, styles.topbarPosition]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo2]}>Incidencias</Text>
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
            <Text style={styles.homeTypo}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameChildLayout}
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
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic5.png")}
      />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.groupViewPosition,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleTypo2]}>
            Cuéntanos al respecto ¿De qué tipo es tu incidencia?
          </Text>
        </View>
        <View />
        <View />
        <View />
        <View style={styles.selectorItemvariant3Parent}>
          <View
            style={[styles.selectorItemvariant3, styles.cardBodySpaceBlock]}
          >
            <Text style={[styles.mdica, styles.titleTypo2]}>Médica</Text>
            <Image
              style={styles.markIcon}
              resizeMode="cover"
              source={require("../assets/mark.png")}
            />
          </View>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector34.png")}
          />
        </View>
        <View />
        <View />
        <Text style={[styles.title2, styles.minLayout]}>Incidencia médica</Text>
        <View />
        <View style={styles.verticalFormItem}>
          <View style={[styles.verticalFormIteminput, styles.topbarPosition]}>
            <View style={styles.content}>
              <View style={styles.main}>
                <View style={styles.formItemTitle}>
                  <Text style={[styles.label, styles.labelTypo]}>
                    Por favor indícanos ¿Qué pasó?
                  </Text>
                </View>
                <View style={[styles.child, styles.childLayout]}>
                  <Text style={[styles.placeholder, styles.minTypo]}>
                    <Text style={styles.blankLine}> </Text>
                    <Text
                      style={styles.loremIpsumDolor}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ultricies sapien. Vestibulum interdum lectus.
`}</Text>
                    <Text style={styles.blankLine}> </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <Text style={[styles.title2, styles.minLayout]}>
          Registros de evidencia
        </Text>
        <View style={styles.formdescription14}>
          <View style={[styles.carddescription16, styles.cardBodySpaceBlock]}>
            <Text style={[styles.texto, styles.minTypo]}>
              Recuerda que puedes añadir fotos de documentos o de la situación
              en si misma.
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.button}>
          <Text style={[styles.title4, styles.titleTypo1]}>
            Evidencia 1.jpg
          </Text>
          <Image
            style={[styles.deleteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
        </View>
        <View />
        <View style={styles.button}>
          <Text style={[styles.title4, styles.titleTypo1]}>
            Evidencia 1.jpg
          </Text>
          <Image
            style={[styles.deleteIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
        </View>
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={styles.cardFooterDoble}>
            <View style={[styles.button2, styles.buttonBorder]}>
              <Text style={[styles.title6, styles.titleTypo]}>
                Añadir evidencia
              </Text>
            </View>
            <View style={[styles.button3, styles.buttonBorder]}>
              <Text style={[styles.title7, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={[styles.groupView, styles.groupViewPosition]}>
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
        <View style={[styles.cardtitle20Parent, styles.cardtitle20SpaceBlock]}>
          <View style={[styles.cardtitle20, styles.cardtitle20SpaceBlock]}>
            <Text style={[styles.title8, styles.titleTypo2]}>
              ¡Gracias por comunicarnos tu incidencia!
            </Text>
          </View>
          <View style={styles.separadorForms10}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={[styles.cardBody, styles.cardBodySpaceBlock]}>
            <Text style={[styles.min, styles.minTypo]}>
              En breve se comunicará contigo tu supervisor a cargo.
            </Text>
          </View>
          <View />
          <View style={styles.botonCentradoPpal1}>
            <View style={styles.cardFooterDoble}>
              <View style={[styles.button2, styles.buttonBorder]}>
                <Text style={[styles.title6, styles.titleTypo]}>
                  Retirar base en casa
                </Text>
              </View>
              <View style={[styles.button3, styles.buttonBorder]}>
                <Text style={[styles.title7, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.botonCentradoPpal2}>
            <View style={styles.cardFooterDoble}>
              <View style={[styles.button6, styles.buttonBorder]}>
                <Text style={[styles.title7, styles.titleTypo]}>
                  Establecer punto de encuentro
                </Text>
              </View>
              <View style={[styles.button3, styles.buttonBorder]}>
                <Text style={[styles.title7, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbarPosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
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
  groupViewPosition: {
    left: 16,
    width: 382,
    position: "absolute",
  },
  cardBodySpaceBlock: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  minLayout: {
    display: "flex",
    width: 350,
    alignItems: "center",
  },
  labelTypo: {
    fontSize: FontSize.bodyRegular_size,
    flex: 1,
  },
  childLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanco20,
  },
  minTypo: {
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  titleTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  buttonBorder: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.primario,
    borderStyle: "solid",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  flechita056Position: {
    width: 41,
    top: 0,
    position: "absolute",
  },
  cardtitle20SpaceBlock: {
    paddingVertical: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  miJornadaChild: {
    height: 710,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  subtractIcon: {
    height: 1484,
    width: 414,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    color: Color.blanco20,
    fontWeight: "500",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  rightIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  topbar: {
    borderBottomWidth: 1,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.primario,
    borderStyle: "solid",
    paddingVertical: 0,
    backgroundColor: Color.primario,
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
    alignItems: "center",
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
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
    overflow: "hidden",
    width: 414,
  },
  buttonpanicIcon: {
    bottom: 89,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    color: Color.blanco20,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  mdica: {
    fontSize: FontSize.body3_size,
    color: Color.blanco20,
    fontWeight: "500",
  },
  markIcon: {
    maxWidth: "100%",
    height: 0,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  selectorItemvariant3: {
    top: 14,
    borderRadius: Border.br_mid_5,
    backgroundColor: Color.primario20,
    paddingVertical: Padding.p_5xs,
    width: 106,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    left: 86,
    top: 0,
    position: "absolute",
  },
  selectorItemvariant3Parent: {
    height: 38,
    width: 106,
  },
  title2: {
    width: 350,
    textAlign: "left",
    fontFamily: FontFamily.h4,
    color: Color.texto,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
  },
  label: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
    color: Color.texto,
    fontWeight: "500",
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  blankLine: {
    color: Color.gris,
  },
  loremIpsumDolor: {
    color: Color.texto,
  },
  placeholder: {
    fontSize: FontSize.bodyRegular_size,
    flex: 1,
  },
  child: {
    paddingLeft: Padding.p_sm,
    marginTop: 4,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  main: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  content: {
    alignSelf: "stretch",
  },
  verticalFormIteminput: {
    width: 382,
  },
  verticalFormItem: {
    height: 137,
    width: 382,
  },
  texto: {
    fontSize: FontSize.bodyRegular_size,
    flex: 1,
    color: Color.texto,
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  formdescription14: {
    width: 382,
    alignItems: "center",
  },
  title4: {
    textDecoration: "underline",
    color: Color.primario20,
    fontSize: FontSize.body3_size,
    fontWeight: "500",
    flex: 1,
  },
  deleteIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  button: {
    borderColor: Color.primario20,
    height: 37,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_9xs,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
    width: 350,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  title6: {
    color: Color.blanco20,
  },
  button2: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primario,
  },
  title7: {
    color: Color.primario,
  },
  button3: {
    width: 93,
    display: "none",
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_981xl,
    marginLeft: 16,
  },
  cardFooterDoble: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 69,
    paddingBottom: Padding.p_base,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mask: {
    backgroundColor: Color.colorGray_300,
    height: 823,
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
    left: 113,
    width: 156,
    height: 194,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title8: {
    color: Color.texto,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    height: 51,
    paddingHorizontal: 0,
    width: 350,
    flexDirection: "row",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms10: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  min: {
    color: Color.text,
    width: 350,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.body3_size,
  },
  cardBody: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  botonCentradoPpal1: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  button6: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
  },
  botonCentradoPpal2: {
    width: 362,
    justifyContent: "center",
    flexDirection: "row",
  },
  cardtitle20Parent: {
    top: 194,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanco20,
    width: 382,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 70,
    height: 479,
    width: 382,
  },
  miJornada: {
    height: 789,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada14;
