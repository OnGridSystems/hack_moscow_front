import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

import { media } from 'js/constants/media';

import DivTable from 'js/components/common/DivTable';


export default function DeliveryOrders({ orders, type, showModal, takeOrder }) {
  const handleShowModal = () => {
    showModal({ type: 'simple', options: { title: 'Order details', data: { id: 1 } } });
  };

  const handleTakeOrder = () => {
    takeOrder({ type: 'simple', options: { title: 'Order details', data: { id: 1 } } });
  };

  return (
    <>
      <Table className="hidden-xs" striped bordered hover>
        <thead>
          <tr>
            <th>Delivery ID</th>
            <th className="hidden-xs">Carrier</th>
            <th className="hidden-xs">To</th>
            <th className="hidden-xs">Coverage</th>
            {type !== 'take' && <th>Status</th>}
            <th />
            {type === 'take' && <th />}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="hidden-xs">Carrier LTD</td>
            <td className="hidden-xs">Zelenograd, Savyolkinsky drive, 4</td>
            <td className="hidden-xs">1500$</td>
            {type !== 'take' && <td>Not sent</td>}
            <td>
              <Button onClick={handleShowModal}>Details</Button>
            </td>
            {type === 'take' && (
              <td>
                <Button onClick={handleTakeOrder}>Take</Button>
              </td>
            )}
          </tr>
          <tr>
            <td>2</td>
            <td className="hidden-xs">Carrier2 LTD</td>
            <td className="hidden-xs">Zelenograd, Savyolkinsky drive, 4c1</td>
            <td className="hidden-xs">910$</td>
            {type !== 'take' && <td>On the way</td>}
            <td>
              <Button onClick={handleShowModal}>Details</Button>
            </td>
            {type === 'take' && (
              <td>
                <Button onClick={handleTakeOrder}>Take</Button>
              </td>
            )}
          </tr>
        </tbody>
      </Table>
      <Table className="hidden-smPlus" striped bordered hover>
        <tbody>
          <tr>
            <td>
              <ItemCard>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">To address:</div>
                  <div className="TxnInfo_value">Dmitrovskoe shosse 9</div>
                </div>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">Reciever Name:</div>
                  <div className="TxnInfo_value">Alex</div>
                </div>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">Reciever Tel:</div>
                  <div className="TxnInfo_value">+79999999999</div>
                </div>
              </ItemCard>
              <InputWrapper>
                {type === 'take' && (
                  <StyledButton size="sm" onClick={handleTakeOrder}>
                    Take
                  </StyledButton>
                )}
                <StyledButton size="sm" onClick={handleShowModal}>Details</StyledButton>
              </InputWrapper>
            </td>
          </tr>
          <tr>
            <td>
              <ItemCard>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">To address:</div>
                  <div className="TxnInfo_value">Dmitrovskoe shosse 9</div>
                </div>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">Reciever Name:</div>
                  <div className="TxnInfo_value">Alex</div>
                </div>
                <div className="TxnInfo_property">
                  <div className="TxnInfo_label">Reciever Tel:</div>
                  <div className="TxnInfo_value">+79999999999</div>
                </div>
              </ItemCard>
              <InputWrapper>
                {type === 'take' && (
                  <StyledButton size="sm" onClick={handleTakeOrder}>
                    Take
                  </StyledButton>
                )}
                <StyledButton size="sm" onClick={handleShowModal}>Details</StyledButton>
              </InputWrapper>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

const ItemCard = styled(DivTable)`
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;
