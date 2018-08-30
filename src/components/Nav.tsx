import * as React from 'react';
import styled from 'react-emotion';
import { NavLink } from 'react-router-dom';
import l from '../styles/layout';
import { breakpoints, colors, fontSizes, spacing, transitions } from '../styles/theme';
import t from '../styles/typography';

const NavItemText = styled(t.Text)({
  ".active &": {
      background: colors.darkBlue,
  },
  ":hover": {
    background: colors.darkBlue,
  },
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'bold',
  height: '100%',
  padding: spacing.m,
  transition: transitions.default,
  [breakpoints.mobileOnly]: {
    fontSize: 10,
    height: 36,
    padding: spacing.s,
  },
});

const NavItem = ({ text, to }: { text: string, to: string }) => (
  <NavLink
    activeClassName="active"
    exact
    to={to}>
    <NavItemText
      center
      color={colors.white}
      fontSize={['10px', fontSizes.text]}>
        {text}
    </NavItemText>
  </NavLink>
);

const NavWrapper = styled(l.CenteredRow)({
  background: colors.lightBlue,
  width: '100%',
});

const Nav = () => (
  <NavWrapper>
    <NavItem text="Home" to="/" />
    <NavItem text="Commercial A/C" to="/commercial-ac" />
    <NavItem text="Freezer & Cooler" to="/freezer-cooler" />
    <NavItem text="Maintenance Plans" to="/maintenance-plans" />
    <NavItem text="Contact" to="/contact" />
  </NavWrapper>
);

export default Nav;
