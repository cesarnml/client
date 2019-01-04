import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  Paper,
  CssBaseline,
  Grid,
  Typography,
  Button,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { fetchCollections } from './actions'

const mapStateToProps = ({ dashboard }) => ({
  dashboard,
  isAdmin: false // toggle on and off manually for now, will be hooked up to redux store later
})

const styles = theme => ({
  main: {
    width: "auto",
  },
  collectionsContainer: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    padding: theme.spacing.unit * 4,
  },
  collectionCard: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: theme.spacing.unit * 10
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: theme.spacing.unit * 4,
  }
})

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    const { classes, dashboard, isAdmin } = this.props

    return (
      <React.Fragment>
        <main className={classes.main}> 
          <Paper className={classes.collectionsContainer} >
            <div className={classes.header}>
              <Typography variant="h2" color="inherit" noWrap>
              Dashboard
              </Typography>
              {/* New collection admin option to be implemented */}
              {isAdmin && <Button variant="contained" color="secondary"     size="small">New Collection</Button>}
            </div>
            <CssBaseline/>
            <Grid
              container
              spacing={40}
              direction="column-reverse"
              justify="flex-end"
              alignItems="stretch">

              {dashboard ? dashboard.map(({ id, name, description,  maxTeam }) => (
                  <Grid item>
                    <Card elevation="5">
                      <CardContent className={classes.collectionCard}>
                        <Button size="large" variant="outlined"   component={Link} to={`/collection/${id}`}>{name}</Button>
                        <div>
                          <Typography>{description}</Typography>
                          <Typography>Max Members per Team: {maxTeam} </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : null}
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCollections }
)(withStyles(styles)(Dashboard))

