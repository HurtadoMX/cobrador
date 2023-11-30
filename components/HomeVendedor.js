import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import TiempoJornada from "./Individuals/Cards/TiempoJornada";
import NavbarBottom from "./Individuals/Navbar/NavbarBottom";
import NavbarTop from "./Individuals/Navbar/NavbarTop";
import RankingHome from "./Individuals/Tables/RankingHome";
import Ranking from "./Individuals/Titles/Ranking";

const HomeVendedor = () => {

  return (
    <View style={styles.homeVendedor}>

      {/* INICIO NAVBAR TOP */}
        {/* <NavbarTop /> */}
      {/* FIN NAVBAR TOP */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerDescription}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/group-21192.png")}
            />
            <View style={styles.sectiontitle16DescriptionParent}>
              <View
                style={[
                  styles.sectiontitle16Description,
                  styles.sectiontitle16Layout,
                ]}
              >
                <View style={[styles.title24, styles.topbarSpaceBlock]}>
                  <Text style={[styles.title4, styles.titleTypo]}>
                    Bienvenido a tu jornada
                  </Text>
                </View>
              </View>
              <View style={[styles.sectiontitle18, styles.sectiontitle16Layout]}>
                <View style={[styles.title24, styles.topbarSpaceBlock]}>
                  <Text style={[styles.title5, styles.titleTypo1]}>
                    Antonio Machado
                  </Text>
                </View>
              </View>
            </View>
        </View>
        {/* INICIO CUADRO DE JORNADA */}
        <TiempoJornada/>
          {/* FIN CUADRO DE JORNADA */}
      </View>
      <View style={styles.containerMedium}></View>
      <View style={styles.containerFull}>
        {/* INICIO TABLA DE VENDEDOR ESTATAL */}
        <View style={styles.tableRanking}>
        {/* TITULO TABLA */}
          <Ranking text={"Tu crecimiento en el ranking"}/>

            <RankingHome title={"Cobrador estatal"}/>
          <View style={styles.SpacingTables}></View>
          <RankingHome title={"Cobrador Nacional"}/>
          <Ranking text={"Feedback de tu última evaluación"}/>
        </View>
        {/* FIN TABLA DE VENDEDOR ESTATAL */}
      </View>
      </ScrollView>
      
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic1.png")}
      /> 
      {/* INICIO EL NAVBAR OPTIONS */}
            {/* <NavbarBottom/> */}
      {/* FIN EL NAVBAR OPTIONS */}

    </View>
  );
};

const styles = StyleSheet.create({
  containerDescription:{
    backgroundColor: "#3B1678",
    top: -20,
    height: 510,
    width: "auto",

  },
  containerMedium:{
    backgroundColor: "#F2F2F2",
    width: 900,
    height: 570,
    top: 425,
    left: -250,
    position: "absolute",
    borderTopRightRadius: 1000,
    borderTopLeftRadius: 1000, 
  },
  containerFull:{
    backgroundColor: "transparent",
    height: "auto",
    // width: 390,
    top: -90,
  },
  SpacingTables:{
    height: 50,
  },
  tableRanking:{
    // top: 50,
  },  
  scrollView: {
    marginHorizontal: 0,
    height: '100%',
    width: '100%',
    backgroundColor: "#F2F2F2"
  },

  titleTypo1: {
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  topbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  sectiontitle16Layout: {
    height: 33,
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  frameLayout: {
    height: 44,
    width: 44,
  },
  homeVendedorChild: {
    height: 481,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  image9Icon: {
    top: 13,
    left: 207,
    width: 0,
    height: 0,
    position: "absolute",
  },
  homeVendedorItem: {
    top: 1468,
    left: 447,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 117,
    height: 8,
    position: "absolute",
  },
  groupIcon: {
    height: "0.56%",
    width: "4.11%",
    top: "41.21%",
    right: "-39.86%",
    bottom: "58.23%",
    left: "135.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeVendedorInner: {
    top: 3314,
    left: 801,
    height: 84,
    position: "absolute",
  },
  subtractIcon: {
    top: 430,
    right: 10,
    height: 1543,
    width: 414,
  },
  title4: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    flex: 1,
  },
  title24: {
    justifyContent: "center",
    alignSelf: "stretch",
    width: 382,
    overflow: "hidden",
  },
  sectiontitle16Description: {
    width: 250,
    left: 0,
    top: 0,
  },
  title5: {
    color: Color.white,
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  sectiontitle18: {
    top: 33,
    width: 250,
    left: 0,
  },
  sectiontitle16DescriptionParent: {
    height: 66,
    width: 250,
    marginLeft: 16,
  },
  groupParent: {
    top: 99,
    padding: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    width: 382,
    left: 16,
    // position: "absolute",
    overflow: "hidden",
  },
  buttonpanicIcon: {
    right: 35,
    bottom: 100,
    width: 55,
    height: 55,
    position: "absolute",
  },
  homeVendedor: {
    height: "100%",
    // overflow: "hidden",
    width: 414,
    backgroundColor: Color.white,
  },
});

export default HomeVendedor;
