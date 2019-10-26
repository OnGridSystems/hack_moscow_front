import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { media } from 'js/constants/media';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import * as UIActions from 'js/actions/UIActions';

import ModalHeader from 'js/components/modals/stateless/ModalHeader';
import OrderDetails from 'js/components/views/order/OrderDetails';


const mapStateToProps = ({ UI }) => ({
  modalOptions: UI.get('modalOptions'),
});

const mapDispatchToProps = dispatch => ({
  hideModal() {
    dispatch(UIActions.hideModal());
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class OrderModal extends Component {
  static propTypes = {
    modalOptions: PropTypes.object.isRequired,

    hideModal: PropTypes.func.isRequired,
  };

  render() {
    const { modalOptions, hideModal } = this.props;

    return (
      <>
        <ModalHeader handleHideModal={hideModal}>{modalOptions.title}</ModalHeader>
        <ModalContent>
          <DetailsWrapper order={{}} />
          <InputWrapper>
            <StyledButton>Notify user</StyledButton>
            <StyledButton>Cancel order</StyledButton>
          </InputWrapper>
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
