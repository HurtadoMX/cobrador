import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const MiJornada8 = () => {
  return (
    <View style={[styles.miJornada, styles.jornadaLayout]}>
      <Image
        style={[styles.miJornadaChild, styles.jornadaLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract5.png")}
      />
      <View style={styles.topbar}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={[styles.center, styles.centerFlexBox]}>
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
        source={require("../assets/buttonpanic5.png")}
      />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.groupViewPosition,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={styles.title1}>Cuéntanos al respecto</Text>
        </View>
        <View />
        <View />
        <View />
        <View />
        <Text style={[styles.title2, styles.minLayout]}>Llegada tarde</Text>
        <View />
        <View style={styles.formdescription14}>
          <View style={styles.carddescription16}>
            <Text style={[styles.texto, styles.minTypo]}>
              Selecciona en cuánto tiempo iniciarías tu jornada laboral.
            </Text>
          </View>
        </View>
        <View />
        <View style={styles.checkboxNicaRespuesta}>
          <Image
            style={styles.checkboxNicaRespuestaChild}
            resizeMode="cover"
            source={require("../assets/ellipse-341.png")}
          />
          <Text style={[styles.contenido, styles.contenidoTypo]}>
            Menos de 30 minutos
          </Text>
        </View>
        <View style={styles.checkboxNicaRespuesta}>
          <Image
            style={styles.checkboxNicaRespuestaChild}
            resizeMode="cover"
            source={require("../assets/vector33.png")}
          />
          <Text style={[styles.contenido1, styles.contenidoTypo]}>
            Entre 1 a 2 horas máximo
          </Text>
        </View>
        <View style={styles.checkboxNicaRespuesta}>
          <Image
            style={styles.checkboxNicaRespuestaChild}
            resizeMode="cover"
            source={require("../assets/ellipse-341.png")}
          />
          <Text style={[styles.contenido, styles.contenidoTypo]}>
            Más de 2 horas
          </Text>
        </View>
        <View />
        <View />
        <View style={styles.botonCentradoPpal}>
          <View style={[styles.cardFooterDoble, styles.centerFlexBox]}>
            <View style={[styles.button, styles.buttonBorder]}>
              <Text style={[styles.title3, styles.titleTypo]}>Confirmar</Text>
            </View>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title4, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={styles.portraitOfAttractiveYoungFParent}>
          <Image
            style={styles.portraitOfAttractiveYoungFIcon}
            resizeMode="cover"
            source={require("../assets/portraitofattractiveyoungfemaleentrepreneurshowingsmartphonewhilestandingagainstisolatedbackground-1.png")}
          />
          <View style={[styles.flechita056Parent, styles.flechita056Position]}>
            <Image
              style={[styles.flechita056Icon, styles.flechita056Position]}
              resizeMode="cover"
              source={require("../assets/flechita05-6.png")}
            />
            <Image
              style={styles.flechita057Icon}
              resizeMode="cover"
              source={require("../assets/flechita05-7.png")}
            />
          </View>
        </View>
        <View style={styles.cardtitle20Parent}>
          <View style={styles.cardtitle20}>
            <Text style={styles.title5}>
              ¡Gracias por avisarnos tu tardanza!
            </Text>
          </View>
          <View style={styles.separadorForms8}>
            <Image
              style={styles.separadorFormsChild}
              resizeMode="cover"
              source={require("../assets/vector-110.png")}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={[styles.min, styles.minTypo]}>
              Recuerda que tienes 30 minutos para resolver tu incidencia, una
              vez termines o se acabe el tiempo, por favor inicia tu jornada.
            </Text>
          </View>
          <View />
          <View style={styles.botonCentradoPpal}>
            <View style={[styles.cardFooterDoble, styles.centerFlexBox]}>
              <View style={[styles.button, styles.buttonBorder]}>
                <Text style={[styles.title3, styles.titleTypo]}>Entendido</Text>
              </View>
              <View style={[styles.button1, styles.buttonBorder]}>
                <Text style={[styles.title4, styles.titleTypo]}>No</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaLayout: {
    height: 705,
    width: 414,
  },
  centerFlexBox: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
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
  groupViewPosition: {
    left: 16,
    width: 382,
    position: "absolute",
  },
  minLayout: {
    width: 350,
    display: "flex",
    alignItems: "center",
  },
  minTypo: {
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  contenidoTypo: {
    marginLeft: 10,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.texto,
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
  flechita056Position: {
    width: 41,
    top: 0,
    position: "absolute",
  },
  miJornadaChild: {
    left: 0,
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
  },
  iconLayout: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  topbar: {
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.primario,
    borderStyle: "solid",
    backgroundColor: Color.primario,
    left: 0,
    top: 0,
    position: "absolute",
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
    overflow: "hidden",
    width: 414,
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
    textAlign: "left",
    display: "flex",
    color: Color.texto,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
  },
  texto: {
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "300",
    color: Color.texto,
    flex: 1,
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
  checkboxNicaRespuestaChild: {
    width: 22,
    height: 22,
  },
  contenido: {
    width: 319,
  },
  checkboxNicaRespuesta: {
    paddingVertical: Padding.p_5xs,
    width: 382,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  contenido1: {
    width: 322,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  botonCentradoPpal: {
    width: 381,
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 68,
    paddingBottom: Padding.p_base,
    width: 382,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mask: {
    top: -23,
    backgroundColor: Color.colorGray_400,
    height: 755,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  portraitOfAttractiveYoungFIcon: {
    width: 295,
    height: 197,
    left: 0,
    top: 0,
    position: "absolute",
  },
  flechita056Icon: {
    height: 42,
    left: 0,
  },
  flechita057Icon: {
    top: 37,
    left: 7,
    height: 25,
    width: 24,
    position: "absolute",
  },
  flechita056Parent: {
    left: 4,
    height: 62,
  },
  portraitOfAttractiveYoungFParent: {
    left: 113,
    width: 156,
    height: 194,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title5: {
    color: Color.texto,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms8: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  min: {
    fontSize: FontSize.body3_size,
    color: Color.text,
    width: 350,
    display: "flex",
    alignItems: "center",
  },
  cardBody: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
  },
  cardtitle20Parent: {
    top: 194,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: 0,
    width: 382,
    alignItems: "center",
    left: 0,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  groupView: {
    top: 69,
    height: 415,
    width: 382,
  },
  miJornada: {
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
});

export default MiJornada8;
