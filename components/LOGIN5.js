import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Padding, FontSize, Border, Color } from "../GlobalStyles";

const LOGIN5 = () => {
  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-233331.png")}
        />
        <View
          style={[styles.rectangulo3dVioleta2Parent, styles.parentPosition]}
        >
          <Image
            style={styles.rectangulo3dVioleta2Icon}
            resizeMode="cover"
            source={require("../assets/rectangulo3dvioleta-21.png")}
          />
          <Image
            style={[styles.forma117Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/forma117.png")}
          />
          <Image
            style={[styles.fondox18Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/fondox18.png")}
          />
          <Image
            style={styles.formaxx19Icon}
            resizeMode="cover"
            source={require("../assets/formaxx19.png")}
          />
        </View>
      </View>
      <View style={styles.loginChild} />
      <Image
        style={[styles.loginItem, styles.parentPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-102.png")}
      />
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-1647.png")}
        />
        <View />
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title, styles.titleTypo1]}>¡Hola de nuevo!</Text>
        </View>
        <View />
        <View style={styles.title14botones}>
          <View style={[styles.title24, styles.title24FlexBox]}>
            <Text style={[styles.title1, styles.labelTypo1]}>
              Si aún no eres cliente debes solicitar una cita a través del
              simulador de crédito.
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.verticalFormIteminput}>
          <View style={styles.content}>
            <View style={styles.main}>
              <View style={styles.formItemTitle}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Nombre de la colonia o delegación
                </Text>
              </View>
              <View style={styles.child}>
                <Text style={[styles.placeholder, styles.textoTypo]}>
                  Ingresa tu usuario
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.groupWrapperLayout}>
          <View
            style={[
              styles.verticalFormIteminputParent,
              styles.groupWrapperLayout,
            ]}
          >
            <View style={styles.verticalFormIteminput1}>
              <View style={styles.content}>
                <View style={styles.main}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Código postal
                    </Text>
                  </View>
                  <View style={styles.child}>
                    <Text style={[styles.placeholder, styles.textoTypo]}>
                      Ingresa tu contraseña
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupItem, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-16472.png")}
            />
          </View>
        </View>
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={[styles.cardFooterDoble, styles.cardFlexBox]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Olvidé mi contraseña
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonSpaceBlock]}>
              <Text style={[styles.title3, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.button2}>
          <Text style={[styles.title4, styles.titleTypo]}>Ingresar</Text>
        </View>
        <View />
        <View />
        <View />
        <View style={styles.huella}>
          <View style={styles.vectorPosition}>
            <Image
              style={[styles.vectorIcon, styles.vectorPosition]}
              resizeMode="cover"
              source={require("../assets/vector36.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>{` `}</Text>
            <Text style={[styles.text1, styles.textTypo1]}>{` `}</Text>
          </View>
          <Image
            style={[styles.huellaChild, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-130421.png")}
          />
        </View>
        <View style={[styles.cardFooterDoble1, styles.cardFlexBox]}>
          <View style={[styles.button3, styles.buttonBorder]}>
            <Text style={[styles.title5, styles.titleTypo]}>
              Simular crédito
            </Text>
          </View>
          <View style={[styles.button4, styles.buttonSpaceBlock]}>
            <Text style={styles.title6}>{`Ingresa con
tu huella`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.recurso16Icon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-16.png")}
      />
      <Image
        style={[styles.recurso17Icon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-17.png")}
      />
      <Image
        style={[styles.recurso12Icon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-121.png")}
      />
      <View style={styles.mask} />
      <View style={[styles.cardParent, styles.cardLayout]}>
        <View style={[styles.card, styles.cardLayout]}>
          <View />
          <View />
          <View />
          <View style={styles.cardtitle20}>
            <Text style={[styles.title7, styles.titleTypo1]}>
              Reestablecimiento exitoso
            </Text>
          </View>
          <View style={styles.separadorForms13}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={[styles.carddescription16, styles.title24FlexBox]}>
            <Text style={[styles.texto, styles.textoTypo]}>
              Haz reestablecido exitosamente tu contraseña, utiliza tus nuevos
              datos de acceso para acceder a tu perfil
            </Text>
          </View>
          <View />
          <View style={styles.botonCentradoPpal1}>
            <View style={styles.cardFooterDoble2}>
              <View style={[styles.button5, styles.buttonBorder]}>
                <Text style={[styles.title4, styles.titleTypo]}>Entendido</Text>
              </View>
              <View style={[styles.button1, styles.buttonSpaceBlock]}>
                <Text style={[styles.title3, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.texttext}>
              <Text style={[styles.text2, styles.textTypo]}>
                Europe Street beat
              </Text>
            </View>
            <View style={styles.texttext1}>
              <Text style={[styles.text3, styles.textTypo]}>
                www.instagram.com
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupInner, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-27431.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: 414,
    overflow: "hidden",
  },
  iconPosition: {
    left: 101,
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  titleTypo1: {
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  title24FlexBox: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelTypo1: {
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.h5_size,
  },
  textoTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  groupWrapperLayout: {
    height: 46,
    width: 316,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 0,
    alignItems: "center",
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  buttonSpaceBlock: {
    marginLeft: 16,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  textTypo1: {
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    height: "9.73%",
    color: Color.primario201,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h4,
    position: "absolute",
  },
  buttonBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  cardLayout: {
    width: 382,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
  },
  groupChild: {
    width: 413,
    top: 53,
    height: 736,
  },
  rectangulo3dVioleta2Icon: {
    left: 293,
    width: 107,
    height: 124,
    top: 53,
    position: "absolute",
  },
  forma117Icon: {
    top: 124,
    width: 273,
    height: 220,
  },
  fondox18Icon: {
    top: 370,
    width: 480,
    height: 387,
  },
  formaxx19Icon: {
    top: 245,
    left: 365,
    width: 308,
    height: 249,
    position: "absolute",
  },
  rectangulo3dVioleta2Parent: {
    height: 757,
    opacity: 0.4,
    top: 0,
    left: 0,
    width: 673,
  },
  vectorParent: {
    top: -53,
    left: -101,
    height: 901,
    width: 673,
    position: "absolute",
  },
  loginChild: {
    top: 672,
    left: 425,
    backgroundColor: Color.colorGainsboro_200,
    width: 33,
    height: 64,
    position: "absolute",
  },
  loginItem: {
    top: 585,
    width: 1026,
    height: 378,
  },
  frameChild: {
    width: 166,
    height: 66,
  },
  title: {
    fontSize: FontSize.h2_size,
    textAlign: "center",
    color: Color.blanco20,
  },
  sectiontitleYTextoresaltar24: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title1: {
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.blanco20,
    flex: 1,
  },
  title24: {
    paddingVertical: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  title14botones: {
    width: 349,
    height: 33,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Color.texto,
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  formItemTitle: {
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  placeholder: {
    color: Color.gris,
    textAlign: "left",
    fontSize: FontSize.h5_size,
    flex: 1,
  },
  child: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  main: {
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
  },
  content: {
    borderColor: Color.colorWhitesmoke_200,
    borderBottomWidth: 1,
    paddingRight: Padding.p_xs,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  verticalFormIteminput: {
    width: 317,
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.blanco20,
  },
  label1: {
    color: Color.texto,
    display: "none",
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  verticalFormIteminput1: {
    width: 316,
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_4xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  groupItem: {
    height: "35.65%",
    width: "7.73%",
    top: "31.52%",
    right: "5.58%",
    bottom: "32.83%",
    left: "86.69%",
    position: "absolute",
  },
  verticalFormIteminputParent: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  title2: {
    textDecoration: "underline",
    color: Color.secundario,
  },
  button: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
  },
  title3: {
    color: Color.primario,
  },
  button1: {
    width: 93,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.primario,
    display: "none",
  },
  cardFooterDoble: {
    width: 334,
    paddingVertical: Padding.p_5xs,
  },
  botonCentradoPpal: {
    width: 334,
    flexDirection: "row",
  },
  title4: {
    color: Color.blanco20,
  },
  button2: {
    backgroundColor: Color.secundario,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
    height: 40,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vectorIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    top: "12.27%",
    left: "14.27%",
  },
  text1: {
    left: "61.27%",
    top: "0%",
  },
  huellaChild: {
    height: "69.09%",
    width: "48.82%",
    top: "12.73%",
    right: "26.64%",
    bottom: "18.18%",
    left: "24.55%",
    position: "absolute",
  },
  huella: {
    width: 110,
    height: 110,
  },
  title5: {
    lineHeight: 25,
    color: Color.blanco20,
  },
  button3: {
    borderColor: Color.blanco20,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    display: "none",
  },
  title6: {
    fontSize: FontSize.body3_size,
    color: Color.primario201,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  button4: {
    flex: 1,
  },
  cardFooterDoble1: {
    width: 106,
    paddingVertical: Padding.p_xs,
  },
  groupParent: {
    top: 42,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 414,
  },
  recurso16Icon: {
    height: "7.98%",
    width: "9.66%",
    top: "76.77%",
    right: "16.91%",
    bottom: "15.26%",
    left: "73.43%",
    position: "absolute",
  },
  recurso17Icon: {
    height: "5.54%",
    width: "6.76%",
    top: "77.99%",
    right: "7.73%",
    bottom: "16.47%",
    left: "85.51%",
    position: "absolute",
  },
  recurso12Icon: {
    height: "10.07%",
    width: "16.45%",
    top: "68.79%",
    right: "60%",
    bottom: "21.14%",
    left: "23.55%",
    position: "absolute",
  },
  mask: {
    height: "103.4%",
    right: "0.24%",
    bottom: "-3.4%",
    left: "-0.24%",
    backgroundColor: Color.colorGray_400,
    top: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  title7: {
    fontSize: FontSize.h4_size,
    color: Color.texto,
    textAlign: "center",
  },
  cardtitle20: {
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms13: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  texto: {
    fontSize: FontSize.body3_size,
    color: Color.texto,
    textAlign: "center",
    alignSelf: "stretch",
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
  },
  button5: {
    backgroundColor: Color.primario,
    borderColor: Color.primario,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 40,
  },
  cardFooterDoble2: {
    width: 381,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  botonCentradoPpal1: {
    flexDirection: "row",
  },
  text2: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text3: {
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
    top: 48,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
    width: 382,
    paddingHorizontal: 0,
    alignItems: "center",
    left: 0,
    backgroundColor: Color.blanco20,
  },
  groupInner: {
    height: "31.95%",
    width: "31.6%",
    right: "33.59%",
    bottom: "68.05%",
    left: "34.82%",
    top: "0%",
    position: "absolute",
  },
  cardParent: {
    top: 141,
    left: 15,
    height: 313,
  },
  login: {
    overflow: "hidden",
    height: 736,
    backgroundColor: Color.blanco20,
  },
});

export default LOGIN5;
