import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Small from "components/Typography/Small.jsx";
// import Danger from "components/Typography/Danger.jsx";
// import Warning from "components/Typography/Warning.jsx";
// import Success from "components/Typography/Success.jsx";
// import Info from "components/Typography/Info.jsx";
// import Primary from "components/Typography/Primary.jsx";
// import Muted from "components/Typography/Muted.jsx";
// import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/avatar.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          {/* <div className={classes.space50} /> */}
          <div id="images">
            <div className={classes.title}>
              <h2>Images</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2} className={classes.marginRight}>
                <h4>Event 1</h4>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRaised + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Event 2</h4>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRaised + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Event 3</h4>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRaised + " " + classes.imgFluid}
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

SectionTypography.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(SectionTypography);
