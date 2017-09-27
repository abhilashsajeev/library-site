import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Carousel } from 'react-responsive-carousel';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 450,
    overflowY: 'auto',
  },
};

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList
            cols={1}
            cellHeight="auto"
            padding={1}
            style={styles.gridList}
          >
            <GridTile
              key="/static/assets/1.jpg"
              title="Building"
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={1}
              rows={1}
            >
              <img src="/static/assets/1.jpg" />
            </GridTile>
          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}