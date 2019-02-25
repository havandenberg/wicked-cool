import * as React from 'react';
import styled from 'react-emotion';
import Gallery from 'react-grid-gallery';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  breakpoints,
  defaultImageOptions,
  fontSizes,
  spacing,
} from '../styles/theme';
import { ASSETS_PATH } from '../utils/constants';
import { Heading, ServiceImage, TopContent } from './CommercialAC';
import CTAs from './CTAs';
import withScroll from './hoc/withScroll';
import {
  Content,
  PageContent,
  PageTitle,
  ServicesRow,
  ServiceTitle,
  Snowflake,
} from './Home';

const TopContentWrapper = styled(l.Row)({
  [breakpoints.mobile]: {
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
        Wicked Cool Refrigeration. From refrigeration units, icemakers, and air
        conditioners, to wine chillers, flower coolers, and more, we've got you
        covered. You name it, we service it!
      </TopContent>
      <ServiceImage src={`${ASSETS_PATH}/wooden-wine-cooler-feat.png`} />
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
      the following models and more:
    </Content>
    <ServicesRow
      alignTop
      columnOnMobile
      spaceBetween
      mb={[spacing.xl, spacing.xl]}
      px={[0, spacing.l]}>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>True™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Beverage Aire™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Nor Lake™</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Bally™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Bohn™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, 0]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Chandler™</ServiceTitle>
        </l.Row>
      </div>
      <div>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Larkin™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Trenton™</ServiceTitle>
        </l.Row>
        <l.Row mb={[spacing.ml, spacing.xl]}>
          <Snowflake src={SnowflakeImg} />
          <ServiceTitle light>Heatcraft™</ServiceTitle>
        </l.Row>
      </div>
    </ServicesRow>
    <Heading center mb={spacing.xl}>
      Featured Projects
    </Heading>
    <l.GalleryWrapper mb={[spacing.xl, spacing.xxxxxl]}>
      <Gallery
        enableImageSelection={false}
        images={[
          {
            ...defaultImageOptions,
            caption: 'Custom wood finish cooler',
            src: `${ASSETS_PATH}/wooden-wine-cooler.png`,
            thumbnail: `${ASSETS_PATH}/wooden-wine-cooler.png`,
            thumbnailCaption: `Custom wood finish cooler`,
          },
          {
            ...defaultImageOptions,
            caption: 'Custom designed wine cases',
            src: `${ASSETS_PATH}/wine-cases.jpg`,
            thumbnail: `${ASSETS_PATH}/wine-cases.jpg`,
            thumbnailCaption: `Custom designed wine cases`,
          },
          {
            ...defaultImageOptions,
            caption: 'Refrigerated cases',
            src: `${ASSETS_PATH}/refrigerated-cases.jpg`,
            thumbnail: `${ASSETS_PATH}/refrigerated-cases.jpg`,
            thumbnailCaption: `Refrigerated cases`,
          },
        ]}
        rowHeight={300}
        showImageCount={false}
      />
    </l.GalleryWrapper>
    <CTAs />
    <l.Space mt={[0, spacing.xxxxxl]} />
  </PageContent>
);

export default withScroll(FreezerCooler);
