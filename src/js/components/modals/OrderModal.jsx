import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { media } from 'js/constants/media';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import * as UIActions from 'js/actions/UIActions';
import * as OrderActions from 'js/actions/OrderActions';

import ModalHeader from 'js/components/modals/stateless/ModalHeader';
import OrderDetails from 'js/components/views/order/OrderDetails';


const mapStateToProps = ({ UI, User }) => ({
  modalOptions: UI.get('modalOptions'),
  role: User.get('role'),
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(UIActions.hideModal());
  },

  cancelOrderRequest(payload) {
    dispatch(OrderActions.cancelOrderRequest(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class OrderModal extends Component {
  handleCancelOrder = () => {
    const { cancelOrderRequest, modalOptions, hideModal } = this.props;

    cancelOrderRequest(modalOptions.data.id);
    hideModal();
  }

  render() {
    const { modalOptions, hideModal, role } = this.props;

    return (
      <>
        <ModalHeader handleHideModal={hideModal}>{modalOptions.title}</ModalHeader>
        <ModalContent>
          <DetailsWrapper order={modalOptions.data} />
          {role === 'SHIPPER'
          && (
          <InputWrapper>
            <StyledButton>Notify user</StyledButton>
            {modalOptions.data.status === 'NOT_SENT' && <StyledButton onClick={this.handleCancelOrder}>Cancel order</StyledButton> }
          </InputWrapper>
          )
          }
        </ModalContent>
      </>
    );
  }
}

export default OrderModal;

const ModalContent = styled.div`
  padding: 50px;
  ${media.xs} {
    padding: 20px;
  }
`;

const DetailsWrapper = styled(OrderDetails)`
  margin-bottom: 30px;
  ${media.xs} {
    margin-bottom: 20px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  width: 150px;
  height: 40px;
  ${media.xs} {
    width: unset;
    height: unset;
  }
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;
