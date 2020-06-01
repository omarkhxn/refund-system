

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './ReturnPop.scss';
import r from './return.jpg';
import {
  Row,
  Col,
  Alert,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Badge,
  ListGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Table
} from 'reactstrap';
class ReturnPop extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    title: null,
    className: '',
    children: [],
  };

  render() {
    return (
      <div className='popup'>  
        <div style={divstyles}>  
          <h1>Return Label</h1>
          <Row>
            <Col sm={12} md={6}>
              <h4>Print this return label, place your item in the return package you should have got, or any package. Send it off! Easy.</h4>
              <br></br>
              <p>Payments will be made back to the account that you have paid with on the produt, if the QR code is not scanned within 3 days of sending, refund will be done automatically. To change payment details <a>click here</a></p>
            </Col>
            <Col sm={12} md={6}>
              <h3>Scan the QR code to confirm the re-payment back to your account</h3>
              <br></br>
              <a download={r} href={r}>Download Return Label</a>
              {/* <img src={r}/> */}
            </Col>
          </Row>
          <button style={btn} className= "width-100 mb-xs mr-xs" onClick={this.props.closePopup}>Close</button>
        </div>  
      </div>  
    );
  }
}

var divstyles = {

  position: "absolute",
  left: "25%",
  right: "25%",
  top: "25%",
  bottom:"25%",
  margin: "auto",
  backgroundColor: "white",
  padding: "30px"

}

var btn = {

  position: "absolute",
  right: "5%",
  bottom:"5%",
  margin: "auto",
  backgroundColor: "white"

}

export default ReturnPop;
