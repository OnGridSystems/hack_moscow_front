import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as UIActions from 'js/actions/UIActions';

import OrderModal from 'js/components/modals/OrderModal';
import NewDeliveryModal from 'js/components/modals/NewDeliveryModal';


const mapStateToProps = ({ UI }) => ({
  modalType: UI.get('modalType'),
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
class Modal extends Component {
  static propTypes = {
    modalType: PropTypes.string.isRequired,
  };

  renderModal = (type) => {
    switch (type) {
      case 'order':
        return <OrderModal />;
      case 'newDelivery':
        return <NewDeliveryModal />;
      default:
        return null;
    }
  };

  render() {
    const { modalType } = this.props;

    return (
      <Wrapper>
        <ModalBody>{this.renderModal(modalType)}</ModalBody>
      </Wrapper>
    );
  }
}

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 550px;
  overflow: hidden;
  margin: 0 20px;
`;
