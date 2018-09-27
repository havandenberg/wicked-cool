import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { height } from 'styled-system';
import HiringImg from '../assets/images/hiring.svg';
import PhoneImg from '../assets/images/phone.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  gradients,
  shadows,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import { ESTIMATE_ACTION, SERVICE_ACTION } from '../utils/constants';

const CallUs = styled(t.Anchor)({
  transform: `translateY(2px)`,
  [breakpoints.mobileOnly]: {
    transform: `translateY(3px)`,
  },
});

const ContactButton = styled(Link)({
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
  ':last-child': {
    marginRight: 0,
  },
  background: colors.darkBlue,
  borderRadius: borders.borderRadius,
  boxShadow: shadows.box,
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 500,
  marginRight: spacing.xxxxxl,
  padding: spacing.ml,
  position: 'relative',
  zIndex: 1,
  [breakpoints.mobileOnly]: {
    ':last-child': {
      marginRight: 0,
    },
    marginRight: spacing.ml,
    padding: spacing.m,
  },
  [breakpoints.iphone5]: {
    ':last-child': {
      marginBottom: 0,
      marginRight: 0,
    },
    marginBottom: spacing.ml,
    marginRight: 0,
  },
});

const ContactButtons = styled(l.CenteredRow)({
  [breakpoints.iphone5]: {
    flexDirection: 'column',
  },
});

const HiringIcon = styled('img')({
  height: spacing.xl,
  marginRight: spacing.ml,
  [breakpoints.tabletOnly]: {
    height: spacing.ml,
  },
  [breakpoints.mobileOnly]: {
    height: spacing.ml,
  },
});

const HiringText = styled(t.Text)({
  fontSize: fontSizes.largeText,
  lineHeight: 1.75,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
  },
});

const HiringTitle = styled(t.H2)({
  alignItems: 'center',
  color: colors.darkBlue,
  display: 'flex',
  fontSize: 32,
  fontWeight: 500,
  justifyContent: 'center',
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.h2,
  },
});

export const PhoneIcon = styled('img')(
  {
    height: spacing.m,
    marginRight: spacing.s,
  },
  height,
);

const CTAs = () => (
  <div>
    <ContactButtons mb={[spacing.xxl, spacing.xxxxxl]} mx="auto">
      <ContactButton to={`/contact?action=${ESTIMATE_ACTION}`}>
        Request Estimate
      </ContactButton>
      <ContactButton to={`/contact?action=${SERVICE_ACTION}`}>
        Schedule Service
      </ContactButton>
    </ContactButtons>
    <HiringTitle center mb={spacing.l}>
      <HiringIcon src={HiringImg} />
      We're Hiring!
    </HiringTitle>
    <HiringText center>
      We are seeking mechanically inclined individuals who are eager to learn.
      <br />
      <CallUs
        border={borders.lightBlue}
        color={colors.lightBlue}
        href="tel:6035240445"
        pb="0px"
      >
        <PhoneIcon src={PhoneImg} />
        Call us
      </CallUs>
      &nbsp;for more information and to apply.
    </HiringText>
    <l.Space mt={[0, spacing.xxxxxl]} />
  </div>
);

export default CTAs;
