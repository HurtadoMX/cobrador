import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splsh = () => {
  return (
    <View style={styles.splsh}>
      <View style={styles.splshChildPosition} />
    
      <Image
        style={styles.asesora}
        resizeMode="cover"
        source={require("../assets/asesora.png")}
      />

      <Image
        style={[styles.splshChild, styles.splshChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2333.png")}
      />

      <Image
        style={[styles.recurso13Icon, styles.vectorIconLayout4]}
        resizeMode="cover"
        source={require("../assets/recurso-13.png")}
      />
      <Image
        style={[styles.recurso12Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-12.png")}
      />

      <View style={[styles.ContainerLogo]}>
        <Image
          style={[styles.recurso13Icon, styles.Logo]}
          resizeMode="cover"
          source={require("../assets/group-1647.png")}
        />
      </View>



     

      <Image
        style={[styles.recurso32Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/recurso-32.png")}
      />
      <Image
        style={[styles.recurso33Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/recurso-33.png")}
      />
     
      <Image
        style={styles.rayitoIcon}
        resizeMode="cover"
        source={require("../assets/rayito08-2.png")}
      />

      {/* <Image
        style={styles.asesora}
        resizeMode="cover"
        source={require("../assets/asesora.png")}
      /> */}
      
      <Text style={styles.creaTuFuturo}>
        Crea tu futuro con cada acción de hoy
      </Text> 
    </View>
  );
};

const styles = StyleSheet.create({

  splshChildPosition: {
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
  },

  
  asesora: {
    width: '100%',
    height: '100%',
    position: "absolute",
    zIndex: -1, // Asegúrate de que esté detrás de los demás elementos
  },


  ContainerLogo:{
    width: 100,
  },

  Logo: {
    top: 230,
    zIndex: "10",
    width: 260,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 65,
    right: 0,
    position: "absolute",
  },

  vectorIconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },

  iconLayout: {
    width: "12.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },

  iconPosition: {
    left: "62.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },

  rayitoIcon: {
    top: 624,
    left: 145,
    width: 100,
    height: 99,
    position: "absolute",
  },

  splshChild: {
    opacity: 0.5, // Ajusta la transparencia según necesites
  },

  splsh: {
    backgroundColor: Color.blanco20,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 736,
  },

  recurso13Icon: {
    height: "8.7%",
    width: "16.67%",
    top: "22.55%",
    right: "12.08%",
    bottom: "68.75%",
    left: "71.26%",
  },

  recurso12Icon: {
    height: "8.17%",
    top: "13.72%",
    right: "73.67%",
    bottom: "78.11%",
    left: "13.77%",
  },

  recurso32Icon: {
    height: "4.62%",
    width: "9.66%",
    top: "19.29%",
    right: "28.02%",
    bottom: "76.09%",
  },

  recurso33Icon: {
    height: "5.94%",
    top: "49.59%",
    right: "78.74%",
    bottom: "44.47%",
    left: "8.7%",
  },

  creaTuFuturo: {
    top: 402,
    left: 88,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.h4,
    color: Color.white,
    textAlign: "center",
    width: 230,
    position: "absolute",
  },

});

export default Splsh;
