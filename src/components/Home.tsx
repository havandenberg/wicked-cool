import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import CommercialACImg from '../assets/images/commercial-ac-home.svg';
import FreezerCoolerImg from '../assets/images/freezer-cooler-home.svg';
import MaintenanceImg from '../assets/images/maintenance-home.svg';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import CTAs from './CTAs';

const Break = styled('br')({
  [breakpoints.tabletOnly]: {
    display: 'none',
  },
  [breakpoints.mobileOnly]: {
    display: 'none',
  },
});

export const Content = styled(t.Text)({
  lineHeight: 1.5,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
  },
});

export const PageContent = styled('div')({
  margin: '0 auto',
  maxWidth: 850,
  padding: `${spacing.xxxl}`,
  [breakpoints.mobileOnly]: {
    padding: `${spacing.l} ${spacing.m}`,
  },
});

export const PageTitle = styled(t.H1)({
  fontWeight: 200,
  lineHeight: 1.25,
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

export const ServicesRow = styled(l.Row)({
  [breakpoints.mobileOnly]: {
    alignItems: 'flex-start',
    marginLeft: spacing.xl,
  },
  [breakpoints.iphone5]: {
    marginLeft: 0,
  },
});

export const Snowflake = styled('img')({
  marginRight: spacing.l,
});

export const ServiceTitle = styled(t.H2)(
  {
    color: colors.darkBlue,
    textAlign: 'center',
    transition: transitions.default,
  },
  ({ light }: { light?: boolean }) => (
    light ? { fontWeight: 500, } : {}
  ),
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
    <Content fontSize={fontSizes.largeText} mb={[spacing.xxl, spacing.xxxxxl]}>
      Maintain your appliances with commercial refrigeration from Wicked Cool Refrigeration in Laconia, New Hampshire. Our HVAC and refrigeration company specializes in commercial refrigeration and air conditioning installation, maintenance, and repair. Some of our services include: control-system installations, maintenance programs, refrigeration system design and installation, refrigerant conversions and upgrades, and much more.
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Our service technicians provide you with the best quality service for all your commercial cooling equipment. We service all makes and models of refrigeration units, icemakers, air conditioners, wine chillers, flower coolers, and more. It is our mission to provide quality service to our customers at reasonable rates. Your satisfaction is guaranteed. We service, maintain, and install virtually any type of air conditioning or refrigeration equipment.
    </Content>
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
    <CTAs />
  </PageContent>
);

export default Home;
