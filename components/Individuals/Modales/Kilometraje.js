import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const Kilometraje = ({ isVisible, onClose }) => {
    const [isConfirming, setIsConfirming] = React.useState(false);
    const [kilometraje, setKilometraje] = React.useState('');

    const navigation = useNavigation();

    const handleConfirm = () => {
        navigation.navigate('SiTrabaja'); // Navega a la pantalla Home
        onClose();
    };

    const handleModify = () => {
        setIsConfirming(false);
    };

    const handleRegister = () => {
        // Aquí debes validar el kilometraje antes de cambiar el estado
        setIsConfirming(true);
    };

    const ConfirmationView = () => (
        <>
        <View style={styles.modalContainer2}>
            <View style={styles.warningImageContainer}>
                <Image source={require("../../../assets/verdaderas/pregunta.png")} style={styles.warningImage} />
            </View>
            <Text style={styles.modalTitle}>Advertencia</Text>
            <View style={styles.lineaFinal}></View>
            <Text style={styles.modalMessage}>
                Estas a punto de exceder el rango máximo de declaración de kilometraje diario
            </Text>
            <Text style={styles.modalMessage2}>
                Kilometraje declarado
            </Text>
            <Text style={styles.modalMessage3}>
                {kilometraje}km
            </Text>
            <Text style={styles.modalMessage}>
                ¿Estás seguro de que el valor es correcto?
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleModify} style={styles.modifyButton}>
                    <Text style={styles.buttonTextModify}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={styles.acceptButton}>
                    <Text style={styles.buttonText}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );

    const RegisterView = () => (
        <>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Registro de kilometraje</Text>
            <View style={styles.lineaFinal}></View>
            <Text style={styles.modalMessage}>
                Antes de iniciar, por favor indícanos cuántos kilómetros (km) marca el tacómetro del vehículo asignado
            </Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Escribe el kilometraje aquí"
                value={kilometraje}
                onChangeText={setKilometraje}
            />
            <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
                <Text style={styles.buttonText}>Registrar Kilometraje</Text>
            </TouchableOpacity>
        </View>
        </>
    );

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                    {isConfirming ? <ConfirmationView /> : <RegisterView />}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        margin: 40,
        top: -160,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalContainer2: {
        margin: 40,
        top: -70,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    warningImageContainer: {
        position: 'absolute',
        top: -50, // Ajusta este valor para que la mitad de la imagen esté fuera del modal
        zIndex: 10,
    },
    warningImage: {
        width: 100, // Ajusta estos valores según el tamaño de tu imagen
        height: 100,
        resizeMode: 'contain',
    },
    modalTitle: {
        marginTop: 30, // Ajusta este valor para que se acomode la imagen
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    modalMessage: {
        letterSpacing: .7,
        fontWeight: "300",
        fontSize: 16,
        marginBottom: 20,
        width: 300,
        textAlign: "",
        fontFamily: FontFamily.bodyRegular,
    },
    modalMessage2: {
        letterSpacing: .7,
        fontWeight: "300",
        fontSize: 16,
        marginBottom: 20,
        width: 300,
        textAlign: "center",
        fontFamily: FontFamily.bodyRegular,
    },
    modalMessage3: {
        letterSpacing: .7,
        fontWeight: "700",
        fontSize: 16,
        marginBottom: 20,
        width: 300,
        textAlign: "center",
        fontFamily: FontFamily.bodyRegular,
    },
    input: {
        backgroundColor: "#F2F2F2",
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 300,
        borderRadius: 15,
        fontSize: 17,
        color: "black",
    },
    registerButton: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#572C9E"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonTextModify:{
        color: "#62B5E5",
    },
    lineaFinal: {
        backgroundColor: "#CFCFCF",
        width: 330,
        height: 1,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    modifyButton: {
        backgroundColor: 'white',
        borderColor: "#62B5E5",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    acceptButton: {
        backgroundColor: "#572C9E",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    // Asegúrate de definir FontFamily, FontSize, Border, y Color según sean utilizados en tu GlobalStyles
});

export default Kilometraje;
