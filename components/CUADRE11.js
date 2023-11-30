import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const CUADRE11 = () => {
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
          <Text style={styles.title}>Entrega de herramientas</Text>
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
        <Text style={[styles.text, styles.textTypo]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo]}>10/12</Text>
          <Image
            style={[styles.groupChild, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/group-24544.png")}
          />
        </View>
        <Text style={styles.aTiempo}>A tiempo</Text>
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
          styles.parentSpaceBlock,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleClr]}>
            Información de entrega
          </Text>
        </View>
        <View />
        <View
          style={[styles.carddescription16, styles.carddescriptionSpaceBlock]}
        >
          <Text style={[styles.texto, styles.titleClr]}>
            Tu supervisor debe de entregarte las siguientes herramientas.
          </Text>
        </View>
        <View style={[styles.verticalFormItemParent, styles.cuadreBg]}>
          <View style={styles.verticalFormItem}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      Base para tu jornada
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
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
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
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
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      Contratos y pagares
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
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
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
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
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      Publicidad
                    </Text>
                  </View>
                  <View style={[styles.child, styles.childFlexBox]}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
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
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Acuerdos de pago
                    </Text>
                    <Image
                      style={styles.arrowIcon}
                      resizeMode="cover"
                      source={require("../assets/arrow.png")}
                    />
                  </View>
                  <View style={styles.childFlexBox}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
                      3 pagos
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.carddescription16, styles.carddescriptionSpaceBlock]}
        >
          <Text style={[styles.texto, styles.titleClr]}>
            Por favor revisa lo que te entrega y confirma que este completo.
          </Text>
        </View>
      </View>
      <View style={styles.doubleButton}>
        <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
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
      <View style={styles.groupView}>
        <View style={[styles.separadorFormsParent, styles.parentSpaceBlock]}>
          <View />
          <View />
          <View />
          <View style={styles.cardtitle20}>
            <Text style={[styles.title4, styles.titleClr]}>
              Día de supervisión
            </Text>
          </View>
          <View style={[styles.separadorForms7, styles.cardSpaceBlock]}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View
            style={[
              styles.carddescription162,
              styles.carddescriptionSpaceBlock,
            ]}
          >
            <Text style={[styles.texto, styles.titleClr]}>
              Hoy es tu día de supervisión, pronto te notificaremos si esta va a
              iniciar desde oficina o en algun punto de encuentro en la ruta
            </Text>
          </View>
          <View />
          <View style={styles.botonCentradoPpal}>
            <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
              <View style={[styles.button2, styles.buttonBorder]}>
                <Text style={[styles.title2, styles.titleTypo]}>Entendido</Text>
              </View>
              <View style={[styles.button3, styles.buttonBorder]}>
                <Text style={[styles.title3, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/group-11941.png")}
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
  iconLayout: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "center",
  },
  groupLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  parentSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    borderRadius: Border.br_xl,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  titleClr: {
    color: Color.texto,
    fontFamily: FontFamily.h4,
  },
  carddescriptionSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  cardSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  labelTypo: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    fontFamily: FontFamily.h4,
    flex: 1,
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
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
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
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
  },
  text1: {
    top: 1,
    left: 35,
    color: Color.secundario,
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  groupChild: {
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
    fontSize: FontSize.body3_size,
    marginLeft: 25,
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
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
    fontWeight: "700",
    textAlign: "center",
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
    textAlign: "left",
    fontWeight: "300",
    alignSelf: "stretch",
    fontSize: FontSize.body3_size,
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  label: {
    textAlign: "center",
    fontWeight: "500",
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    fontWeight: "300",
    textAlign: "center",
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
    textAlign: "left",
    fontWeight: "500",
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
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
    backgroundColor: Color.primario,
  },
  title3: {
    color: Color.primario,
  },
  button1: {
    width: 83,
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
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
    top: -2,
    left: -4,
    backgroundColor: Color.colorGray_400,
    width: 419,
    height: 866,
    position: "absolute",
    overflow: "hidden",
  },
  title4: {
    fontWeight: "700",
    textAlign: "center",
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
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms7: {
    paddingVertical: Padding.p_5xs,
  },
  carddescription162: {
    paddingVertical: Padding.p_5xs,
    width: 382,
  },
  button2: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primario,
  },
  button3: {
    width: 93,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_981xl,
    display: "none",
    marginLeft: 16,
  },
  cardFooterDoble: {
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
  separadorFormsParent: {
    top: 55,
    width: 382,
    left: 0,
  },
  groupIcon: {
    height: "41.03%",
    width: "34.74%",
    top: "-2.98%",
    right: "33.56%",
    bottom: "61.95%",
    left: "31.7%",
  },
  groupView: {
    top: 108,
    left: 15,
    height: 339,
    width: 382,
    position: "absolute",
  },
  cuadre: {
    height: 732,
    overflow: "hidden",
    width: 414,
  },
});

export default CUADRE11;
