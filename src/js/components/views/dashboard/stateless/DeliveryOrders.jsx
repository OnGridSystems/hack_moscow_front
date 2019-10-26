import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

import { media } from 'js/constants/media';

import DivTable from 'js/components/common/DivTable';


export default function DeliveryOrders({ orders, type, showModal, takeOrder, availableBalance }) {
  const handleShowDetails = (e) => {
    const { id } = e.currentTarget;

    showModal({ type: 'order', options: { title: 'Order details', data: orders[id] } });
  };

  const handleTakeOrder = (e) => {
    const { id } = e.currentTarget;

    takeOrder(id);
  };

  if (!orders || orders.length === 0) {
    return null;
  }

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
          {orders.map((order, index) => (
            <tr key={uuidv4()}>
              <td>{`00000${order.id}`}</td>
              <td className="hidden-xs">{order.carrier ? order.carrier : 'No carrier yet'}</td>
              <td className="hidden-xs">{order.destination}</td>
              <td className="hidden-xs">{`${order.coverage} USD`}</td>
              {type !== 'take' && <td>{order.status}</td>}
              <td>
                <Button id={index} onClick={handleShowDetails}>
                  Details
                </Button>
              </td>
              {type === 'take' && (
                <td>
                  <Button
                    id={order.id}
                    onClick={handleTakeOrder}
                    disabled={order.coverage > availableBalance}
                  >
                    Take
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Table className="hidden-smPlus" striped bordered hover>
        <tbody>
          {orders.map((order, index) => (
            <tr key={uuidv4()}>
              <td>
                <ItemCard>
                  <div className="TxnInfo_property">
                    <div className="TxnInfo_label">To address:</div>
                    <div className="TxnInfo_value">{order.destination}</div>
                  </div>
                  <div className="TxnInfo_property">
                    <div className="TxnInfo_label">Covarage:</div>
                    <div className="TxnInfo_value">{`${order.coverage} USD`}</div>
                  </div>
                  <div className="TxnInfo_property">
                    <div className="TxnInfo_label">Reward:</div>
                    <div className="TxnInfo_value">{`${order.reward} USD`}</div>
                  </div>
                </ItemCard>
                <InputWrapper>
                  {type === 'take' && (
                  <StyledButton id={order.id} size="sm" onClick={handleTakeOrder} disabled={order.coverage > availableBalance}>
                    Take
                  </StyledButton>
                  )}
                  <StyledButton id={index} size="sm" onClick={handleShowDetails}>
                  Details
                  </StyledButton>
                </InputWrapper>
              </td>
            </tr>
          ))}
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
