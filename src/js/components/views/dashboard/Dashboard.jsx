import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Table, Button } from 'react-bootstrap';

import { media } from 'js/constants/media';
import cropTxnHash from 'js/utils/cropTxnHash';

import * as OrderActions from 'js/actions/OrderActions';
import * as UIActions from 'js/actions/UIActions';

import PageTitle from 'js/components/common/PageTitle';
import DeliveryOrders from 'js/components/views/dashboard/stateless/DeliveryOrders';
import DivTable from 'js/components/common/DivTable';


const mapStateToProps = ({ User, Orders }) => ({
  userOrders: Orders.get('userOrders'),
  availableOrders: Orders.get('availableOrders'),

  username: User.get('username'),
  role: User.get('role'),
  balance: User.get('balance'),
  location: User.get('location'),

  smartContract: User.get('smartContract'),
  vehicle: User.get('vehicle'),
  totalBalance: User.get('totalBalance'),
  lockedBalance: User.get('lockedBalance'),
  availableBalance: User.get('availableBalance'),
  maxLoad: User.get('maxLoad'),
});

const mapDispatchToProps = dispatch => ({
  showModal(payload) {
    dispatch(UIActions.showModal(payload));
  },
  takeOrder(payload) {
    dispatch(OrderActions.takeOrderRequest(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Dashboard extends Component {
  handleNewDelivery = () => {
    const { showModal } = this.props;

    showModal({ type: 'newDelivery', options: { title: 'New delivery', data: { id: 1 } } });
  };

  render() {
    const {
      userOrders,
      availableOrders,
      username,
      role,
      balance,
      location,
      smartContract,
      vehicle,
      totalBalance,
      lockedBalance,
      availableBalance,
      maxLoad,
      showModal,
      takeOrder,
    } = this.props;

    return (
      <Wrapper>
        <PageTitle>Dashboard</PageTitle>
        <Section>
          <SectionTitle>Your profile:</SectionTitle>
          {role === 'SHIPPER' && (
            <DivTable>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Name:</div>
                <div className="TxnInfo_value">{username}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Location:</div>
                <div className="TxnInfo_value">{location}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Balance:</div>
                <div className="TxnInfo_value">{`${balance} USD`}</div>
              </div>
            </DivTable>
          )}
          {role === 'CARRIER' && (
            <DivTable>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Carrier:</div>
                <div className="TxnInfo_value">{username}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Vehicle:</div>
                <div className="TxnInfo_value">{vehicle}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Max load:</div>
                <div className="TxnInfo_value">{`${maxLoad} kg`}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Total balance:</div>
                <div className="TxnInfo_value">{`${totalBalance} USD`}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Locked balance:</div>
                <div className="TxnInfo_value">{`${lockedBalance} USD`}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Available balance:</div>
                <div className="TxnInfo_value">{`${availableBalance} USD`}</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Smart contract:</div>
                <div className="TxnInfo_value">
                  <a href={`https://etherscan.io/address/${smartContract}`}>
                    <span className="hidden-xs">{smartContract}</span>
                    <span className="hidden-smPlus">{cropTxnHash(smartContract, 16)}</span>
                  </a>
                </div>
              </div>
            </DivTable>
          )}
        </Section>
        {role === 'SHIPPER' && (
          <Section>
            <SectionTitle>Delivery orders</SectionTitle>
            <NewDelivery>
              <Button onClick={this.handleNewDelivery} size="sm">
                + New delivery
              </Button>
            </NewDelivery>
            <DeliveryOrders orders={userOrders} showModal={showModal} />
          </Section>
        )}
        {role === 'CARRIER' && (
          <>
            <Section>
              <SectionTitle>Orders to take:</SectionTitle>
              <DeliveryOrders
                orders={availableOrders}
                showModal={showModal}
                takeOrder={takeOrder}
                availableBalance={availableBalance}
                type="take"
              />
            </Section>
            <Section>
              <SectionTitle>Current orders:</SectionTitle>
              <DeliveryOrders
                orders={userOrders.filter(order => order.status === 'ON_THE_WAY')}
                showModal={showModal}
                takeOrder={takeOrder}
              />
            </Section>
            <Section>
              <SectionTitle>Last delivered orders:</SectionTitle>
              <DeliveryOrders
                orders={userOrders.filter(order => order.status === 'DELIVERED')}
                showModal={showModal}
              />
            </Section>
          </>
        )}
      </Wrapper>
    );
  }
}

export default Dashboard;

const Wrapper = styled.div`
  flex: 1;
  margin: 50px 100px 100px 100px;
  padding: 70px 100px 50px 100px;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  background: #fff;
  height: 100%;
  min-width: 900px;
  ${media.smMinus} {
    width: 100%;
    margin: 0;
    min-width: unset;
  }
  ${media.xs} {
    padding: 30px;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 20px;
  ${media.xs} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const NewDelivery = styled.div`
  margin-bottom: 20px;
  ${media.xs} {
    margin-bottom: 10px;
  }
`;

const Section = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 50px;
    ${media.xs} {
      margin-bottom: 35px;
    }
  }
`;
