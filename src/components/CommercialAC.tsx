import * as React from 'react';
import styled from 'react-emotion';
import Gallery from 'react-grid-gallery';
import { height, width } from 'styled-system';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  breakpoints,
  colors,
  defaultImageOptions,
  fontSizes,
  spacing,
} from '../styles/theme';
import t from '../styles/typography';
import { ASSETS_PATH } from '../utils/constants';
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

export const Heading = styled(t.H2)({
  color: colors.darkBlue,
  fontWeight: 500,
});

export const ServiceImage = styled('img')(
  {
    flex: 1,
    width: '40%',
    [breakpoints.mobile]: {
      margin: `0 auto ${spacing.xl}`,
      width: '70%',
    },
  },
  height,
  width,
);

export const TopContent = styled(Content)({ flex: 1 });

const CommercialAC = () => (
  <PageContent>
    <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
      Commercial A/C
    </PageTitle>
    <l.Row columnOnMobile spaceBetween mb={[spacing.xl, spacing.xl]}>
      <ServiceImage src={`${ASSETS_PATH}/outside-condensing-units.jpg`} />
      <TopContent fontSize={fontSizes.largeText} ml={[0, spacing.xxl]}>
        Keep your air conditioning systems running efficiently with service from
        Wicked Cool Refrigeration. Our company provides reliable service,
        maintenance, and installation for both rooftop units and split systems.
      </TopContent>
    </l.Row>
    <Heading center mb={spacing.xl}>
      When Your A/C Freezes Up
    </Heading>
    <Content fontSize={fontSizes.largeText} mb={[spacing.xl, spacing.xxxxxl]}>
      Broken parts and poor maintenance can cause your system to freeze up. You
      should call Wicked Cool Refrigeration immediately. We can often save you
      time and money by fixing minor problems in your equipment before it
      escalates. Additionally, we provide proper installation of new units for
      safety and efficiency.
      <l.Space mt={[spacing.ml, spacing.xl]} />
      Wicked Cool will examine your equipment to ensure it is the right
      equipment for your building. When you work with our company, we make sure
      you have the proper ventilation for good air circulation and unit
      efficiency. We specialize in the following models and more:
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
    <Heading center mb={spacing.xl}>
      Featured Projects
    </Heading>
    <l.GalleryWrapper mb={[spacing.xl, spacing.xxxxxl]}>
      <Gallery
        enableImageSelection={false}
        images={[
          {
            ...defaultImageOptions,
            caption: 'A commercial furnace',
            src: `${ASSETS_PATH}/ippolitos-furnace.jpg`,
            thumbnail: `${ASSETS_PATH}/ippolitos-furnace.jpg`,
            thumbnailCaption: 'A commercial furnace',
          },
          {
            ...defaultImageOptions,
            caption: 'Outside condensing units',
            src: `${ASSETS_PATH}/outside-condensing-units.jpg`,
            thumbnail: `${ASSETS_PATH}/outside-condensing-units.jpg`,
            thumbnailCaption: 'Outside condensing units',
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

export default withScroll(CommercialAC);
