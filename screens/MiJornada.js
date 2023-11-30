import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MiJornada18 = () => {
  return (
    <View style={styles.miJornada}>
      {/* <Image
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
        <View style={styles.center}>
          <Text style={styles.title}>Incidencias</Text>
        </View>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={styles.iconLayout}
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
          <Text style={styles.title1}>Cuéntanos al respecto</Text>
        </View>
        <View />
        <View />
        <View />
        <View />
        <Text style={styles.title2}>Llegada tarde</Text>
        <View />
        <View style={styles.formdescription14}>
          <View
            style={[
              styles.carddescription16,
              styles.carddescription16SpaceBlock,
            ]}
          >
            <Text style={styles.texto}>
              Selecciona en cuánto tiempo iniciarías tu jornada laboral.
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.carddescription16SpaceBlock}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector33.png")}
          />
          <Text
            style={[styles.contenido, styles.contenidoTypo]}
          >{`Menos de 30 minutos `}</Text>
        </View>
        <View style={styles.carddescription16SpaceBlock}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-341.png")}
          />
          <Text style={[styles.contenido1, styles.contenidoTypo]}>
            Entre 1 a 2 horas máximo
          </Text>
        </View>
        <View style={styles.carddescription16SpaceBlock}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-341.png")}
          />
          <Text style={[styles.contenido1, styles.contenidoTypo]}>
            Hasta 2 horas y 30 minutos
          </Text>
        </View>
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
                  <Text style={styles.texto}>{`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ultricies sapien. Vestibulum interdum lectus.

`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={[styles.cardFooterDoble, styles.mainSpaceBlock]}>
            <View style={[styles.button, styles.buttonBorder]}>
              <Text style={[styles.title3, styles.titleTypo]}>Confirmar</Text>
            </View>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title4, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View> */}
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
  carddescription16SpaceBlock: {
    paddingVertical: Padding.p_5xs,
    width: 382,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  contenidoTypo: {
    marginLeft: 10,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
  },
  mainSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
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
    width: 414,
    top: 0,
    position: "absolute",
    height: 705,
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
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    fontSize: FontSize.h4_size,
    color: Color.blanco20,
    flex: 1,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  iconLayout: {
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
    paddingHorizontal: Padding.p_base,
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
    width: 414,
    left: 0,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    top: 546,
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
  texto: {
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.texto,
    fontFamily: FontFamily.h4,
    flex: 1,
  },
  carddescription16: {
    justifyContent: "center",
  },
  formdescription14: {
    width: 382,
    alignItems: "center",
  },
  vectorIcon1: {
    width: 22,
    height: 22,
  },
  contenido: {
    width: 322,
  },
  contenido1: {
    width: 319,
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
  title3: {
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
  title4: {
    color: Color.primario,
  },
  button1: {
    borderRadius: Border.br_981xl,
    width: 93,
    display: "none",
    marginLeft: 16,
  },
  cardFooterDoble: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 68,
    left: 16,
    paddingBottom: Padding.p_base,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  miJornada: {
    width: "100%",
    overflow: "hidden",
    height: 705,
    flex: 1,
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada18;
