import React from "react";

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
});

const NavBar = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            GO Built
          </Typography>
          <Button>Dashboard</Button>
          <Button color="primary" variant="outlined">User</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default withStyles(styles)(NavBar);
