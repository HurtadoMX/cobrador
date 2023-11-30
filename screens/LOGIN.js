import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, StyleSheet, View, Text, Button, Alert, TouchableOpacity } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const LOGIN = ({route}) => {

  const { setIsAuthenticated, isAuthenticated } = route.params;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home'); // Navega a la pantalla Home
    setIsAuthenticated(true)
  };

  return (
    <View style={styles.login}>
      <View style={[styles.vectorParent, styles.parentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2333.png")}
        />
        <View
          style={[
            styles.rectangulo3dVioleta2Parent,
            styles.verticalParentPosition,
          ]}
        >
          <Image
            style={styles.rectangulo3dVioleta2Icon}
            resizeMode="cover"
            source={require("../assets/rectangulo3dvioleta-21.png")}
          />
          <Image
            style={[styles.forma117Icon, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/forma117.png")}
          />
          <Image
            style={styles.fondox18Icon}
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
        style={[styles.loginItem, styles.itemIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1647.png")}
      />
    <View style={[styles.containerLogin]}>
      <Text style={[styles.holaDeNuevo, styles.holaDeNuevoPosition]} >
            ¡Hola de nuevo!
          </Text>
          <View style={[styles.verticalFormIteminput, styles.verticalPosition]}>
            <View style={styles.content}>
              <View style={styles.main}>
                <View style={styles.child}>
                  <Text style={[styles.placeholder, styles.placeholderTypo]}>
                    Ingresa tu usuario
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.loginInner, styles.loginInnerLayout]}>
            <View
              style={[styles.verticalFormIteminputParent, styles.loginInnerLayout]}
            >
              <View
                style={[styles.verticalFormIteminput1, styles.verticalPosition]}
              >
                <View style={styles.content}>
                  <View style={styles.main}>
                    <View style={styles.child}>
                      <Text style={[styles.placeholder, styles.placeholderTypo]}>
                        Ingresa tu contraseña
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.groupItem, styles.itemIconLayoutOjito]}
                resizeMode="cover"
                source={require("../assets/group-16474.png")}
              />
            </View>
          </View>
          <View style={styles.cardFooterDoble}>
            <View style={styles.button}>
              <Text style={styles.title}>Simular crédito</Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title1, styles.titleTypo]}>
                Olvidé mi contraseña
              </Text>
            </View>
          </View>
          <Text style={[styles.queTengasUna, styles.placeholderTypo]}>
            Que tengas una excelente jornada laboral.
          </Text>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-102.png")}
          />
          <Image
            style={[styles.recurso16Icon, styles.itemIconLayoutFlechaFooter]}
            resizeMode="cover"
            source={require("../assets/recurso-16.png")}
          />
          <Image
            style={[styles.recurso17Icon, styles.itemIconLayoutFlechaFooter]}
            resizeMode="cover"
            source={require("../assets/recurso-17.png")}
          />
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>{` `}</Text>
            <Text style={[styles.text1, styles.textTypo1]}>{` `}</Text>
          </View>
    </View>

      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-102.png")}
      />
      <Image
        style={[styles.recurso16Icon, styles.itemIconLayoutFlechaFooter]}
        resizeMode="cover"
        source={require("../assets/recurso-16.png")}
      />
      <Image
        style={[styles.recurso17Icon, styles.itemIconLayoutFlechaFooter]}
        resizeMode="cover"
        source={require("../assets/recurso-17.png")}
      />
      <View style={styles.vectorGroup}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.text, styles.textTypo1]}>{` `}</Text>
        <Text style={[styles.text1, styles.textTypo1]}>{` `}</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.textParent}>
          <Text style={[styles.text2, styles.textTypo]}>{` `}</Text>
          <Text style={[styles.text3, styles.textTypo]}>{` `}</Text>
          <Image
            style={[styles.groupInner, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-1304.png")}
          />
        </View>
      </View>
      <View style={[styles.cardFooterDoble2, styles.cardFlexBox]}>
        <View style={[styles.button5, styles.buttonFlexBoxHuella]}>
          <Text style={styles.title5}>{`Ingresa con tu huella`}</Text>
        </View>
      </View>


      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button6}>
          <Text style={styles.title}>Ingresar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  parentLayout: {
    width: 673,
    position: "absolute",
  },
  groupChildPosition: {
    left: 101,
    position: "absolute",
  },
  verticalParentPosition: {
    top: 0,
    left: 0,
  },
  containerLogin:{
    top: 40,
    left: -12,
  },
  itemIconLayout: {
    marginTop: "10%",
    maxHeight: "54%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemIconLayoutOjito: {
    marginTop: "2%",
    maxHeight: "54%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemIconLayoutFlechaFooter: {
    marginTop: "-3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  holaDeNuevoPosition: {
    width: 255,
    textAlign: "center",
    left: 80,
    color: Color.white,
    position: "absolute",
  },
  verticalPosition: {
    paddingLeft: Padding.p_base,
    width: 323,
    borderRadius: Border.br_4xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.h5_size,
  },
  placeholderTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.h5,
  },
  loginInnerLayout: {
    height: 46,
    width: 323,
    position: "absolute",
  },
  buttonFlexBox: {
    marginRight: "-10%",
    width: "100%",
    marginLeft: 16,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "end",
    alignItems: "end",
    flexDirection: "row",
    overflow: "hidden",
  },
  buttonFlexBoxHuella: {
    top: 100,
    marginRight: "-50%",
    width: "150%",
    marginLeft: 16,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "end",
    alignItems: "end",
    flexDirection: "row",
    overflow: "hidden",
  },
  titleTypo: {
    width: "auto",
    fontSize: FontSize.h6_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h5,
  },
  vectorIconPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "10%",
    maxHeight: "81%",
    maxWidth: "99%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    height: "9.73%",
    color: Color.primario20,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h5,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    height: "14.08%",
    transform: [
      {
        rotate: "-41.53deg",
      },
    ],
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h5,
    position: "absolute",
  },
  cardFlexBox: {
    width: 106,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    position: "absolute",
  },
  groupChild: {
    width: 413,
    top: 53,
    height: 736,
    left: 101,
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
    width: 480,
    height: 387,
    top: 370,
    left: 101,
    position: "absolute",
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
    left: 0,
    width: 673,
    position: "absolute",
  },
  vectorParent: {
    top: -53,
    left: -101,
    height: 901,
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
    height: "8.91%",
    width: "40%",
    top: "5.43%",
    right: "30.05%",
    bottom: "85.65%",
    left: "29.95%",
  },
  holaDeNuevo: {
    top: 168,
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    fontFamily: FontFamily.h5,
    width: 255,
    textAlign: "center",
    left: 80,
  },
  label: {
    color: Color.texto,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.h5,
  },
  formItemTitle: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.gris,
    textAlign: "left",
    fontSize: FontSize.h5_size,
    fontWeight: "300",
    flex: 1,
  },
  child: {
    marginTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  main: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  content: {
    borderColor: Color.colorWhitesmoke_200,
    borderBottomWidth: 1,
    paddingRight: Padding.p_xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    borderRadius: Border.br_4xl,
    backgroundColor: Color.white,
  },
  verticalFormIteminput: {
    top: 260,
    left: 46,
  },
  label1: {
    color: Color.texto,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.h5,
    display: "none",
  },
  verticalFormIteminput1: {
    left: 0,
    top: 0,
  },
  groupItem: {
    height: "35.65%",
    width: "7.74%",
    top: "31.52%",
    right: "5.57%",
    bottom: "32.83%",
    left: "86.69%",
  },
  verticalFormIteminputParent: {
    left: 0,
    top: 0,
  },
  loginInner: {
    top: 322,
    left: 46,
  },
  title: {
    fontWeight: "500",
    fontSize: FontSize.h5_size,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.h5,
  },
  button: {
    borderRadius: Border.br_xl,
    borderColor: Color.white,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  title1: {
    color: Color.white,
    fontSize: FontSize.h6_size,
  },
  button1: {
    paddingVertical: Padding.p_9xs,
  },
  cardFooterDoble: {
    right: 46,
    width: 181,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    top: 370,
    position: "absolute",
  },
  queTengasUna: {
    top: 203,
    fontSize: FontSize.h61_size,
    width: 255,
    textAlign: "center",
    left: 80,
    color: Color.white,
    position: "absolute",
    fontWeight: "300",
  },
  ellipseIcon: {
    top: 660,
    width: 426,
    height: 378,
    // left: 100,
    right: 0,
    position: "absolute",
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
  vectorIcon: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    height: "100%",
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
    height: "14.95%",
    width: "26.57%",
    top: "71.74%",
    right: "36.96%",
    bottom: "13.32%",
    left: "36.47%",
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
  groupInner: {
    width: "78.97%",
    left: "21.03%",
  },
  textParent: {
    height: "62.81%",
    width: "64.15%",
    right: "26.7%",
    bottom: "37.19%",
    left: "9.15%",
    top: "0%",
    position: "absolute",
  },
  title3: {
    color: Color.primario,
  },
  button3: {
    paddingVertical: Padding.p_5xs,
    display: "none",
  },
  cardFooterDoble1: {
    top: 43,
    right: 0,
  },
  groupParent: {
    height: "16.44%",
    width: "25.6%",
    top: "73.64%",
    right: "37.2%",
    bottom: "9.92%",
    left: "37.2%",
    position: "absolute",
  },
  title5: {
    color: Color.primario20,
    fontSize: FontSize.h6_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h5,
  },
  button5: {
    paddingVertical: Padding.p_5xs,
  },
  cardFooterDoble2: {
    top: 624,
    right: 153,
  },
  button6: {
    zIndex: 10,
    width: "30%",
    top: 490,
    left: 140,
    backgroundColor: Color.secundario,
    height: 40,
    borderRadius: Border.br_981xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 736,
    width: "100%",
    flex: 1,
  },
});

export default LOGIN;
