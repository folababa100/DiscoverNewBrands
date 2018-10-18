import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import moment from 'moment'

export default class MainBodyDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      name: props.product ? props.product.name : '',
      description: props.product ? props.product.description : '',
      url: props.product ? props.product.url : '',
      amount: props.product ? (props.product.amount / 100).toString : '',
      createdAt: props.product ? moment(props.product.createdAt) : moment(),
      fileUrl: props.product ? props.product.fileUrl : '',
      category: props.product ? props.product.category : ''
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn-floating"><i style={{ 'fontSize': '2rem' }} className="ion-plus-round"></i></button>
        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader style={{ borderBottom: '0' }} toggle={this.toggle}></ModalHeader>
            <div style={{ maxWidth: '325px' }} className="container">
              <form>
                <input placeholder="Name" type="text" className="radius-none form-control" />
                <input placeholder="Website Url" type="url" className="radius-none mt-2 form-control" />
                <input placeholder="Price" className="radius-none mt-2 form-control" type="number"/>
                <input className="radius-none mt-2 form-control-file" type="file"/>
                <select className="radius-none mt-2 form-control">
                  <option value="Categories">Apparel / Accessories</option>
                  <option value="Categories">Food & Drug</option>
                  <option value="Categories">Health & Beauty</option>
                  <option value="Categories">Jewelry</option>
                  <option value="Categories">Office</option>
                  <option value="Categories">Sporting Goods</option>
                  <option value="Categories">Mattress</option>
                </select>
                <textarea placeholder="Description of Products" cols="30" rows="10" className="radius-none mt-2 form-control"></textarea>
                <button className="radius-none mt-2 mb-4 btn btn-block">Submit</button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}
