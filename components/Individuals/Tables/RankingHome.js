import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const RankingHome = ({title}) => {
  return (
    <View style={[ styles.tableContainer]}>
        <View style={[ styles.cardtittleShadowBox]}>
        <View style={styles.cardtittleRanking}>
        <Image
            style={[styles.topIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../../../assets/top3.png")}
        />
        <Text style={[styles.title7, styles.titleTypo4]}>
            {title}
        </Text>
        </View>
        <View style={styles.table}>
        <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>3</Text>
            <Text style={[styles.lisandroGarca, styles.walterRamrezLayout]}>
            Lisandro García
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>5.047</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>-250</Text>
        </View>
        <Text style={[styles.text6, styles.textTypo1]}>3</Text>
        <View style={styles.tablaShadowBox}>
            <Text style={[styles.text7, styles.textTypo]}>4</Text>
            <Text style={[styles.antonioMachado, styles.textTypo]}>
            Antonio Machado
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text9, styles.textTypo]}>4.203</Text>
            <Text style={[styles.text9, styles.textTypo]}>+720</Text>
        </View>
        <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>5</Text>
            <Text style={[styles.walterRamrez, styles.walterRamrezLayout]}>
            Walter Ramírez
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>3.432</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>+320</Text>
        </View>
        </View>

            <View style={styles.lineaFinal}></View>
            
            <Text style={styles.textFinal}>Estas a tan solo <Text style={{fontWeight: "700"}}>769</Text> puntos de subir en el ranking. ¡Tu puedes! </Text>
            <View style={styles.textVerMas}>
                <Text style={styles.textVerMas}>Ver mas</Text>
            </View>

        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
        <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../../../assets/vector-110.png")}
        />
        </View>
        </View>

    </View>
    );
};


const styles = StyleSheet.create({
    tableContainer:{
        width: 360,
        borderRadius: 20,
        left: 0,
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 5.51,
        elevation: 15,
    },
    cardtittleShadowBox: {
        backgroundColor: "white",
        paddingVertical: Padding.p_base,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        width: 360,
        height: "auto",
        bottom: 0,
        shadowOpacity: 0,
        // elevation: 12,
        // shadowRadius: 12,
        borderRadius: Border.br_xl,
        left: 15,
        // position: "absolute",
        overflow: "hidden",

      },
      cardtittleRanking: {
        paddingHorizontal: Padding.p_29xl,
        paddingVertical: Padding.p_3xs,
        width: 350,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
      },
      topIcon: {
        height: 29,
      },
      iconLayout1: {
        width: 29,
        height: 29,
      },
      title7: {
        marginLeft: 16,
        color: Color.texto,
        textAlign: "center",
      },
      titleTypo4: {
        fontFamily: FontFamily.h4,
        fontWeight: "700",
        fontSize: FontSize.h5_size,
      },
      table: {
        paddingBottom: Padding.p_xs,
        justifyContent: "center",
        paddingHorizontal: Padding.p_base,
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden",
      },
      tabla: {
        paddingVertical: Padding.p_7xs,
        paddingHorizontal: 0,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
      },
      text2: {
        color: Color.text,
        fontWeight: "300",
        fontSize: FontSize.bodyRegular_size,
        fontFamily: FontFamily.h4,
        display: "flex",
        alignItems: "center",
      },
      textFlexBox1: {
        width: 30,
        justifyContent: "center",
        textAlign: "center",
      },
      lisandroGarca: {
        fontWeight: "300",
        fontFamily: FontFamily.h4,
        color: Color.texto,
        fontSize: FontSize.bodyRegular_size,
        display: "flex",
        alignItems: "center",
      },
      walterRamrezLayout: {
        width: 176,
        textAlign: "left",
        marginLeft: 8,
      },
      text3: {
        marginLeft: 8,
        display: "none",
        textAlign: "center",
      },
      textTypo1: {
        color: Color.text,
        fontWeight: "300",
        fontSize: FontSize.bodyRegular_size,
        fontFamily: FontFamily.h4,
      },
      text4: {
        color: Color.text,
        fontWeight: "300",
        fontSize: FontSize.bodyRegular_size,
        fontFamily: FontFamily.h4,
        display: "flex",
        alignItems: "center",
      },
  
      text6: {
        display: "none",
        textAlign: "center",
      },
      text7: {
        width: 30,
        justifyContent: "center",
        textAlign: "center",
      },
      textFlexBox: {
        width: 60,
        marginLeft: 8,
        justifyContent: "center",
        textAlign: "center",
      },
      tablaShadowBox: {
        borderColor: Color.colorLightskyblue_100,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "#62b5e5",
    paddingVertical: Padding.p_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, // Ajusta según necesidad
      height: 3, // Ajusta según necesidad
    },
    borderRadius: Border.br_xl,
    backgroundColor: 'white', // Añadido para asegurar que la sombra se vea
      },
      textTypo: {
        color: Color.secundario20,
        fontWeight: "300",
        fontSize: FontSize.bodyRegular_size,
        display: "flex",
        fontFamily: FontFamily.h4,
        alignItems: "center",
      },
      text9: {
        width: 60,
        marginLeft: 8,
        justifyContent: "center",
        textAlign: "center",
      },
      walterRamrez: {
        color: Color.text,
        fontWeight: "300",
        fontSize: FontSize.bodyRegular_size,
        fontFamily: FontFamily.h4,
        display: "flex",
        alignItems: "center",
      },
      separadorForms1: {
        paddingVertical: Padding.p_5xs,
      },
      cardSpaceBlock: {
        paddingHorizontal: 0,
        paddingVertical: Padding.p_5xs,
      },
      separadorFormsChild: {
        width: 351,
        height: 1,
      },
      lineaFinal: {
        backgroundColor: "#CFCFCF",
        border: "1px solid black",
        width: 330,
        height: 1,
      },

      textFinal:{
        fontSize: FontSize.h4_size,
        fontFamily: FontFamily.bodyRegular,
        color: "#2C2C2E",
        letterSpacing: .3,
        top: 20,
        width: 330,
        height: 50,
        
      },
      textVerMas:{
        fontSize: FontSize.bodyRegular_size,
        fontFamily: FontFamily.h4,
        textDecoration: "underline",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "end",
        left: 70,
        width: 100,
        top: 20,
        height: 50,
        color: "#62B5E5",
        fontWeight: "700",
      },
  });

export default RankingHome;
