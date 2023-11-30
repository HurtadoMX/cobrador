import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import MapView from "react-native-maps";
import HazLlegado from "../components/Individuals/Modales/HazLlegado";

const SiTrabaja = () => {
    const [isPopoverVisible, setPopoverVisible] = React.useState(false);

    const togglePopover = () => {
        setPopoverVisible(!isPopoverVisible);
    };
  return (
    <>
    <View style={styles.fondoMorado}>
        <View style={styles.fondoMaps}>
            {/* Barra amarilla */}
            <View style={styles.yellowBar}>
                {/* Icono de cronómetro */}
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require("../assets/verdaderas/reloj.png")} // Cambia esto por el nombre real de tu imagen
                />
                <Text style={styles.timeText}>00:00:00</Text>
                {/* Icono de tareas */}
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require("../assets/verdaderas/userMaps.png")} // Cambia esto por el nombre real de tu imagen
                />
                <Text style={styles.tasksText}>10/12</Text>
                <Text style={styles.onTimeText}>A tiempo</Text>
            </View>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 16.678920547304198,
                    longitude: -93.73643498504529,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    // Otras propiedades que puedas necesitar como followsUserLocation, zoomEnabled, etc.
                />
                {/* Otros componentes que puedas necesitar por encima del mapa */}
            </View>

            <View style={styles.containerMedium}></View>
            
            <TouchableOpacity onPress={togglePopover}>
                <Image
                style={styles.iconArrow}
                resizeMode="cover"
                source={require("../assets/verdaderas/flechaMaps.png")}
                />
            </TouchableOpacity>

            <View style={styles.direccion}>
                <View style={styles.direccionPrimerLinea}>
                    <Text style={styles.textLight}>Dirigiete hacia:</Text>
                    <Text style={styles.textBold}>Av. Guanajuato en </Text>
                    <Text style={styles.textBold}>425mts </Text>
                </View>
             <View style={styles.lineaFinal}></View>

                <View style={styles.direccionSegundaLinea}>
                    <Text style={styles.textLight}>Oficina</Text>
                    <Text style={styles.textBold}>Abastos </Text>
                </View>

                <View style={styles.direccionTercerLinea}>
                    <Text style={styles.textLight}>Punto de llegada</Text>
                    <Text style={styles.textBold}>Av. J.B Sierra </Text>
                </View>

            </View>

        </View>
    </View>

    <HazLlegado isVisible={isPopoverVisible} onClose={() => setPopoverVisible(false)} />

    </>

  )
}

const styles = StyleSheet.create({
    fondoMorado: {
        width: "100%",
        height: "100%",
        backgroundColor: "#3B1678"
    },
    fondoMaps: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        top: 100,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    yellowBar: {
        top: -30,
        left: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        height: 60,
        width: 350,
        backgroundColor: '#F3BD48', // Usa el color exacto de tu diseño
        flexDirection: 'row', // Alinea los ítems en fila
        alignItems: 'center', // Centra verticalmente
        justifyContent: 'space-around', // Distribuye el espacio
        paddingVertical: Padding.md, // Usa un valor de tu GlobalStyles
        paddingHorizontal: Padding.lg, // Usa un valor de tu GlobalStyles
    },
    icon: {
        width: 40, // Ajusta según el tamaño de tus íconos
        height: 40, // Ajusta según el tamaño de tus íconos
    },
    timeText: {
        fontFamily: FontFamily.bold,
        fontSize: 16, // Ajusta según tu GlobalStyles
        color: Color.white,
        fontWeight: "700" // Ajusta según tu GlobalStyles
        // Otros estilos para el texto...
    },
    tasksText: {
        fontFamily: FontFamily.bold,
        fontSize: 16, // Ajusta según tu GlobalStyles
        color: Color.white,
        fontWeight: "700" 
        // Otros estilos para el texto...
    },
    onTimeText: {
        fontFamily: FontFamily.bold,
        fontSize: 16, // Ajusta según tu GlobalStyles
        color: Color.white,
        fontWeight: "700" 
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: -1,
        height: 700,
        width: 370,
        left: 10,
        top: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      },
      map: {
        borderTopLeftRadius: 25, // Si quieres bordes redondeados en la parte superior del mapa
        borderTopRightRadius: 25,
        ...StyleSheet.absoluteFillObject,
      },



      containerMedium:{
        backgroundColor: "#fff",
        width: 900,
        height: 570,
        top: 425,
        left: -250,
        position: "absolute",
        borderTopRightRadius: 1000,
        borderTopLeftRadius: 1000, 
      },
      iconArrow:{
        top: 335,
        left: 170,
      },
      lineaFinal: {
        backgroundColor: "#CFCFCF",
        width: 330,
        height: 1,
        left:30,
        marginBottom: 20,
    },
    direccion:{
        backgroundColor: "transparent",
        height: "100%",
        top: 340,

    },
    direccionPrimerLinea:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    direccionSegundaLinea:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,

    },
    direccionTercerLinea:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
    },
    textLight:{
        fontSize: 17,
        fontWeight: "300"
    },
    textBold:{
        fontSize: 17,
        fontWeight: "700"
    }
});

export default SiTrabaja;
