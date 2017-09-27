import Head from 'next/head';
import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Icon from '../components/MenuIcon';
import {Button} from 'material-ui/FlatButton';

import dynamic from 'next/dynamic'
const Main =  dynamic(import( '../components/MainImage'));
export default class extends Component {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render() {
    const { userAgent } = this.props;
    console.log(userAgent);
    return (
      <div>
        <Head>
          <title>CU JAYAN MEMMORIAL LIBRARY</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent })}>
          <AppBar title="CU Jayan Memorial library"
          iconElementLeft={<Icon/>}
          iconElementRight={<Button>About</Button>}
          />
        </MuiThemeProvider>
        <Main />
      </div>
    )

  }
}

