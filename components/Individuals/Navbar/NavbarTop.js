
import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../../../GlobalStyles";
import Notificaciones from "../Modales/Notificaciones";

const NavbarTop = ({setIsAuthenticated, isAuthenticated}) => {

    const navigation = useNavigation();
    const [isPopoverVisible, setPopoverVisible] = React.useState(false);

    const handlePress = () => {
      navigation.navigate('Login'); // Navega a la pantalla Home
      setIsAuthenticated(false)
    };

    const togglePopover = () => {
        setPopoverVisible(!isPopoverVisible);
    };


  return (
    <>
    <View style={[styles.topbar, styles.topbarSpaceBlock]}>
            <TouchableOpacity onPress={handlePress}>
                <Image
                    style={[styles.leftIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../../../assets/left.png")}
                />
            </TouchableOpacity>
            <View style={styles.center}>
            <View style={styles.logo092Wrapper}>
                <Image
                style={styles.logo092Icon}
                resizeMode="cover"
                source={require("../../../assets/logo09-2.png")}
                />
            </View>
            </View>
            <TouchableOpacity onPress={togglePopover}>
                <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../../../assets/right.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePopover}>
                <Image
                style={[styles.messageIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../../assets/message.png")}
                />
            </TouchableOpacity>
    </View>

    <Notificaciones isVisible={isPopoverVisible} onClose={() => setPopoverVisible(false)} />
    </>

    );
};


const styles = StyleSheet.create({
    topbar: {
        borderBottomWidth: 1,
        height: 45,
        backgroundColor: Color.primario,
        borderColor: Color.primario,
        borderStyle: "solid",
        left: 0,
        top: 45,
        zIndex: 999999,
        // position: "absolute",
        width: 390,
      },
      topbarSpaceBlock: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_base,
        flexDirection: "row",
        alignItems: "center",
      },
      leftIcon: {
        zIndex: 1000,
        height: 29,
      },
      iconLayout1: {
        zIndex: 1000,
        width: 29,
        height: 29,
      },
      center: {
        marginLeft: 16,
        flex: 1,
        alignItems: "center",
      },
      logo092Wrapper: {
        width: 110,
        height: 42,
        overflow: "hidden",
      },
      iconLayout: {
        height: 24,
        width: 24,
        marginLeft: 16,
      },
      messageIcon: {
        overflow: "hidden",
      },
  });

  
export default NavbarTop;
  