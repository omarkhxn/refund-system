

import React from 'react';
import cx from 'classnames';
import { Switch, Route, withRouter } from 'react-router';

import s from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard'
import Buttons from '../../pages/buttons'
import Charts from '../../pages/charts'
import NotFound from '../../pages/notFound'
import Icons from '../../pages/icons'
import Typography from '../../pages/typography'
import Tables from '../../pages/tables'
// import Notifications from '../../pages/notifications'
import Posts from '../../pages/posts'
import Profile from '../../pages/profile'
import Privacy from '../../pages/privacy'

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <Sidebar />
        <div
          className={cx(s.wrap, {[s.sidebarOpen]: this.state.sidebarOpen})}
        >
          <Header
            sidebarToggle={() =>
              this.setState({
                sidebarOpen: !this.state.sidebarOpen,
              })
            }
          />
          <main className={s.content}>
            <Switch>
              <Route path="/app/main" exact component={Dashboard} />

              <Route path="/app/posts" component={Posts} />
              <Route path="/app/privacy" exact component={Privacy} />

              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
