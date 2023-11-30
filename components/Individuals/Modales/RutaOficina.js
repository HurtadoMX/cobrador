
import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";

const RutaOficina = ({ isVisible, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.popoverContent}>
                    <TouchableOpacity onPress={onClose} style={styles.chatOption}>
                        <Text style={styles.chatText}>Chat al supervisor</Text>
                        <Text style={styles.arrow}>&gt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.chatOption}>
                        <Text style={styles.chatText}>Chat al administrador</Text>
                        <Text style={styles.arrow}>&gt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.chatOption}>
                        <Text style={styles.chatText}>Chat a central</Text>
                        <Text style={styles.arrow}>&gt;</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.overlayTouchable} onPress={onClose} />
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
    popoverContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        top: 100, // Ajusta según necesidad
        left: 150, // Ajusta según necesidad
        right: 10,
    },
    chatOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    chatText: {
        fontFamily: FontFamily.robotoBold,
        fontSize: FontSize.h4_size,
        fontWeight: 700,

        // Estilos para el texto
    },
    arrow: {
        // Estilos para el símbolo '>'
    },
    overlayTouchable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});



export default RutaOficina;

