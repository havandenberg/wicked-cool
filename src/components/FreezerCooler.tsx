import * as React from 'react';
import styled from 'react-emotion';
import FreezerCoolerImg from '../assets/images/freezer-cooler.svg';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import { breakpoints, fontSizes, spacing } from '../styles/theme';
import { Heading, ServiceImage, TopContent } from './CommercialAC';
import CTAs from './CTAs';
import {
  Content,
  PageContent,
  PageTitle,
  ServicesRow,
  ServiceTitle,
  Snowflake,
} from './Home';

const TopContentWrapper = styled(l.Row)({
  [breakpoints.mobileOnly]: {
    flexDirection: 'column-reverse',
  },
});

const FreezerCooler = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Freezer & Cooler
    </PageTitle>
    <TopContentWrapper spaceBetween mb={[spacing.xl, spacing.xl]}>
      <TopContent fontSize={fontSizes.largeText} mr={[0, spacing.xxl]}>
        Keep your business running efficiently with refrigeration repair from
        Wicked Cool Refrigeration in Laconia, New Hampshire. From refrigeration
        units, icemakers, and air conditioners, to wine chillers, flower
        coolers, and more, we've got you covered. You name it, we service it!
      </TopContent>
      <ServiceImage src={FreezerCoolerImg} />
    </TopContentWrapper>
    <Heading center mb={spacing.xl}>
      Don’t Wait For Your Service
    </Heading>
    <Content fontSize={fontSizes.largeText} mb={[spacing.xl, spacing.xxxxxl]}>
      Keeping your commercial refrigeration units in excellent condition is
      critical for your business. Our professionals install and repair all major
      brands of commercial refrigeration units, ensuring that your new units are
      installed properly and perform optimally. We service Lakes Region's
      hotels, convenience stores, restaurants, delis, coffee shops, and more.
      <l.Space mt={[spacing.ml, spacing.xl]} />A faulty coil can burn out an
      entire motor, costing you thousands in time and money to repair or
      replace. When your unit is making unusual sounds, not maintaining
      consistent temperature, dripping, or freezing unusually, call us
      immediately!
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Our technicians service walk-in refrigerations and freezers, commercial
      ice machines, cold tables, deli tables, and much more. We specialize in
      the following models:
    </Content>
    <ServicesRow
      alignTop
      columnOnMobile
      spaceBetween
      mb={[spacing.xl, spacing.xxxxxl]}
      px={[0, spacing.l]}
    >
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

export default FreezerCooler;
