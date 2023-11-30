import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MiJornada10 = () => {
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
      <View style={[styles.topbar, styles.verticalSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo2]}>Incidencias</Text>
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
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.parentPosition,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleTypo1]}>
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
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector34.png")}
          />
        </View>
        <View />
        <View />
        <Text style={[styles.title2, styles.minLayout]}>Incidencia médica</Text>
        <View />
        <View style={styles.verticalFormItem}>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={styles.main}>
                <View style={styles.formItemTitle}>
                  <Text style={[styles.label, styles.titleTypo2]}>
                    Por favor indícanos ¿Qué pasó?
                  </Text>
                </View>
                <View style={styles.child}>
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
          <Text style={[styles.title4, styles.titleTypo2]}>
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
          <Text style={[styles.title4, styles.titleTypo2]}>
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
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic6.png")}
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
      <View style={styles.mask} />
      <View style={[styles.cardParent, styles.parentPosition]}>
        <View style={styles.card}>
          <View />
          <View />
          <View />
          <View style={[styles.cardtitle20, styles.minLayout]}>
            <Text style={[styles.title8, styles.titleTypo1]}>
              ¡Tu supervisor va en camino!
            </Text>
          </View>
          <View style={styles.separadorForms13}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={[styles.cardBody, styles.cardBodySpaceBlock]}>
            <Text style={[styles.min, styles.minTypo]}>
              Por favor mantente atento a la llegada del supervisor y recuerda
              que debes realizar la siguiente entrega
            </Text>
          </View>
          <View style={styles.info2Columnas}>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={styles.main}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>Base</Text>
                  </View>
                  <View style={styles.child1}>
                    <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                      $15.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.verticalFormIteminput2, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={styles.main}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Cantidad de pagarés
                    </Text>
                  </View>
                  <View style={styles.child1}>
                    <Text style={[styles.placeholder2, styles.placeholderTypo]}>
                      3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.cardBody, styles.cardBodySpaceBlock]}>
            <Text
              style={[styles.min, styles.minTypo]}
            >{`Una vez le hayas entregado a tu supervisor, solicítale la huella. `}</Text>
          </View>
          <View />
          <View style={styles.groupParent}>
            <View style={[styles.vectorGroup, styles.groupIconPosition]}>
              <Image
                style={[styles.vectorIcon2, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={[styles.text, styles.textTypo2]}>{` `}</Text>
              <Text style={[styles.text1, styles.textTypo2]}>{` `}</Text>
            </View>
            <View style={styles.groupContainer}>
              <View style={[styles.vectorGroup, styles.groupIconPosition]}>
                <Text style={[styles.text2, styles.textTypo1]}>{` `}</Text>
                <Text style={[styles.text3, styles.textTypo1]}>{` `}</Text>
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-13041.png")}
                />
              </View>
            </View>
          </View>
          <View />
          <View style={styles.body}>
            <View style={styles.texttext}>
              <Text style={[styles.text4, styles.textTypo]}>
                Europe Street beat
              </Text>
            </View>
            <View style={styles.texttext1}>
              <Text style={[styles.text5, styles.textTypo]}>
                www.instagram.com
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupChild1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-26532.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  titleTypo2: {
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  iconLayout1: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  parentPosition: {
    left: 16,
    top: 69,
    width: 382,
    position: "absolute",
  },
  titleTypo1: {
    fontWeight: "700",
    fontFamily: FontFamily.h4,
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
    width: 350,
    alignItems: "center",
  },
  minTypo: {
    fontWeight: "300",
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
  labelTypo: {
    color: Color.texto201,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    flex: 1,
  },
  placeholderTypo: {
    color: Color.colorBlack,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  groupIconPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  groupIconLayout: {
    maxHeight: "100%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    color: Color.primario201,
    fontSize: 11,
    height: "9.73%",
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  textTypo1: {
    height: "14.08%",
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    color: Color.colorBlack,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
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
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
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
  },
  rightIcon: {
    height: 24,
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
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  title1: {
    fontSize: FontSize.h2_size,
    textAlign: "center",
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
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
  },
  markIcon: {
    height: 0,
    width: "100%",
    maxWidth: "100%",
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
  vectorIcon: {
    left: 86,
    top: 0,
    position: "absolute",
  },
  selectorItemvariant3Parent: {
    height: 38,
    width: 106,
  },
  title2: {
    display: "flex",
    width: 350,
    textAlign: "left",
    color: Color.texto,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
  },
  label: {
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
    flex: 1,
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
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.blanco20,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  verticalFormItem: {
    height: 137,
    width: 382,
  },
  texto: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    flex: 1,
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
    textAlign: "left",
    fontSize: FontSize.body3_size,
    fontFamily: FontFamily.h4,
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
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.primario,
  },
  title7: {
    color: Color.primario,
  },
  button3: {
    width: 93,
    display: "none",
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
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
    paddingBottom: Padding.p_base,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonpanicIcon: {
    bottom: 89,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
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
  mask: {
    top: -15,
    backgroundColor: Color.colorGray_400,
    height: 756,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  title8: {
    color: Color.texto,
    textAlign: "center",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    height: 24,
    flexDirection: "row",
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms13: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  min: {
    color: Color.text,
    width: 350,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.body3_size,
  },
  cardBody: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  label1: {
    textAlign: "center",
  },
  placeholder1: {
    fontFamily: FontFamily.h4,
  },
  child1: {
    marginTop: 8,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  verticalFormIteminput1: {
    flex: 1,
  },
  label2: {
    textAlign: "left",
  },
  placeholder2: {
    fontFamily: FontFamily.robotoBold,
  },
  verticalFormIteminput2: {
    display: "none",
    flex: 1,
  },
  info2Columnas: {
    width: 382,
    flexDirection: "row",
  },
  vectorIcon2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  text: {
    top: "12.27%",
    left: "14.27%",
  },
  text1: {
    left: "61.27%",
    top: "0%",
  },
  vectorGroup: {
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  text2: {
    top: "29.61%",
    left: "0%",
  },
  text3: {
    top: "11.84%",
    left: "76.03%",
  },
  groupIcon: {
    width: "78.97%",
    left: "21.03%",
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  groupContainer: {
    height: "69.09%",
    width: "61.82%",
    top: "12.73%",
    right: "26.64%",
    bottom: "18.18%",
    left: "11.55%",
    position: "absolute",
  },
  groupParent: {
    width: 110,
    height: 110,
  },
  text4: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text5: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
  },
  texttext1: {
    marginTop: 8,
    display: "none",
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {
    padding: Padding.p_base,
    display: "none",
    alignSelf: "stretch",
  },
  card: {
    top: 54,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: 0,
    width: 382,
    alignItems: "center",
    left: 0,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  groupChild1: {
    height: "20.52%",
    width: "26.18%",
    right: "36.91%",
    bottom: "79.48%",
    left: "36.91%",
  },
  cardParent: {
    height: 516,
    width: 382,
  },
  miJornada: {
    height: 732,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada10;
