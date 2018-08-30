import * as React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import BottomIciclesImg from '../assets/images/bottom-icicles.svg';
import SnowflakeImg from '../assets/images/snowflake-footer.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  maxWidth,
  spacing,
} from '../styles/theme';
import t from '../styles/typography';

const FooterBottom = styled(l.Row)({
  borderTop: borders.white,
  width: '100%',
  [breakpoints.mobileOnly]: {
    alignItems: 'left',
    flexDirection: 'column-reverse',
  },
});

const FooterBottomText = styled('div')({
  fontSize: fontSizes.text,
  textAlign: 'right',
  [breakpoints.mobileOnly]: {
    textAlign: 'center',
  },
}, space);

const FooterInfo = styled(l.Row)({
  [breakpoints.mobileOnly]: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const FooterInfoText = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 'bold',
  marginBottom: spacing.m,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
  },
});

const FooterInner = styled('div')({
  alignItems: 'center',
  bottom: spacing.s,
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  left: '50%',
  maxWidth: 1000,
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: '100%',
  [breakpoints.mobileOnly]: {
    bottom: spacing.t,
    padding: `0 ${spacing.s}`,
  },
});

const FooterWrapper = styled('div')({
  overflow: 'hidden',
  position: 'relative',
});

const Label = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.text,
  textTransform: 'uppercase',
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
    textAlign: 'center',
  },
});

const LogoRow = styled(l.Row)({
  [breakpoints.mobileOnly]: {
    justifyContent: 'space-between',
    width: '100%',
  },
});

const LogoText = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 'bold',
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
  },
});

const Icicles = styled('img')({
  height: 500,
  marginLeft: '50%',
  transform: 'translateX(-50%)',
  width: maxWidth,
  [breakpoints.mobileOnly]: {
    height: 675,
  },
});

const Snowflake = styled('img')(
  {
    height: 45,
    marginRight: spacing.ml,
    [breakpoints.mobileOnly]: {
      marginRight: 0,
    },
  },
  ({ hideOnDesktop }: { hideOnDesktop?: boolean }) => ({
    display: hideOnDesktop ? 'none' : 'block',
    [breakpoints.mobileOnly]: {
      display: 'block',
    },
  }),
);

const Footer = () => (
  <FooterWrapper>
    <Icicles src={BottomIciclesImg} />
    <FooterInner>
      <FooterInfo alignTop spaceBetween width="80%" mb={[spacing.m, spacing.xxl]}>
        <div>
          <Label mb={spacing.ml}>Contact Information:</Label>
          <l.Row alignTop>
            <l.Space ml={[spacing.s, '0']} mr={spacing.xl}>
              <FooterInfoText>Address:</FooterInfoText>
              <FooterInfoText mt={[spacing.xl, spacing.xxl]}>Phone:</FooterInfoText>
              <FooterInfoText>Email:</FooterInfoText>
            </l.Space>
            <div>
              <FooterInfoText>
                315 Hillcrest Dr<br />
                Laconia, NH 03246
              </FooterInfoText>
              <FooterInfoText>603-524-0445</FooterInfoText>
              <FooterInfoText>wickedcool444@gmail.com</FooterInfoText>
            </div>
          </l.Row>
        </div>
        <FooterBottomText mt={[spacing.m, '0']}>
          <Label mb={spacing.ml}>Hours of Operation:</Label>
          <FooterInfoText>
            Monday – Friday, 8am – 5pm
          </FooterInfoText>
          <FooterInfoText>
            Closed Saturday & Sunday
          </FooterInfoText>
        </FooterBottomText>
      </FooterInfo>
      <FooterBottom px={[spacing.s, spacing.l]} py={spacing.m} spaceBetween>
        <LogoRow>
          <Snowflake src={SnowflakeImg} />
          <LogoText>
            Wicked Cool Refrigeration
          </LogoText>
          <Snowflake hideOnDesktop src={SnowflakeImg} />
        </LogoRow>
        <FooterBottomText>
          <t.Text color={colors.white} mb={spacing.s}>Copyright © {new Date().getFullYear()} Wicked Cool Refrigeration</t.Text>
          <t.Text color={colors.white} mb={[spacing.m, '0']}>Site designed & developed by Halsey Vandenberg</t.Text>
        </FooterBottomText>
      </FooterBottom>
    </FooterInner>
  </FooterWrapper>
);

export default Footer;
