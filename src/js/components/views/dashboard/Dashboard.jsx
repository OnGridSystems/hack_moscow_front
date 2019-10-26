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


const mapStateToProps = ({ User }) => ({
  role: User.get('role'),
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
  render() {
    const { role, showModal, takeOrder } = this.props;

    return (
      <Wrapper>
        <PageTitle>Dashboard</PageTitle>
        <Section>
          <SectionTitle>Your profile:</SectionTitle>
          {role === 'shipper' && (
            <DivTable>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Name:</div>
                <div className="TxnInfo_value">Shipper LTD</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Location:</div>
                <div className="TxnInfo_value">Russia, Moscow, Dmitrovskoe shosse, 9</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Balance:</div>
                <div className="TxnInfo_value">100 USD</div>
              </div>
            </DivTable>
          )}
          {role === 'carrier' && (
            <DivTable>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Carrier:</div>
                <div className="TxnInfo_value">Some carrier</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Vehicle:</div>
                <div className="TxnInfo_value">VW Transporter 2.0 TDI</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Max load:</div>
                <div className="TxnInfo_value">1300kg</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Total balance:</div>
                <div className="TxnInfo_value">100 USD</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Locked balance:</div>
                <div className="TxnInfo_value">10 USD</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Available balance:</div>
                <div className="TxnInfo_value">90 USD</div>
              </div>
              <div className="TxnInfo_property">
                <div className="TxnInfo_label">Smart contract:</div>
                <div className="TxnInfo_value">
                  <a href="https://etherscan.io/address/0x32A3256a4b15BadD4a6e072A03d23404d925a5CF">
                    <span className="hidden-xs">0x32A3256a4b15BadD4a6e072A03d23404d925a5CF</span>
                    <span className="hidden-smPlus">
                      {cropTxnHash('0x32A3256a4b15BadD4a6e072A03d23404d925a5CF', 16)}
                    </span>
                  </a>
                </div>
              </div>
            </DivTable>
          )}
        </Section>
        <Section>
          <SectionTitle>Current orders:</SectionTitle>
          <DeliveryOrders orders={[]} showModal={showModal} takeOrder={takeOrder} />
        </Section>
        <Section>
          <SectionTitle>{role === 'shipper' ? 'Delivery orders' : 'Orders to take'}</SectionTitle>
          {role === 'shipper' && (
            <NewDelivery>
              <Button>+ New delivery</Button>
            </NewDelivery>
          )}
          <DeliveryOrders
            orders={[]}
            showModal={showModal}
            type={role === 'shipper' ? 'current' : 'take'}
            takeOrder={takeOrder}
          />
        </Section>
        <Section>
          <SectionTitle>Last delivered orders:</SectionTitle>
          <DeliveryOrders orders={[]} showModal={showModal} />
        </Section>
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
  ${media.smMinus} {
    width: 100%;
    margin: 0;
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
