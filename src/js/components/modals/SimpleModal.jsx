import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { media } from 'js/constants/media';
import styled from 'styled-components';

import * as UIActions from 'js/actions/UIActions';

import ModalHeader from 'js/components/modals/stateless/ModalHeader';


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
class SimpleModal extends Component {
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
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Delivery ID:</div>
            <div className="TxnInfo_value">1</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">From address:</div>
            <div className="TxnInfo_value">Russia, Moscow, Dmitrovskoe shosse, 9</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">To address:</div>
            <div className="TxnInfo_value">Savyolkinsky drive 4</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Distance:</div>
            <div className="TxnInfo_value">135km</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Dimensions:</div>
            <div className="TxnInfo_value">12x10x5</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Weight:</div>
            <div className="TxnInfo_value">1kg</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Coverage:</div>
            <div className="TxnInfo_value">100$</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Reward:</div>
            <div className="TxnInfo_value">10$</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Shipment date:</div>
            <div className="TxnInfo_value">01.01.2019</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Delivery date:</div>
            <div className="TxnInfo_value">01.01.2019</div>
          </div>
          <div className="TxnInfo_property">
            <div className="TxnInfo_label">Carrier:</div>
            <div className="TxnInfo_value">Some carrier</div>
          </div>
        </ModalContent>
      </>
    );
  }
}

export default SimpleModal;

const ModalContent = styled.div`
  padding: 50px;
  display: table;
    ${media.xs} {
      padding: 20px;
    }
    & > div {
        display: table-row;
        & > div {
            display: table-cell;
        }
    }
    .TxnInfo_property {
        &:not(:last-of-type) > div {
            padding-bottom: 4px;
        }
    }
    .TxnInfo_label {
        font-weight: 600;
        line-height: 30px;
        white-space: nowrap;
        ${media.xs} {
            font-size: 12px;
        }
    }
    .TxnInfo_value {
        padding-left: 16px;
        line-height: 30px;
        ${media.md} {
            word-break: break-all;
        }
        ${media.xs} {
            font-size: 12px;
        }
    }
`;
