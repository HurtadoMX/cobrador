import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const MiJornadaSiTrabaja3 = () => {
  return (
    <View style={styles.miJornadaSiTrabaja}>
      <Image
        style={[styles.miJornadaSiTrabajaChild, styles.jornadaChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={styles.miJornadaSiTrabajaItem} />
      <Image
        style={[styles.groupIcon, styles.groupLayout1]}
        resizeMode="cover"
        source={require("../assets/group21.png")}
      />
      <View style={styles.miJornadaSiTrabajaInner} />
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-472.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-93.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/frame-9221.png")}
              />
            </View>
            <Text style={[styles.jornada, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.groupWrapper, styles.frameChildLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.home, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.miJornadaSiTrabajaChild1, styles.jornadaChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-1087.png")}
      />
      <View style={[styles.topbar, styles.verticalSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={styles.title}>Mi jornada</Text>
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
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic4.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/group-2106.png")}
        />
        <View />
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.title1, styles.titleTypo]}>Si</Text>
            </View>
            <View style={[styles.button1, styles.buttonLayout]}>
              <Text style={[styles.title2, styles.titleTypo]}>No</Text>
            </View>
            <View style={[styles.button2, styles.buttonBorder]}>
              <Text style={[styles.title2, styles.titleTypo]}>Llego tarde</Text>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
            <View style={[styles.button3, styles.cardLayout]}>
              <Text style={[styles.title1, styles.titleTypo]}>Confirmar</Text>
            </View>
            <View style={[styles.button4, styles.buttonSpaceBlock]}>
              <Text style={[styles.title1, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mask, styles.jornadaChildPosition]} />
      <View style={styles.cardParent}>
        <View style={[styles.card, styles.cardLayout]}>
          <View />
          <View />
          <View />
          <View style={styles.cardtitle20}>
            <Text style={styles.title6}>Advertencia</Text>
          </View>
          <View style={styles.cardSpaceBlock}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.min}>
              Estas a punto de exceder el rango maximo de declaración de
              kilometraje diaria
            </Text>
          </View>
          <View style={styles.info2Columnas}>
            <View
              style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label, styles.labelTypo]}>
                      Kilometraje declarado
                    </Text>
                  </View>
                  <View style={[styles.child, styles.cardLayout]}>
                    <Text style={[styles.placeholder, styles.placeholderTypo]}>
                      55.000km
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.verticalFormIteminput1, styles.verticalSpaceBlock]}
            >
              <View style={styles.content}>
                <View style={[styles.main, styles.cardSpaceBlock]}>
                  <View style={styles.formItemTitle}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Cantidad de pagarés
                    </Text>
                  </View>
                  <View style={[styles.child, styles.cardLayout]}>
                    <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                      3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.min}>
              ¿Estas seguro de que el valor es correcto?
            </Text>
          </View>
          <View />
          <View style={styles.tripleButton}>
            <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
              <View style={[styles.button5, styles.buttonSpaceBlock]}>
                <Text style={[styles.title7, styles.titleTypo]}>Modificar</Text>
              </View>
              <View style={[styles.button6, styles.buttonSpaceBlock]}>
                <Text style={[styles.title2, styles.titleTypo]}>Aceptar</Text>
              </View>
            </View>
          </View>
          <View />
          <View style={styles.body}>
            <View style={styles.texttext}>
              <Text style={[styles.text, styles.textTypo]}>
                Europe Street beat
              </Text>
            </View>
            <View style={styles.texttext1}>
              <Text style={[styles.text1, styles.textTypo]}>
                www.instagram.com
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupChild1, styles.groupLayout1]}
          resizeMode="cover"
          source={require("../assets/group-26531.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaChildPosition: {
    left: 0,
    width: 414,
  },
  groupLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
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
  cardSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  buttonLayout: {
    width: 83,
    height: 40,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    alignItems: "center",
  },
  buttonBorder: {
    borderWidth: 1,
    marginLeft: 16,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  cardLayout: {
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  labelTypo: {
    color: Color.texto201,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "300",
    flex: 1,
    fontFamily: FontFamily.h4,
  },
  placeholderTypo: {
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    flex: 1,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
  },
  miJornadaSiTrabajaChild: {
    top: 0,
    position: "absolute",
    height: 710,
  },
  image9Icon: {
    top: 13,
    left: 207,
    width: 0,
    height: 0,
    position: "absolute",
  },
  miJornadaSiTrabajaItem: {
    top: 1468,
    left: 447,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 117,
    height: 8,
    position: "absolute",
  },
  groupIcon: {
    height: "0.55%",
    width: "4.11%",
    top: "41.21%",
    right: "-39.86%",
    bottom: "58.24%",
    left: "135.75%",
  },
  miJornadaSiTrabajaInner: {
    top: 3314,
    left: 801,
    height: 84,
    position: "absolute",
  },
  navbarinferiorChild: {
    right: -13,
    width: 427,
    bottom: 0,
  },
  frameChild: {
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
  },
  home: {
    marginTop: 8,
    textAlign: "center",
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  jornada: {
    textAlign: "center",
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
    width: 414,
    overflow: "hidden",
  },
  miJornadaSiTrabajaChild1: {
    top: 255,
    height: 391,
    position: "absolute",
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
    fontFamily: FontFamily.h4,
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
  },
  rightIcon: {
    height: 24,
  },
  topbar: {
    borderBottomWidth: 1,
    height: 45,
    borderColor: Color.primario,
    borderStyle: "solid",
    paddingVertical: 0,
    backgroundColor: Color.primario,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  buttonpanicIcon: {
    top: 546,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  frameChild1: {
    width: 100,
    height: 118,
  },
  title1: {
    color: Color.primario,
  },
  button: {
    height: 40,
    width: 83,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    backgroundColor: Color.blanco20,
    paddingHorizontal: Padding.p_xs,
  },
  title2: {
    color: Color.blanco20,
  },
  button1: {
    padding: Padding.p_96xl,
    height: 40,
    borderWidth: 1,
    marginLeft: 16,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  button2: {
    paddingVertical: Padding.p_96xl,
    height: 40,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
  cardFooter: {
    alignSelf: "stretch",
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tripleButton: {
    flexDirection: "row",
  },
  button3: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 40,
    borderColor: Color.blanco20,
    backgroundColor: Color.blanco20,
  },
  button4: {
    width: 93,
    display: "none",
    borderRadius: Border.br_981xl,
    alignItems: "center",
    marginLeft: 16,
    borderColor: Color.primario,
  },
  cardFooterDoble: {
    width: 381,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent: {
    top: 69,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    width: 382,
    left: 16,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  mask: {
    top: -14,
    backgroundColor: Color.colorGray_400,
    height: 724,
    position: "absolute",
    overflow: "hidden",
  },
  title6: {
    color: Color.texto,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.h4,
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
  min: {
    color: Color.text,
    display: "flex",
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    width: 350,
    fontFamily: FontFamily.h4,
    alignItems: "center",
  },
  cardBody: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    fontFamily: FontFamily.h4,
    color: Color.colorBlack,
  },
  child: {
    alignSelf: "stretch",
    height: 24,
    marginTop: 8,
    flexDirection: "row",
  },
  main: {
    alignSelf: "stretch",
  },
  content: {
    alignSelf: "stretch",
  },
  verticalFormIteminput: {
    flex: 1,
  },
  label1: {
    textAlign: "left",
  },
  placeholder1: {
    fontFamily: FontFamily.robotoBold,
  },
  verticalFormIteminput1: {
    display: "none",
    flex: 1,
  },
  info2Columnas: {
    width: 382,
    flexDirection: "row",
  },
  title7: {
    color: Color.secundario,
  },
  button5: {
    borderColor: Color.secundario,
    height: 40,
    borderRadius: Border.br_981xl,
    alignItems: "center",
  },
  button6: {
    height: 40,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    marginLeft: 16,
    borderColor: Color.primario,
    backgroundColor: Color.primario,
    paddingHorizontal: Padding.p_xs,
  },
  text: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontFamily: FontFamily.bodyRegular,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text1: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.bodyRegular,
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
    paddingHorizontal: 0,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_base,
    width: 382,
    left: 0,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  groupChild1: {
    height: "24.98%",
    width: "26.18%",
    top: "0%",
    right: "36.91%",
    bottom: "75.02%",
    left: "36.91%",
  },
  cardParent: {
    top: 67,
    height: 424,
    width: 382,
    left: 16,
    position: "absolute",
  },
  miJornadaSiTrabaja: {
    overflow: "hidden",
    height: 710,
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornadaSiTrabaja3;
