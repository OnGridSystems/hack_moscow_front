import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';

import PrivateRoute from 'js/components/common/PrivateRoute';
import Header from 'js/components/layout/Header';
import Modal from 'js/components/modals/Modal';
import Dashboard from 'js/components/views/dashboard/Dashboard';
import Authorization from 'js/components/views/auth/Authorization';
import Register from 'js/components/views/auth/Register';
import Order from 'js/components/views/order/Order';


const mapStateToProps = ({ UI, Auth }) => ({
  isMobileSidebarOpened: UI.get('isMobileSidebarOpened'),
  isDropdownOpened: UI.get('isDropdownOpened'),
  isModalOpened: UI.get('isModalOpened'),
  isAuthorized: Auth.get('isAuthorized'),
});

const mapDispatchToProps = dispatch => ({
  openMobileSidebar() {
    dispatch(UIActions.openMobileSidebar());
  },
  hideMobileSidebar() {
    dispatch(UIActions.hideMobileSidebar());
  },
  showDropdown() {
    dispatch(UIActions.showDropdown());
  },
  hideDropdown() {
    dispatch(UIActions.hideDropdown());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Layout extends Component {
  handleToggleMobileSidebar = () => {
    const { isMobileSidebarOpened, hideMobileSidebar, openMobileSidebar } = this.props;
    if (isMobileSidebarOpened) {
      hideMobileSidebar();
    } else {
      openMobileSidebar();
    }
  };

  render() {
    const { isModalOpened, isAuthorized } = this.props;

    const redirectPath = isAuthorized ? '/' : '/auth';

    return (
      <MainWrapper>
        <Header
          handleToggleMobileSidebar={this.handleToggleMobileSidebar}
          handleToggleDropdown={this.handleToggleDropdown}
        />
        <Body>
          <Switch>
            {!isAuthorized && <Route component={Authorization} path="/auth" />}
            <Route component={Order} exact path="/order" />
            <PrivateRoute component={Dashboard} exact path="/" />
            <Redirect to={redirectPath} />
          </Switch>
        </Body>
        {isModalOpened && <Modal />}
      </MainWrapper>
    );
  }
}

export default Layout;

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;
