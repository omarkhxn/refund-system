import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className={s.root}>
    {/* <header className={s.logo}>
      <Link to="/app/main">
        <Icon glyph="logo" />
      </Link>
    </header> */}
    <ul className={s.nav}>
      <LinksGroup
        header="My Account"
        headerLink="/app/main"
        glyph="account"
      />
      <LinksGroup
        header="Return Label"
        headerLink="/app/typography"
        glyph="typography"
      />
      <LinksGroup
        header="Order Tracking"
        headerLink="/app/tables"
        glyph="tables"
      />
      <LinksGroup
        header="Preferences"
        headerLink="/app/notifications"
        glyph="settings"
      />
      <LinksGroup
        header="Sign Out"
        headerLink="/app/components"
        glyph="signout"
      />
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
