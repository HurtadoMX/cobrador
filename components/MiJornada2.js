import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MiJornada21 = () => {
  return (
    <View style={styles.miJornada}>
      <Image
        style={[styles.miJornadaChild, styles.miJornadaChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-233321.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract21.png")}
      />
      <View style={[styles.topbar, styles.topbarPosition]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={[styles.center, styles.centerFlexBox]}>
          <Text style={[styles.title, styles.titleTypo1]}>Incidencias</Text>
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
        source={require("../assets/buttonpanic21.png")}
      />
      <View style={styles.sectiontitleYTextoresaltar24Parent}>
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={styles.title1}>
            Cuéntanos al respecto ¿De qué tipo es tu incidencia?
          </Text>
        </View>
        <View />
        <View />
        <View />
        <View style={styles.selectorItem}>
          <Text style={[styles.mdica, styles.titleTypo1]}>Médica</Text>
          <Image
            style={styles.closeCircleIcon}
            resizeMode="cover"
            source={require("../assets/closecircle1.png")}
          />
        </View>
        <View />
        <View />
        <Text style={styles.title2}>Incidencia médica</Text>
        <View />
        <View style={styles.verticalFormItem}>
          <View style={[styles.verticalFormIteminput, styles.topbarPosition]}>
            <View style={styles.content}>
              <View style={[styles.main, styles.mainSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>
                    Por favor indícanos ¿Qué pasó?
                  </Text>
                </View>
                <View style={styles.child}>
                  <Text style={[styles.placeholder, styles.textoTypo]}>{`
Describe tu incidencia



`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <Text style={styles.title2}>Registros de evidencia</Text>
        <View style={styles.formdescription14}>
          <View style={styles.carddescription16}>
            <Text style={[styles.texto, styles.textoTypo]}>
              Recuerda que puedes añadir fotos de documentos o de la situación
              en si misma.
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={[styles.cardFooterDoble, styles.mainSpaceBlock]}>
            <View style={[styles.button, styles.buttonBorder]}>
              <Text style={[styles.title4, styles.titleTypo]}>
                Añadir evidencia
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title5, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miJornadaChildPosition: {
    left: 0,
    width: 414,
  },
  topbarPosition: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  centerFlexBox: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  titleTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    color: Color.blanco20,
  },
  iconLayout: {
    width: 24,
    height: 24,
    marginLeft: 16,
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
  mainSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  textoTypo: {
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.h4,
    flex: 1,
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
  miJornadaChild: {
    height: 710,
    top: 0,
    position: "absolute",
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
    fontSize: FontSize.h4_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    flex: 1,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
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
    width: 414,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    top: 607,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
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
  },
  closeCircleIcon: {
    width: 18,
    height: 18,
    marginLeft: 16,
    overflow: "hidden",
  },
  selectorItem: {
    borderRadius: Border.br_mid_5,
    backgroundColor: Color.primario20,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_10xs,
    paddingBottom: Padding.p_9xs,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title2: {
    display: "flex",
    width: 350,
    textAlign: "left",
    color: Color.texto,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    flex: 1,
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    color: Color.gris,
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
    color: Color.texto,
    fontWeight: "300",
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    width: 382,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  formdescription14: {
    width: 382,
    alignItems: "center",
  },
  title4: {
    color: Color.blanco20,
    fontSize: FontSize.h5_size,
  },
  button: {
    height: 40,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primario,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
  },
  title5: {
    color: Color.primario,
  },
  button1: {
    borderRadius: Border.br_981xl,
    width: 93,
    display: "none",
    marginLeft: 16,
  },
  cardFooterDoble: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 69,
    left: 16,
    paddingBottom: Padding.p_base,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  miJornada: {
    height: 757,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada21;
