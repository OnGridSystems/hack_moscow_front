import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as UserActions from 'js/actions/UserActions';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getUser() {
    dispatch(UserActions.getUserRequest());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Effects extends Component {
  componentDidMount() {
    const { getConfig, getUser } = this.props;

    getUser();

    setInterval(() => {
      getUser();
    }, 5000);
  }

  render() {
    return <></>;
  }
}

export default Effects;
