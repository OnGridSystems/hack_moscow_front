import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Table, Button } from 'react-bootstrap';

import { media } from 'js/constants/media';
import cropTxnHash from 'js/utils/cropTxnHash';

import * as UIActions from 'js/actions/UIActions';

import PageTitle from 'js/components/common/PageTitle';


const mapStateToProps = ({ User }) => ({
  role: User.get('role'),
});

const mapDispatchToProps = dispatch => ({
  showModal(payload) {
    dispatch(UIActions.showModal(payload));
  },
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Dashboard extends Component {
  handleShowModal = () => {
    const { showModal } = this.props;

    showModal({ type: 'simple', options: { title: 'Order details', data: { id: 1 } } });
  }

  render() {
    const { role } = this.props;

    return (
      <Wrapper>
        <PageTitle>Dashboard</PageTitle>
        <SectionTitle>Your profile:</SectionTitle>
        {role === 'shipper' && (
        <UserInfo>
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
        </UserInfo>
        )}
        {role === 'carrier' && (
        <UserInfo>
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
                <span className="hidden-smPlus">{cropTxnHash('0x32A3256a4b15BadD4a6e072A03d23404d925a5CF', 16)}</span>
              </a>
            </div>
          </div>
        </UserInfo>
        )}
        <SectionTitle>Delivery orders:</SectionTitle>
        <NewDelivery>
          <Button>+ New delivery</Button>
        </NewDelivery>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Delivery ID</th>
              <th className="hidden-xs">Carrier</th>
              <th className="hidden-xs">To</th>
              <th className="hidden-xs">Coverage</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="hidden-xs">Carrier LTD</td>
              <td className="hidden-xs">Zelenograd, Savyolkinsky drive, 4</td>
              <td className="hidden-xs">1500$</td>
              <td>Not sent</td>
              <td>
                <Button onClick={this.handleShowModal}>Details</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="hidden-xs">Carrier2 LTD</td>
              <td className="hidden-xs">Zelenograd, Savyolkinsky drive, 4c1</td>
              <td className="hidden-xs">910$</td>
              <td>On the way</td>
              <td>
                <Button onClick={this.handleShowModal}>Details</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

export default Dashboard;

const Wrapper = styled.div`
  min-width: 1000px;
  padding: 70px 100px 50px 100px;
  box-shadow: 0 10px 21px 0 rgba(173, 182, 217, 0.3);
  background: #fff;
  height: 100%;
  ${media.smMinus} {
    min-width: unset;
    width: 100%;
  }
  ${media.xs} {
    padding: 30px;
  }
  td {
    vertical-align: middle;
  }
`;

const UserInfo = styled.div`
    display: table;
    margin-bottom: 50px;
    ${media.xs} {
      margin-bottom: 35px;
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
