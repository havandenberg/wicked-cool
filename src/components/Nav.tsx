import * as React from 'react';
import styled from 'react-emotion';
import { NavLink } from 'react-router-dom';
import * as Sticky from 'react-stickynode';
import l from '../styles/layout';
import {
  breakpoints,
  colors,
  fontSizes,
  gradients,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';

const NavItemText = styled(t.Text)({
  '.active &': {
    backgroundImage: gradients.darkBlue,
  },
  ':before': {
    backgroundImage: gradients.darkBlue,
    borderRadius: 'inherit',
    content: '""',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: transitions.default,
    width: '100%',
    zIndex: -1,
  },
  ':hover': {
    ':before': {
      opacity: 1,
    },
  },
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'bold',
  height: '100%',
  padding: spacing.m,
  position: 'relative',
  zIndex: 1,
  [breakpoints.mobile]: {
    fontSize: 10,
    height: 36,
    padding: spacing.s,
  },
});

const NavItem = ({ text, to }: { text: string; to: string }) => (
  <NavLink activeClassName="active" exact to={to}>
    <NavItemText
      center
      color={colors.white}
      fontSize={['10px', fontSizes.text]}
    >
      {text}
    </NavItemText>
  </NavLink>
);

const NavWrapper = styled(l.CenteredRow)({
  background: gradients.lightBlue,
  width: '100%',
});

const Nav = () => (
  <Sticky activeClass="active-sticky" innerZ={2}>
    <NavWrapper>
      <NavItem text="Home" to="/" />
      <NavItem text="Commercial A/C" to="/commercial-ac" />
      <NavItem text="Freezer & Cooler" to="/freezer-cooler" />
      <NavItem text="Maintenance Plans" to="/maintenance-plans" />
      <NavItem text="Contact" to="/contact" />
    </NavWrapper>
  </Sticky>
);

export default Nav;
