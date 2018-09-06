import * as React from 'react';
import styled from 'react-emotion';
import {Link} from 'react-router-dom';
import PhoneImg from '../assets/images/phone-white.svg';
import SnowflakeImg from '../assets/images/snowflake-1.svg';
import TopIciclesImg from '../assets/images/top-icicles.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  maxWidth,
  spacing
} from '../styles/theme';
import t from '../styles/typography';
import {PhoneIcon} from './CTAs';

const Description = styled(t.Text)({
  fontSize: fontSizes.h2,
  maxWidth: 500,
  width: '50%',
  [breakpoints.tabletOnly]: {
    width: '80%'
  },
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
    width: '90%'
  }
});

const HeaderWrapper = styled('div')({overflow: 'hidden', position: 'relative'});

const Icicles = styled('img')({
  height: 120,
  marginLeft: '50%',
  transform: 'translateX(-50%)',
  width: maxWidth,
  [breakpoints.mobileOnly]: {
    height: 80
  }
});

const Snowflake = styled('img')({
  height: 100,
  [breakpoints.mobileOnly]: {
    height: 40
  },
  [breakpoints.iphone5]: {
    height: 30
  }
}, ({flip} : {
  flip?: boolean
}) => ({
  transform: flip
    ? 'scaleX(-1)'
    : undefined
}));

const TopTextWrapper = styled(l.Row)({
  left: '50%',
  maxWidth: 1000,
  position: 'absolute',
  top: spacing.s,
  transform: 'translateX(-50%)',
  width: '100%',
  [breakpoints.mobileOnly]: {
    padding: `0 ${spacing.s}`,
    top: spacing.t
  }
});

const Header = () => (
  <HeaderWrapper>
    <Icicles src={TopIciclesImg}/>
    <TopTextWrapper px={spacing.l} spaceBetween>
      <Link to="/">
        <t.Text color={colors.white} fontSize={fontSizes.largeText}>
          Wicked Cool Refrigeration
        </t.Text>
      </Link>
      <t.Text color={colors.white} fontSize={fontSizes.largeText}>
        <t.Anchor
          border={borders.white}
          color={colors.white}
          href="tel:6035240445"
          pb="2px"><PhoneIcon height={[spacing.sm, spacing.m]} src={PhoneImg}/>603-524-0445</t.Anchor>
      </t.Text>
    </TopTextWrapper>
    <l.CenteredRow mt={[`-${spacing.sm}`, 0]}>
      <Snowflake src={SnowflakeImg}/>
      <l.Space mx={[spacing.sm, spacing.xxxl]}>
        <t.Title center nowrap>WICKED COOL</t.Title>
        <t.Subtitle center nowrap>
          REFRIGERATION
        </t.Subtitle>
      </l.Space>
      <Snowflake flip src={SnowflakeImg}/>
    </l.CenteredRow>
    <Description center my={[spacing.m, spacing.l]} mx="
          auto">
      Professional Commercial Refrigeration & A/C Installation, Service, & Repair
      Specialists
    </Description>
  </HeaderWrapper>
);

export default Header;
