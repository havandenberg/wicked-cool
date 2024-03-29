import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  shadows,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import { ASSETS_PATH } from '../utils/constants';
import { isMobileOnly } from '../utils/screensize';
import CTAs from './CTAs';
import withScroll from './hoc/withScroll';

const Break = styled('br')({
  [breakpoints.tablet]: {
    display: 'none',
  },
  [breakpoints.mobile]: {
    display: 'none',
  },
});

export const Content = styled(t.Text)({
  lineHeight: 1.5,
  [breakpoints.mobile]: {
    fontSize: fontSizes.text,
  },
});

export const PageContent = styled('div')({
  margin: '0 auto',
  maxWidth: 850,
  padding: `${spacing.xxxl}`,
  [breakpoints.mobile]: {
    padding: `${spacing.l} ${spacing.m}`,
  },
});

export const PageTitle = styled(t.H1)({ fontWeight: 200, lineHeight: 1.25 });

const ServiceLink = styled(Link)({
  ':hover': {
    '.service-title': {
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
  [breakpoints.mobile]: {
    ':last-child': {
      marginBottom: 0,
    },
    marginBottom: spacing.l,
    width: '100%',
  },
});

export const ServicesRow = styled(l.Row)({
  alignItems: 'flex-start',
  [breakpoints.mobile]: {
    alignItems: 'flex-start',
    marginLeft: spacing.xl,
  },
  [breakpoints.small]: {
    marginLeft: 0,
  },
});

export const Snowflake = styled('img')({ marginRight: spacing.l });

export const ServiceTitle = styled(t.H2)(
  {
    color: colors.darkBlue,
    textAlign: 'center',
    transition: transitions.default,
  },
  ({ light, shadow }: { light?: boolean; shadow?: boolean }) => ({
    fontWeight: light ? 500 : undefined,
    textShadow: shadow ? shadows.text : undefined,
  }),
);

const Home = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Commercial Refrigeration
      <Break />
      &nbsp;in the Lakes Region
    </PageTitle>
    <l.Row columnOnMobile spaceBetween mb={[spacing.xl, spacing.xxxxl]}>
      <ServiceLink to="/commercial-ac">
        <l.CenteredRow height={175} width="100%">
          <l.Img
            height={isMobileOnly() ? 175 : undefined}
            src={`${ASSETS_PATH}/outside-condensing-units.jpg`}
            width={isMobileOnly() ? undefined : 175}
          />
        </l.CenteredRow>
        <ServiceTitle className="service-title" mt={spacing.l} shadow={true}>
          Commercial
          <Break />
          &nbsp;A/C Service
        </ServiceTitle>
      </ServiceLink>
      <ServiceLink to="/freezer-cooler">
        <l.CenteredRow height={175} width="100%">
          <l.Img
            height={isMobileOnly() ? 175 : undefined}
            src={`${ASSETS_PATH}/wooden-wine-cooler-feat.png`}
            width={isMobileOnly() ? undefined : 175}
          />
        </l.CenteredRow>
        <ServiceTitle className="service-title" mt={spacing.l} shadow>
          Commercial Cooler &<Break />
          &nbsp;Freezer Repair
        </ServiceTitle>
      </ServiceLink>
      <ServiceLink to="/maintenance-plans">
        {/* <l.CenteredRow height={175} width="100%">
          <l.Img
            height={isMobileOnly() ? 175 : undefined}
            src={`${ASSETS_PATH}/maintenance.png`}
            width={isMobileOnly() ? undefined : 175}
          />
        </l.CenteredRow> */}
        <ServiceTitle className="service-title" mt={spacing.l} shadow>
          Preventative Maintenance Plans
        </ServiceTitle>
      </ServiceLink>
    </l.Row>
    <Content fontSize={fontSizes.largeText} mb={[spacing.xxl, spacing.xxxxxl]}>
      Maintain your commercial equipment with Wicked Cool Refrigeration in the
      Lakes Region of New Hampshire. Our HVAC and refrigeration company
      specializes in commercial refrigeration and air conditioning installation,
      maintenance, and repair. Some of our services include: control-system
      installations, maintenance programs, refrigeration system design and
      installation, refrigerant conversions and upgrades, and much more.
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Our service technicians provide you with the best quality service for all
      your commercial cooling equipment. We service all makes and models of
      refrigeration units, icemakers, air conditioners, wine chillers, flower
      coolers, and more. It is our mission to provide quality service to our
      customers at reasonable rates.
    </Content>
    <ServicesRow
      columnOnMobile
      spaceBetween
      mb={[spacing.xxl, spacing.xxxxxl]}
      px={[0, spacing.l]}
    >
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Free Estimates</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>40+ Years Experience</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Fully Licensed & Insured</ServiceTitle>
        </l.Row>
      </div>
    </ServicesRow>
    <CTAs />
  </PageContent>
);

export default withScroll(Home);
