import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import CommercialACImg from '../assets/images/commercial-ac-home.svg';
import FreezerCoolerImg from '../assets/images/freezer-cooler-home.svg';
import HiringImg from '../assets/images/hiring.svg';
import MaintenanceImg from '../assets/images/maintenance-home.svg';
import PhoneImg from '../assets/images/phone.svg';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  gradients,
  spacing,
  transitions
} from '../styles/theme';
import t from '../styles/typography';

const Break = styled('br')({
  [breakpoints.tabletOnly]: {
    display: 'none',
  },
  [breakpoints.mobileOnly]: {
    display: 'none',
  },
});

const CallUs = styled(t.Anchor)({
  ":hover": {
    borderBottom: borders.lightBlue,
  },
  borderBottom: borders.transparent,
  cursor: 'pointer',
  paddingBottom: spacing.t,
  transition: transitions.default,
});

const ContactButton = styled(Link)({
  ":before": {
    backgroundImage: gradients.darkBlue,
    borderRadius: "inherit",
    content: '""',
    display: "block",
    height: "100%",
    left: 0,
    opacity: 0,
    position: "absolute",
    top: 0,
    transition: transitions.default,
    width: "100%",
    zIndex: -1,
  },
  ":hover": {
    ":before": {
      opacity: 1
    },
  },
  ":last-child": {
    marginRight: 0,
  },
  background: colors.darkBlue,
  borderRadius: borders.borderRadius,
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 500,
  marginRight: spacing.xxxxxl,
  padding: spacing.ml,
  position: 'relative',
  zIndex: 1,
  [breakpoints.mobileOnly]: {
    ":last-child": {
      marginRight: 0,
    },
    marginRight: spacing.ml,
    padding: spacing.m,
  },
  [breakpoints.iphone5]: {
    ":last-child": {
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
  color: colors.darkBlue,
  fontSize: 32,
  fontWeight: 500,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.h2,
  },
});

const HomeContent = styled(t.Text)({
  lineHeight: 1.5,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
  },
});

const PageContent = styled('div')({
  margin: '0 auto',
  maxWidth: 850,
  padding: `${spacing.xxxl}`,
  [breakpoints.mobileOnly]: {
    padding: `${spacing.l} ${spacing.m}`,
  },
});

const PageTitle = styled(t.H1)({
  fontWeight: 200,
  lineHeight: 1.25,
});

const PhoneIcon = styled('img')({
  height: spacing.m,
  marginRight: spacing.s,
});

const ServiceLink = styled(Link)({
  ":hover": {
    ".service-title": {
      color: colors.lightBlue,
    },
    border: borders.lightBlueThick,
  },
  border: borders.transparentThick,
  borderRadius: borders.borderRadius,
  padding: spacing.s,
  textAlign: 'center',
  transition: transitions.default,
  width: '31%',
  [breakpoints.mobileOnly]: {
    ":last-child": {
      marginBottom: 0,
    },
    marginBottom: spacing.l,
    width: '100%',
  },
});

const ServicesRow = styled(l.Row)({
  [breakpoints.mobileOnly]: {
    alignItems: 'flex-start',
    marginLeft: spacing.xl,
  },
  [breakpoints.iphone5]: {
    marginLeft: 0,
  },
});

const Snowflake = styled('img')({
  marginRight: spacing.l,
});

const ServiceTitle = styled(t.H2)(
  {
    color: colors.darkBlue,
    textAlign: 'center',
    transition: transitions.default,
  },
  ({ light }: { light?: boolean }) => ({
    fontWeight: 500,
  }),
);

const Home = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Affordable Commercial Refrigeration <Break />in the Lakes Region
    </PageTitle>
    <l.Row columnOnMobile spaceBetween mb={[spacing.xl, spacing.xxxxl]}>
      <ServiceLink to="/commercial-ac">
        <img src={CommercialACImg} />
        <ServiceTitle className="service-title" mt={spacing.l}>Commercial A/C <Break />Service</ServiceTitle>
      </ServiceLink>
      <ServiceLink to="/freezer-cooler">
        <img src={FreezerCoolerImg} />
        <ServiceTitle className="service-title" mt={spacing.l}>Cooler & Freezer <Break />Repair</ServiceTitle>
      </ServiceLink>
      <ServiceLink to="/maintenance-plans">
        <img src={MaintenanceImg} />
        <ServiceTitle className="service-title" mt={spacing.l}>Preventative Maintenance Plans</ServiceTitle>
      </ServiceLink>
    </l.Row>
    <HomeContent fontSize={fontSizes.largeText} mb={[spacing.xxl, spacing.xxxxxl]}>
      Maintain your appliances with commercial refrigeration from Wicked Cool Refrigeration in Laconia, New Hampshire. Our HVAC and refrigeration company specializes in commercial refrigeration and air conditioning installation, maintenance, and repair. Some of our services include: control-system installations, maintenance programs, refrigeration system design and installation, refrigerant conversions and upgrades, and much more.
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Our service technicians provide you with the best quality service for all your commercial cooling equipment. We service all makes and models of refrigeration units, icemakers, air conditioners, wine chillers, flower coolers, and more. It is our mission to provide quality service to our customers at reasonable rates. Your satisfaction is guaranteed. We service, maintain, and install virtually any type of air conditioning or refrigeration equipment.
    </HomeContent>
    <ServicesRow columnOnMobile spaceBetween mb={[spacing.xxl, spacing.xxxxxl]} px={[0, spacing.l]}>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Free Estimates</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>20+ Years Experience</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Emergency Repair Services</ServiceTitle>
        </l.Row>
        <l.Row>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Fully Licensed & Insured</ServiceTitle>
        </l.Row>
      </div>
    </ServicesRow>
    <ContactButtons mb={[spacing.xxl, spacing.xxxxxl]} mx="auto">
      <ContactButton to="/contact?action=request">Request Estimate</ContactButton>
      <ContactButton to="/contact?action=schedule">Schedule Service</ContactButton>
    </ContactButtons>
    <HiringTitle center mb={spacing.l}>
      <HiringIcon src={HiringImg} />
      We're Hiring!
    </HiringTitle>
    <HiringText center>
      We are seeking mechanically inclined individuals who are eager to learn.
      <br />
      <CallUs href="tel:6035240445">
        <PhoneIcon src={PhoneImg} />
        Call us
      </CallUs>
      &nbsp;for more information and to apply.
    </HiringText>
    <l.Space mt={[0, spacing.xxxxxl]} />
  </PageContent>
);

export default Home;
