import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount () {
      this.reqIntercceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      this.resIntercceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error});
      });
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqIntercceptor);
      axios.interceptors.response.eject(this.resIntercceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
};

export default withErrorHandler;
