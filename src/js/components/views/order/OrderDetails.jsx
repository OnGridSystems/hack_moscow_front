import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

import { media } from 'js/constants/media';

import DivTable from 'js/components/common/DivTable';


export default function OrderDetails({ order, ...props }) {
  // const handleShowModal = () => {
  //   showModal({ type: 'simple', options: { title: 'Order details', data: { id: 1 } } });
  // };

  return (
    <DivTable {...props}>
      <div className="TxnInfo_property">
        <div className="TxnInfo_label">Delivery ID:</div>
        <div className="TxnInfo_value">1</div>
      </div>
      <div className="TxnInfo_property">
        <div className="TxnInfo_label">Status:</div>
        <div className="TxnInfo_value">On the way</div>
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
    </DivTable>
  );
}
