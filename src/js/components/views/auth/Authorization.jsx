import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from 'js/constants/media';

import Login from 'js/components/views/auth/Login';


const mapStateToProps = ({ Auth }) => ({
  isAuthorized: Auth.get('isAuthorized'),
});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Authorization extends Component {
  render() {
    // const { isAuthorized } = this.props;

    return (
      <Wrapper>
        <LoginInner>
          <Title>Authorization</Title>
          <Login />
        </LoginInner>
      </Wrapper>
    );
  }
}

export default Authorization;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f4f4f4;
`;

const LoginInner = styled.div`
  padding: 35px 40px 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: #fff;
  margin: 0 25px;
  border-radius: 7px;
  transform: translateY(-50px);
  ${media.xs} {
    transform: unset;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  border-bottom: 2px solid #d5dcef;
  margin-bottom: 25px;
  padding-bottom: 5px;
`;
