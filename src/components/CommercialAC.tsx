import * as React from 'react';
import styled from 'react-emotion';
import CommercialACImg from '../assets/images/commercial-ac.svg';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import { breakpoints, colors, fontSizes, spacing } from '../styles/theme';
import t from '../styles/typography';
import CTAs from './CTAs';
import {
  Content,
  PageContent,
  PageTitle,
  ServicesRow,
  ServiceTitle,
  Snowflake,
} from './Home';

export const Heading = styled(t.H2)({
  color: colors.darkBlue,
  fontWeight: 500,
});

export const ServiceImage = styled('img')({
  flex: 1,
  [breakpoints.mobileOnly]: {
    margin: `0 auto ${spacing.xl}`,
    width: "70%",
  },
});

export const TopContent = styled(Content)({
  flex: 1,
});

const CommercialAC = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Commercial A/C
    </PageTitle>
    <l.Row columnOnMobile spaceBetween mb={[spacing.xl, spacing.xl]}>
      <ServiceImage src={CommercialACImg} />
      <TopContent fontSize={fontSizes.largeText} ml={[0, spacing.xxl]}>
        Keep your systems in efficient condition with commercial air conditioning repair from Wicked Cool Refrigeration in Laconia, New Hampshire. Our company provides reliable service, maintenance, and installation for both rooftop units and split systems.
      </TopContent>
    </l.Row>
    <Heading center mb={spacing.xl}>
      When Your A/C Freezes Up
    </Heading>
    <Content fontSize={fontSizes.largeText} mb={[spacing.xl, spacing.xxxxxl]}>
      Broken parts and poor maintenance can cause your unit to either completely freeze up, or freeze up a little here and there. You should call a professional immediately. Our company can often save you time and money by fixing a minor problem in your equipment before it escalates. Additionally, we provide proper installation of new units for safety and efficiency.
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Make sure to examine your equipment to ensure it is the right equipment for your building. When you work with our company, we make sure you have the proper ventilation for good air circulation and unit efficiency. Our experts specialize in the following models:
    </Content>
    <ServicesRow
      alignTop
      columnOnMobile
      spaceBetween
      mb={[spacing.xl, spacing.xxxxxl]}
      px={[0, spacing.l]}>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Trane™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>York™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Lennox™</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Daikin™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Arcoaire™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Mitsubishi™</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Goodman™</ServiceTitle>
        </l.Row>
      </div>
    </ServicesRow>
    <CTAs />
    <l.Space mt={[0, spacing.xxxxxl]} />
  </PageContent>
);

export default CommercialAC;
