
import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const TiempoJornada = () => {

    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Jornada'); // Navega a la pantalla Home
    };

  return (
    
    //   {/* INICIO CUADRO DE JORNADA */}
      <View style={[styles.card, styles.cardShadowBox]}>
        <View style={[styles.cardHeader, styles.cardSpaceBlock1]}>
          <Text style={[styles.title, styles.titleTypo4]}>
            Tu jornada debe empezar en:
          </Text>
          <Image
            style={[styles.arrowIcon, styles.text3SpaceBlock]}
            resizeMode="cover"
            source={require("../../../assets/arrow11.png")}
          />
        </View>
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.titleTime, styles.titleTypo3]}>45:35 min</Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
                <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.title2, styles.titleTypo1]}>
                    Empezar ahora
                </Text>
                </View>
        </TouchableOpacity>
      </View>
    //   {/* FIN CUADRO DE JORNADA */}

      );
    };

    const styles = StyleSheet.create({
        cardShadowBox: {
            top: 220,
            shadowOpacity: 1,
            elevation: 12,
            shadowRadius: 12,
            shadowOffset: {
              width: -3,
              height: 3,
            },
            shadowColor: "rgba(0, 0, 0, 0.12)",
            width: 350,
            position: "absolute",
          },
          card: {
            top: 191,
            height: 182,
            alignItems: "center",
            width: 32,
            borderRadius: Border.br_xl,
            shadowOpacity: 1,
            elevation: 12,
            shadowRadius: 12,
            shadowOffset: {
              width: -3,
              height: 3,
            },
            shadowColor: "rgba(0, 0, 0, 0.12)",
            left: 20,
            backgroundColor: Color.white,
          },
          cardHeader: {
            flexDirection: "row",
            height: 48,
            backgroundColor: Color.secundario,
            alignItems: "center",
            borderBottomLeftRadius: Border.br_xl,
            borderTopRightRadius: Border.br_xl,
          },
          cardSpaceBlock1: {
            paddingVertical: Padding.p_xs,
            paddingHorizontal: Padding.p_base,
            alignSelf: "stretch",
          },
          title: {
            color: Color.white,
            height: 21,
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            flex: 1,
            alignItems: "center",
          },
          titleTypo4: {
            fontFamily: FontFamily.h4,
            fontWeight: "700",
            fontSize: FontSize.h5_size,
          },
          arrowIcon: {
            width: 13,
            height: 13,
          },
          text3SpaceBlock: {
            marginLeft: 8,
            display: "none",
          },
          sectiontitleYTextoresaltar24: {
            top: 0,
            height: 70,
            justifyContent: "center",
            flexDirection: "row",
            alignSelf: "stretch",
            alignItems: "center",
            overflow: "hidden",
          },
          titleTime: {
            top: 5,
            color: Color.texto,
            flex: 1,
          },
          titleTypo3: {
            fontSize: FontSize.h2_size,
            textAlign: "center",
            fontFamily: FontFamily.h4,
            fontWeight: "700",
          },
          button: {
            top: 0,
            right: 5,
            backgroundColor: Color.gris20,
            borderColor: Color.gris20,
            borderWidth: 1,
            paddingHorizontal: Padding.p_xs,
            height: 40,
            borderStyle: "solid",
          },
          buttonFlexBox: {
            paddingHorizontal: Padding.p_xs,
            height: 40,
            paddingVertical: Padding.p_5xs,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: Border.br_xl,
            overflow: "hidden",
          },
          title2: {
            color: Color.white,
            fontSize: FontSize.h5_size,
            fontWeight: "500",
            textAlign: "center",
          },
          titleTypo1: {
            fontWeight: "500",
            fontFamily: FontFamily.h4,
          },
      });
      

      
      export default TiempoJornada;