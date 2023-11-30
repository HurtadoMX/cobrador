import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MenuLateral = () => {
  return (
    <View style={styles.menuLateral}>
      <Image
        style={styles.menuLateralChild}
        resizeMode="cover"
        source={require("../assets/rectangle-23334.png")}
      />
      <View style={[styles.button, styles.buttonSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo2]}>Continuar</Text>
      </View>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract10.png")}
      />
      <View style={[styles.navbar, styles.navbarSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title1, styles.titleTypo2]}>Mi jornada</Text>
        </View>
        <Image
          style={[styles.bellIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={[styles.rightIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic11.png")}
      />
      <View style={[styles.groupParent, styles.titleGroupLayout]}>
        <Image
          style={styles.frameLayout2}
          resizeMode="cover"
          source={require("../assets/group-21191.png")}
        />
        <View style={styles.sectiontitle16DescriptionParent}>
          <View
            style={[
              styles.sectiontitle16Description,
              styles.sectiontitle16Layout,
            ]}
          >
            <View style={[styles.title24, styles.titleGroupLayout]}>
              <Text style={[styles.title2, styles.titleTypo]}>
                Bienvenido a tu jornada
              </Text>
            </View>
          </View>
          <View style={[styles.sectiontitle18, styles.sectiontitle16Layout]}>
            <View style={[styles.title24, styles.titleGroupLayout]}>
              <Text style={[styles.title3, styles.titleTypo]}>
                Antonio Machado
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.sectiontitle16Description1, styles.sectiontitle16Layout]}
      >
        <View style={[styles.title24, styles.titleGroupLayout]}>
          <Text style={[styles.title4, styles.titleTypo]}>
            Ingresa a la siguiente actividad disponible
          </Text>
        </View>
      </View>
      <View
        style={[styles.sectiontitleYTextoresaltar24, styles.titleGroupLayout]}
      >
        <Text style={[styles.title5, styles.titleTypo2]}>
          Tu posición en el ranking estatal
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.titleGroupLayout]}>
        <View style={styles.alcanzaALisandroGarca50Parent}>
          <Text
            style={[styles.alcanzaALisandro, styles.simnReyes3432Typo]}
          >{`Alcanza a
Lisandro García:
5.047 pts`}</Text>
          <Text
            style={[styles.tuRankingActual, styles.simnReyes3432Typo]}
          >{`Tu ranking
actual
4.203 pts`}</Text>
          <View style={[styles.contador, styles.contadorLayout]}>
            <Text style={[styles.top1, styles.titleTypo]}>TOP 1</Text>
          </View>
          <View style={styles.contador1}>
            <Text style={[styles.top1, styles.titleTypo]}>TOP 3</Text>
          </View>
          <Image
            style={[styles.groupChild, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-340.png")}
          />
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
              <View style={[styles.groupItem, styles.groupItemPosition]} />
              <View style={styles.groupInner} />
            </View>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-2112.png")}
          />
          <View style={styles.contadorParent}>
            <View style={[styles.contador2, styles.groupItemPosition]}>
              <Text style={[styles.top1, styles.titleTypo]}>TOP 2</Text>
            </View>
            <Image
              style={[styles.groupChild1, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-21141.png")}
            />
          </View>
          <Image
            style={[styles.groupChild2, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-2123.png")}
          />
          <Image
            style={styles.maskGroupIcon}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-211511.png")}
          />
          <Text
            style={[styles.simnReyes3432, styles.simnReyes3432Typo]}
          >{`Simón Reyes
3.432 pts`}</Text>
        </View>
        <View />
        <View style={styles.slider}>
          <Image
            style={styles.sliderLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-330.png")}
          />
          <Image
            style={[styles.sliderItem, styles.sliderLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-331.png")}
          />
        </View>
        <View />
        <View style={styles.vectorParentLayout}>
          <Image
            style={[styles.rectangleIcon, styles.vectorParentLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2465.png")}
          />
          <View style={styles.groupView}>
            <View style={styles.estasA844PuntosParaSubirParent}>
              <Text
                style={[
                  styles.estasA844Container,
                  styles.estasA844ContainerTypo,
                ]}
              >
                <Text style={styles.estasA844Container1}>
                  <Text style={styles.estasA}>{`Estas a: `}</Text>
                  <Text style={styles.puntos}>{`844 puntos
`}</Text>
                  <Text style={styles.estasA}>para subir de escalafón.</Text>
                </Text>
              </Text>
              <Image
                style={styles.groupChild4}
                resizeMode="cover"
                source={require("../assets/group-16241.png")}
              />
            </View>
            <Text
              style={[styles.nimoPuedesLograrlo, styles.estasA844ContainerTypo]}
            >
              ¡Ánimo! Puedes lograrlo
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupLayout]}>
        <View style={[styles.vectorGroup, styles.groupLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector31.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.maskPosition]}
            resizeMode="cover"
            source={require("../assets/vector41.png")}
          />
          <View
            style={[styles.cardrenovaciones, styles.cardrevisitasSpaceBlock]}
          >
            <Text style={[styles.renovaciones, styles.revisitasLayout]}>
              Renovaciones
            </Text>
            <Image
              style={styles.cardrenovacionesChild}
              resizeMode="cover"
              source={require("../assets/group-254211.png")}
            />
          </View>
        </View>
        <View style={[styles.groupParent2, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild5, styles.groupParentLayout]}
            resizeMode="cover"
            source={require("../assets/group-2555.png")}
          />
          <View style={[styles.groupChild5, styles.groupParentLayout]}>
            <Image
              style={[styles.groupChild5, styles.groupParentLayout]}
              resizeMode="cover"
              source={require("../assets/group-25484.png")}
            />
            <View style={[styles.cardrevisitas, styles.cardcobranzaLayout]}>
              <Text style={[styles.revisitas, styles.cobranzaTypo]}>
                Revisitas
              </Text>
              <Image
                style={styles.cardrenovacionesChild}
                resizeMode="cover"
                source={require("../assets/group-254611.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupParent4, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild5, styles.groupParentLayout]}
            resizeMode="cover"
            source={require("../assets/group-2555.png")}
          />
          <View style={[styles.groupChild5, styles.groupParentLayout]}>
            <Image
              style={[styles.groupChild5, styles.groupParentLayout]}
              resizeMode="cover"
              source={require("../assets/group-25471.png")}
            />
            <View style={[styles.cardcobranza, styles.cardcobranzaLayout]}>
              <Text style={[styles.cobranza, styles.cobranzaTypo]}>
                Cobranza
              </Text>
              <Image
                style={styles.cardcobranzaChild}
                resizeMode="cover"
                source={require("../assets/group-254411.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navbarinferior, styles.navbarinferiorPosition]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorPosition]}
          resizeMode="cover"
          source={require("../assets/vector-471.png")}
        />
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={styles.frameFlexBox}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-93.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={styles.frameLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={styles.frameFlexBox}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={styles.frameFlexBox}>
            <View style={[styles.frameWrapper, styles.frameLayout2]}>
              <View style={[styles.groupFrame, styles.frameLayout]}>
                <View style={styles.rectangleGroup}>
                  <View
                    style={[styles.rectangleView, styles.groupChildLayout]}
                  />
                  <View style={[styles.groupChild9, styles.groupChildLayout]} />
                  <View
                    style={[styles.groupChild10, styles.groupChildLayout]}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.homeTypo}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <View style={[styles.navbarinferior, styles.navbarinferiorPosition]}>
        <Image
          style={[styles.navbarinferiorItem, styles.navbarinferiorPosition]}
          resizeMode="cover"
          source={require("../assets/vector-47.png")}
        />
        <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
          <View style={styles.frameFlexBox}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={[styles.frameParent4, styles.frameFlexBox]}>
            <View style={[styles.frameWrapper, styles.frameLayout2]}>
              <View style={[styles.groupFrame, styles.frameLayout]}>
                <View style={styles.rectangleGroup}>
                  <View
                    style={[styles.rectangleView, styles.groupChildLayout]}
                  />
                  <View style={[styles.groupChild9, styles.groupChildLayout]} />
                  <View
                    style={[styles.groupChild10, styles.groupChildLayout]}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.homeTypo}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <View style={[styles.mask, styles.maskPosition]} />
      <View style={[styles.groupParent6, styles.groupBg]}>
        <View style={styles.lateralMenuavatar2FilasParent}>
          <View style={styles.lateralMenuavatar2Filas}>
            <Image
              style={[styles.avatarIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fillfill-ellipsetrue-size64px.png")}
            />
            <View style={styles.sectiontitle18Parent}>
              <View style={styles.sectiontitle181}>
                <View style={styles.title243}>
                  <Text style={[styles.title6, styles.titleTypo]}>
                    Antonio Machado
                  </Text>
                </View>
              </View>
              <View style={[styles.groupParent7, styles.button2FlexBox]}>
                <Image
                  style={styles.frameChild2}
                  resizeMode="cover"
                  source={require("../assets/group-2114.png")}
                />
                <View style={styles.sectiontitle16Description2}>
                  <View style={[styles.title244, styles.titleGroupLayout]}>
                    <Text style={[styles.title7, styles.titleTypo]}>TOP 2</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.maskGroupIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/mask-group2.png")}
          />
        </View>
        <View style={styles.separadorForms2} />
        <View style={styles.separadorForms2} />
        <View style={[styles.lateralMenuicons, styles.title247SpaceBlock]}>
          <View style={styles.frameParent5SpaceBlock}>
            <View style={styles.frameParent6}>
              <View style={[styles.groupWrapper2, styles.groupBg]}>
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group3.png")}
                />
              </View>
              <View style={styles.title12botones}>
                <View style={styles.title243}>
                  <Text style={styles.title8}>Tomar un break</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameParent7}>
              <View style={[styles.groupWrapper2, styles.groupBg]}>
                <Image
                  style={styles.groupIconLayout}
                  resizeMode="cover"
                  source={require("../assets/support-agent1.png")}
                />
              </View>
              <View style={styles.title12botones}>
                <View style={styles.title243}>
                  <Text style={styles.title8}>Llamada de ayuda</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separadorForms2} />
        <View style={styles.sectiontitle182}>
          <View style={[styles.title247, styles.title247SpaceBlock]}>
            <Image
              style={styles.frameChild2}
              resizeMode="cover"
              source={require("../assets/group-25271.png")}
            />
            <Text style={[styles.title10, styles.titleTypo]}>Herramientas</Text>
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>Calculadora</Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow41.png")}
            />
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Registrar nuevo gasto
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow41.png")}
            />
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Registro de prospectos
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow41.png")}
            />
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Priorizar cobranza-renovación
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow51.png")}
            />
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Reprogramación solicitada por el cliente
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow51.png")}
            />
          </View>
        </View>
        <View style={styles.separadorForms5} />
        <View style={styles.sectiontitle182}>
          <View style={[styles.title247, styles.title247SpaceBlock]}>
            <Image
              style={styles.frameChild2}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
            <Text style={[styles.title10, styles.titleTypo]}>Información</Text>
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Políticas de privacidad
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow41.png")}
            />
          </View>
        </View>
        <View style={[styles.menudesplegable, styles.buttonBorder]}>
          <View style={[styles.cardHeader, styles.title247SpaceBlock]}>
            <Text style={[styles.title11, styles.titleTypo]}>
              Términos y condiciones
            </Text>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow41.png")}
            />
          </View>
        </View>
        <View style={styles.separadorForms2} />
        <View style={styles.botonCentradoPpal}>
          <View style={[styles.cardFooterDoble, styles.frameParent5SpaceBlock]}>
            <View style={[styles.button1, styles.buttonBorder]}>
              <Text style={[styles.title19, styles.titleTypo2]}>
                Cerrar sesión
              </Text>
            </View>
            <View style={[styles.button2, styles.buttonBorder]}>
              <Text style={[styles.title, styles.titleTypo2]}>No</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    height: 40,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  titleTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  navbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  iconLayout1: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  titleGroupLayout: {
    width: 382,
    alignItems: "center",
    overflow: "hidden",
  },
  sectiontitle16Layout: {
    height: 33,
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h4,
  },
  simnReyes3432Typo: {
    color: Color.colorBlack,
    fontSize: 8,
    top: 59,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    position: "absolute",
  },
  contadorLayout: {
    padding: Padding.p_5xs,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  groupIconLayout: {
    width: 33,
    height: 33,
  },
  groupWrapperLayout: {
    width: 301,
    height: 4,
    position: "absolute",
  },
  groupItemPosition: {
    backgroundColor: Color.primario20,
    left: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sliderLayout: {
    height: 10,
    width: 10,
  },
  vectorParentLayout: {
    height: 110,
    width: 380,
  },
  estasA844ContainerTypo: {
    width: 167,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 136,
    position: "absolute",
  },
  maskPosition: {
    left: -2,
    position: "absolute",
  },
  cardrevisitasSpaceBlock: {
    paddingBottom: Padding.p_lg,
    paddingTop: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_xs,
  },
  revisitasLayout: {
    height: 19,
    width: 103,
  },
  groupParentLayout: {
    height: 126,
    width: 117,
    position: "absolute",
  },
  cardcobranzaLayout: {
    height: 119,
    width: 110,
    left: 3,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  cobranzaTypo: {
    color: Color.gris201,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarinferiorPosition: {
    height: 76,
    bottom: 0,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "flex-end",
    height: 76,
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 28,
    width: 28,
  },
  homeTypo: {
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  frameLayout2: {
    height: 44,
    width: 44,
  },
  groupChildLayout: {
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    height: 2,
    position: "absolute",
  },
  frameFlexBox: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  groupBg: {
    backgroundColor: Color.blanco201,
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    width: 64,
    height: 64,
  },
  button2FlexBox: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  title247SpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  buttonBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
  },
  frameParent5SpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  menuLateralChild: {
    height: 303,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  title: {
    color: Color.primario,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  button: {
    top: 628,
    left: 151,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_981xl,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  subtractIcon: {
    height: 1191,
    width: 414,
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title1: {
    fontSize: FontSize.h4_size,
    color: Color.blanco20,
    flex: 1,
    fontWeight: "500",
  },
  center: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    overflow: "hidden",
  },
  rightIcon: {
    height: 24,
  },
  navbar: {
    borderBottomWidth: 1,
    height: 45,
    top: 0,
    borderColor: Color.primario,
    borderStyle: "solid",
    paddingVertical: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
    width: 414,
  },
  buttonpanicIcon: {
    bottom: 103,
    left: 343,
    width: 55,
    height: 55,
    position: "absolute",
  },
  title2: {
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    color: Color.blanco20,
  },
  title24: {
    alignSelf: "stretch",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
  },
  sectiontitle16Description: {
    width: 250,
    left: 0,
    top: 0,
  },
  title3: {
    color: Color.blanco20,
    flex: 1,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
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
    top: 69,
    padding: Padding.p_base,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  title4: {
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    color: Color.blanco20,
    fontWeight: "500",
  },
  sectiontitle16Description1: {
    top: 192,
    left: 16,
  },
  title5: {
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    color: Color.texto,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    top: 398,
    left: 16,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  alcanzaALisandro: {
    left: 279,
  },
  tuRankingActual: {
    left: 125,
  },
  top1: {
    fontSize: 10,
    color: Color.blanco20,
    fontWeight: "500",
  },
  contador: {
    left: 291,
    backgroundColor: Color.primario,
    top: 31,
    padding: Padding.p_5xs,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
  },
  contador1: {
    left: 5,
    backgroundColor: Color.gris20,
    padding: Padding.p_5xs,
    height: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    top: 31,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    left: 297,
    top: 1,
    position: "absolute",
  },
  groupItem: {
    width: 125,
    height: 4,
    top: 0,
  },
  groupInner: {
    left: 137,
    width: 164,
    height: 2,
    top: 3,
    backgroundColor: Color.gris20,
    position: "absolute",
  },
  rectangleParent: {
    height: 4,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 15,
    height: 4,
    left: 16,
  },
  groupIcon: {
    left: 11,
    top: 1,
    position: "absolute",
  },
  contador2: {
    top: 1,
    padding: Padding.p_5xs,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  groupChild1: {
    height: "46.63%",
    width: "20.87%",
    top: "0%",
    right: "0%",
    bottom: "53.37%",
    left: "79.13%",
  },
  contadorParent: {
    top: 30,
    left: 124,
    width: 46,
    height: 21,
    position: "absolute",
  },
  groupChild2: {
    left: 130,
    top: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 2,
    left: 298,
    width: 31,
    height: 31,
    position: "absolute",
  },
  groupChild3: {
    height: "19.21%",
    width: "13.62%",
    top: "12.36%",
    right: "50.72%",
    bottom: "68.43%",
    left: "35.65%",
  },
  simnReyes3432: {
    left: 0,
  },
  alcanzaALisandroGarca50Parent: {
    width: 345,
    height: 89,
  },
  sliderItem: {
    marginLeft: 16,
  },
  slider: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  rectangleIcon: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  estasA: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  puntos: {
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  estasA844Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  estasA844Container: {
    left: 112,
    color: Color.texto,
    height: 45,
    top: 0,
  },
  groupChild4: {
    width: 80,
    height: 69,
    top: 3,
    left: 0,
    position: "absolute",
  },
  estasA844PuntosParaSubirParent: {
    width: 279,
    height: 72,
    left: 0,
    top: 0,
    position: "absolute",
  },
  nimoPuedesLograrlo: {
    top: 51,
    left: 113,
    color: Color.secundario20,
    height: 27,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  groupView: {
    left: 50,
    width: 280,
    height: 78,
    top: 16,
    position: "absolute",
  },
  groupContainer: {
    top: 435,
    left: 19,
    padding: Padding.p_base,
    justifyContent: "center",
    position: "absolute",
  },
  vectorIcon: {
    top: -4,
    left: -4,
    width: 122,
    height: 144,
    position: "absolute",
  },
  vectorIcon1: {
    width: 120,
    height: 122,
    top: 16,
  },
  renovaciones: {
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    width: 103,
    color: Color.texto,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  cardrenovacionesChild: {
    width: 56,
    height: 56,
    marginTop: 16,
  },
  cardrenovaciones: {
    left: 4,
    height: 126,
    width: 117,
    position: "absolute",
    top: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blanco20,
  },
  vectorGroup: {
    width: 121,
    left: 0,
    top: 0,
  },
  groupChild5: {
    left: 0,
    top: 0,
  },
  revisitas: {
    height: 19,
    width: 103,
  },
  cardrevisitas: {
    paddingBottom: Padding.p_lg,
    paddingTop: Padding.p_base,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_xs,
    top: 3,
  },
  groupParent2: {
    left: 269,
    top: 4,
  },
  cobranza: {
    width: 96,
    height: 18,
  },
  cardcobranzaChild: {
    width: 52,
    height: 52,
    marginTop: 14.98,
  },
  cardcobranza: {
    borderRadius: 19,
    paddingHorizontal: 11,
    paddingTop: 15,
    paddingBottom: 17,
    top: 4,
  },
  groupParent4: {
    left: 136,
    top: 4,
  },
  groupParent1: {
    top: 238,
    left: 12,
    width: 386,
  },
  navbarinferiorChild: {
    right: -98,
    width: 512,
  },
  frameItem: {
    borderRadius: Border.br_sm,
    width: 28,
  },
  home: {
    marginTop: 8,
  },
  rectangleView: {
    bottom: 12,
  },
  groupChild9: {
    bottom: 6,
  },
  groupChild10: {
    bottom: 0,
    borderRadius: Border.br_11xs,
    right: 0,
  },
  rectangleGroup: {
    height: 14,
    width: 17,
  },
  groupFrame: {
    backgroundColor: Color.texto20,
    borderRadius: Border.br_sm,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    left: 17,
  },
  navbarinferior: {
    left: 0,
    overflow: "hidden",
    width: 414,
  },
  navbarinferiorItem: {
    right: -73,
    width: 487,
  },
  frameParent4: {
    marginLeft: 64,
  },
  frameParent2: {
    marginLeft: -108,
    left: "50%",
  },
  mask: {
    top: -48,
    backgroundColor: Color.colorGray_400,
    width: 419,
    height: 1124,
    overflow: "hidden",
  },
  avatarIcon: {
    borderRadius: Border.br_25xl,
  },
  title6: {
    color: Color.texto,
    flex: 1,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  title243: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  sectiontitle181: {
    width: 185,
    flexDirection: "row",
  },
  frameChild2: {
    width: 20,
    height: 20,
  },
  title7: {
    color: Color.texto,
    fontWeight: "300",
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
  },
  title244: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  sectiontitle16Description2: {
    marginLeft: 16,
    flex: 1,
    flexDirection: "row",
  },
  groupParent7: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  sectiontitle18Parent: {
    alignSelf: "stretch",
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  lateralMenuavatar2Filas: {
    width: 283,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lateralMenuavatar2FilasParent: {
    height: 64,
    width: 283,
  },
  separadorForms2: {
    width: 283,
    height: 24,
  },
  groupIcon1: {
    width: 25,
    height: 24,
  },
  groupWrapper2: {
    borderRadius: Border.br_5xl,
    width: 48,
    height: 48,
    justifyContent: "center",
    flexDirection: "row",
  },
  title8: {
    fontSize: FontSize.body5_size,
    color: Color.texto,
    textAlign: "left",
    fontWeight: "300",
    flex: 1,
    fontFamily: FontFamily.h4,
  },
  title12botones: {
    width: 65,
    marginLeft: 8,
    flexDirection: "row",
  },
  frameParent6: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent7: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  lateralMenuicons: {
    width: 283,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  title10: {
    color: Color.texto,
    marginLeft: 16,
    flex: 1,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  title247: {
    flex: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  sectiontitle182: {
    width: 283,
    flexDirection: "row",
  },
  title11: {
    color: Color.texto,
    fontSize: FontSize.body3_size,
    textAlign: "left",
    flex: 1,
    fontWeight: "500",
  },
  arrowIcon: {
    width: 13,
    height: 13,
    marginLeft: 16,
  },
  cardHeader: {
    paddingVertical: Padding.p_2xs_5,
    width: 282,
    flexDirection: "row",
  },
  menudesplegable: {
    borderColor: Color.blanco201,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blanco20,
  },
  separadorForms5: {
    width: 282,
  },
  title19: {
    color: Color.secundario,
    fontWeight: "500",
    fontSize: FontSize.h5_size,
  },
  button1: {
    borderColor: Color.secundario,
    borderRadius: Border.br_xl,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    overflow: "hidden",
  },
  button2: {
    width: 93,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    marginLeft: 16,
    borderColor: Color.primario,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_981xl,
  },
  cardFooterDoble: {
    flex: 1,
    alignItems: "center",
  },
  botonCentradoPpal: {
    width: 282,
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent6: {
    width: 315,
    height: 1075,
    left: -2,
    position: "absolute",
    top: 1,
    padding: Padding.p_base,
  },
  menuLateral: {
    height: 893,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default MenuLateral;
