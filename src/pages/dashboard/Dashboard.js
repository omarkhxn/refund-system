import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { mock } from './mock'

import Widget from '../../components/Widget';
import PopUp from '../../components/PopUp/PopUp';
import Return from '../../components/ReturnPop/ReturnPop';

import { fetchPosts } from '../../actions/posts';
import s from './Dashboard.module.scss';

class Dashboard extends Component {
  /* eslint-disable */
  static propTypes = {
    posts: PropTypes.any,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };
  /* eslint-enable */

  static defaultProps = {
    posts: [],
    isFetching: false,
  };

  state = {
    isDropdownOpened: false,
    showPopUp: false,
    showReturn: false,
    isDropdownOpened: false
  };

  componentDidMount() {
    if(process.env.NODE_ENV === "development") {
      this.props.dispatch(fetchPosts());      
    }
  }

  formatDate = (str) => {
    return str.replace(/,.*$/,"");
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpened: !prevState.isDropdownOpened,
    }));
  }

  togglePopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,

    })
  }
  toggleReturn = () => {
    this.setState({
      showReturn: !this.state.showReturn,

    })
  }
  //comment added for toggling


  render() {
    return (
      <div className={s.root}>
        <Breadcrumb>
          <BreadcrumbItem>My Account</BreadcrumbItem>
          <BreadcrumbItem active>Orders & History</BreadcrumbItem>
        </Breadcrumb>

        {
          this.state.showPopUp ?
          <div style={divstyles}>
          <PopUp text="Get Your Money"
            closePopup = {this.togglePopUp.bind(this)}
            />
        </div>
        : null
        }
        {
          this.state.showReturn ?
          <div style={divstyles}>
          <Return text="Get Your Money"
            closePopup = {this.toggleReturn.bind(this)}
            />
        </div>
        : null
        }

        <h1 className="mb-lg">Dashboard</h1>
        <Row>
          <Col sm={12} md={6}>
            <Widget
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-user mr-xs opacity-70" />{' '}
                    Order History
                  </h5>
                </div>
              }
            >
              <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vanz</td>
                    <td>Size 8</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nike Jacket Black Puffer</td>
                    <td>Medium Mens</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Yeezy 350 Blackout</td>
                    <td>Size 8</td>
                    <td>
                      <span className="py-0 px-1 bg-danger rounded text-white">Declined</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ladies lipstick Red</td>
                    <td>Large</td>
                    <td>
                      <span className="py-0 px-1 bg-warning rounded text-white">Cancelled</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
          <Col sm={12} md={6}>
          <Widget
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-credit-card mr-xs opacity-70" />{' '}
                    Payment History
                  </h5>
                </div>
              }
            >
              <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vanz</td>
                    <td>Size 8</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nike Jacket Black Puffer</td>
                    <td>Medium Mens</td>
                    <td>
                      <span className="py-0 px-1 bg-success rounded text-white">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Yeezy 350 Blackout</td>
                    <td>Size 8</td>
                    <td>
                      <span className="py-0 px-1 bg-danger rounded text-white">Declined</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ladies lipstick Red</td>
                    <td>Large</td>
                    <td>
                      <span className="py-0 px-1 bg-warning rounded text-white">Refunded</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
        </Row>
        <Row>
              {/* Returns and Progress */}
        </Row>
        <Row>
        <Col sm={12} md={6}>
          <Widget
              title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-undo mr-xs opacity-70" />{' '}
                    Your Returns
                  </h5>
                </div>
              }
            >
              <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vanz</td>
                    <td>Size 8</td>
                    <td>

                      <Button outline color="primary" className="width-100 mb-xs mr-xs" onClick={this.toggleReturn.bind(this)}>Return Item</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Nike Jacket Black Puffer</td>
                    <td>Medium Mens</td>
                    <td>
                    <Button outline color="primary" className="width-100 mb-xs mr-xs" onClick={this.toggleReturn.bind(this)}>Return Item</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Yeezy 350 Blackout</td>
                    <td>Size 8</td>
                    <td>
                    <Button outline color="danger" className="width-100 mb-xs mr-xs">Edit Payment Method</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ladies lipstick Red</td>
                    <td>Large</td>
                    <td>
                    <Button outline color="success" className="width-100 mb-xs mr-xs" onClick={this.togglePopUp.bind(this)}>Get Your Money  <i className="fa fa-money-bill mr-xs" /></Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Widget>
          </Col>
            <Col sm={12} md={6}>
                <Widget title={
                <div>
                  <div className="pull-right mt-n-xs">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="form-control input-sm"
                    />
                  </div>
                  <h5 className="mt-0 mb-3">
                    <i className="fa fa-undo mr-xs opacity-70" />{' '}
                    Your Returns
                  </h5>
                </div>
              }
              >
                <Table responsive borderless className={cx('mb-0', s.usersTable)}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>Ladies lipstick Red</td>
                    <td>Large</td>
                    <td>
                    <Button outline color="success" className="width-100 mb-xs mr-xs" onClick={this.togglePopUp.bind(this)}>Get Your Money  <i className="fa fa-money-bill mr-xs" /></Button>
                   </td>
                  </tr>
                  
                </tbody>
              </Table>
                    <Progress className="progress-sm" color="success" value={80} />
                </Widget>
            </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts,
  };
}


var divstyles = {

  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",  
  margin: "auto",
  backgroundColor:" rgba(0,0,0, 0.5)",
  position: "fixed",/* Stay in place */
  zIndex: "1" /* Sit on top */

}


export default connect(mapStateToProps)(Dashboard);