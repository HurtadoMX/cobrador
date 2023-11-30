import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";

const LOGIN4 = () => {
  return (
    <View style={styles.login}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-233331.png")}
        />
        <View
          style={[styles.rectangulo3dVioleta2Parent, styles.loginItemPosition]}
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
        style={[styles.loginItem, styles.loginItemPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1021.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/group-1647.png")}
        />
        <View />
        <View />
        <View
          style={[styles.sectiontitleYTextoresaltar24, styles.title24FlexBox]}
        >
          <Text style={styles.title}>Reestablecer contraseña</Text>
        </View>
        <View />
        <View style={[styles.title14botones, styles.title24FlexBox]}>
          <View style={[styles.title24, styles.title24FlexBox]}>
            <Text style={[styles.title1, styles.titleTypo1]}>
              Indicanos los siguientes datos para reestablecer tu contraseña
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.verticalFormIteminput}>
          <View style={styles.content}>
            <View style={[styles.main, styles.mainSpaceBlock]}>
              <View style={[styles.formItemTitle, styles.formItemTitleFlexBox]}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Nombre de la colonia o delegación
                </Text>
              </View>
              <View style={styles.child}>
                <Text style={[styles.placeholder, styles.labelTypo]}>
                  Ingresa tu usuario
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.wrapperLayout}>
          <View
            style={[styles.verticalFormIteminputWrapper, styles.wrapperLayout]}
          >
            <View style={styles.verticalFormIteminput1}>
              <View style={styles.content}>
                <View style={[styles.main, styles.mainSpaceBlock]}>
                  <View
                    style={[styles.formItemTitle, styles.formItemTitleFlexBox]}
                  >
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Código postal
                    </Text>
                  </View>
                  <View style={styles.child}>
                    <Text style={[styles.placeholder, styles.labelTypo]}>
                      Ingresa el teléfono de tu cuenta
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={styles.titleTypo}>Ingresar</Text>
        </View>
        <View />
        <View />
        <View />
        <View style={[styles.cardFooterDoble, styles.mainSpaceBlock]}>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.title3, styles.titleTypo]}>
              Simular crédito
            </Text>
          </View>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Text style={[styles.title4, styles.titleTypo1]}>{`Ingresa con
tu huella`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.recurso16Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-16.png")}
      />
      <Image
        style={[styles.recurso17Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-17.png")}
      />
      <Image
        style={[styles.recurso12Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-121.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 101,
    position: "absolute",
  },
  loginItemPosition: {
    left: 0,
    position: "absolute",
  },
  title24FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo1: {
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  mainSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
  },
  formItemTitleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.h5_size,
    fontFamily: FontFamily.h4,
  },
  wrapperLayout: {
    height: 46,
    width: 316,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xs,
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
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h4,
    color: Color.blanco20,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  title1: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.blanco20,
    fontWeight: "500",
    flex: 1,
  },
  title24: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  title14botones: {
    width: 349,
    height: 33,
    flexDirection: "row",
  },
  label: {
    color: Color.texto,
    textAlign: "left",
    fontWeight: "500",
  },
  formItemTitle: {
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  placeholder: {
    fontWeight: "300",
    color: Color.gris,
    flex: 1,
  },
  child: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  main: {
    alignSelf: "stretch",
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
    textAlign: "left",
    fontWeight: "500",
    display: "none",
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
  verticalFormIteminputWrapper: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  button: {
    backgroundColor: Color.secundario,
    height: 40,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
  },
  title3: {
    lineHeight: 25,
  },
  button1: {
    borderRadius: Border.br_xl,
    borderColor: Color.blanco20,
    borderWidth: 1,
    display: "none",
    borderStyle: "solid",
  },
  title4: {
    fontSize: FontSize.body3_size,
    color: Color.primario201,
  },
  button2: {
    marginLeft: 16,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
    flex: 1,
  },
  cardFooterDoble: {
    width: 106,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  groupParent: {
    top: 42,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
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
  },
  recurso17Icon: {
    height: "5.54%",
    width: "6.76%",
    top: "77.99%",
    right: "7.73%",
    bottom: "16.47%",
    left: "85.51%",
  },
  recurso12Icon: {
    height: "10.07%",
    width: "16.45%",
    top: "68.79%",
    right: "60%",
    bottom: "21.14%",
    left: "23.55%",
  },
  login: {
    overflow: "hidden",
    height: 736,
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default LOGIN4;
