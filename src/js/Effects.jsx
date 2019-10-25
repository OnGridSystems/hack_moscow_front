import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ConfigActions from 'js/actions/ConfigActions';
import * as UserActions from 'js/actions/UserActions';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getConfig() {
    dispatch(ConfigActions.getConfigRequest());
  },
  getUser() {
    dispatch(UserActions.getUserRequest());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Effects extends Component {
  static propTypes = {
    getConfig: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getConfig, getUser } = this.props;

    getUser();
    getConfig();

    setInterval(() => {
      getUser();
    }, 30000);
  }

  render() {
    return <></>;
  }
}

export default Effects;
