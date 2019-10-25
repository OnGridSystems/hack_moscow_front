import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { media } from 'js/constants/media';

import * as AuthActions from 'js/actions/AuthActions';

import LogoutIcon from 'img/svg/logout.svg';


const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.get('isAuthorized'),
});

const mapDispatchToProps = dispatch => ({
  handleLogout() {
    dispatch(AuthActions.logoutRequest());
  },
});

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Header extends Component {
  handleLogout = () => {
    const { handleLogout } = this.props;

    handleLogout();
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      <Wrapper>
        <HeaderLeft>
          <LogoWithLink to="/">ONGRID</LogoWithLink>
        </HeaderLeft>
        <HeaderRight>
          {isAuthorized && (
          <Logout onClick={this.handleLogout}>
            <span>Logout</span>
            <StyledLogoutIcon />
          </Logout>
          )}
        </HeaderRight>
      </Wrapper>
    );
  }
}

export default Header;

export const Wrapper = styled.div`
  height: 53px;
  min-height: 53px;
  background: #112d7b;
  display: flex;
  justify-content: space-between;
  ${media.xs} {
    height: 45px;
    min-height: 45px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWithLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.08em;
`;

const Logout = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 20px;
  color: #fff;
  font-size: 16px;
  span {
    margin-right: 10px;
  }
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  fill: #fff;
  transition: fill 0.2s ease;
`;
