import * as React from 'react';
import MaintenanceImg from '../assets/images/maintenance.png';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import { fontSizes, spacing } from '../styles/theme';
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

const MaintenancePlans = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Maintenance Plans
    </PageTitle>
    <l.Row columnOnMobile spaceBetween mb={[spacing.ml, spacing.xxl]}>
      <ServiceImage src={MaintenanceImg} />
      <TopContent fontSize={fontSizes.largeText} ml={[0, spacing.xxl]}>
        Save money on your equipment with refrigeration maintenance from Wicked
        Cool Refrigeration. Proper maintenance is the best way to ensure your
        equipment performs at its best, and to detect or prevent future problems
        that lead to costly damage.
      </TopContent>
    </l.Row>
    <Content fontSize={fontSizes.largeText} mb={[spacing.xl, spacing.xxl]}>
      Our company offers scheduled preventative maintenance on individual units
      and entire commercial kitchen refrigeration units and air conditioners. We
      design a service plan to fit your specific needs, just call or schedule
      service with us anytime.
    </Content>
    <Heading center mb={[spacing.xl, spacing.xxl]}>
      Our Maintenance Services
    </Heading>
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
          <ServiceTitle light>Operating Pressure</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Refrigeration</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Evaporator Coil</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Filter</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Drains</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Air Filters</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Condenser Coil</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Controls</ServiceTitle>
        </l.Row>
      </div>
    </ServicesRow>
    <CTAs />
    <l.Space mt={[0, spacing.xxxxxl]} />
  </PageContent>
);

export default MaintenancePlans;
