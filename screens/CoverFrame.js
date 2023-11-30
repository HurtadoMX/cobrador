import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const CoverFrame = () => {
  return (
    <View style={styles.coverFrame}>
      {/* <View style={[styles.coverFrameChild, styles.groupChildPosition]} />
      <Image
        style={[styles.coverFrameItem, styles.fromPosition]}
        resizeMode="cover"
        source={require("../assets/group-16.png")}
      />
      <Image
        style={[styles.webLogo1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/weblogo-1.png")}
      />
      <Text style={[styles.madeByTeam, styles.madeByTeamPosition]}>
        Made by Team Locofy
      </Text>
      <View style={[styles.travelWebsiteWrapper, styles.madeByTeamPosition]}>
        <Text style={[styles.travelWebsite, styles.viewTypo]}>
          Travel Website
        </Text>
      </View>
      <View style={styles.homepage}>
        <View style={styles.heroSection}>
          <View style={[styles.topHeader, styles.topHeaderSpaceBlock]}>
            <View style={[styles.topContainer, styles.toAndFromFlexBox]}>
              <Image
                style={styles.fickleflightLogoIcon}
                resizeMode="cover"
                source={require("../assets/fickleflight-logo.png")}
              />
              <View style={styles.navigationRight}>
                <View style={styles.navigationRight}>
                  <Text style={[styles.explore, styles.h55mTypo1]}>
                    Explore
                  </Text>
                  <Text style={[styles.search, styles.searchSpaceBlock]}>
                    Search
                  </Text>
                  <Text style={[styles.hotels, styles.searchSpaceBlock]}>
                    Hotels
                  </Text>
                  <Text style={[styles.offers, styles.offersTypo]}>Offers</Text>
                </View>
                <View style={styles.accountSection}>
                  <Image
                    style={styles.hamburgerMenuIcon}
                    resizeMode="cover"
                    source={require("../assets/hamburgermenu.png")}
                  />
                  <Image
                    style={styles.notificationBellIcon}
                    resizeMode="cover"
                    source={require("../assets/notification-bell.png")}
                  />
                  <Image
                    style={styles.unsplashd1upkifd04aIcon}
                    resizeMode="cover"
                    source={require("../assets/unsplashd1upkifd04a.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.searchSection}>
            <LinearGradient
              style={[styles.bannerGradient, styles.bannerPosition]}
              locations={[0.05, 1]}
              colors={["#114f8b", "#2a9ad7"]}
              useAngle={true}
              angle={78.78}
            />
            <Image
              style={[styles.bannerBackground, styles.bannerPosition]}
              resizeMode="cover"
              source={require("../assets/banner--background.png")}
            />
            <View style={[styles.searchContainer, styles.groupChildPosition]}>
              <View style={styles.heroSection}>
                <Text
                  style={styles.letsExplore}
                >{`Let’s explore & travel the world`}</Text>
                <Text style={styles.findTheBest}>
                  Find the best destinations and the most popular stays!
                </Text>
              </View>
              <View style={styles.searchForm}>
                <View style={styles.inputsRow}>
                  <View style={[styles.inputGroup, styles.groupFlexBox]}>
                    <View style={styles.departureField}>
                      <View style={[styles.input, styles.inputBorder]}>
                        <View style={styles.labelContainer}>
                          <Text style={[styles.departure, styles.dateTypo]}>
                            Departure
                          </Text>
                        </View>
                        <View style={[styles.active, styles.activeSpaceBlock]}>
                          <View style={styles.muiautocompletetag}>
                            <View>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel.png")}
                                />
                              </View>
                            </View>
                            <View style={styles.chip2}>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel1.png")}
                                />
                              </View>
                            </View>
                          </View>
                          <Text
                            style={[styles.singaporeSin, styles.yourNameTypo]}
                          >
                            Singapore (SIN)
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inputGroup, styles.groupFlexBox]}>
                    <View style={styles.departureField}>
                      <View style={[styles.input, styles.inputBorder]}>
                        <View style={styles.labelContainer}>
                          <Text style={[styles.arrival, styles.dateTypo]}>
                            Arrival
                          </Text>
                        </View>
                        <View style={[styles.active, styles.activeSpaceBlock]}>
                          <View style={styles.muiautocompletetag}>
                            <View>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel2.png")}
                                />
                              </View>
                            </View>
                            <View style={styles.chip2}>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel3.png")}
                                />
                              </View>
                            </View>
                          </View>
                          <Text
                            style={[styles.singaporeSin, styles.yourNameTypo]}
                          >
                            Los Angeles (LA)
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.inputGroup, styles.groupFlexBox]}>
                    <View style={styles.departureField}>
                      <View style={[styles.input, styles.inputBorder]}>
                        <View style={styles.labelContainer}>
                          <Text style={[styles.date, styles.dateTypo]}>
                            Date
                          </Text>
                        </View>
                        <View style={[styles.active, styles.activeSpaceBlock]}>
                          <View style={styles.muiautocompletetag}>
                            <View>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel4.png")}
                                />
                              </View>
                            </View>
                            <View style={styles.chip2}>
                              <View style={styles.container}>
                                <View style={styles.avatar}>
                                  <Text style={styles.op}>F</Text>
                                </View>
                                <View style={styles.typography}>
                                  <Text style={styles.chip1}>Chip</Text>
                                </View>
                                <Image
                                  style={styles.cancelIcon}
                                  resizeMode="cover"
                                  source={require("../assets/cancel5.png")}
                                />
                              </View>
                            </View>
                          </View>
                          <Text
                            style={[styles.singaporeSin, styles.yourNameTypo]}
                          >
                            01/05/2022
                          </Text>
                          <Image
                            style={styles.dateIcon}
                            resizeMode="cover"
                            source={require("../assets/date.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.groupFlexBox}>
                  <View
                    style={[styles.searchFlightsButton, styles.buttonLayout]}
                  >
                    <Text style={[styles.button, styles.buttonTypo]}>
                      Search flights
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.homeContents, styles.topHeaderSpaceBlock]}>
          <View style={styles.upcomingFlightSection}>
            <Text style={[styles.upcomingFlight, styles.text9Clr]}>
              Upcoming Flight
            </Text>
            <View style={styles.flightDetails}>
              <View style={[styles.flightMainContainer, styles.inputBorder]}>
                <View style={[styles.toAndFrom, styles.toAndFromFlexBox]}>
                  <View style={styles.fromDetails}>
                    <Text style={[styles.sin, styles.sinPosition]}>SIN</Text>
                    <Text style={[styles.singapore, styles.h55mClr]}>
                      Singapore
                    </Text>
                  </View>
                  <View style={styles.duration}>
                    <Text style={[styles.h55m, styles.h55mClr]}>15H 55M</Text>
                    <Image
                      style={[styles.durationChild, styles.groupChildPosition]}
                      resizeMode="cover"
                      source={require("../assets/group-17.png")}
                    />
                  </View>
                  <View style={styles.toDetails}>
                    <Text style={[styles.lax, styles.sinTypo]}>LAX</Text>
                    <Text style={[styles.losAngeles, styles.h55mClr]}>
                      Los Angeles
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.horizontalLine,
                    styles.horizontalLineSpaceBlock,
                  ]}
                />
                <View
                  style={[
                    styles.departureDetails,
                    styles.horizontalLineSpaceBlock,
                  ]}
                >
                  <Text style={[styles.departsOn1, styles.h55mClr]}>
                    Departs on: 1 May, 08:00 AM
                  </Text>
                  <Text style={[styles.daysToGoContainer, styles.h55mClr]}>
                    <Text style={styles.h55mTypo}>4 days</Text>
                    <Text style={styles.toGo}> to go</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.lineSeparator, styles.footerChildLayout]} />
              <View style={styles.prepareMenu}>
                <Text style={[styles.prepareForYour, styles.yourViewTypo]}>
                  Prepare for your trip
                </Text>
                <View style={[styles.tripMenus, styles.toAndFromFlexBox]}>
                  <View style={styles.hotel}>
                    <Image
                      style={styles.hotelChild}
                      resizeMode="cover"
                      source={require("../assets/group-21.png")}
                    />
                    <Text style={[styles.hotel1, styles.hotel1SpaceBlock]}>
                      Hotel
                    </Text>
                  </View>
                  <View style={styles.hotel}>
                    <View style={styles.hotelChild}>
                      <View
                        style={[styles.groupChild, styles.groupChildPosition]}
                      />
                      <Image
                        style={[styles.groupIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/group8.png")}
                      />
                    </View>
                    <Text
                      style={[styles.attractions1, styles.hotel1SpaceBlock]}
                    >
                      Attractions
                    </Text>
                  </View>
                  <View style={styles.hotel}>
                    <Image
                      style={styles.hotelChild}
                      resizeMode="cover"
                      source={require("../assets/group-211.png")}
                    />
                    <Text style={[styles.eats1, styles.eats1Typo]}>Eats</Text>
                  </View>
                  <View style={styles.hotel}>
                    <View style={styles.hotelChild}>
                      <View
                        style={[styles.groupItem, styles.groupChildPosition]}
                      />
                      <Image
                        style={[styles.vectorIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector39.png")}
                      />
                    </View>
                    <Text style={[styles.commute1, styles.hotel1SpaceBlock]}>
                      Commute
                    </Text>
                  </View>
                  <View style={styles.hotel}>
                    <View style={styles.rectangleContainer}>
                      <View
                        style={[styles.groupInner, styles.groupChildPosition]}
                      />
                      <Image
                        style={[styles.vectorIcon1, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector40.png")}
                      />
                    </View>
                    <Text style={styles.eats1Typo}>Taxi</Text>
                  </View>
                  <View style={styles.hotel}>
                    <View style={styles.hotelChild}>
                      <View
                        style={[
                          styles.rectangleView,
                          styles.groupChildPosition,
                        ]}
                      />
                      <Image
                        style={[styles.vectorIcon2, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/vector4111.png")}
                      />
                    </View>
                    <Text style={[styles.movies1, styles.fromLayout]}>
                      Movies
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.popDestinationsMainSpaceBlock}>
            <View style={styles.destinationsTitles}>
              <View style={styles.titleContainer}>
                <Text style={[styles.planYourNext, styles.h55mTypo]}>
                  Plan your next trip
                </Text>
                <Text
                  style={[styles.mostPopularDestinations, styles.nightFlexBox]}
                >
                  Most Popular Destinations
                </Text>
              </View>
              <View style={styles.viewLayout1}>
                <Text style={[styles.viewAllDestinations, styles.yourViewTypo]}>
                  View all destinations
                </Text>
                <Image
                  style={styles.arrowRightIcon}
                  resizeMode="cover"
                  source={require("../assets/arrowright.png")}
                />
              </View>
            </View>
            <View style={styles.cardsContainer}>
              <View style={[styles.card1, styles.cardSpaceBlock]}>
                <View style={styles.unsplashnnzkznywhauParent}>
                  <Image
                    style={[
                      styles.unsplashnnzkznywhauIcon,
                      styles.bannerPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/unsplashnnzkznywhau.png")}
                  />
                  <View
                    style={[styles.destinationDetails, styles.bannerPosition]}
                  >
                    <Text style={[styles.paris, styles.baliTypo]}>Paris</Text>
                    <View style={styles.parent}>
                      <Text style={[styles.text1, styles.textTypo1]}>$699</Text>
                      <Text style={[styles.from, styles.fromLayout]}>from</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.card1, styles.cardSpaceBlock]}>
                <View style={styles.unsplashnnzkznywhauParent}>
                  <Image
                    style={[
                      styles.unsplashnnzkznywhauIcon,
                      styles.bannerPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/unsplashyc8qqp50bda.png")}
                  />
                  <View
                    style={[styles.destinationDetails, styles.bannerPosition]}
                  >
                    <Text style={[styles.paris, styles.baliTypo]}>Greece</Text>
                    <View style={styles.group}>
                      <Text style={[styles.text2, styles.textTypo1]}>
                        $1079
                      </Text>
                      <Text style={[styles.from1, styles.fromLayout]}>
                        from
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.card1, styles.cardSpaceBlock]}>
                <View style={styles.unsplashnnzkznywhauParent}>
                  <Image
                    style={[
                      styles.unsplashnnzkznywhauIcon,
                      styles.bannerPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/unsplashltnpejwdsay.png")}
                  />
                  <View
                    style={[styles.destinationDetails, styles.bannerPosition]}
                  >
                    <Text style={[styles.paris, styles.baliTypo]}>Norway</Text>
                    <View style={styles.parent}>
                      <Text style={[styles.text1, styles.textTypo1]}>$895</Text>
                      <Text style={[styles.from, styles.fromLayout]}>from</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.card1, styles.cardSpaceBlock]}>
                <View style={styles.unsplashnnzkznywhauParent}>
                  <Image
                    style={[
                      styles.unsplashnnzkznywhauIcon,
                      styles.bannerPosition,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/unsplashm0oiyn5u8zm.png")}
                  />
                  <View
                    style={[styles.destinationDetails, styles.bannerPosition]}
                  >
                    <Text style={[styles.paris, styles.baliTypo]}>Tuscany</Text>
                    <View style={styles.group}>
                      <Text style={[styles.text4, styles.textTypo1]}>
                        $1245
                      </Text>
                      <Text style={[styles.from3, styles.fromLayout]}>
                        from
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.viewAllBottom, styles.viewLayout1]}>
              <Text style={[styles.viewAllDestinations, styles.yourViewTypo]}>
                View all destinations
              </Text>
              <Image
                style={styles.arrowRightIcon}
                resizeMode="cover"
                source={require("../assets/arrowright1.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.recommendedHolidaysContainer,
              styles.popDestinationsMainSpaceBlock,
            ]}
          >
            <View style={styles.destinationsTitles}>
              <Text style={[styles.recommendedHolidays, styles.popularTypo]}>
                Recommended Holidays
              </Text>
              <View style={styles.viewLayout}>
                <Text style={[styles.viewAllHolidays, styles.yourViewTypo]}>
                  View all holidays
                </Text>
                <Image
                  style={styles.arrowRightIcon}
                  resizeMode="cover"
                  source={require("../assets/arrowright2.png")}
                />
              </View>
            </View>
            <View style={styles.cardsContainer}>
              <View style={[styles.recCard1, styles.cardSpaceBlock]}>
                <Image
                  style={[styles.unsplash5mv818tzxeoIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/unsplash5mv818tzxeo.png")}
                />
                <View style={[styles.holidayDetails, styles.cardSpaceBlock]}>
                  <View style={styles.destinationsTitles}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.bali, styles.baliTypo]}>Bali</Text>
                      <Text style={styles.d3n}>4D3N</Text>
                    </View>
                    <Text style={[styles.text5, styles.textTypo]}>$899</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.recCard1, styles.cardSpaceBlock]}>
                <Image
                  style={[styles.unsplash5mv818tzxeoIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/unsplashj82dskoxvy8.png")}
                />
                <View style={[styles.holidayDetails, styles.cardSpaceBlock]}>
                  <View style={styles.destinationsTitles}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.bali, styles.baliTypo]}>
                        Switzerland
                      </Text>
                      <Text style={styles.d3n}>6D5N</Text>
                    </View>
                    <Text style={[styles.text6, styles.textTypo]}>$900</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.recCard1, styles.cardSpaceBlock]}>
                <Image
                  style={[styles.unsplash5mv818tzxeoIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/unsplash4ezkckxolre.png")}
                />
                <View style={[styles.holidayDetails, styles.cardSpaceBlock]}>
                  <View style={styles.destinationsTitles}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.bali, styles.baliTypo]}>
                        Boracay
                      </Text>
                      <Text style={styles.d3n}>5D4N</Text>
                    </View>
                    <Text style={[styles.text5, styles.textTypo]}>$699</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.recCard1, styles.cardSpaceBlock]}>
                <Image
                  style={[styles.unsplash5mv818tzxeoIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/unsplashuyqmxhjr3ne.png")}
                />
                <View style={[styles.holidayDetails, styles.cardSpaceBlock]}>
                  <View style={styles.destinationsTitles}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.bali, styles.baliTypo]}>
                        Palawan
                      </Text>
                      <Text style={styles.d3n}>4D3N</Text>
                    </View>
                    <Text style={[styles.text8, styles.textTypo]}>$789</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.viewAllBottom1, styles.viewLayout]}>
              <Text style={[styles.viewAllHolidays, styles.yourViewTypo]}>
                View all holidays
              </Text>
              <Image
                style={styles.arrowRightIcon}
                resizeMode="cover"
                source={require("../assets/arrowright3.png")}
              />
            </View>
          </View>
          <View style={styles.popDestinationsMainSpaceBlock}>
            <View style={styles.popularStaysHeader}>
              <View style={styles.popularStaysTitle}>
                <Text style={[styles.popularStays1, styles.popularTypo]}>
                  Popular Stays
                </Text>
              </View>
              <View style={styles.viewLayout2}>
                <Text style={[styles.viewAllStays, styles.yourViewTypo]}>
                  View all stays
                </Text>
                <Image
                  style={styles.arrowRightIcon}
                  resizeMode="cover"
                  source={require("../assets/arrowright4.png")}
                />
              </View>
            </View>
            <View style={styles.hotelCards}>
              <View style={styles.hotelCard1}>
                <View style={[styles.hotelCard, styles.activeSpaceBlock]}>
                  <Image
                    style={[styles.unsplashhhrfsdwxxusIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/unsplashhhrfsdwxxus.png")}
                  />
                  <View style={[styles.stayDetails, styles.staySpaceBlock]}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.entireBungalow, styles.h55mClr]}>
                        Entire bungalow
                      </Text>
                      <Text
                        style={[styles.matterhornSuites, styles.nightFlexBox]}
                      >
                        Matterhorn Suites
                      </Text>
                      <Text style={[styles.night, styles.nightFlexBox]}>
                        $575/night
                      </Text>
                    </View>
                    <Image
                      style={styles.videoIcon}
                      resizeMode="cover"
                      source={require("../assets/video1.png")}
                    />
                  </View>
                  <View style={[styles.rating, styles.staySpaceBlock]}>
                    <Text style={[styles.reviews, styles.text9Layout]}>
                      (60 reviews)
                    </Text>
                    <View style={[styles.parent3, styles.sinPosition]}>
                      <Text style={[styles.text9, styles.text9Layout]}>
                        4.9
                      </Text>
                      <Image
                        style={[styles.vectorIcon3, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/vector42.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.moreDetailsButton, styles.staySpaceBlock]}
                  >
                    <Text style={[styles.button1, styles.buttonTypo]}>
                      More details
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.hotelCard1}>
                <View style={[styles.hotelCard, styles.activeSpaceBlock]}>
                  <Image
                    style={[styles.unsplashhhrfsdwxxusIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/unsplashtsn8bpopveo.png")}
                  />
                  <View style={[styles.stayDetails1, styles.staySpaceBlock]}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.entireBungalow, styles.h55mClr]}>
                        2-Story beachfront suite
                      </Text>
                      <Text
                        style={[styles.matterhornSuites, styles.nightFlexBox]}
                      >
                        Discovery Shores
                      </Text>
                      <Text style={[styles.night, styles.nightFlexBox]}>
                        $360/night
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rating, styles.staySpaceBlock]}>
                    <Text style={[styles.reviews, styles.text9Layout]}>
                      (116 reviews)
                    </Text>
                    <View style={[styles.parent3, styles.sinPosition]}>
                      <Text style={[styles.text9, styles.text9Layout]}>
                        4.8
                      </Text>
                      <Image
                        style={[styles.vectorIcon3, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/vector43.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.moreDetailsButton, styles.staySpaceBlock]}
                  >
                    <Text style={[styles.button1, styles.buttonTypo]}>
                      More details
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.hotelCard1}>
                <View style={[styles.hotelCard, styles.activeSpaceBlock]}>
                  <Image
                    style={[styles.unsplashhhrfsdwxxusIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/unsplashrlwe8f8anoc.png")}
                  />
                  <View style={[styles.stayDetails1, styles.staySpaceBlock]}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.entireBungalow, styles.h55mClr]}>
                        Single deluxe hut
                      </Text>
                      <Text
                        style={[styles.matterhornSuites, styles.nightFlexBox]}
                      >{`Arctic Hut `}</Text>
                      <Text style={[styles.night, styles.nightFlexBox]}>
                        $420/night
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rating, styles.staySpaceBlock]}>
                    <Text style={[styles.reviews, styles.text9Layout]}>
                      (78 reviews)
                    </Text>
                    <View style={[styles.parent3, styles.sinPosition]}>
                      <Text style={[styles.text9, styles.text9Layout]}>
                        4.7
                      </Text>
                      <Image
                        style={[styles.vectorIcon5, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/vector44.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.moreDetailsButton, styles.staySpaceBlock]}
                  >
                    <Text style={[styles.button1, styles.buttonTypo]}>
                      More details
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.hotelCard1}>
                <View style={[styles.hotelCard, styles.activeSpaceBlock]}>
                  <Image
                    style={[styles.unsplashhhrfsdwxxusIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/unsplashyqrybvxug5q.png")}
                  />
                  <View style={[styles.stayDetails, styles.staySpaceBlock]}>
                    <View style={styles.titleContainer}>
                      <Text style={[styles.entireBungalow, styles.h55mClr]}>
                        Deluxe King Room
                      </Text>
                      <Text
                        style={[styles.matterhornSuites, styles.nightFlexBox]}
                      >
                        Lake Louise Inn
                      </Text>
                      <Text style={[styles.night, styles.nightFlexBox]}>
                        $244/night
                      </Text>
                    </View>
                    <Image
                      style={styles.videoIcon}
                      resizeMode="cover"
                      source={require("../assets/video2.png")}
                    />
                  </View>
                  <View style={[styles.rating, styles.staySpaceBlock]}>
                    <Text style={[styles.reviews, styles.text9Layout]}>
                      (63 reviews)
                    </Text>
                    <View style={[styles.parent3, styles.sinPosition]}>
                      <Text style={[styles.text9, styles.text9Layout]}>
                        4.6
                      </Text>
                      <Image
                        style={[styles.vectorIcon3, styles.vectorIconPosition]}
                        resizeMode="cover"
                        source={require("../assets/vector45.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={[styles.moreDetailsButton3, styles.staySpaceBlock]}
                  >
                    <Text style={[styles.button1, styles.buttonTypo]}>
                      More details
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.viewAllStaysGroup, styles.viewLayout2]}>
              <Text style={[styles.viewAllStays, styles.yourViewTypo]}>
                View all stays
              </Text>
              <Image
                style={styles.arrowRightIcon}
                resizeMode="cover"
                source={require("../assets/arrowright5.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.footerSection}>
          <View style={styles.rectangleParent1}>
            <Image
              style={[styles.frameChild, styles.bannerPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-186.png")}
            />
            <View style={styles.shareYourTravelsForm}>
              <View style={styles.heroSection}>
                <Text style={[styles.formTitleSubtext, styles.h55mTypo]}>
                  subscribe to our newsletter
                </Text>
                <Text style={styles.formTitle}>Get weekly updates</Text>
              </View>
              <View style={[styles.form, styles.inputBorder]}>
                <View style={styles.upcomingFlightSection}>
                  <Text style={styles.fillInYour}>
                    Fill in your details to join the party!
                  </Text>
                </View>
                <View style={styles.formFields}>
                  <View style={styles.upcomingFlightSection}>
                    <View style={[styles.input3, styles.inputBorder]}>
                      <View style={[styles.inactive, styles.activeFlexBox]}>
                        <View style={styles.muiautocompletetag}>
                          <View>
                            <View style={styles.container}>
                              <View style={styles.avatar}>
                                <Text style={styles.op}>F</Text>
                              </View>
                              <View style={styles.typography}>
                                <Text style={styles.chip1}>Chip</Text>
                              </View>
                              <Image
                                style={styles.cancelIcon}
                                resizeMode="cover"
                                source={require("../assets/cancel6.png")}
                              />
                            </View>
                          </View>
                          <View style={styles.chip2}>
                            <View style={styles.container}>
                              <View style={styles.avatar}>
                                <Text style={styles.op}>F</Text>
                              </View>
                              <View style={styles.typography}>
                                <Text style={styles.chip1}>Chip</Text>
                              </View>
                              <Image
                                style={styles.cancelIcon}
                                resizeMode="cover"
                                source={require("../assets/cancel7.png")}
                              />
                            </View>
                          </View>
                        </View>
                        <Text style={[styles.yourName, styles.yourNameTypo]}>
                          Your name
                        </Text>
                        <Image
                          style={styles.muiAutocompleteIndicator}
                          resizeMode="cover"
                          source={require("../assets/mui-autocomplete-indicator.png")}
                        />
                        <Image
                          style={styles.arrowIcon}
                          resizeMode="cover"
                          source={require("../assets/arrow61.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.nameInput}>
                    <View style={[styles.input3, styles.inputBorder]}>
                      <View style={[styles.inactive, styles.activeFlexBox]}>
                        <View style={styles.muiautocompletetag}>
                          <View>
                            <View style={styles.container}>
                              <View style={styles.avatar}>
                                <Text style={styles.op}>F</Text>
                              </View>
                              <View style={styles.typography}>
                                <Text style={styles.chip1}>Chip</Text>
                              </View>
                              <Image
                                style={styles.cancelIcon}
                                resizeMode="cover"
                                source={require("../assets/cancel8.png")}
                              />
                            </View>
                          </View>
                          <View style={styles.chip2}>
                            <View style={styles.container}>
                              <View style={styles.avatar}>
                                <Text style={styles.op}>F</Text>
                              </View>
                              <View style={styles.typography}>
                                <Text style={styles.chip1}>Chip</Text>
                              </View>
                              <Image
                                style={styles.cancelIcon}
                                resizeMode="cover"
                                source={require("../assets/cancel9.png")}
                              />
                            </View>
                          </View>
                        </View>
                        <Text style={[styles.yourName, styles.yourNameTypo]}>
                          Email address
                        </Text>
                        <Image
                          style={styles.muiAutocompleteIndicator}
                          resizeMode="cover"
                          source={require("../assets/mui-autocomplete-indicator1.png")}
                        />
                        <Image
                          style={styles.arrowIcon}
                          resizeMode="cover"
                          source={require("../assets/arrow61.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.button5, styles.buttonLayout]}>
                  <View style={styles.unstyledbutton}>
                    <Text style={[styles.button6, styles.buttonTypo]}>
                      submit
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <LinearGradient
            style={styles.footer}
            locations={[0.25, 1]}
            colors={["#0b5ba8", "#299bd8"]}
            useAngle={true}
            angle={91.74}
          >
            <View style={styles.titleContainer}>
              <Image
                style={styles.fickleflightLogoIcon}
                resizeMode="cover"
                source={require("../assets/logo.png")}
              />
              <Text style={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </Text>
              <Image
                style={styles.socialIcons}
                resizeMode="cover"
                source={require("../assets/social-icons.png")}
              />
            </View>
            <View style={[styles.footerChild, styles.footerChildLayout]} />
            <View style={[styles.footerLinks, styles.toAndFromFlexBox]}>
              <View style={styles.company}>
                <Text style={[styles.aboutUs, styles.aboutUsPosition]}>
                  About Us
                </Text>
                <Text style={[styles.company1, styles.more1Typo]}>Company</Text>
                <Text style={[styles.news, styles.newsPosition]}>News</Text>
                <Text style={[styles.careers, styles.faqPosition]}>
                  Careers
                </Text>
                <Text style={[styles.howWeWork, styles.howWeWorkPosition]}>
                  How we work
                </Text>
              </View>
              <View style={styles.company}>
                <Text style={[styles.account, styles.aboutUsPosition]}>
                  Account
                </Text>
                <Text style={[styles.support1, styles.more1Typo]}>Support</Text>
                <Text style={[styles.supportCenter, styles.newsPosition]}>
                  Support Center
                </Text>
                <Text style={[styles.faq, styles.faqPosition]}>FAQ</Text>
                <Text style={[styles.accessibility, styles.howWeWorkPosition]}>
                  Accessibility
                </Text>
              </View>
              <View style={styles.company}>
                <Text style={[styles.covidAdvisory, styles.aboutUsPosition]}>
                  Covid Advisory
                </Text>
                <Text style={[styles.more1, styles.more1Typo]}>More</Text>
                <Text style={[styles.airlineFees, styles.newsPosition]}>
                  Airline Fees
                </Text>
                <Text style={[styles.tips, styles.faqPosition]}>Tips</Text>
                <Text style={[styles.howWeWork, styles.howWeWorkPosition]}>
                  Quarantine Rules
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  fromPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  madeByTeamPosition: {
    left: 1173,
    position: "absolute",
  },
  viewTypo: {
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  topHeaderSpaceBlock: {
    paddingHorizontal: 60,
    alignItems: "center",
  },
  toAndFromFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  h55mTypo1: {
    height: 12,
    fontSize: 10,
    textAlign: "left",
  },
  searchSpaceBlock: {
    marginLeft: 22.43,
    color: Color.colorDarkslategray_100,
    height: 12,
    fontSize: 10,
  },
  offersTypo: {
    width: 29,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  bannerPosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupFlexBox: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBorder: {
    borderWidth: 0.7,
    borderStyle: "solid",
  },
  dateTypo: {
    height: 9,
    lineHeight: 9,
    display: "flex",
    color: Color.textSecondary,
    letterSpacing: 0,
    fontSize: 9,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  activeSpaceBlock: {
    paddingVertical: 11,
    alignSelf: "stretch",
  },
  yourNameTypo: {
    lineHeight: 18,
    fontSize: 12,
    marginLeft: 5.98,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    flex: 1,
  },
  buttonLayout: {
    backgroundColor: Color.colorOrange,
    width: 123,
    borderRadius: 3,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonTypo: {
    lineHeight: 19,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  text9Clr: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  sinPosition: {
    width: 33,
    left: 0,
    top: 0,
    position: "absolute",
  },
  h55mClr: {
    color: Color.colorGray_100,
    letterSpacing: 0.2,
  },
  sinTypo: {
    letterSpacing: 0.7,
    height: 21,
    color: Color.colorCornflowerblue_200,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 18,
  },
  horizontalLineSpaceBlock: {
    marginTop: 15.7,
    alignSelf: "stretch",
  },
  footerChildLayout: {
    width: 1,
    borderRightWidth: 0.7,
    borderStyle: "solid",
  },
  yourViewTypo: {
    letterSpacing: 0.5,
    fontSize: 13,
  },
  hotel1SpaceBlock: {
    marginTop: 5.98,
    color: Color.colorGray_100,
    fontSize: 11,
  },
  eats1Typo: {
    width: 24,
    marginTop: 5.98,
    letterSpacing: 0.4,
    color: Color.colorGray_100,
    fontSize: 11,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
  },
  fromLayout: {
    width: 39,
    height: 14,
    letterSpacing: 0.4,
    fontFamily: FontFamily.bodyRegular,
  },
  h55mTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  nightFlexBox: {
    marginTop: 4.49,
    color: Color.colorDarkslategray_200,
    alignSelf: "stretch",
    textAlign: "left",
  },
  cardSpaceBlock: {
    paddingHorizontal: 12,
    alignItems: "center",
  },
  baliTypo: {
    letterSpacing: 0.3,
    fontSize: 15,
    textAlign: "left",
  },
  textTypo1: {
    height: 28,
    lineHeight: 28,
    fontSize: 28,
    top: 16,
    textAlign: "right",
    fontFamily: FontFamily.balooBhai,
    color: Color.blanco20,
    left: 0,
    position: "absolute",
  },
  viewLayout1: {
    width: 173,
    borderRadius: 23,
    flexDirection: "row",
    backgroundColor: Color.blanco20,
  },
  popDestinationsMainSpaceBlock: {
    marginTop: 59.8,
    alignSelf: "stretch",
  },
  popularTypo: {
    letterSpacing: 0.9,
    fontSize: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: 24,
    lineHeight: 25,
    textAlign: "right",
    fontFamily: FontFamily.balooBhai,
    color: Color.colorCornflowerblue_100,
    height: 25,
  },
  viewLayout: {
    width: 149,
    borderRadius: 23,
    flexDirection: "row",
    backgroundColor: Color.blanco20,
  },
  staySpaceBlock: {
    marginTop: 17.19,
    alignSelf: "stretch",
  },
  text9Layout: {
    letterSpacing: 0.4,
    height: 14,
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "9.86%",
    top: "0%",
    height: "90.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout2: {
    borderRadius: 23,
    flexDirection: "row",
    backgroundColor: Color.blanco20,
  },
  activeFlexBox: {
    paddingHorizontal: 0,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  aboutUsPosition: {
    top: 36,
    height: 14,
    fontSize: 12,
    color: Color.blanco20,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
  },
  more1Typo: {
    height: 20,
    lineHeight: 20,
    fontSize: 15,
    color: Color.blanco20,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  newsPosition: {
    top: 59,
    height: 14,
    fontSize: 12,
    color: Color.blanco20,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
  },
  faqPosition: {
    top: 82,
    height: 14,
    fontSize: 12,
    color: Color.blanco20,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
  },
  howWeWorkPosition: {
    top: 105,
    height: 14,
    fontSize: 12,
    color: Color.blanco20,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
  },
  coverFrameChild: {
    backgroundColor: Color.colorWhitesmoke_300,
    width: 1920,
    height: 960,
  },
  coverFrameItem: {
    left: 298,
    width: 1302,
    height: 960,
  },
  webLogo1Icon: {
    height: "7.2%",
    width: "22.92%",
    top: "44.34%",
    right: "3.36%",
    bottom: "48.46%",
    left: "73.72%",
    position: "absolute",
  },
  madeByTeam: {
    top: 875,
    fontSize: FontSize.h4_size,
    color: "#99d2f5",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  travelWebsite: {
    fontSize: 34,
    color: Color.blanco20,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  travelWebsiteWrapper: {
    top: 827,
    width: 224,
    height: 40,
  },
  fickleflightLogoIcon: {
    width: 130,
    height: 25,
    overflow: "hidden",
  },
  explore: {
    width: 35,
    color: Color.colorCornflowerblue_100,
    fontFamily: FontFamily.bodyRegular,
  },
  search: {
    width: 32,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  hotels: {
    width: 31,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  offers: {
    marginLeft: 22.43,
    color: Color.colorDarkslategray_100,
    height: 12,
    fontSize: 10,
  },
  navigationRight: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  hamburgerMenuIcon: {
    display: "none",
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  notificationBellIcon: {
    marginLeft: 8.97,
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  unsplashd1upkifd04aIcon: {
    borderRadius: 28,
    width: 27,
    height: 27,
    marginLeft: 8.97,
  },
  accountSection: {
    marginLeft: 26.91,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  topContainer: {
    alignItems: "center",
    flex: 1,
  },
  topHeader: {
    height: 58,
    paddingVertical: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  bannerGradient: {
    backgroundColor: "transparent",
    height: 478,
  },
  bannerBackground: {
    height: 478,
    maxWidth: "100%",
    overflow: "hidden",
  },
  letsExplore: {
    fontSize: 46,
    lineHeight: 50,
    textAlign: "center",
    fontFamily: FontFamily.balooBhai,
    alignSelf: "stretch",
    color: Color.blanco20,
  },
  findTheBest: {
    lineHeight: 24,
    marginTop: 3.74,
    fontSize: 18,
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.blanco20,
    fontFamily: FontFamily.bodyRegular,
  },
  heroSection: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  departure: {
    width: 40,
  },
  labelContainer: {
    height: 2,
    paddingHorizontal: 3,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.blanco20,
  },
  op: {
    lineHeight: 13,
    color: Color.colorDimgray_100,
    display: "flex",
    fontSize: 9,
    letterSpacing: 0,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    fontFamily: FontFamily.bodyRegular,
    flex: 1,
  },
  avatar: {
    borderRadius: 48,
    backgroundColor: Color.colorSilver_100,
    display: "none",
    height: 18,
    width: 18,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  chip1: {
    lineHeight: 13,
    color: Color.textPrimary,
    letterSpacing: 0,
    fontSize: 10,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  typography: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  cancelIcon: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Color.colorGainsboro_100,
    padding: 3,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  chip2: {
    marginLeft: 5.98,
  },
  muiautocompletetag: {
    display: "none",
    flexDirection: "row",
  },
  singaporeSin: {
    color: Color.textPrimary,
  },
  active: {
    paddingHorizontal: 0,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  input: {
    paddingHorizontal: 9,
    borderColor: Color.colorGray_200,
    borderWidth: 0.7,
    borderRadius: 3,
    paddingVertical: 0,
    alignSelf: "stretch",
    height: 42,
  },
  departureField: {
    height: 42,
    alignSelf: "stretch",
  },
  inputGroup: {
    flex: 1,
  },
  arrival: {
    width: 26,
  },
  date: {
    width: 19,
  },
  dateIcon: {
    opacity: 0.5,
    marginLeft: 5.98,
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  inputsRow: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    width: 110,
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.blanco20,
  },
  searchFlightsButton: {
    width: 123,
  },
  searchForm: {
    marginTop: 32.14,
    padding: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  searchContainer: {
    paddingHorizontal: 105,
    paddingVertical: 0,
    height: 478,
    justifyContent: "center",
    alignItems: "center",
    width: 1077,
  },
  searchSection: {
    height: 478,
    alignSelf: "stretch",
  },
  upcomingFlight: {
    width: 948,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 13,
    textTransform: "uppercase",
  },
  sin: {
    height: 21,
    color: Color.colorCornflowerblue_200,
    textTransform: "capitalize",
    letterSpacing: 0.7,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 18,
    textAlign: "left",
  },
  singapore: {
    top: 22,
    color: Color.colorGray_100,
    textTransform: "capitalize",
    height: 12,
    fontSize: 10,
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
    width: 54,
    textAlign: "left",
  },
  fromDetails: {
    height: 34,
    width: 54,
  },
  h55m: {
    top: 21,
    left: 18,
    width: 49,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    height: 12,
    fontSize: 10,
    textAlign: "left",
    position: "absolute",
  },
  durationChild: {
    width: 88,
    height: 18,
  },
  duration: {
    height: 33,
    width: 88,
  },
  lax: {
    left: 27,
    width: 38,
    textAlign: "right",
    height: 21,
    color: Color.colorCornflowerblue_200,
    textTransform: "capitalize",
    top: 0,
    position: "absolute",
  },
  losAngeles: {
    textAlign: "right",
    width: 65,
    top: 22,
    color: Color.colorGray_100,
    textTransform: "capitalize",
    height: 12,
    fontSize: 10,
    fontFamily: FontFamily.bodyRegular,
    left: 0,
    position: "absolute",
  },
  toDetails: {
    width: 65,
    height: 34,
  },
  toAndFrom: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  horizontalLine: {
    borderTopWidth: 0.7,
    height: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    marginTop: 15.7,
  },
  departsOn1: {
    width: 152,
    textTransform: "capitalize",
    fontSize: 10,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  toGo: {
    fontFamily: FontFamily.bodyRegular,
  },
  daysToGoContainer: {
    textAlign: "right",
    width: 65,
    fontSize: 10,
    color: Color.colorGray_100,
  },
  departureDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  flightMainContainer: {
    borderRadius: 6,
    borderColor: Color.colorWhitesmoke_300,
    padding: 15,
  },
  lineSeparator: {
    height: 109,
    borderColor: Color.colorWhitesmoke_300,
    marginLeft: 26.91,
  },
  prepareForYour: {
    color: "#cecece",
    textTransform: "uppercase",
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  hotelChild: {
    height: 49,
    width: 49,
  },
  hotel1: {
    height: 14,
    letterSpacing: 0.4,
    width: 29,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  hotel: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild: {
    backgroundColor: "#ff9b53",
    height: 49,
    width: 49,
    borderRadius: 12,
  },
  groupIcon: {
    height: "47.85%",
    width: "48.26%",
    top: "25.97%",
    right: "25.97%",
    bottom: "26.18%",
    left: "25.77%",
    position: "absolute",
  },
  attractions1: {
    width: 60,
    height: 14,
    letterSpacing: 0.4,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
  },
  eats1: {
    height: 14,
  },
  groupItem: {
    backgroundColor: "#fdbf00",
    height: 49,
    width: 49,
    borderRadius: 12,
  },
  vectorIcon: {
    height: "48.47%",
    width: "41.1%",
    top: "26.58%",
    right: "29.45%",
    bottom: "24.95%",
    left: "29.45%",
    position: "absolute",
  },
  commute1: {
    width: 52,
    height: 14,
    letterSpacing: 0.4,
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
  },
  groupInner: {
    backgroundColor: "#4dabff",
    width: 52,
    height: 49,
    borderRadius: 12,
  },
  vectorIcon1: {
    height: "40.08%",
    width: "40.54%",
    top: "29.65%",
    right: "29.64%",
    bottom: "30.27%",
    left: "29.83%",
    position: "absolute",
  },
  rectangleContainer: {
    width: 52,
    height: 49,
  },
  rectangleView: {
    backgroundColor: "#79ca00",
    height: 49,
    width: 49,
    borderRadius: 12,
  },
  vectorIcon2: {
    height: "35.58%",
    width: "39.88%",
    top: "32.11%",
    right: "30.06%",
    bottom: "32.31%",
    left: "30.06%",
    position: "absolute",
  },
  movies1: {
    marginTop: 5.98,
    color: Color.colorGray_100,
    fontSize: 11,
    textAlign: "center",
  },
  tripMenus: {
    marginTop: 14.95,
    alignSelf: "stretch",
  },
  prepareMenu: {
    marginLeft: 26.91,
    flex: 1,
  },
  flightDetails: {
    marginTop: 14.95,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  upcomingFlightSection: {
    alignSelf: "stretch",
  },
  planYourNext: {
    color: Color.colorCornflowerblue_200,
    letterSpacing: 0.5,
    fontSize: 13,
    textTransform: "uppercase",
    alignSelf: "stretch",
    textAlign: "left",
  },
  mostPopularDestinations: {
    letterSpacing: 0.9,
    fontSize: 22,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  titleContainer: {
    flex: 1,
  },
  viewAllDestinations: {
    width: 148,
    textAlign: "right",
    color: Color.colorCornflowerblue_200,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  arrowRightIcon: {
    marginLeft: 7.48,
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  destinationsTitles: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  unsplashnnzkznywhauIcon: {
    bottom: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  paris: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.blanco20,
    flex: 1,
  },
  text1: {
    width: 68,
  },
  from: {
    left: 29,
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 12,
    color: Color.blanco20,
    top: 0,
    position: "absolute",
  },
  parent: {
    height: 44,
    width: 68,
  },
  destinationDetails: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    flexDirection: "row",
  },
  unsplashnnzkznywhauParent: {
    height: 136,
    borderRadius: 7,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  card1: {
    width: 239,
    paddingVertical: 0,
    justifyContent: "center",
  },
  text2: {
    width: 74,
  },
  from1: {
    left: 35,
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 12,
    color: Color.blanco20,
    top: 0,
    position: "absolute",
  },
  group: {
    width: 75,
    height: 44,
  },
  text4: {
    width: 75,
  },
  from3: {
    left: 36,
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 12,
    color: Color.blanco20,
    top: 0,
    position: "absolute",
  },
  cardsContainer: {
    marginTop: 17.94,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewAllBottom: {
    marginTop: 17.94,
    display: "none",
  },
  recommendedHolidays: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    flex: 1,
  },
  viewAllHolidays: {
    width: 124,
    textAlign: "right",
    color: Color.colorCornflowerblue_200,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  unsplash5mv818tzxeoIcon: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: 181,
    alignSelf: "stretch",
    width: "100%",
  },
  bali: {
    color: Color.colorDarkslategray_100,
    fontSize: 15,
    alignSelf: "stretch",
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  d3n: {
    color: Color.weak,
    marginTop: 2.24,
    letterSpacing: 0.2,
    fontSize: 12,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  text5: {
    lineHeight: 25,
    width: 54,
  },
  holidayDetails: {
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    paddingVertical: 15,
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 0.7,
    borderStyle: "solid",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  recCard1: {
    paddingVertical: 0,
    flex: 1,
  },
  text6: {
    width: 56,
    lineHeight: 25,
  },
  text8: {
    lineHeight: 25,
    width: 52,
  },
  viewAllBottom1: {
    marginTop: 17.94,
    display: "none",
  },
  recommendedHolidaysContainer: {
    justifyContent: "center",
  },
  popularStays1: {
    width: 826,
    height: 26,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  popularStaysTitle: {
    height: 26,
    flex: 1,
  },
  viewAllStays: {
    width: 105,
    textAlign: "right",
    color: Color.colorCornflowerblue_200,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
  },
  popularStaysHeader: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  unsplashhhrfsdwxxusIcon: {
    height: 150,
    borderRadius: 7,
    alignSelf: "stretch",
    width: "100%",
  },
  entireBungalow: {
    fontSize: 12,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  matterhornSuites: {
    fontSize: 16,
    letterSpacing: 0.6,
    textTransform: "capitalize",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  night: {
    letterSpacing: 0.5,
    fontSize: 13,
    fontFamily: FontFamily.bodyRegular,
  },
  videoIcon: {
    marginLeft: 8.22,
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  stayDetails: {
    flexDirection: "row",
  },
  reviews: {
    left: 40,
    width: 162,
    height: 14,
    fontSize: 12,
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
    top: 0,
    position: "absolute",
  },
  text9: {
    left: 15,
    height: 14,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontSize: 12,
    width: 18,
    fontFamily: FontFamily.componentsButtonLarge,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  vectorIcon3: {
    width: "37.46%",
    right: "62.54%",
  },
  parent3: {
    height: 14,
  },
  rating: {
    height: 14,
  },
  button1: {
    width: 82,
    height: 19,
    textTransform: "uppercase",
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
  },
  moreDetailsButton: {
    borderColor: Color.colorLavender_100,
    height: 34,
    borderWidth: 0.7,
    borderStyle: "solid",
    borderRadius: 3,
    marginTop: 17.19,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  hotelCard: {
    paddingHorizontal: 10,
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 0.7,
    borderStyle: "solid",
    borderRadius: 7,
    flex: 1,
    backgroundColor: Color.blanco20,
  },
  hotelCard1: {
    paddingHorizontal: 9,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  stayDetails1: {
    flexDirection: "row",
    flex: 1,
  },
  vectorIcon5: {
    width: "37.65%",
    right: "62.35%",
  },
  moreDetailsButton3: {
    borderColor: "#cdddec",
    height: 34,
    borderWidth: 0.7,
    borderStyle: "solid",
    borderRadius: 3,
    marginTop: 17.19,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  hotelCards: {
    marginTop: 14.95,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewAllStaysGroup: {
    marginTop: 14.95,
    display: "none",
  },
  homeContents: {
    marginTop: 51.58,
    paddingVertical: 0,
    width: 1077,
  },
  frameChild: {
    height: 396,
    maxWidth: "100%",
    overflow: "hidden",
  },
  formTitleSubtext: {
    color: Color.colorCornflowerblue_200,
    letterSpacing: 0.5,
    fontSize: 13,
    textTransform: "uppercase",
    textAlign: "center",
    alignSelf: "stretch",
  },
  formTitle: {
    color: "#434343",
    marginTop: 5.23,
    fontSize: 22,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    alignSelf: "stretch",
  },
  fillInYour: {
    color: "#576074",
    lineHeight: 25,
    fontSize: 13,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  yourName: {
    color: Color.textSecondary,
    lineHeight: 18,
  },
  muiAutocompleteIndicator: {
    width: 21,
    height: 21,
    marginLeft: 5.98,
    display: "none",
  },
  arrowIcon: {
    marginLeft: 5.98,
    height: 18,
    width: 18,
  },
  inactive: {
    paddingVertical: 12,
    alignSelf: "stretch",
  },
  input3: {
    paddingHorizontal: 9,
    borderColor: Color.colorGray_200,
    borderWidth: 0.7,
    borderRadius: 3,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  nameInput: {
    marginTop: 7.48,
    alignSelf: "stretch",
  },
  formFields: {
    marginTop: 12.71,
    alignSelf: "stretch",
  },
  button6: {
    textTransform: "uppercase",
    color: Color.blanco20,
    textAlign: "left",
  },
  unstyledbutton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    overflow: "hidden",
  },
  button5: {
    marginTop: 12.71,
    width: 123,
  },
  form: {
    borderRadius: 9,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 17.94,
    elevation: 17.94,
    shadowOpacity: 1,
    paddingHorizontal: 22,
    paddingVertical: 21,
    marginTop: 22.43,
    borderColor: Color.colorWhitesmoke_300,
    alignSelf: "stretch",
    backgroundColor: Color.blanco20,
  },
  shareYourTravelsForm: {
    top: 39,
    left: 333,
    width: 410,
    padding: 15,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent1: {
    backgroundColor: "#f3f7fb",
    height: 395,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  fickleFlightIs: {
    marginTop: 10.47,
    lineHeight: 20,
    fontSize: 13,
    alignSelf: "stretch",
    color: Color.blanco20,
    textAlign: "left",
    fontFamily: FontFamily.bodyRegular,
  },
  socialIcons: {
    width: 97,
    height: 22,
    marginTop: 10.47,
  },
  footerChild: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    height: 118,
    marginLeft: 32.89,
  },
  aboutUs: {
    width: 101,
  },
  company1: {
    width: 131,
  },
  news: {
    width: 63,
  },
  careers: {
    width: 86,
  },
  howWeWork: {
    width: 148,
  },
  company: {
    height: 119,
    width: 148,
  },
  account: {
    width: 82,
  },
  support1: {
    width: 98,
  },
  supportCenter: {
    width: 148,
  },
  faq: {
    width: 40,
  },
  accessibility: {
    width: 123,
  },
  covidAdvisory: {
    width: 129,
  },
  more1: {
    width: 57,
  },
  airlineFees: {
    width: 101,
  },
  tips: {
    width: 38,
  },
  footerLinks: {
    marginLeft: 32.89,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 63,
    paddingVertical: 25,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  footerSection: {
    marginTop: 51.58,
    alignSelf: "stretch",
  },
  homepage: {
    top: 53,
    left: 56,
    borderRadius: 16,
    height: 851,
    alignItems: "center",
    width: 1077,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.blanco20,
  },
  coverFrame: {
    overflow: "hidden",
    height: 960,
    width: "100%",
    flex: 1,
    backgroundColor: Color.blanco20,
  },
});

export default CoverFrame;
