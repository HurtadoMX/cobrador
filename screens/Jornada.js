import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Kilometraje from '../components/Individuals/Modales/Kilometraje';
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Jornada = () => {

    const navigation = useNavigation();

    const [selectedButton, setSelectedButton] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showIncidence, setShowIncidence] = useState(false);
    const [selectedIncidenceButton, setSelectedIncidenceButton] = useState(null);
    const [showIncidenceConfirm, setShowIncidenceConfirm] = useState(false);

    // MODAL DEL KILOMETRAJE
    const [isPopoverVisible, setPopoverVisible] = React.useState(false);

    const buttons = ['Si', 'No', 'Llego Tarde'];
    const incidenceButtons = ['Si', 'No'];

    const handleButtonPress = (index) => {
        setSelectedButton(index);
        setShowConfirm(index === 0 || index === 2);
        setShowIncidence(index === 1);
        setShowIncidenceConfirm(false);
        setSelectedIncidenceButton(null); // Resetea la selección de incidencia
    };

    const handleIncidenceButtonPress = (index) => {
        setSelectedIncidenceButton(index);
        setShowIncidenceConfirm(true);
    };

    const handleConfirmPress = () => {
        if (selectedButton === 0) { // Si
            // navigation.navigate('SiTrabaja');
            setPopoverVisible(!isPopoverVisible);
        } else if (selectedButton === 1 && selectedIncidenceButton === 0) { // No + Si en incidencia
            navigation.navigate('Incidencias');
        } else if (selectedButton === 1 && selectedIncidenceButton === 1) { // No + No en incidencia
            navigation.navigate('ComunicacionIncidencia');
        }
    };
    
    return (
        <>
        <View style={styles.containerJornada}>
            <Image
                style={[styles.fondoJornada]}
                resizeMode="cover"
                source={require("../assets/fondoJornada.png")}
            />

            <View style={styles.contentButtonsWrapper}>
            <Image
                style={[styles.messageIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/verdaderas/pregunta.png")}
            />
            <Text style={styles.questionText}>¿Vas a trabajar hoy?</Text>
                <View style={styles.contentButtons}>
                    {buttons.map((button, index) => (
                        <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            selectedButton === index ? styles.buttonSelected : null
                        ]}
                        onPress={() => handleButtonPress(index)}
                        >
                            <Text style={[
                                styles.buttonText,
                                selectedButton === index ? styles.textSelected : null
                            ]}>
                                {button}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {showConfirm && !showIncidence && (
                    <TouchableOpacity
                        style={[styles.button, styles.confirmButton]}
                        onPress={handleConfirmPress}
                    >
                        <Text style={[styles.buttonText, styles.confirmButtonText]}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                )}


                {showIncidence && (
                    <>
                        <Text style={styles.incidenceText}>¿Tuviste alguna incidencia?</Text>
                        <View style={styles.contentButtons}>
                            {incidenceButtons.map((button, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.button,
                                        selectedIncidenceButton === index ? styles.buttonSelected : null
                                    ]}
                                    onPress={() => handleIncidenceButtonPress(index)}
                                >
                                    <Text style={[
                                        styles.buttonText,
                                        selectedIncidenceButton === index ? styles.textSelected : null
                                    ]}>
                                        {button}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {showIncidenceConfirm && (
                            <TouchableOpacity
                                style={[styles.button, styles.confirmButton]}
                                onPress={handleConfirmPress}
                            >
                                <Text style={[styles.buttonText, styles.confirmButtonText]}>
                                    Confirmar
                                </Text>
                            </TouchableOpacity>
                        )}
                    </>
                )}
            </View>
        </View>

        <Kilometraje isVisible={isPopoverVisible} onClose={() => setPopoverVisible(false)} />

        </>

    );
};

const styles = StyleSheet.create({
    containerJornada: {
        backgroundColor: '#3B1678',
        alignItems: 'center',
        flex: 1,
    },
    messageIcon:{
        left: 110,
        bottom: 30,
    },  
    fondoJornada: {
        position: "absolute",
        top: 350
    },
    contentButtonsWrapper: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: 100, // Ajusta este valor según sea necesario
    },
    contentButtons: {
        flexDirection: 'row', // Organiza los botones en línea
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        fontFamily: FontFamily.h4,
        fontSize: 15,
        fontWeight: "700",
        color: 'white',
        textAlign: 'center',
    },
    buttonSelected: {
        backgroundColor: 'white',
        borderColor: '#3B1678',
    },
    textSelected: {
        color: '#3B1678',
    },
    questionText: {
        fontFamily: FontFamily.h4,
        fontSize: 25,
        fontWeight: "700",
        color: 'white',
        marginBottom: 20, // Espacio entre la pregunta y los botones
        textAlign: 'center',
    },
    confirmButton: {
        width: 150,
        left: 75,
        backgroundColor: 'white',
        borderColor: '#3B1678',
        marginTop: 20,
    },
    confirmButtonText: {
        color: '#3B1678',
    },
    incidenceText: {
        fontFamily: FontFamily.h4,
        fontSize: 25,
        fontWeight: "700",
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Jornada;
