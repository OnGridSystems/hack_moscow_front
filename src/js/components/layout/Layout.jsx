import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { media } from 'js/constants/media';

import * as UIActions from 'js/actions/UIActions';

import PrivateRoute from 'js/components/common/PrivateRoute';
import Loader from 'js/components/common/Loader';
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
  isPreloaderActive: UI.get('isPreloaderActive'),
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
  hidePreloader() {
    dispatch(UIActions.hidePreloader());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Layout extends Component {
  componentDidMount() {
    const { hidePreloader } = this.props;

    setTimeout(() => { hidePreloader(); }, 1500);
  }

  handleToggleMobileSidebar = () => {
    const { isMobileSidebarOpened, hideMobileSidebar, openMobileSidebar } = this.props;
    if (isMobileSidebarOpened) {
      hideMobileSidebar();
    } else {
      openMobileSidebar();
    }
  };

  render() {
    const { isModalOpened, isAuthorized, isPreloaderActive } = this.props;

    const redirectPath = isAuthorized ? '/' : '/auth';

    return (
      <MainWrapper>
        {isPreloaderActive
        && (
        <PreloaderWrapper>
          <Loader size={100} />
        </PreloaderWrapper>
        )}
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

const PreloaderWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
