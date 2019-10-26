import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { media } from 'js/constants/media';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import getValidationSchema from 'js/utils/getValidationSchema';
import convertDate from 'js/utils/convertDate';

import * as UIActions from 'js/actions/UIActions';
import * as OrderActions from 'js/actions/OrderActions';

import createFormikField from 'js/components/common/hoc/createFormikField';
import ModalHeader from 'js/components/modals/stateless/ModalHeader';
import TextBox from 'js/components/common/TextBox';
import OrderDetails from 'js/components/views/order/OrderDetails';


const FormikField = createFormikField(TextBox);

const mapStateToProps = ({ UI, Orders }) => ({
  modalOptions: UI.get('modalOptions'),
  reward: Orders.get('reward'),
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(UIActions.hideModal());
  },
  createDeliveryRequest(payload) {
    dispatch(OrderActions.createDeliveryRequest(payload));
  },
  getRewardRequest(payload) {
    dispatch(OrderActions.getRewardRequest(payload));
  },
  clearReward() {
    dispatch(OrderActions.clearReward());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class NewDeliveryModal extends Component {
  state = {
    step: 1,
  };

  componentWillUnmount() {
    const { clearReward } = this.props;

    clearReward();
  }

  handleNumChange = (name, setter) => (e) => {
    if (!Number.isNaN(+e.target.value)) {
      setter(name, +e.target.value);
    }
  };

  handleStepOne = ({ coverage }) => {
    this.setState({ coverage, step: 2 });
  };

  handleStepTwo = (values) => {
    const { getRewardRequest } = this.props;
    const { pickupLocation, destination, weight, dimensions } = values;

    getRewardRequest({ pickupLocation, destination, weight, dimensions });
    this.setState({ ...values, step: 3 });
  };

  handleStepThree = (values) => {
    this.setState({ ...values, step: 4 });
  };

  handleStepFour = () => {
    const { createDeliveryRequest, hideModal } = this.props;

    const {
      coverage,
      pickupLocation,
      destination,
      dimensions,
      weight,
      shipmentDate,
      deliveryDate,
      phone,
    } = this.state;

    createDeliveryRequest({
      coverage,
      pickupLocation,
      destination,
      dimensions,
      weight,
      shipmentDate,
      deliveryDate,
      phone,
    });

    hideModal();
  };

  render() {
    const { modalOptions, hideModal, reward } = this.props;
    const { step } = this.state;

    return (
      <>
        <ModalHeader handleHideModal={hideModal}>{modalOptions.title}</ModalHeader>
        <ModalContent>
          {step === 1 && (
            <Formik
              initialValues={{ coverage: 150 }}
              validationSchema={getValidationSchema('newDeliveryStepOne')}
              onSubmit={this.handleStepOne}
              validateOnChange={false}
              enableReinitialize
              render={({ touched, errors, setFieldValue }) => (
                <Form>
                  <InputSet>
                    <InputWrapper>
                      <StyledFormikField
                        label="Coverage"
                        type="text"
                        name="coverage"
                        errors={errors}
                        touched={touched}
                        onChange={this.handleNumChange('coverage', setFieldValue)}
                      />
                    </InputWrapper>
                  </InputSet>
                  <ButtonWrapper>
                    <StyledButton type="submit">Next</StyledButton>
                  </ButtonWrapper>
                </Form>
              )}
            />
          )}
          {step === 2 && (
            <Formik
              initialValues={{
                pickupLocation: 'Dmitrovskoe highway, 9',
                destination: 'Savyolkinsky drive 4',
                dimensions: '12x20x5',
                weight: 114,
                shipmentDate: convertDate(new Date()),
                deliveryDate: convertDate(new Date()),
                phone: '+7(999)999-99-99',
              }}
              validationSchema={getValidationSchema('newDeliveryStepTwo')}
              onSubmit={this.handleStepTwo}
              validateOnChange={false}
              enableReinitialize
              render={({ touched, errors, setFieldValue }) => (
                <Form>
                  <InputSet>
                    <InputWrapper>
                      <StyledFormikField
                        label="Pickup location"
                        type="text"
                        name="pickupLocation"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Destination"
                        type="text"
                        name="destination"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Dimensions"
                        type="text"
                        name="dimensions"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Weight (g)"
                        type="text"
                        name="weight"
                        errors={errors}
                        touched={touched}
                        onChange={this.handleNumChange('weight', setFieldValue)}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Shipment date"
                        type="text"
                        name="shipmentDate"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Delivery date"
                        type="text"
                        name="deliveryDate"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <StyledFormikField
                        label="Phone"
                        type="text"
                        name="phone"
                        errors={errors}
                        touched={touched}
                      />
                    </InputWrapper>
                  </InputSet>
                  <ButtonWrapper>
                    <StyledButton type="submit">Next</StyledButton>
                  </ButtonWrapper>
                </Form>
              )}
            />
          )}
          {step === 3 && (
            <div>
              <RewardWrapper>
                Estimate delivery reward:
                {' '}
                <span>{`${reward}$`}</span>
              </RewardWrapper>
              <OrderDetailsWrapper>
                <OrderDetails order={this.state} />
              </OrderDetailsWrapper>
              <ButtonWrapper>
                <StyledButton onClick={this.handleStepFour}>Create new order</StyledButton>
              </ButtonWrapper>
            </div>
          )}
        </ModalContent>
      </>
    );
  }
}

export default NewDeliveryModal;

const ModalContent = styled.div`
  padding: 50px;
  ${media.xs} {
    padding: 20px;
  }
`;

const InputWrapper = styled.div`
  max-width: 250px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const InputSet = styled.div`
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const StyledFormikField = styled(FormikField)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OrderDetailsWrapper = styled.div`
  margin-bottom: 15px;
`;

const RewardWrapper = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
  span {
    font-weight: bold;
  }
  ${media.xs} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
