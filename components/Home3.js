import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Home3 = () => {
  return (
    <View style={styles.home}>
      <Image
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
        source={require("../assets/group31.png")}
      />
      <View style={styles.homeInner} />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract51.png")}
      />
      <View style={[styles.card, styles.parentShadowBox]}>
        <View style={[styles.cardHeader, styles.cardSpaceBlock1]}>
          <Text style={[styles.title, styles.titleFlexBox]}>
            Tu jornada debe empezar en:
          </Text>
          <Image
            style={[styles.arrowIcon, styles.text11SpaceBlock]}
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
          <Text style={[styles.title1, styles.titleTypo3]}>00:00 min</Text>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.divider}>
          <View style={[styles.dividerChild, styles.dividerLayout]} />
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
      <View style={styles.groupParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/group-21191.png")}
        />
        <View style={styles.sectiontitle16DescriptionParent}>
          <View
            style={[
              styles.sectiontitle16Description,
              styles.sectiontitle18Layout,
            ]}
          >
            <View style={styles.title24}>
              <Text style={[styles.title4, styles.titleTypo]}>
                Bienvenido a tu jornada
              </Text>
            </View>
          </View>
          <View style={[styles.sectiontitle18, styles.sectiontitle18Layout]}>
            <View style={styles.title24}>
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
      <View style={styles.subtitulos}>
        <View style={styles.content}>
          <Text style={[styles.title7, styles.titleFlexBox]}>
            ¿Cómo mejorar?
          </Text>
        </View>
        <View style={[styles.content1, styles.cardSpaceBlock]}>
          <Text style={[styles.title8, styles.titleTypo]}>
            Sigue los consejos de los mejores vendedores
          </Text>
        </View>
      </View>
      <View style={[styles.cardParent, styles.cardParentLayout]}>
        <View style={[styles.card1, styles.card1FlexBox]}>
          <View style={[styles.cardHeader1, styles.cardSpaceBlock1]}>
            <Text style={[styles.title9, styles.titleTypo3]}>
              ¡Felicidades!
            </Text>
            <Image
              style={[styles.arrowIcon, styles.text11SpaceBlock]}
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
          <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
            <Text style={[styles.min, styles.minTypo]}>
              Has obtenido un 82% de aprobación de parte de tus clientes.
            </Text>
          </View>
        </View>
        <View style={[styles.groupChild, styles.card1Position]} />
        <View
          style={[
            styles.portraitOfCheerfulYoungWomWrapper,
            styles.cardParentLayout,
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
      <View style={[styles.card2, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.cardHeader2, styles.cardSpaceBlock1]}
          locations={[0, 1]}
          colors={["#34a8eb", "#3b1678"]}
          useAngle={true}
          angle={-90}
        >
          <Text style={[styles.title, styles.titleFlexBox]}>Carisma</Text>
          <Image
            style={[styles.arrowIcon, styles.text11SpaceBlock]}
            resizeMode="cover"
            source={require("../assets/arrow31.png")}
          />
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={styles.text}>Europe Street beat</Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={styles.text1}>www.instagram.com</Text>
          </View>
        </View>
        <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
          <Text style={[styles.min1, styles.minTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec ultricies sapien. Vestibulum interdum lectus.
          </Text>
        </View>
        <View style={styles.divider}>
          <View style={[styles.dividerItem, styles.dividerLayout]} />
        </View>
      </View>
      <View style={[styles.card3, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.cardHeader2, styles.cardSpaceBlock1]}
          locations={[0, 1]}
          colors={["#34a8eb", "#3b1678"]}
          useAngle={true}
          angle={-90}
        >
          <Text style={[styles.title, styles.titleFlexBox]}>Puntualidad</Text>
          <Image
            style={[styles.arrowIcon, styles.text11SpaceBlock]}
            resizeMode="cover"
            source={require("../assets/arrow31.png")}
          />
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={styles.text}>Europe Street beat</Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={styles.text1}>www.instagram.com</Text>
          </View>
        </View>
        <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
          <Text style={[styles.min1, styles.minTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec ultricies sapien. Vestibulum interdum lectus.
          </Text>
        </View>
        <View style={styles.divider}>
          <View style={[styles.dividerItem, styles.dividerLayout]} />
        </View>
      </View>
      <View style={[styles.card4, styles.cardShadowBox]}>
        <LinearGradient
          style={[styles.cardHeader2, styles.cardSpaceBlock1]}
          locations={[0, 1]}
          colors={["#34a8eb", "#3b1678"]}
          useAngle={true}
          angle={-90}
        >
          <Text style={[styles.title, styles.titleFlexBox]}>Respeto</Text>
          <Image
            style={[styles.arrowIcon, styles.text11SpaceBlock]}
            resizeMode="cover"
            source={require("../assets/arrow31.png")}
          />
        </LinearGradient>
        <View style={styles.body}>
          <View style={styles.texttext}>
            <Text style={styles.text}>Europe Street beat</Text>
          </View>
          <View style={styles.texttext1}>
            <Text style={styles.text1}>www.instagram.com</Text>
          </View>
        </View>
        <View style={[styles.cardBody, styles.cardSpaceBlock1]}>
          <Text style={[styles.min1, styles.minTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec ultricies sapien. Vestibulum interdum lectus.
          </Text>
        </View>
        <View style={styles.divider}>
          <View style={[styles.dividerItem, styles.dividerLayout]} />
        </View>
      </View>
      <Image
        style={styles.buttonpanicIcon}
        resizeMode="cover"
        source={require("../assets/buttonpanic31.png")}
      />
      <View
        style={[styles.cardtittleRankingParent, styles.cardtittleSpaceBlock]}
      >
        <View style={styles.cardtittleRanking}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/top2.png")}
          />
          <Text style={[styles.title13, styles.titleTypo3]}>
            Cobrador estatal
          </Text>
        </View>
        <View style={[styles.table, styles.card1FlexBox]}>
          <View style={styles.tabla}>
            <Text style={[styles.text10, styles.textFlexBox1]}>3</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Lisandro García
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>5.047</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>-250</Text>
          </View>
          <Text style={[styles.text14, styles.minTypo]}>3</Text>
          <View style={styles.tablaShadowBox}>
            <Text style={[styles.text15, styles.textTypo]}>4</Text>
            <Text style={[styles.antonioMachado, styles.textTypo]}>
              Antonio Machado
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text17, styles.textTypo]}>4.203</Text>
            <Text style={[styles.text17, styles.textTypo]}>+720</Text>
          </View>
          <View style={styles.tabla}>
            <Text style={[styles.text10, styles.textFlexBox1]}>5</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Walter Ramírez
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>3.432</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>+320</Text>
          </View>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsChild}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.carddescription16}>
          <Text style={styles.texto}>
            <Text style={styles.titleTypo}>{`Estas a tan solo `}</Text>
            <Text style={styles.titleTypo1}>796</Text>
            <Text style={styles.titleTypo}>
              {" "}
              puntos de subir el rankiing. ¡Tu puedes!
            </Text>
          </Text>
        </View>
        <View style={styles.botonCentradoPpal1}>
          <View
            style={[styles.cardFooterDoble1, styles.cardFooterDoble1Layout]}
          >
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.title14, styles.titleTypo1]}>Ver mas</Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.title3, styles.titleTypo1]}>No</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.cardtittleRankingGroup, styles.cardtittleSpaceBlock]}
      >
        <View style={styles.cardtittleRanking}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/top2.png")}
          />
          <Text style={[styles.title13, styles.titleTypo3]}>
            Cobrador nacional
          </Text>
        </View>
        <View style={[styles.table, styles.card1FlexBox]}>
          <View style={styles.tabla}>
            <Text style={[styles.text10, styles.textFlexBox1]}>24</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Elkin Lopez
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>5.047</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>-250</Text>
          </View>
          <Text style={[styles.text14, styles.minTypo]}>3</Text>
          <View style={styles.tablaShadowBox}>
            <Text style={[styles.text15, styles.textTypo]}>25</Text>
            <Text style={[styles.antonioMachado, styles.textTypo]}>
              Antonio Machado
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text17, styles.textTypo]}>4.203</Text>
            <Text style={[styles.text17, styles.textTypo]}>+720</Text>
          </View>
          <View style={styles.tabla}>
            <Text style={[styles.text10, styles.textFlexBox1]}>26</Text>
            <Text style={[styles.lisandroGarca, styles.lisandroGarcaLayout]}>
              Simon Reyes
            </Text>
            <Text style={[styles.text11, styles.minTypo]}>3</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>3.432</Text>
            <Text style={[styles.text12, styles.textFlexBox]}>+320</Text>
          </View>
        </View>
        <View style={[styles.separadorForms1, styles.cardSpaceBlock]}>
          <Image
            style={styles.separadorFormsInner}
            resizeMode="cover"
            source={require("../assets/vector-110.png")}
          />
        </View>
        <View style={styles.carddescription16}>
          <Text style={styles.texto}>
            <Text style={styles.titleTypo}>{`Estas a tan solo `}</Text>
            <Text style={styles.titleTypo1}>796</Text>
            <Text style={styles.titleTypo}>
              {" "}
              puntos de subir el rankiing. ¡Tu puedes!
            </Text>
          </Text>
        </View>
        <View style={styles.botonCentradoPpal1}>
          <View
            style={[styles.cardFooterDoble1, styles.cardFooterDoble1Layout]}
          >
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Text style={[styles.title14, styles.titleTypo1]}>Ver mas</Text>
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
      <View style={[styles.navbarinferior, styles.navbarinferiorLayout]}>
        <Image
          style={[styles.navbarinferiorChild, styles.navbarinferiorLayout]}
          resizeMode="cover"
          source={require("../assets/vector-48.png")}
        />
        <View style={[styles.frameParent, styles.navbarinferiorLayout]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <Image
                style={[styles.frameItem, styles.frameItemLayout]}
                resizeMode="cover"
                source={require("../assets/frame-93.png")}
              />
            </View>
            <Text style={styles.home1Typo}>Home</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameItemLayout}
              resizeMode="cover"
              source={require("../assets/vector32.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Ranking</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9221.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Jornada</Text>
          </View>
          <View style={styles.frameGroup}>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/frame-9231.png")}
            />
            <Text style={[styles.ranking, styles.home1Typo]}>Ganancias</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.groupWrapper, styles.frameItemLayout]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
                <View style={[styles.rectangleView, styles.groupLayout]} />
              </View>
            </View>
            <Text style={[styles.ranking, styles.home1Typo]}>Mi perfil</Text>
          </View>
        </View>
      </View>
      <View style={styles.mask} />
      <View style={[styles.menudesplegableParent, styles.cardSpaceBlock]}>
        <View style={styles.menudesplegable}>
          <View style={styles.cardHeader5}>
            <Text style={[styles.title20, styles.titleTypo1]}>
              Chat al supervisor
            </Text>
            <Image
              style={[styles.arrowIcon5, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow411.png")}
            />
          </View>
        </View>
        <View style={styles.menudesplegable1}>
          <View style={styles.cardHeader5}>
            <Text style={[styles.title20, styles.titleTypo1]}>
              Chat al administrador
            </Text>
            <Image
              style={[styles.arrowIcon5, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow411.png")}
            />
          </View>
        </View>
        <View style={styles.menudesplegable1}>
          <View style={styles.cardHeader5}>
            <Text style={[styles.title20, styles.titleTypo1]}>
              Chat a central
            </Text>
            <Image
              style={[styles.arrowIcon5, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow411.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.topbar}>
        <Image
          style={styles.iconLayout1}
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
      <Image
        style={[styles.homeChild1, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-29161.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
  },
  cardSpaceBlock1: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  text11SpaceBlock: {
    marginLeft: 8,
    display: "none",
  },
  titleTypo3: {
    fontFamily: FontFamily.h4,
    fontWeight: "700",
  },
  cardSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  dividerLayout: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    alignSelf: "stretch",
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
  sectiontitle18Layout: {
    height: 33,
    width: 250,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  titleTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  cardParentLayout: {
    height: 205,
    position: "absolute",
  },
  card1FlexBox: {
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
  },
  minTypo: {
    color: Color.text,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
  },
  card1Position: {
    height: 190,
    borderBottomRightRadius: Border.br_xl,
    top: 15,
    position: "absolute",
  },
  cardShadowBox: {
    width: 160,
    top: 1546,
    height: 205,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  cardtittleSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 382,
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
  cardFooterDoble1Layout: {
    width: 381,
    flexDirection: "row",
  },
  navbarinferiorLayout: {
    height: 76,
    position: "absolute",
  },
  frameLayout: {
    height: 44,
    width: 44,
  },
  frameItemLayout: {
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
  arrowIconLayout: {
    height: 13,
    width: 13,
  },
  iconLayout: {
    height: 24,
    width: 24,
    marginLeft: 16,
  },
  homeChild: {
    height: 481,
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
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
    top: "41.21%",
    right: "-39.86%",
    bottom: "58.24%",
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
    textAlign: "center",
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
    flex: 1,
  },
  arrowIcon: {
    height: 13,
    width: 13,
  },
  cardHeader: {
    height: 48,
    flexDirection: "row",
    backgroundColor: Color.secundario,
    borderBottomLeftRadius: Border.br_xl,
    paddingVertical: Padding.p_xs,
    borderTopRightRadius: Border.br_xl,
    alignItems: "center",
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
    fontSize: FontSize.h2_size,
    color: Color.texto,
    textAlign: "center",
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    top: 191,
    height: 182,
    alignItems: "center",
    width: 382,
    borderRadius: Border.br_xl,
    left: 16,
    position: "absolute",
    backgroundColor: Color.blanco20,
  },
  title4: {
    color: Color.blanco20,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    flex: 1,
  },
  title24: {
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    width: 382,
    overflow: "hidden",
  },
  sectiontitle16Description: {
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
    width: 20,
    height: 20,
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
  title7: {
    width: 350,
    color: Color.texto,
    textAlign: "left",
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    fontSize: FontSize.h4_size,
  },
  content: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  title8: {
    width: 350,
    color: Color.texto,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  content1: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  subtitulos: {
    top: 1473,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  title9: {
    color: Color.texto,
    textAlign: "center",
    fontSize: FontSize.h4_size,
    fontFamily: FontFamily.h4,
    fontWeight: "700",
    flex: 1,
  },
  cardHeader1: {
    flexDirection: "row",
    borderBottomLeftRadius: Border.br_xl,
    paddingVertical: Padding.p_xs,
    borderTopRightRadius: Border.br_xl,
    alignItems: "center",
  },
  min: {
    textAlign: "left",
    fontSize: FontSize.body3_size,
    alignSelf: "stretch",
  },
  cardBody: {
    justifyContent: "center",
  },
  card1: {
    left: 167,
    width: 215,
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_xs,
    height: 190,
    borderBottomRightRadius: Border.br_xl,
    top: 15,
    position: "absolute",
    borderTopRightRadius: Border.br_xl,
    paddingBottom: Padding.p_xs,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: Color.blanco20,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    width: 191,
    backgroundColor: Color.secundario,
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
    left: 10,
    width: 169,
    top: 0,
    overflow: "hidden",
  },
  rectangulo3dVioleta2Icon: {
    top: 139,
    left: 137,
    width: 32,
    height: 37,
    position: "absolute",
  },
  recurso18Icon: {
    top: 158,
    left: 151,
    height: 23,
    width: 28,
    position: "absolute",
  },
  cardParent: {
    top: 1237,
    width: 382,
    left: 16,
  },
  cardHeader2: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderBottomLeftRadius: Border.br_xl,
    paddingVertical: Padding.p_xs,
    borderTopRightRadius: Border.br_xl,
    alignItems: "center",
  },
  min1: {
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    alignSelf: "stretch",
  },
  dividerItem: {
    borderColor: Color.colorWhitesmoke_200,
  },
  card2: {
    left: 16,
  },
  card3: {
    left: 192,
  },
  card4: {
    left: 368,
  },
  buttonpanicIcon: {
    top: 1779,
    left: 342,
    width: 55,
    height: 55,
    position: "absolute",
  },
  iconLayout1: {
    height: 29,
    width: 29,
  },
  title13: {
    marginLeft: 16,
    color: Color.texto,
    textAlign: "center",
    fontSize: FontSize.h4_size,
    fontFamily: FontFamily.h4,
    fontWeight: "700",
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
  text10: {
    color: Color.text,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.bodyRegular_size,
    display: "flex",
    alignItems: "center",
  },
  lisandroGarca: {
    color: Color.text,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.bodyRegular_size,
    display: "flex",
    alignItems: "center",
  },
  text11: {
    fontSize: FontSize.bodyRegular_size,
    marginLeft: 8,
    display: "none",
    textAlign: "center",
  },
  text12: {
    color: Color.text,
    fontWeight: "300",
    fontFamily: FontFamily.h4,
    fontSize: FontSize.bodyRegular_size,
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
  text14: {
    fontSize: FontSize.bodyRegular_size,
    display: "none",
    textAlign: "center",
  },
  text15: {
    width: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  antonioMachado: {
    width: 176,
    textAlign: "left",
    marginLeft: 8,
  },
  text17: {
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
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
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
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  title14: {
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
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
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
  navbarinferiorChild: {
    right: -87,
    width: 501,
    bottom: 0,
  },
  frameItem: {
    borderRadius: Border.br_sm,
    height: 28,
  },
  frameWrapper: {
    borderRadius: Border.br_3xl,
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
    overflow: "hidden",
    width: 414,
  },
  mask: {
    top: -28,
    backgroundColor: Color.colorGray_400,
    height: 799,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 414,
  },
  title20: {
    color: Color.texto,
    textAlign: "left",
    fontSize: FontSize.body3_size,
    flex: 1,
  },
  arrowIcon5: {
    marginLeft: 16,
  },
  cardHeader5: {
    width: 282,
    paddingVertical: Padding.p_2xs_5,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  menudesplegable: {
    justifyContent: "center",
    borderRadius: Border.br_xl,
  },
  menudesplegable1: {
    marginTop: 10,
    justifyContent: "center",
    borderRadius: Border.br_xl,
  },
  menudesplegableParent: {
    top: 45,
    left: 116,
    paddingVertical: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
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
    flex: 1,
    alignItems: "center",
  },
  messageIcon: {
    overflow: "hidden",
  },
  topbar: {
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 0,
    borderColor: Color.primario,
    backgroundColor: Color.primario,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    width: 414,
  },
  homeChild1: {
    top: 67,
    left: 281,
    position: "absolute",
  },
  home: {
    height: 754,
    overflow: "hidden",
    width: 414,
    backgroundColor: Color.blanco20,
  },
});

export default Home3;
