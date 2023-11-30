import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const NavbarBottom = () => {
  const [activeTab, setActiveTab] = React.useState('Home'); // Estado para manejar la pestaña activa
  const [backgroundImage, setBackgroundImage] = React.useState(require("../../../assets/fondo1.png")); // Estado para manejar el fondo

  // Función para actualizar la pestaña activa y el fondo
  const handlePress = (tab, backgroundSource) => {
    setActiveTab(tab);
    setBackgroundImage(backgroundSource);
  };

  // Función para renderizar cada item de la navbar
  const renderNavItem = (name, iconSource, backgroundSource) => {
    const isActive = activeTab === name;
    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress(name, backgroundSource)}
        key={name}
      >
        {isActive && <View style={styles.wave} />}
        <Image
          style={[styles.icon, isActive && styles.activeIcon]}
          source={iconSource}
        />
        <Text style={[styles.text, isActive && styles.activeText]}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.navbar}
      imageStyle={styles.backgroundImage}
    >
      {renderNavItem('Home', require("../../../assets/frame-93.png"), require("../../../assets/fondo1.png"))}
      {renderNavItem('Ranking', require("../../../assets/vector32.png"), require("../../../assets/fondo2.png"))}
      {renderNavItem('Jornada', require("../../../assets/frame-926.png"), require("../../../assets/fondo3.png"))}
      {renderNavItem('Ganancias', require("../../../assets/frame-923.png"), require("../../../assets/fondo4.png"))}
      {renderNavItem('Mi perfil', require("../../../assets/frame-923.png"), require("../../../assets/fondo5.png"))}
      {/* Repite para el resto de las opciones, asegurándote de actualizar el fondo según corresponda */}
    </ImageBackground>
  );
};





const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        width: 390,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 24,
      },
      backgroundImage: {
        resizeMode: 'cover', // o 'stretch' si necesitas que se ajuste de manera diferente
      },
      navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70, // Ancho fijo para cada ítem para asegurar que la "onda" se alinee correctamente
      },
      navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70, // Ancho fijo para cada ítem para asegurar que la "onda" se alinee correctamente
      },
      icon: {
        width: 28,
        height: 28,
        marginBottom: 4,
      },
      activeIcon: {
        // Estilos para el ícono activo si es necesario
      },
      text: {
        fontSize: FontSize.body5_size,
        fontFamily: FontFamily.h4,
        color: Color.texto20,
      },
      activeText: {
        color: Color.primary, // Cambia el color del texto cuando está activo
        fontWeight: 'bold',
      },
});

export default NavbarBottom;