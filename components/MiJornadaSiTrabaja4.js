import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MiJornadaSiTrabaja4 = () => {
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
        style={styles.groupIcon}
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
            <Text style={styles.homeTypo}>Jornada</Text>
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
      <View style={[styles.topbar, styles.topbarSpaceBlock]}>
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
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/group-2106.png")}
        />
        <View />
        <View />
        <View style={styles.tripleButton}>
          <View style={styles.cardFooter}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.title1, styles.titleTypo]}>Si</Text>
            </View>
            <View style={[styles.button1, styles.buttonLayout1]}>
              <Text style={[styles.title2, styles.titleTypo]}>No</Text>
            </View>
            <View style={[styles.button2, styles.buttonLayout1]}>
              <Text style={[styles.title2, styles.titleTypo]}>Llego tarde</Text>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooterDoble, styles.cardFooterDobleFlexBox]}>
            <View style={[styles.button3, styles.buttonLayout]}>
              <Text style={[styles.title1, styles.titleTypo]}>Confirmar</Text>
            </View>
            <View style={[styles.button4, styles.button4FlexBox]}>
              <Text style={[styles.title1, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mask, styles.jornadaChildPosition]} />
      <View style={[styles.cardtitle20Parent, styles.buttonLayout]}>
        <View style={styles.cardtitle20}>
          <Text style={[styles.title6, styles.title6Typo]}>
            Registro de kilometraje
          </Text>
        </View>
        <View style={styles.separadorForms4}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={[styles.carddescription16, styles.button2SpaceBlock]}>
          <Text style={[styles.texto, styles.textoTypo]}>
            Antes de iniciar, por favor indícanos cuántos kilómetros (km) marca
            el tacómetro del vehículo asignado
          </Text>
        </View>
        <View style={styles.verticalFormItem}>
          <View style={[styles.verticalFormIteminput, styles.topbarSpaceBlock]}>
            <View>
              <View style={styles.main}>
                <View style={styles.button4FlexBox}>
                  <Text style={[styles.label, styles.textoTypo]}>
                    ¿Cuál es tu nombre completo?
                  </Text>
                </View>
                <View style={[styles.child, styles.childSpaceBlock]}>
                  <Text style={[styles.placeholder, styles.title6Typo]}>
                    4.900 km
                  </Text>
                </View>
                <Text style={[styles.description, styles.childSpaceBlock]}>
                  El kilometraje que estas marcando es invalido porque es
                  inferior o igual al previamente registrado
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.cardFooterDobleFlexBox}>
          <View style={styles.cardFooterDoble1}>
            <View style={[styles.button5, styles.buttonLayout]}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Registrar kilometraje
              </Text>
            </View>
            <View style={[styles.button4, styles.button4FlexBox]}>
              <Text style={[styles.title1, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaChildPosition: {
    left: 0,
    width: 414,
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
    textAlign: "center",
    color: Color.texto20,
    fontFamily: FontFamily.h4,
    lineHeight: 16,
    letterSpacing: 1,
    fontWeight: "500",
    fontSize: FontSize.body5_size,
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
  },
  topbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  iconLayout: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  parentPosition: {
    paddingVertical: Padding.p_base,
    left: 16,
    width: 382,
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  buttonLayout1: {
    height: 40,
    flexDirection: "row",
  },
  cardFooterDobleFlexBox: {
    width: 381,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLayout: {
    borderRadius: Border.br_xl,
    alignItems: "center",
  },
  button4FlexBox: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  title6Typo: {
    fontWeight: "700",
    color: Color.texto,
    fontSize: FontSize.h4_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  button2SpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  textoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  childSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    backgroundColor: Color.primario,
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
    flexDirection: "row",
    width: 83,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    backgroundColor: Color.blanco20,
  },
  title2: {
    color: Color.blanco20,
  },
  button1: {
    padding: Padding.p_96xl,
    width: 83,
    height: 40,
    borderColor: Color.blanco20,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    borderWidth: 1,
    marginLeft: 16,
    borderStyle: "solid",
    justifyContent: "center",
    overflow: "hidden",
  },
  button2: {
    paddingVertical: Padding.p_96xl,
    borderWidth: 1,
    marginLeft: 16,
    borderStyle: "solid",
    justifyContent: "center",
    overflow: "hidden",
    borderColor: Color.blanco20,
    height: 40,
    borderRadius: Border.br_981xl,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  cardFooter: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
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
    overflow: "hidden",
    height: 40,
    flexDirection: "row",
    borderColor: Color.blanco20,
    backgroundColor: Color.blanco20,
  },
  button4: {
    width: 93,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Border.br_981xl,
    marginLeft: 16,
    borderColor: Color.primario,
  },
  cardFooterDoble: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  groupParent: {
    top: 69,
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
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
  separadorForms4: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  texto: {
    fontSize: FontSize.body3_size,
    fontWeight: "300",
    textAlign: "left",
    color: Color.texto,
    alignSelf: "stretch",
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    width: 382,
  },
  label: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    flex: 1,
    textAlign: "left",
    fontWeight: "500",
  },
  placeholder: {
    display: "flex",
    width: 347,
    color: Color.texto,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  child: {
    backgroundColor: Color.blanco201,
    borderRadius: Border.br_xl,
    alignItems: "center",
    height: 24,
    flexDirection: "row",
  },
  description: {
    color: Color.danger,
    textAlign: "left",
    fontFamily: FontFamily.h4,
    fontWeight: "300",
    fontSize: FontSize.body5_size,
    marginTop: 4,
  },
  main: {
    width: 347,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
  },
  verticalFormIteminput: {
    width: 382,
  },
  verticalFormItem: {
    alignItems: "center",
  },
  button5: {
    backgroundColor: Color.gris,
    borderColor: Color.gris,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    overflow: "hidden",
    height: 40,
    flexDirection: "row",
  },
  cardFooterDoble1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cardtitle20Parent: {
    top: 68,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    left: 16,
    width: 382,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  miJornadaSiTrabaja: {
    overflow: "hidden",
    height: 710,
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornadaSiTrabaja4;
