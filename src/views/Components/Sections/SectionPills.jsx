import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Event from "@material-ui/icons/Event";
import HeadSet from "@material-ui/icons/Headset";
import Share from "@material-ui/icons/Share";
import { Link } from "react-router-dom";
import LocationOn from "@material-ui/icons/LocationOn";

// import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
// import image from "assets/img/faces/avatar.jpg";
import { belladone0, belladone1, belladone2 } from "assets/img/";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>Prochain événement</h2>
            </div>
            <div className={classes.title}>
              <h3>
                <medium>01/01/2020</medium>
              </h3>
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Belladone - 11 rue de chez oim
                </h4>
              </div>
            </div>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={10}>
                <NavPills
                  color="gray"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 3, md: 2 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Event",
                      tabIcon: Event,
                      tabContent: (
                        <img
                          src={belladone2}
                          alt="..."
                          height={400}
                          width={850}
                        />
                      )
                    },
                    {
                      tabButton: "Share",
                      tabIcon: Share,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    },

                    {
                      tabButton: "Line-Up",
                      tabIcon: HeadSet,
                      tabContent: (
                        <span>
                          <GridContainer>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> toto</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tete</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tutu</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tutu</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tutu</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tutu</button>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={4}>
                              <button> tutu</button>
                            </GridItem>
                          </GridContainer>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
                          ></iframe>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>

            <div className={classes.title}>
              <h3>
                <medium>01/01/2020</medium>
                <br />
                <small>Belladone - 11 rue de chez oim</small>
              </h3>
            </div>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={10}>
                <NavPills
                  color="gray"
                  horizontal={{
                    tabsGrid: {
                      xs: 12,
                      sm: 3,
                      md: 2
                    },
                    contentGrid: { xs: 12, sm: 10, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Event",
                      tabIcon: Event,
                      tabContent: (
                        <img
                          src={belladone1}
                          alt="..."
                          height={350}
                          width={700}
                        />
                      )
                    },
                    {
                      tabButton: "Share",
                      tabIcon: Share,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    },

                    {
                      tabButton: "Line-Up",
                      tabIcon: HeadSet,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                          <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
                          ></iframe>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>

            <div className={classes.title}>
              <h3>
                <medium>01/01/2020</medium>
                <br />
                <small>Belladone - 11 rue de chez oim</small>
              </h3>
            </div>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={10}>
                <NavPills
                  color="gray"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 3, md: 2 },
                    contentGrid: {
                      xs: 12,
                      sm: 8,
                      md: 8
                    }
                  }}
                  tabs={[
                    {
                      tabButton: "Event",
                      tabIcon: Event,
                      tabContent: (
                        <img
                          src={belladone0}
                          alt="..."
                          height={350}
                          width={700}
                        />
                      )
                    },
                    {
                      tabButton: "Share",
                      tabIcon: Share,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    },

                    {
                      tabButton: "Line-Up",
                      tabIcon: HeadSet,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                          <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"
                          ></iframe>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionPills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(SectionPills);
