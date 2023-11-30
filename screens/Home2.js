import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Home2 = () => {
  return (
    <View style={styles.home}>
      {/* <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/rectangle-233311.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={styles.homeItem} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group111.png")}
      />
      <View style={styles.homeInner} />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract11.png")}
      />
      <View style={[styles.card, styles.cardShadowBox]}>
        <View style={[styles.cardHeader, styles.cardSpaceBlock1]}>
          <Text style={[styles.title, styles.titleTypo4]}>
            Tu jornada debe empezar en:
          </Text>
          <Image
            style={[styles.arrowIcon, styles.text3SpaceBlock]}
            resizeMode="cover"
            source={require("../assets/arrow11.png")}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={styles.text}>Europe Street beat</Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={styles.text1}>www.instagram.com</Text>
          </View>
        </View>
        <View />
        <View style={styles.sectiontitleYTextoresaltar24}>
          <Text style={[styles.title1, styles.titleTypo3]}>30:00 min</Text>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.divider}>
          <View style={styles.dividerChild} />
        </View>
        <View style={styles.cardFooterDoble1Layout}>
          <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.title2, styles.titleTypo1]}>
                Empezar ahora
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.topbar, styles.topbarSpaceBlock]}>
        <Image
          style={[styles.leftIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/left.png")}
        />
        <View style={styles.center}>
          <View style={styles.logo092Wrapper}>
            <Image
              style={styles.logo092Icon}
              resizeMode="cover"
              source={require("../assets/logo09-2.png")}
            />
          </View>
        </View>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
        <Image
          style={[styles.messageIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/group-21192.png")}
        />
        <View style={styles.sectiontitle16DescriptionParent}>
          <View
            style={[
              styles.sectiontitle16Description,
              styles.sectiontitle16Layout,
            ]}
          >
            <View style={[styles.title24, styles.topbarSpaceBlock]}>
              <Text style={[styles.title4, styles.titleTypo]}>
                Bienvenido a tu jornada
              </Text>
            </View>
          </View>
          <View style={[styles.sectiontitle18, styles.sectiontitle16Layout]}>
            <View style={[styles.title24, styles.topbarSpaceBlock]}>
              <Text style={[styles.title5, styles.titleTypo1]}>
                Antonio Machado
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sectiontitleYTextoresaltar241}>
        <Text style={[styles.title1, styles.titleTypo3]}>{`Tu crecimiento en el
ranking`}</Text>
        <Image
          style={styles.rightCircleIcon}
          resizeMode="cover"
          source={require("../assets/rightcircle1.png")}
        />
      </View>
      <View
        style={[styles.cardtittleRankingParent, styles.cardtittleShadowBox]}
      >
        <View style={styles.cardtittleRanking}>
          <Image
            style={[styles.topIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/top1.png")}
          />
          <Text style={[styles.title7, styles.titleTypo4]}>
            Cobrador estatal
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>3</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Lisandro García
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>5.047</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>-250</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo1]}>3</Text>
          <View style={styles.tablaShadowBox}>
            <Text style={[styles.text7, styles.textTypo]}>4</Text>
            <Text style={[styles.antonioMachado, styles.textTypo]}>
              Antonio Machado
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text9, styles.textTypo]}>4.203</Text>
            <Text style={[styles.text9, styles.textTypo]}>+720</Text>
          </View>
          <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>5</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Walter Ramírez
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>3.432</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>+320</Text>
          </View>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View
          style={[styles.carddescription16, styles.cardHeaderIconSpaceBlock]}
        >
          <Text style={styles.texto}>
            <Text style={styles.titleTypo}>{`Estas a tan solo `}</Text>
            <Text style={styles.titleTypo1}>796</Text>
            <Text style={styles.titleTypo}>
              {" "}
              puntos de subir en el ranking. ¡Tu puedes!
            </Text>
          </Text>
        </View>
        <View style={styles.botonCentradoPpal1}>
          <View
            style={[styles.cardFooterDoble1, styles.cardFooterDoble1Layout]}
          >
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.title8, styles.titleTypo1]}>Ver mas</Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cardtittleRankingGroup, styles.cardtittleShadowBox]}>
        <View style={styles.cardtittleRanking}>
          <Image
            style={styles.topnacionalIcon}
            resizeMode="cover"
            source={require("../assets/topnacional2.png")}
          />
          <Text style={[styles.title7, styles.titleTypo4]}>
            Cobrador nacional
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>24</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Elkin Lopez
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>5.047</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>-250</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo1]}>3</Text>
          <View style={styles.tablaShadowBox}>
            <Text style={[styles.text7, styles.textTypo]}>25</Text>
            <Text style={[styles.antonioMachado, styles.textTypo]}>
              Antonio Machado
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text9, styles.textTypo]}>4.203</Text>
            <Text style={[styles.text9, styles.textTypo]}>+720</Text>
          </View>
          <View style={styles.tabla}>
            <Text style={[styles.text2, styles.textFlexBox1]}>26</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Simon Reyes
            </Text>
            <Text style={[styles.text3, styles.textTypo1]}>3</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>3.432</Text>
            <Text style={[styles.text4, styles.textFlexBox]}>+320</Text>
          </View>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsInner}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View
          style={[styles.carddescription16, styles.cardHeaderIconSpaceBlock]}
        >
          <Text style={styles.texto}>
            <Text style={styles.titleTypo}>{`Estas a tan solo `}</Text>
            <Text style={styles.titleTypo1}>796</Text>
            <Text style={styles.titleTypo}>
              {" "}
              puntos de subir en el ranking. ¡Tu puedes!
            </Text>
          </Text>
        </View>
        <View style={styles.botonCentradoPpal1}>
          <View
            style={[styles.cardFooterDoble1, styles.cardFooterDoble1Layout]}
          >
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.title8, styles.titleTypo1]}>Ver mas</Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sectiontitleYTextoresaltar242}>
        <Text style={[styles.title1, styles.titleTypo3]}>
          Feedback de tu última evaluación
        </Text>
      </View>
      <View style={[styles.groupView, styles.homeInnerShadowBox]}>
        <View style={[styles.cardHeaderIconParent, styles.parentPosition1]}>
          <LinearGradient
            style={[styles.cardHeaderIcon, styles.cardHeaderIconSpaceBlock]}
            locations={[0, 1]}
            colors={["#34a8eb", "#3b1678"]}
            useAngle={true}
            angle={263.35}
          >
            <Image
              style={styles.cardHeaderIconChild}
              resizeMode="cover"
              source={require("../assets/group-26521.png")}
            />
            <View style={styles.tittleForm}>
              <Text style={[styles.title14, styles.titleTypo4]}>Carisma</Text>
            </View>
          </LinearGradient>
          <View style={styles.separadorForms4} />
          <View style={styles.sectiontitleYTextoresaltar24}>
            <Text style={[styles.title15, styles.titleTypo4]}>58%</Text>
          </View>
          <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
            <Text style={[styles.min, styles.textTypo1]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec ultricies sapien. Vestibulum interdum lectus.
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeInner1, styles.homeInnerShadowBox]}>
        <View style={[styles.cardHeaderIconParent, styles.parentPosition1]}>
          <LinearGradient
            style={[styles.cardHeaderIcon, styles.cardHeaderIconSpaceBlock]}
            locations={[0, 1]}
            colors={["#34a8eb", "#3b1678"]}
            useAngle={true}
            angle={263.35}
          >
            <Image
              style={styles.cardHeaderIconChild}
              resizeMode="cover"
              source={require("../assets/group-26521.png")}
            />
            <View style={styles.tittleForm}>
              <Text style={[styles.title14, styles.titleTypo4]}>Carisma</Text>
            </View>
          </LinearGradient>
          <View style={styles.separadorForms4} />
          <View style={styles.cardtitle201}>
            <Text style={[styles.title15, styles.titleTypo4]}>58%</Text>
          </View>
          <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
            <Text style={[styles.min, styles.textTypo1]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec ultricies sapien. Vestibulum interdum lectus.
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeInner2, styles.homeInnerShadowBox]}>
        <View style={[styles.cardHeaderIconParent, styles.parentPosition1]}>
          <LinearGradient
            style={[styles.cardHeaderIcon, styles.cardHeaderIconSpaceBlock]}
            locations={[0, 1]}
            colors={["#34a8eb", "#3b1678"]}
            useAngle={true}
            angle={263.35}
          >
            <Image
              style={styles.cardHeaderIconInner}
              resizeMode="cover"
              source={require("../assets/group-26522.png")}
            />
            <View style={styles.tittleForm}>
              <Text style={[styles.title14, styles.titleTypo4]}>
                Puntual...
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.separadorForms4} />
          <View style={styles.sectiontitleYTextoresaltar24}>
            <Text style={[styles.title15, styles.titleTypo4]}>21%</Text>
          </View>
          <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
            <Text style={[styles.min, styles.textTypo1]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec ultricies sapien. Vestibulum interdum lectus.
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.monederoParent, styles.monederoParentLayout]}>
        <View style={[styles.monedero, styles.cardShadowBox]}>
          <View style={[styles.frameParent, styles.parentPosition]}>
            <View style={styles.frameGroup}>
              <View style={styles.tienes2000ATuFavorWrapper}>
                <Text style={styles.tienes2000AContainer}>
                  <Text style={styles.tienes2000AContainer1}>
                    <Text style={styles.titleTypo4}>{`¡Felicidades!
`}</Text>
                    <Text style={[styles.hasObtenidoUn, styles.titleTypo]}>{`
Has obtenido un 82% de aprobación de parte de tus clientes`}</Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.botonCentradoPpal3}>
                <View style={[styles.cardFooterDoble, styles.cardSpaceBlock]}>
                  <View style={[styles.button, styles.buttonFlexBox]}>
                    <Text style={[styles.title2, styles.titleTypo1]}>
                      Redimir
                    </Text>
                  </View>
                  <View style={[styles.button1, styles.buttonFlexBox]}>
                    <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.titleParent, styles.parentPosition]}>
              <Text style={[styles.title22, styles.titleTypo3]}>
                Tu monedero
              </Text>
              <Image
                style={styles.frameItem}
                resizeMode="cover"
                source={require("../assets/group-18571.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.portraitOfCheerfulYoungWomWrapper,
            styles.monederoParentLayout,
          ]}
        >
          <Image
            style={styles.portraitOfCheerfulYoungWomIcon}
            resizeMode="cover"
            source={require("../assets/portraitofcheerfulyoungwoman-1.png")}
          />
        </View>
        <Image
          style={styles.rectangulo3dVioleta2Icon}
          resizeMode="cover"
          source={require("../assets/rectangulo3dvioleta-2.png")}
        />
        <Image
          style={styles.recurso18Icon}
          resizeMode="cover"
          source={require("../assets/recurso-18.png")}
        />
      </View>
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameContainer, styles.navbarinferiorLayout]}>
          <View style={styles.frameView}>
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <Image
                style={[styles.frameInner, styles.frameInnerLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
            </View>
            <Text style={styles.home1Typo}>Home</Text>
          </View>
          <View style={styles.frameView}>
            <Image
              style={styles.frameInnerLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Ranking</Text>
          </View>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameInner, styles.frameInnerLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Jornada</Text>
          </View>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameInner, styles.frameInnerLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Ganancias</Text>
          </View>
          <View style={styles.frameView}>
            <View style={[styles.groupWrapper, styles.frameInnerLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupChild, styles.groupLayout]} />
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.ranking, styles.home1Typo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic21.png")}
      />
      <View style={styles.sectiontitleYTextoresaltar243}>
        <Text style={[styles.title1, styles.titleTypo3]}>¿Cómo mejorar?</Text>
      </View>
      <View
        style={[styles.sectiontitle16Description1, styles.sectiontitle16Layout]}
      >
        <View style={[styles.title24, styles.topbarSpaceBlock]}>
          <Text style={[styles.title25, styles.titleTypo]}>
            Sigue los consejos de los mejores vendedores
          </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    width: 382,
    position: "absolute",
  },
  cardSpaceBlock1: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  titleTypo4: {
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
  },
  text3SpaceBlock: {
    marginLeft: 8,
    display: "none",
  },
  titleTypo3: {
    fontSize: FontSize.h2_size,
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "700",
  },
  cardSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  titleTypo1: {
    fontWeight: "500",
    fontFamily: FontFamily.h4,
  },
  topbarSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    width: 29,
    height: 29,
  },
  iconLayout: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  sectiontitle16Layout: {
    height: 33,
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  cardtittleShadowBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 382,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_xl,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  textFlexBox1: {
    width: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  lisandroGarcaLayout: {
    width: 176,
    textAlign: "left",
    marginLeft: 8,
  },
  textTypo1: {
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
  },
  textFlexBox: {
    width: 60,
    marginLeft: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  textTypo: {
    color: Color.secundario20,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    display: "flex",
    fontFamily: FontFamily.h4,
    alignItems: "center",
  },
  cardHeaderIconSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
  },
  cardFooterDoble1Layout: {
    width: 381,
    flexDirection: "row",
  },
  homeInnerShadowBox: {
    height: 256,
    top: 1552,
    width: 160,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    position: "absolute",
  },
  parentPosition1: {
    borderBottomRightRadius: Border.br_xl,
    overflow: "hidden",
  },
  monederoParentLayout: {
    height: 205,
    position: "absolute",
  },
  parentPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  frameLayout: {
    height: 44,
    width: 44,
  },
  frameInnerLayout: {
    height: 28,
    width: 28,
  },
  home1Typo: {
    color: Color.texto20,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.body5_size,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.h4,
  },
  groupLayout: {
    height: 2,
    backgroundColor: Color.secudario20,
    borderRadius: Border.br_11xs,
    right: 0,
    width: 17,
    position: "absolute",
  },
  homeChild: {
    height: 481,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image9Icon: {
    top: 13,
    left: 207,
    width: 0,
    height: 0,
    position: "absolute",
  },
  homeItem: {
    top: 1468,
    left: 447,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray_200,
    width: 117,
    height: 8,
    position: "absolute",
  },
  groupIcon: {
    height: "0.56%",
    width: "4.11%",
    top: "41.22%",
    right: "-39.86%",
    bottom: "58.22%",
    left: "135.75%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeInner: {
    top: 3314,
    left: 801,
    height: 84,
    position: "absolute",
  },
  subtractIcon: {
    height: 1543,
    width: 414,
  },
  title: {
    color: Color.blanco,
    height: 21,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flex: 1,
  },
  arrowIcon: {
    width: 13,
    height: 13,
  },
  cardHeader: {
    flexDirection: "row",
    height: 48,
    backgroundColor: Color.secundario,
    alignItems: "center",
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
  },
  text: {
    lineHeight: 24,
    color: Color.characterTitle85,
    textAlign: "left",
    fontSize: FontSize.body3_size,
  },
  texttext: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text1: {
    lineHeight: 22,
    color: Color.characterSecondary45,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
  },
  texttext1: {
    marginTop: 8,
    display: "none",
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  body: {
    padding: Padding.p_base,
    display: "none",
    alignSelf: "stretch",
  },
  title1: {
    color: Color.texto,
    flex: 1,
  },
  sectiontitleYTextoresaltar24: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  separadorFormsChild: {
    width: 351,
    height: 1,
  },
  separadorForms1: {
    paddingVertical: Padding.p_5xs,
  },
  dividerChild: {
    borderColor: Color.blanco20,
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    alignSelf: "stretch",
  },
  divider: {
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    color: Color.blanco20,
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.primario,
    borderStyle: "solid",
    backgroundColor: Color.primario,
  },
  title3: {
    color: Color.primario,
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "center",
  },
  button1: {
    borderRadius: Border.br_981xl,
    width: 93,
    marginLeft: 16,
    borderWidth: 1,
    borderColor: Color.primario,
    borderStyle: "solid",
    display: "none",
  },
  cardFooterDoble: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  card: {
    top: 191,
    height: 182,
    alignItems: "center",
    width: 382,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    left: 16,
    backgroundColor: Color.blanco20,
  },
  leftIcon: {
    height: 29,
  },
  logo092Icon: {
    width: 107,
    height: 60,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logo092Wrapper: {
    width: 100,
    height: 32,
    overflow: "hidden",
  },
  center: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  messageIcon: {
    overflow: "hidden",
  },
  topbar: {
    borderBottomWidth: 1,
    height: 45,
    borderColor: Color.primario,
    paddingVertical: 0,
    backgroundColor: Color.primario,
    borderStyle: "solid",
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title4: {
    color: Color.blanco20,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    flex: 1,
  },
  title24: {
    justifyContent: "center",
    alignSelf: "stretch",
    width: 382,
    overflow: "hidden",
  },
  sectiontitle16Description: {
    width: 250,
    left: 0,
    top: 0,
  },
  title5: {
    color: Color.blanco20,
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
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
    flexDirection: "row",
    alignItems: "center",
    width: 382,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rightCircleIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  sectiontitleYTextoresaltar241: {
    top: 421,
    paddingLeft: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 382,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  topIcon: {
    height: 29,
  },
  title7: {
    marginLeft: 16,
    color: Color.texto,
    textAlign: "center",
  },
  cardtittleRanking: {
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_3xs,
    width: 350,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  text2: {
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    display: "flex",
    alignItems: "center",
  },
  lisandroGarca: {
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    display: "flex",
    alignItems: "center",
  },
  text3: {
    marginLeft: 8,
    display: "none",
    textAlign: "center",
  },
  text4: {
    color: Color.text,
    fontWeight: "300",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.h4,
    display: "flex",
    alignItems: "center",
  },
  tabla: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text6: {
    display: "none",
    textAlign: "center",
  },
  text7: {
    width: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  antonioMachado: {
    width: 176,
    textAlign: "left",
    marginLeft: 8,
  },
  text9: {
    width: 60,
    marginLeft: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  tablaShadowBox: {
    borderColor: Color.colorLightskyblue_100,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "#62b5e5",
    paddingVertical: Padding.p_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    borderRadius: Border.br_xl,
  },
  table: {
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  texto: {
    color: Color.texto,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    alignSelf: "stretch",
  },
  carddescription16: {
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  title8: {
    textDecoration: "underline",
    color: Color.secundario,
    fontSize: FontSize.h5_size,
    fontWeight: "500",
    textAlign: "center",
  },
  button2: {
    height: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_xl,
  },
  cardFooterDoble1: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
  },
  botonCentradoPpal1: {
    flexDirection: "row",
  },
  cardtittleRankingParent: {
    top: 503,
  },
  topnacionalIcon: {
    width: 42,
    height: 29,
  },
  separadorFormsInner: {
    width: 350,
    height: 0,
  },
  cardtittleRankingGroup: {
    top: 833,
  },
  sectiontitleYTextoresaltar242: {
    top: 1163,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 382,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  cardHeaderIconChild: {
    height: 19,
    width: 20,
  },
  title14: {
    color: Color.blanco20,
    textAlign: "left",
    flex: 1,
  },
  tittleForm: {
    width: 95,
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  cardHeaderIcon: {
    backgroundColor: "transparent",
    width: 160,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    height: 48,
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
  },
  separadorForms4: {
    width: 160,
    height: 8,
  },
  title15: {
    color: Color.texto,
    textAlign: "center",
    flex: 1,
  },
  min: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  cardBody: {
    justifyContent: "center",
  },
  cardHeaderIconParent: {
    paddingBottom: Padding.p_base,
    width: 160,
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  groupView: {
    left: 16,
  },
  cardtitle201: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  homeInner1: {
    left: 384,
  },
  cardHeaderIconInner: {
    width: 16,
    height: 19,
  },
  homeInner2: {
    left: 200,
  },
  hasObtenidoUn: {
    fontSize: FontSize.bodyRegular_size,
  },
  tienes2000AContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  tienes2000AContainer: {
    alignItems: "flex-end",
    width: 167,
    color: Color.texto,
    display: "flex",
    textAlign: "center",
  },
  tienes2000ATuFavorWrapper: {
    height: 58,
    width: 167,
    justifyContent: "center",
    alignItems: "center",
  },
  botonCentradoPpal3: {
    width: 217,
    marginTop: 8,
    display: "none",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    width: "56.81%",
    left: "43.19%",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    borderBottomRightRadius: Border.br_xl,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  title22: {
    width: 183,
    color: Color.blanco20,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    width: 35,
    marginTop: 10,
    display: "none",
    height: 48,
  },
  titleParent: {
    width: "47.91%",
    right: "52.09%",
    borderTopLeftRadius: Border.br_xl,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xl,
    borderBottomRightRadius: Border.br_xl,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: Color.secundario,
    alignItems: "center",
  },
  frameParent: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  monedero: {
    top: 36,
    height: 169,
    width: 382,
    left: 0,
  },
  portraitOfCheerfulYoungWomIcon: {
    top: -29,
    left: -31,
    width: 352,
    height: 234,
    position: "absolute",
  },
  portraitOfCheerfulYoungWomWrapper: {
    left: 7,
    width: 169,
    top: 0,
    overflow: "hidden",
  },
  rectangulo3dVioleta2Icon: {
    top: 139,
    left: 134,
    width: 32,
    height: 37,
    position: "absolute",
  },
  recurso18Icon: {
    top: 158,
    left: 148,
    height: 23,
    width: 28,
    position: "absolute",
  },
  monederoParent: {
    top: 1237,
    width: 382,
    left: 16,
  },
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
  },
  frameInner: {
    borderRadius: Border.br_sm,
    height: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.cont,
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    width: 76,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ranking: {
    marginTop: 8,
  },
  groupChild: {
    bottom: 12,
  },
  groupItem: {
    bottom: 6,
  },
  groupInner: {
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
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    left: 17,
    alignItems: "flex-end",
    flexDirection: "row",
    top: 0,
  },
  navbarinferior: {
    bottom: 0,
    width: 414,
    left: 0,
    overflow: "hidden",
  },
  buttonpanicIcon: {
    bottom: 95,
    left: 342,
    width: 55,
    height: 55,
    position: "absolute",
  },
  sectiontitleYTextoresaltar243: {
    top: 1466,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 382,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  title25: {
    color: Color.texto,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    flex: 1,
  },
  sectiontitle16Description1: {
    top: 1495,
    left: 16,
  },
  home: {
    height: 732,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.blanco20,
  },
});

export default Home2;
