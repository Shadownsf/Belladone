import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// // @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
// import IconButton from "@material-ui/core/IconButton";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
// import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// import Tooltip from "@material-ui/core/Tooltip";
// import Popover from "@material-ui/core/Popover";
// // @material-ui/icons
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

class SectionJavascript extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Évenement</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {/* <div className={classes.title}>
                <h3>Choisissez une date</h3>
              </div> */}
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  {/* <InputLabel className={classes.label}>
                    Datetime Picker
                  </InputLabel>
                  <br /> */}
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Choisissez une date" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {/* <div className={classes.title}>
            <h3>Carousel</h3>
          </div> */}
        </div>
      </div>
    );
  }
}

SectionJavascript.propTypes = {
  classes: PropTypes.object
};

export default withStyles(javascriptStyles)(SectionJavascript);
