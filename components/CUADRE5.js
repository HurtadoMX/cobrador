import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const CUADRE5 = () => {
  return (
    <View style={styles.cuadre}>
      <Image
        style={[styles.cuadreChild, styles.cuadreChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-23332.png")}
      />
      <View style={[styles.topbar, styles.verticalSpaceBlock]}>
        <Image
          style={styles.leftIcon}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <Text style={[styles.title, styles.textTypo4]}>Cuadre</Text>
        </View>
        <Image
          style={[styles.bellIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={[styles.rightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={[styles.timer, styles.timerPosition]}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.text, styles.textTypo3]}>00:00:00</Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo3]}>10/12</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-24544.png")}
          />
        </View>
        <Text style={[styles.aTiempo, styles.textTypo4]}>A tiempo</Text>
      </View>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract3.png")}
      />
      <View style={styles.separadorForms} />
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Parent,
          styles.sectiontitleSpaceBlock,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.textTypo3]}>Cuadre global</Text>
        </View>
        <View />
        <View style={styles.verticalFormItem}>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Base inicial</Text>
                </View>
                <View style={[styles.child, styles.childFlexBox]}>
                  <Text style={styles.placeholder}>$15.000</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Total de cobranzas</Text>
                  <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={require("../assets/arrow.png")}
                  />
                </View>
                <View style={styles.child1}>
                  <Text style={styles.placeholder}>$36.350</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.verticalFormItem}>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Renovaciones totales</Text>
                </View>
                <View style={[styles.child2, styles.childFlexBox]}>
                  <Text style={styles.placeholder2}>$25.350</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Gastos en incidencias</Text>
                  <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={require("../assets/arrow.png")}
                  />
                </View>
                <View style={[styles.child2, styles.childFlexBox]}>
                  <Text style={styles.placeholder2}>$2.500</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.verticalFormItem}>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Dinero declarado</Text>
                </View>
                <View style={[styles.child2, styles.childFlexBox]}>
                  <Text style={styles.placeholder2}>$8.300</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.verticalFormIteminput, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Dinero en sistema</Text>
                  <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={require("../assets/arrow.png")}
                  />
                </View>
                <View style={[styles.child2, styles.childFlexBox]}>
                  <Text style={styles.placeholder2}>$8.600</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View />
        <View style={styles.verticalFormItem3}>
          <View
            style={[styles.verticalFormIteminput6, styles.verticalSpaceBlock]}
          >
            <View style={styles.content6}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Dinero en sistema</Text>
                </View>
                <View style={[styles.child2, styles.childFlexBox]}>
                  <Text style={styles.placeholder2}>$850</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.verticalFormIteminput7, styles.verticalSpaceBlock]}
          >
            <View style={styles.content}>
              <View style={[styles.main, styles.cardSpaceBlock]}>
                <View style={styles.formItemTitle}>
                  <Text style={styles.label}>Diferencia</Text>
                  <Image
                    style={styles.arrowIcon}
                    resizeMode="cover"
                    source={require("../assets/arrow1.png")}
                  />
                </View>
                <View style={[styles.child7, styles.childFlexBox]}>
                  <Text style={styles.placeholder}>-$300</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.sectiontitleYTextoresaltar24Group,
          styles.sectiontitleSpaceBlock,
        ]}
      >
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.textTypo3]}>
            Gestión en detalle
          </Text>
        </View>
        <View />
        <View style={[styles.cardHeader, styles.cardHeaderFlexBox]}>
          <View style={styles.tabla}>
            <Text style={[styles.totalizador, styles.text3Typo]}>
              Totalizador
            </Text>
            <Text style={[styles.text2, styles.textTypo4]}>3</Text>
            <Text style={[styles.text3, styles.text3Typo]}>$550</Text>
          </View>
          <Text style={[styles.title3, styles.textTypo3]}>
            Tu jornada debe empezar en:
          </Text>
          <Image
            style={styles.arrowIcon4}
            resizeMode="cover"
            source={require("../assets/arrow11.png")}
          />
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaTypo]}>
              Base de hoy
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text5, styles.textTypo1]}>25.000</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Alberto Cáceres
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+550</Text>
          </View>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Elvira Gómez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+420</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Renovación Adolfo Hernandez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text12, styles.textTypo1]}>-6.800</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Incidencia médica
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text15, styles.textTypo1]}>-550</Text>
          </View>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Daniela Martínez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+680</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Adolfo Hernández
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+310</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Renovación Daniel Jiménez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text12, styles.textTypo1]}>-4.500</Text>
          </View>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Renovación Gloria Ordoñez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text12, styles.textTypo1]}>-2.800</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Roberto Hernández
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+350</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Adolfo Hernández
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+200</Text>
          </View>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Renovación Adolfo Hernández
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text12, styles.textTypo1]}>-6.800</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Adelina Jiménez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+800</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Samantha Pérez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+730</Text>
          </View>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Reinaldo Ortiz
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+360</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Renovación Luciano Castro
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text12, styles.textTypo1]}>-8.000</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={styles.tablaPosition}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Vicente Domínguez
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>+600</Text>
          </View>
          <View style={[styles.tabla18, styles.tablaPosition]}>
            <Text style={[styles.antonioMachado, styles.lisandroGarcaTypo]}>
              Cobranza Reinaldo Ortiz
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text8, styles.textTypo1]}>3.432</Text>
          </View>
        </View>
        <View />
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={[styles.tabla19, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Venta Adolfo Hernandez</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>$6.800</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={[styles.tabla19, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Incidencia vehicular</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>-800</Text>
          </View>
          <View style={[styles.tabla21, styles.tablaFlexBox]}>
            <Text style={styles.walterRamrez6}>Cierre del día</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text52, styles.textTypo2]}>$550</Text>
          </View>
        </View>
        <View />
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={[styles.tabla22, styles.tablaFlexBox]}>
            <Text style={styles.walterRamrez6}>Renovación de base</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text54, styles.textTypo2]}>9.450</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={[styles.tabla22, styles.tablaFlexBox]}>
            <Text style={styles.walterRamrez6}>Renovaciones programadas</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text54, styles.textTypo2]}>15.000</Text>
          </View>
          <View style={[styles.tabla24, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Walter Ramírez</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text59, styles.textTypo2]}>3.432</Text>
          </View>
        </View>
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={[styles.tabla19, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Renovación de base</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>$17.300</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={[styles.tabla22, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>
              Total de adición a base de mañana
            </Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>24.450</Text>
          </View>
          <View style={[styles.tabla24, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Walter Ramírez</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text59, styles.textTypo2]}>3.432</Text>
          </View>
        </View>
        <View />
        <View style={[styles.table, styles.verticalSpaceBlock]}>
          <View style={[styles.tabla19, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Venta Adolfo Hernandez</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>$6.800</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo4]}>3</Text>
          <View style={[styles.tabla19, styles.tablaFlexBox]}>
            <Text style={styles.placeholder2}>Incidencia vehicular</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text47, styles.textTypo2]}>-800</Text>
          </View>
          <View style={[styles.tabla21, styles.tablaFlexBox]}>
            <Text style={styles.walterRamrez6}>Base de mañana</Text>
            <Text style={styles.text4}>3</Text>
            <Text style={[styles.text52, styles.textTypo2]}>$25.000</Text>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.formdescription14}>
          <View style={styles.carddescription16}>
            <Text style={styles.texto}>
              <Text
                style={styles.presentaAnteTu}
              >{`Presenta ante tu supervisor los `}</Text>
              <Text style={styles.text74}>$550</Text>
              <Text
                style={styles.presentaAnteTu}
              >{` restantes de tu jornada y recibe los `}</Text>
              <Text style={styles.text74}>$24.450</Text>
              <Text style={styles.presentaAnteTu}>{` de recarga de base. 

Una vez realizado este paso, solicita el cierre de cuadre.`}</Text>
            </Text>
          </View>
        </View>
        <View />
        <View />
        <View style={styles.cardFooterDoble1Layout}>
          <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.title4, styles.titleTypo]}>
                Cierre de cuadre
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title5, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.botonCentradoPpal1}>
          <View
            style={[styles.cardFooterDoble1, styles.cardFooterDoble1Layout]}
          >
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.title6, styles.titleTypo]}>
                Solicitar renovación
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title5, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.separadorForms13, styles.separadorPosition]} />
      <View style={[styles.separadorForms14, styles.separadorPosition]} />
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
            </View>
            <Text style={styles.homeTypo}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameChildLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ranking</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Jornada</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.ranking, styles.homeTypo]}>Ganancias</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.groupWrapper, styles.frameChildLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View style={[styles.rectangleView, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.ranking, styles.homeTypo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic1.png")}
      />
      <View style={styles.mask} />
      <View style={[styles.card, styles.sectiontitleSpaceBlock]}>
        <View />
        <View />
        <View />
        <View style={[styles.cardtitle20, styles.cardHeaderFlexBox]}>
          <Text style={[styles.title8, styles.textTypo3]}>
            Solicitud completa
          </Text>
        </View>
        <View style={[styles.separadorForms18, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.carddescription161}>
          <Text style={styles.texto1}>
            Tu solicitud ha sido recibida con éxito, en cuanto sea aprobada por
            tu supervisor o un administrador se añadirá en tu siguiente base.
          </Text>
        </View>
        <View />
        <View style={styles.cardFooterDoble1Layout}>
          <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.title4, styles.titleTypo]}>Entendido</Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title5, styles.titleTypo]}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={[styles.text76, styles.textTypo]}>
              Europe Street beat
            </Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={[styles.text77, styles.textTypo]}>
              www.instagram.com
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.cuadreItem}
        resizeMode="cover"
        source={require("../assets/group-26211.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cuadreChildPosition: {
    left: 0,
    width: 414,
  },
  verticalSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  textTypo4: {
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  iconLayout: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  timerPosition: {
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.secundario,
  },
  textTypo3: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  sectiontitleSpaceBlock: {
    paddingVertical: Padding.p_base,
    left: 16,
    paddingHorizontal: 0,
    borderRadius: Border.br_xl,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  cardSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  childFlexBox: {
    marginTop: 4,
    paddingLeft: Padding.p_sm,
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  cardHeaderFlexBox: {
    width: 350,
    alignItems: "center",
    flexDirection: "row",
  },
  text3Typo: {
    display: "flex",
    fontWeight: "700",
    textAlign: "center",
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
    fontSize: FontSize.h4_size,
    justifyContent: "center",
    alignItems: "center",
  },
  lisandroGarcaTypo: {
    width: 231,
    display: "flex",
    color: Color.text,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    alignItems: "center",
  },
  textTypo1: {
    width: 101,
    textAlign: "right",
    marginLeft: 8,
    display: "flex",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    alignItems: "center",
  },
  tablaPosition: {
    paddingBottom: Padding.p_7xs,
    paddingTop: Padding.p_7xs,
    paddingLeft: Padding.p_11xs,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: Color.colorWhitesmoke_200,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  tablaFlexBox: {
    paddingVertical: Padding.p_7xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo2: {
    textAlign: "right",
    marginLeft: 8,
    color: Color.text,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.h5_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  cardFooterDoble1Layout: {
    width: 381,
    flexDirection: "row",
  },
  separadorPosition: {
    left: 32,
    position: "absolute",
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  frameChildLayout: {
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
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.bodyRegular,
    textAlign: "left",
  },
  cuadreChild: {
    height: 709,
    top: 0,
    position: "absolute",
  },
  leftIcon: {
    width: 29,
    height: 29,
  },
  title: {
    color: Color.blanco20,
    fontWeight: "500",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  center: {
    marginLeft: 16,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
  },
  rightIcon: {
    height: 24,
  },
  topbar: {
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 0,
    borderColor: Color.primario,
    backgroundColor: Color.primario,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  vectorIcon: {
    width: 22,
    height: 24,
  },
  text: {
    marginLeft: 25,
    color: Color.blanco20,
    fontSize: FontSize.h4_size,
  },
  text1: {
    top: 1,
    left: 35,
    color: Color.secundario,
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  groupChild: {
    height: "105.2%",
    width: "39.44%",
    top: "0%",
    right: "62.13%",
    bottom: "-5.2%",
    left: "-1.57%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    width: 89,
    height: 27,
    marginLeft: 25,
  },
  aTiempo: {
    fontSize: FontSize.body3_size,
    marginLeft: 25,
    color: Color.blanco20,
    fontWeight: "500",
  },
  timer: {
    top: 53,
    left: 20,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_sm,
    width: 382,
    backgroundColor: Color.secundario,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  subtractIcon: {
    height: 1671,
    width: 414,
  },
  separadorForms: {
    top: 180,
    left: 33,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.h2_size,
    color: Color.texto,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  label: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    flex: 1,
  },
  formItemTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    color: Color.blanco20,
    fontFamily: FontFamily.h4,
    flex: 1,
  },
  child: {
    backgroundColor: Color.secundario,
  },
  main: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  content: {
    alignSelf: "stretch",
  },
  verticalFormIteminput: {
    flex: 1,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    marginLeft: 4,
    display: "none",
  },
  child1: {
    borderColor: Color.cont,
    borderWidth: 1,
    backgroundColor: Color.cont,
    marginTop: 4,
    paddingLeft: Padding.p_sm,
    alignSelf: "stretch",
    borderRadius: Border.br_xl,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  verticalFormItem: {
    width: 382,
    flexDirection: "row",
  },
  placeholder2: {
    color: Color.text,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    flex: 1,
  },
  child2: {
    backgroundColor: Color.blanco201,
  },
  content6: {
    display: "none",
    alignSelf: "stretch",
  },
  verticalFormIteminput6: {
    display: "none",
    flex: 1,
  },
  child7: {
    backgroundColor: Color.cont1,
  },
  verticalFormIteminput7: {
    width: 191,
  },
  verticalFormItem3: {
    width: 382,
    justifyContent: "center",
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Parent: {
    top: 132,
    justifyContent: "center",
    overflow: "hidden",
  },
  totalizador: {
    width: 218,
  },
  text2: {
    color: Color.text,
    display: "none",
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    marginLeft: 16,
  },
  text3: {
    width: 84,
    marginLeft: 16,
  },
  tabla: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  title3: {
    color: Color.blanco,
    height: 21,
    display: "none",
    fontSize: FontSize.h4_size,
    marginLeft: 16,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  arrowIcon4: {
    width: 13,
    height: 13,
    display: "none",
    marginLeft: 16,
  },
  cardHeader: {
    height: 48,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.secundario,
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
  },
  lisandroGarca: {
    fontWeight: "500",
  },
  text4: {
    marginLeft: 8,
    color: Color.text,
    display: "none",
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  text5: {
    color: Color.text,
    fontWeight: "500",
  },
  text6: {
    color: Color.text,
    display: "none",
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
  },
  antonioMachado: {
    fontWeight: "300",
  },
  text8: {
    color: Color.text,
    fontWeight: "300",
  },
  table: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text12: {
    color: Color.secundario20,
    fontWeight: "300",
  },
  text15: {
    color: Color.cont1,
    fontWeight: "300",
  },
  tabla18: {
    display: "none",
  },
  text47: {
    fontWeight: "300",
  },
  tabla19: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderColor: Color.colorWhitesmoke_200,
    borderBottomWidth: 1,
    borderStyle: "solid",
    display: "none",
  },
  walterRamrez6: {
    color: Color.text,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    fontWeight: "500",
    flex: 1,
  },
  text52: {
    fontWeight: "500",
    flex: 1,
  },
  tabla21: {
    backgroundColor: Color.cont,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_base,
  },
  text54: {
    fontWeight: "500",
  },
  tabla22: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    borderColor: Color.colorWhitesmoke_200,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  text59: {
    fontWeight: "300",
    flex: 1,
  },
  tabla24: {
    backgroundColor: Color.cont,
    display: "none",
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_xl,
    paddingHorizontal: Padding.p_base,
  },
  presentaAnteTu: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  text74: {
    fontFamily: FontFamily.h4,
    fontWeight: "500",
  },
  texto: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    color: Color.texto,
    flex: 1,
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    width: 382,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  formdescription14: {
    width: 382,
    alignItems: "center",
  },
  title4: {
    color: Color.blanco20,
  },
  button: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    borderColor: Color.primario,
    backgroundColor: Color.primario,
  },
  title5: {
    color: Color.primario,
  },
  button1: {
    borderRadius: Border.br_981xl,
    width: 93,
    display: "none",
    marginLeft: 16,
    borderColor: Color.primario,
  },
  cardFooterDoble: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  title6: {
    color: Color.secundario,
  },
  button2: {
    borderColor: Color.secundario,
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
  },
  cardFooterDoble1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  botonCentradoPpal1: {
    flexDirection: "row",
  },
  sectiontitleYTextoresaltar24Group: {
    top: 533,
    width: 382,
    justifyContent: "center",
    overflow: "hidden",
  },
  separadorForms13: {
    top: 501,
  },
  separadorForms14: {
    top: 517,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
  },
  frameChild: {
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    width: 44,
    height: 44,
    backgroundColor: Color.cont,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ranking: {
    marginTop: 8,
  },
  groupItem: {
    bottom: 12,
  },
  groupInner: {
    bottom: 6,
  },
  rectangleView: {
    bottom: 0,
  },
  rectangleParent: {
    height: 14,
    width: 17,
  },
  groupWrapper: {
    backgroundColor: Color.texto20,
    borderRadius: Border.br_sm,
    height: 28,
    width: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    left: 17,
    alignItems: "flex-end",
    flexDirection: "row",
    top: 0,
  },
  navbarinferior: {
    bottom: 0,
    left: 0,
    width: 414,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    right: 16,
    bottom: 100,
    width: 55,
    height: 55,
    position: "absolute",
  },
  mask: {
    top: -9,
    left: 1,
    backgroundColor: Color.colorGray_400,
    width: 419,
    height: 1354,
    position: "absolute",
    overflow: "hidden",
  },
  title8: {
    color: Color.texto,
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  cardtitle20: {
    height: 24,
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms18: {
    paddingVertical: Padding.p_5xs,
  },
  texto1: {
    fontWeight: "300",
    textAlign: "left",
    color: Color.texto,
    alignSelf: "stretch",
    fontSize: FontSize.body3_size,
    fontFamily: FontFamily.h4,
  },
  carddescription161: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  text76: {
    lineHeight: 24,
    color: Color.characterTitle85,
    fontSize: FontSize.body3_size,
  },
  texttext: {
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  text77: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
  },
  texttext1: {
    marginTop: 8,
    display: "none",
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  body: {
    padding: Padding.p_base,
    display: "none",
    alignSelf: "stretch",
  },
  card: {
    top: 156,
    width: 382,
  },
  cuadreItem: {
    top: 108,
    left: 152,
    width: 115,
    height: 95,
    position: "absolute",
  },
  cuadre: {
    height: 735,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default CUADRE5;
