import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const CUADRE4 = () => {
  return (
    <View style={[styles.cuadre, styles.cuadreBg]}>
      <Image
        style={styles.cuadreChild}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <View style={[styles.topbar, styles.verticalSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo1]}>
            Entrega de herramientas
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
      <View style={styles.timer}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo3]}>10/12</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-24544.png")}
          />
        </View>
        <Text style={[styles.aTiempo, styles.titleTypo1]}>A tiempo</Text>
      </View>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract2.png")}
      />
      <View style={styles.separadorForms} />
      <View style={[styles.separadorForms1, styles.separadorPosition]} />
      <View style={[styles.separadorForms2, styles.separadorPosition]} />
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
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View style={[styles.rectangleView, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.ranking, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic3.png")}
      />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.cardSpaceBlock,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.textTypo3]}>
            Información de entrega
          </Text>
        </View>
        <View />
        <View style={[styles.carddescription16, styles.cardBodySpaceBlock]}>
          <Text style={[styles.texto, styles.minTypo]}>
            Tu supervisor debe de entregarte las siguientes herramientas.
          </Text>
        </View>
        <View style={[styles.verticalFormItemParent, styles.cuadreBg]}>
          <View style={styles.verticalFormItem}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.titleTypo1]}>
                      Base para tu jornada
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      $30.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content1}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.minTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      3 pagos
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.verticalFormItem1}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.titleTypo1]}>
                      Contratos y pagares
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      5
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content1}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.minTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      3 pagos
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.verticalFormItemParent, styles.cuadreBg]}>
          <View style={styles.verticalFormItem2}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.titleTypo1]}>
                      Publicidad
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      Minimo 50
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content1}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.minTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.titleTypo1]}>
                      3 pagos
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.carddescription16, styles.cardBodySpaceBlock]}>
          <Text style={[styles.texto, styles.minTypo]}>
            Por favor revisa lo que te entrega y confirma que este completo.
          </Text>
        </View>
      </View>
      <View style={styles.doubleButton}>
        <View style={[styles.cardFooter, styles.mainSpaceBlock]}>
          <View style={[styles.button, styles.buttonBorder]}>
            <Text style={[styles.title2, styles.titleTypo]}>
              Confirmar entrega
            </Text>
          </View>
          <View style={[styles.button1, styles.buttonBorder]}>
            <Text style={[styles.title3, styles.titleTypo]}>
              Aceptar cierre
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={styles.cardParent}>
        <View style={[styles.card, styles.cardSpaceBlock]}>
          <View />
          <View />
          <View />
          <View style={[styles.cardtitle20, styles.minLayout]}>
            <Text style={[styles.title4, styles.textTypo3]}>
              Confirmación de entrega
            </Text>
          </View>
          <View style={[styles.separadorForms7, styles.mainSpaceBlock]}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={[styles.cardBody, styles.cardBodySpaceBlock]}>
            <Text style={[styles.min, styles.minLayout]}>
              Por favor vuelve a confirmar la recepción de estas herramientas
              usando tu huella en el sensor.
            </Text>
          </View>
          <View />
          <View style={styles.groupParent}>
            <View style={[styles.vectorGroup, styles.groupIconPosition]}>
              <Image
                style={[styles.vectorIcon2, styles.groupIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={[styles.text2, styles.textTypo2]}>{` `}</Text>
              <Text style={[styles.text3, styles.textTypo2]}>{` `}</Text>
            </View>
            <View style={styles.groupContainer}>
              <View style={[styles.vectorGroup, styles.groupIconPosition]}>
                <Text style={[styles.text4, styles.textTypo1]}>{` `}</Text>
                <Text style={[styles.text5, styles.textTypo1]}>{` `}</Text>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-13041.png")}
                />
              </View>
            </View>
          </View>
          <View />
          <View style={styles.body}>
            <View style={styles.texttext}>
              <Text style={[styles.text6, styles.textTypo]}>
                Europe Street beat
              </Text>
            </View>
            <View style={styles.texttext1}>
              <Text style={[styles.text7, styles.textTypo]}>
                www.instagram.com
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-2653.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cuadreBg: {
    backgroundColor: Color.blanco20,
    overflow: "hidden",
  },
  verticalSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  titleTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  iconLayout: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  textTypo3: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  separadorPosition: {
    left: 32,
    position: "absolute",
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
  cardSpaceBlock: {
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  cardBodySpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  minTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  mainSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  childFlexBox: {
    marginTop: 4,
    backgroundColor: Color.blanco201,
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBorder: {
    paddingHorizontal: Padding.p_xs,
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
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
  minLayout: {
    width: 350,
    alignItems: "center",
  },
  groupIconPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
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
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorBlack,
    height: "14.08%",
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    position: "absolute",
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
  vectorIcon: {
    width: 22,
    height: 24,
  },
  text: {
    marginLeft: 25,
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
  },
  text1: {
    top: 1,
    left: 35,
    color: Color.secundario,
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  groupChild: {
    height: "105.2%",
    width: "39.44%",
    right: "62.13%",
    bottom: "-5.2%",
    left: "-1.57%",
    top: "0%",
    position: "absolute",
  },
  parent: {
    width: 89,
    height: 27,
    marginLeft: 25,
  },
  aTiempo: {
    fontSize: FontSize.body3_size,
    marginLeft: 25,
    color: Color.blanco20,
    fontWeight: "500",
  },
  timer: {
    top: 53,
    left: 20,
    borderTopRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.secundario,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_sm,
    width: 382,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  subtractIcon: {
    height: 1624,
    width: 414,
  },
  separadorForms: {
    top: 180,
    left: 33,
    position: "absolute",
  },
  separadorForms1: {
    top: 501,
  },
  separadorForms2: {
    top: 517,
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
  groupItem: {
    bottom: 12,
  },
  groupInner: {
    bottom: 6,
  },
  rectangleView: {
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
    right: 16,
    bottom: 100,
    width: 55,
    height: 55,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    color: Color.texto,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  texto: {
    fontWeight: "300",
    color: Color.texto,
    alignSelf: "stretch",
    fontSize: FontSize.body3_size,
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    fontWeight: "500",
    flex: 1,
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "300",
    color: Color.texto,
    flex: 1,
  },
  child: {
    paddingLeft: Padding.p_sm,
  },
  main: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  content: {
    alignSelf: "stretch",
  },
  verticalFormIteminput: {
    width: 191,
    alignItems: "center",
  },
  label1: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    fontWeight: "500",
    flex: 1,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    marginLeft: 4,
    display: "none",
  },
  content1: {
    display: "none",
    alignSelf: "stretch",
  },
  verticalFormIteminput1: {
    display: "none",
    flex: 1,
  },
  verticalFormItem: {
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  verticalFormItem1: {
    left: 191,
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  verticalFormItemParent: {
    height: 61,
    width: 382,
    overflow: "hidden",
  },
  verticalFormItem2: {
    left: 96,
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 140,
    width: 386,
    left: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  title2: {
    color: Color.blanco20,
  },
  button: {
    backgroundColor: Color.primario,
    paddingHorizontal: Padding.p_xs,
    height: 40,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
  },
  title3: {
    color: Color.primario,
  },
  button1: {
    width: 83,
    display: "none",
    marginLeft: 16,
  },
  cardFooter: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  doubleButton: {
    top: 481,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  mask: {
    top: -1,
    backgroundColor: Color.colorGray_400,
    height: 756,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  title4: {
    color: Color.texto,
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
  separadorForms7: {
    paddingVertical: Padding.p_5xs,
  },
  min: {
    color: Color.text,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.h4,
    fontWeight: "300",
    fontSize: FontSize.body3_size,
  },
  cardBody: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  vectorIcon2: {
    left: "0%",
    width: "100%",
    right: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text2: {
    top: "12.27%",
    left: "14.27%",
  },
  text3: {
    left: "61.27%",
    top: "0%",
  },
  vectorGroup: {
    left: "0%",
    width: "100%",
    right: "0%",
    height: "100%",
  },
  text4: {
    top: "29.61%",
    left: "0%",
  },
  text5: {
    top: "11.84%",
    left: "76.03%",
  },
  groupIcon: {
    width: "78.97%",
    left: "21.03%",
    right: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  text6: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text7: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
  },
  texttext1: {
    display: "none",
    alignSelf: "stretch",
    marginTop: 8,
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
    width: 382,
    left: 0,
  },
  groupChild1: {
    height: "26.95%",
    width: "26.18%",
    right: "36.91%",
    bottom: "73.05%",
    left: "36.91%",
    top: "0%",
    position: "absolute",
  },
  cardParent: {
    top: 83,
    height: 393,
    left: 16,
    width: 382,
    position: "absolute",
  },
  cuadre: {
    height: 732,
    overflow: "hidden",
    width: 414,
  },
});

export default CUADRE4;
