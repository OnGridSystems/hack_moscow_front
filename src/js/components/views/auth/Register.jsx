import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import getValidationSchema from 'js/utils/getValidationSchema';
import createFormikField from 'js/components/common/hoc/createFormikField';

import * as AuthActions from 'js/actions/AuthActions';
import * as NotificationActions from 'js/actions/NotificationActions';

import Button from 'js/components/common/Button';
import TextBox from 'js/components/common/TextBox';
import SelectBox from 'js/components/common/SelectBox';
import Notification from 'js/components/common/Notification';


const FormikField = createFormikField(TextBox);

const mapStateToProps = ({ Notifications, App }) => ({
  process: App.get('process'),
  notification: Notifications.get('register'),
});

const mapDispatchToProps = dispatch => ({
  registerRequest(payload) {
    dispatch(AuthActions.registerRequest(payload));
  },
  clearNotification(payload) {
    dispatch(NotificationActions.clearNotification(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Register extends Component {
  state = {
    role: 'SHIPPER',
  };

  handleClearNotification = () => {
    const { notification, clearNotification } = this.props;

    if (Object.keys(notification).length !== 0) {
      clearNotification('register');
    }
  };

  handleRegister = (values) => {
    const { registerRequest, clearNotification } = this.props;
    const { role } = this.state;

    clearNotification('register');

    registerRequest({
      role,
      ...values,
    });
  };

  handleNumChange = (name, setter) => (e) => {
    if (!Number.isNaN(+e.target.value)) {
      setter(name, +e.target.value);
    }
  };

  handleRoleChange = (e) => {
    this.setState({ role: e.target.value });
  };

  render() {
    const { process, notification } = this.props;
    const { role } = this.state;

    return (
      <Wrapper>
        <Title>Registration</Title>
        <RoleWrapper>
          <SelectBox onChange={this.handleRoleChange}>
            <option value="SHIPPER">Shipper</option>
            <option value="CARRIER">Carrier</option>
          </SelectBox>
        </RoleWrapper>
        {role === 'SHIPPER' && (
          <Formik
            initialValues={{ username: '', password: '', location: '' }}
            validationSchema={getValidationSchema('registerShipper')}
            onSubmit={this.handleRegister}
            validateOnChange={false}
            enableReinitialize
            render={({ touched, errors }) => (
              <Form onChange={this.handleClearNotification}>
                <InputSet>
                  <InputWrapper>
                    <StyledFormikField
                      label="Username"
                      type="text"
                      name="username"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <StyledFormikField
                      label="Password"
                      type="password"
                      name="password"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <StyledFormikField
                      label="Location"
                      type="text"
                      name="location"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                </InputSet>
                <NotificationWrapper>
                  <Notification data={notification} />
                </NotificationWrapper>
                <ButtonWrapper>
                  <StyledButton type="submit" inverted>
                    Register
                  </StyledButton>
                </ButtonWrapper>
              </Form>
            )}
          />
        )}
        {role === 'CARRIER' && (
          <Formik
            initialValues={{ username: '', password: '', vehicle: '', maxLoad: '0' }}
            validationSchema={getValidationSchema('registerCarrier')}
            onSubmit={this.handleRegister}
            validateOnChange={false}
            enableReinitialize
            render={({ touched, errors, setFieldValue }) => (
              <Form onChange={this.handleClearNotification}>
                <InputSet>
                  <InputWrapper>
                    <StyledFormikField
                      label="Username"
                      type="text"
                      name="username"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <StyledFormikField
                      label="Password"
                      type="password"
                      name="password"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <StyledFormikField
                      label="Vehicle"
                      type="text"
                      name="vehicle"
                      errors={errors}
                      touched={touched}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <StyledFormikField
                      label="Max load"
                      type="text"
                      name="maxLoad"
                      errors={errors}
                      touched={touched}
                      onChange={this.handleNumChange('maxLoad', setFieldValue)}
                    />
                  </InputWrapper>
                </InputSet>
                <NotificationWrapper>
                  <Notification data={notification} />
                </NotificationWrapper>
                <ButtonWrapper>
                  <StyledButton type="submit" inverted>
                    Register
                  </StyledButton>
                </ButtonWrapper>
              </Form>
            )}
          />
        )}
        <RegistrationWrapper>
          <Link to="/auth">Back to login</Link>
        </RegistrationWrapper>
      </Wrapper>
    );
  }
}

export default Register;

const Wrapper = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const InputSet = styled.div``;

const ButtonWrapper = styled.div`
  height: 40px;
`;

const StyledFormikField = styled(FormikField)`
  div {
    font-size: 14px;
  }
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  height: 45px;
`;

const NotificationWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

const RegistrationWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  border-bottom: 2px solid #d5dcef;
  margin-bottom: 25px;
  padding-bottom: 5px;
`;

const RoleWrapper = styled.div`
  margin-bottom: 20px;
`;
