import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Table, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { media } from 'js/constants/media';
import cropTxnHash from 'js/utils/cropTxnHash';

import * as OrderActions from 'js/actions/OrderActions';
import * as UIActions from 'js/actions/UIActions';

import PageTitle from 'js/components/common/PageTitle';
import OrderDetails from 'js/components/views/order/OrderDetails';


const mapStateToProps = ({ Orders }) => ({
  orderInfo: Orders.get('orderInfo'),
});

const mapDispatchToProps = dispatch => ({
  confirmDelivery(payload) {
    dispatch(OrderActions.confirmDeliveryRequest(payload));
  },
  getOrderInfoRequest(payload) {
    dispatch(OrderActions.getOrderInfoRequest(payload));
  },
});

@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Dashboard extends Component {
  state = {
    secret: '',
  }

  componentDidMount() {
    const { getOrderInfoRequest, history } = this.props;

    if (!window.location.search.includes('?secret=')) {
      history.push('/');
      return;
    }
    const secret = window.location.search.split('=')[1]; // TODO: fix this
    this.setState({ secret });

    getOrderInfoRequest(secret);
  }

  handleConfirm = () => {
    const { confirmDelivery } = this.props;
    const { secret } = this.state;

    confirmDelivery(secret);
  };


  render() {
    const { secret } = this.state;
    const { orderInfo } = this.props;

    return (
      <Wrapper>
        <PageTitle>Order info</PageTitle>
        <DetailsWrapper>
          <OrderDetails order={orderInfo} />
        </DetailsWrapper>
        {orderInfo.status === 'ON_THE_WAY' && (
        <InputWrapper>
          <Button onClick={this.handleConfirm}>Confirm delivery</Button>
        </InputWrapper>
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
  ${media.smMinus} {
    width: 100%;
    margin: 0;
  }
  ${media.xs} {
    padding: 30px;
  }
`;

const DetailsWrapper = styled.div`
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
