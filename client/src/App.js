import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchProperties} from './actions/actions'
import NavBar from './components/NavBar';

import Routes from './components/Routes'
import {withRouter} from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends Component {
  componentDidMount(){
    this.props.fetchProperties()
  }

  render() {
    // const proppertyList = this.props.properties.map(property => (<li>{property.title}</li>))
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    properties: state.properties
  }
}

App.propTypes = {
  properties: PropTypes.array.isRequired,
  fetchProperties: PropTypes.func.isRequired
}
export default withRouter(connect(mapStateToProps, {fetchProperties})(App))

