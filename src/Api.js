class Api {
  constructor() {
    this.prefix = '';
  }

  config() {
    return `${this.prefix}/config`;
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
}

export default new Api();
