import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const MiJornadaNoTrabaja1 = () => {
  return (
    <View style={[styles.miJornadaNoTrabaja, styles.jornadaLayout]}>
      <Image
        style={[styles.miJornadaNoTrabajaChild, styles.jornadaLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-233321.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={styles.miJornadaNoTrabajaItem} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group21.png")}
      />
      <View style={styles.miJornadaNoTrabajaInner} />
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
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
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
        style={[styles.miJornadaNoTrabajaChild1, styles.maskLayout]}
        resizeMode="cover"
        source={require("../assets/group-10871.png")}
      />
      <View style={styles.topbar}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.titleTypo3]}>Mi jornada</Text>
        </View>
        <Image
          style={styles.bellIcon}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={styles.rightIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic21.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/group-21061.png")}
        />
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleTypo2]}>
            ¿Vas a trabajar hoy?
          </Text>
        </View>
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.title2, styles.titleTypo1]}>Si</Text>
            </View>
            <View style={[styles.button1, styles.buttonLayout]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
            <View style={[styles.button2, styles.buttonLayout]}>
              <Text style={[styles.title2, styles.titleTypo1]}>
                Llego tarde
              </Text>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleTypo2]}>
            ¿Tuviste alguna incidencia?
          </Text>
        </View>
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
              <Text style={[styles.title2, styles.titleTypo1]}>Si</Text>
            </View>
            <View style={[styles.button4, styles.buttonSpaceBlock]}>
              <Text style={[styles.title7, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.tripleButton}>
          <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
            <View style={[styles.button5, styles.button5Layout]}>
              <Text style={[styles.title3, styles.titleTypo1]}>Confirmar</Text>
            </View>
            <View style={[styles.button6, styles.buttonSpaceBlock]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mask, styles.maskLayout]} />
      <View style={styles.groupView}>
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
        <View style={[styles.cardtitle20Parent, styles.button5Layout]}>
          <View style={styles.cardtitle20}>
            <Text style={[styles.title10, styles.titleTypo]}>
              ¡Gracias por notificarnos!
            </Text>
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
              En breve se comunicará contigo tu supervisor a cargo.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jornadaLayout: {
    height: 710,
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
  maskLayout: {
    width: 414,
    left: 0,
  },
  titleTypo3: {
    color: Color.blanco20,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  titleTypo2: {
    fontWeight: "700",
    flex: 1,
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
  titleTypo1: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
  },
  buttonLayout: {
    height: 40,
    borderColor: Color.blanco20,
  },
  titleTypo: {
    color: Color.texto,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  button5Layout: {
    borderRadius: Border.br_xl,
    alignItems: "center",
    backgroundColor: Color.blanco20,
  },
  flechita056Position: {
    width: 41,
    top: 0,
    position: "absolute",
  },
  miJornadaNoTrabajaChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  image9Icon: {
    top: 13,
    left: 207,
    width: 0,
    height: 0,
    position: "absolute",
  },
  miJornadaNoTrabajaItem: {
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
  miJornadaNoTrabajaInner: {
    top: 3314,
    left: 801,
    height: 84,
    position: "absolute",
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
  home: {
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontWeight: "500",
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
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontWeight: "500",
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
  miJornadaNoTrabajaChild1: {
    top: 255,
    height: 391,
    left: 0,
    position: "absolute",
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    fontSize: FontSize.h4_size,
    flex: 1,
    fontWeight: "500",
    color: Color.blanco20,
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  rightIcon: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  topbar: {
    backgroundColor: Color.primario,
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    borderColor: Color.primario,
    borderStyle: "solid",
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
    fontSize: FontSize.h2_size,
    color: Color.blanco20,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title2: {
    color: Color.blanco20,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  button: {
    height: 40,
    borderColor: Color.blanco20,
    width: 83,
    borderRadius: Border.br_981xl,
    alignItems: "center",
  },
  title3: {
    color: Color.primario,
    textAlign: "center",
    fontFamily: FontFamily.h4,
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
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  button2: {
    paddingVertical: Padding.p_96xl,
    borderWidth: 1,
    marginLeft: 16,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
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
  title7: {
    fontSize: FontSize.h5_size,
    fontWeight: "500",
  },
  button4: {
    height: 40,
    borderColor: Color.blanco20,
    width: 83,
    borderRadius: Border.br_981xl,
    alignItems: "center",
    marginLeft: 16,
    backgroundColor: Color.blanco20,
  },
  button5: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 40,
    borderColor: Color.blanco20,
  },
  button6: {
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
    top: -9,
    backgroundColor: Color.colorGray_300,
    height: 727,
    left: 0,
    position: "absolute",
    overflow: "hidden",
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
  title10: {
    fontWeight: "700",
    flex: 1,
    fontSize: FontSize.h4_size,
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
  min: {
    fontSize: FontSize.body3_size,
    fontWeight: "300",
    color: Color.text,
    textAlign: "left",
    display: "flex",
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
  cardtitle20Parent: {
    top: 194,
    paddingHorizontal: 0,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_base,
    width: 382,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 32,
    height: 324,
    width: 382,
    left: 16,
    position: "absolute",
  },
  miJornadaNoTrabaja: {
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
});

export default MiJornadaNoTrabaja1;
