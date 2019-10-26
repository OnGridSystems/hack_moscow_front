import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { media } from 'js/constants/media';

import Login from 'js/components/views/auth/Login';
import Register from 'js/components/views/auth/Register';


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
        <AuthInner>
          <Switch>
            <Route component={Login} exact path="/auth" />
            <Route component={Register} exact path="/auth/register" />
            <Redirect to="/auth" />
          </Switch>
        </AuthInner>
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

const AuthInner = styled.div`
  padding: 35px 40px 30px 40px;
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
