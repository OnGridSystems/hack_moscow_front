class Api {
  constructor() {
    this.prefix = 'http://localhost:5000/api';
  }

  login() {
    return `${this.prefix}/login`;
  }

  logout() {
    return `${this.prefix}/logout`;
  }

  user() {
    return `${this.prefix}/user`;
  }

  register() {
    return `${this.prefix}/register`;
  }

  getDeliveryReward() {
    return `${this.prefix}/get-delivery-reward`;
  }

  createDelivery() {
    return `${this.prefix}/user/orders`;
  }

  getUserOrders() {
    return `${this.prefix}/user/orders`;
  }

  getAvailableOrders() {
    return `${this.prefix}/available-orders`;
  }

  takeOrder(id) {
    return `${this.prefix}/orders/${id}/take`;
  }

  cancelOrder(id) {
    return `${this.prefix}/orders/${id}/cancel`;
  }

  confirmDelivery() {
    return `${this.prefix}/confirm-delivery`;
  }

  orderInfo() {
    return `${this.prefix}/order-info`;
  }
}

export default new Api();
