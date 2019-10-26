import React from 'react';

import DivTable from 'js/components/common/DivTable';


export default function OrderDetails({ order, ...props }) {
  if (!order) {
    return null;
  }

  return (
    <DivTable {...props}>
      {order.id && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Delivery ID:</div>
          <div className="TxnInfo_value">{order.id}</div>
        </div>
      )}
      {order.status && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Status:</div>
          <div className="TxnInfo_value">{order.status}</div>
        </div>
      )}
      {order.pickupLocation && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">From address:</div>
          <div className="TxnInfo_value">{order.pickupLocation}</div>
        </div>
      )}
      {order.destination && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">To address:</div>
          <div className="TxnInfo_value">{order.destination}</div>
        </div>
      )}
      {order.distance && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Distance:</div>
          <div className="TxnInfo_value">{order.distance}</div>
        </div>
      )}
      {order.dimensions && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Dimensions:</div>
          <div className="TxnInfo_value">{order.dimensions}</div>
        </div>
      )}
      {order.weight && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Weight:</div>
          <div className="TxnInfo_value">{order.weight}</div>
        </div>
      )}
      {order.coverage && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Coverage:</div>
          <div className="TxnInfo_value">{order.coverage}</div>
        </div>
      )}
      {order.reward && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Reward:</div>
          <div className="TxnInfo_value">{order.reward}</div>
        </div>
      )}
      {order.shipmentDate && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Shipment date:</div>
          <div className="TxnInfo_value">{order.shipmentDate}</div>
        </div>
      )}
      {order.deliveryDate && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Delivery date:</div>
          <div className="TxnInfo_value">{order.deliveryDate}</div>
        </div>
      )}
      {order.carrier && (
        <div className="TxnInfo_property">
          <div className="TxnInfo_label">Carrier:</div>
          <div className="TxnInfo_value">{order.carrier}</div>
        </div>
      )}
      {order.phone && (
      <div className="TxnInfo_property">
        <div className="TxnInfo_label">Reciever phone:</div>
        <div className="TxnInfo_value">{order.phone}</div>
      </div>
      )}
      {order.orderSecret && (
      <div className="TxnInfo_property">
        <div className="TxnInfo_label">Track link:</div>
        <div className="TxnInfo_value">{`${window.location.origin}/order?secret=${order.orderSecret}`}</div>
      </div>
      )}
    </DivTable>
  );
}
