import * as React from 'react';
import styled from 'react-emotion';
import { withRouter } from 'react-router-dom';
import { isMobileOnly } from 'src/utils/screensize';
import { space } from 'styled-system';
import BottomIciclesMobileImg from '../assets/images/bottom-icicles-mobile.svg';
import BottomIciclesImg from '../assets/images/bottom-icicles.svg';
import EmailImg from '../assets/images/email-white.svg';
import FBImg from '../assets/images/facebook.svg';
import PhoneImg from '../assets/images/phone-white.svg';
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
import { FACEBOOK_PATH } from '../utils/constants';
import { PhoneIcon } from './CTAs';

const FooterBottom = styled(l.Row)(
  {
    width: '100%',
    [breakpoints.mobile]: {
      alignItems: 'left',
      flexDirection: 'column-reverse',
    },
  },
  ({ contact }: { contact?: boolean }) => ({
    borderTop: contact ? undefined : borders.white,
  }),
);

export const FooterBottomText = styled('div')(
  {
    fontSize: fontSizes.text,
    textAlign: 'right',
    [breakpoints.mobile]: {
      textAlign: 'center',
    },
  },
  space,
);

export const FooterInfo = styled(l.Row)({
  [breakpoints.mobile]: {
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export const FooterInfoText = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.largeText,
  marginBottom: spacing.m,
  [breakpoints.mobile]: {
    fontSize: fontSizes.text,
  },
});

export const FooterInfoTextWrapper = styled(l.Space)({
  [breakpoints.small]: {
    marginRight: spacing.s,
  },
});

const FooterInner = styled('div')({
  alignItems: 'center',
  bottom: 0,
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  left: '50%',
  maxWidth: 1000,
  position: 'absolute',
  transform: 'translateX(-50%)',
  width: '100%',
  [breakpoints.mobile]: {
    bottom: spacing.t,
    padding: `0 ${spacing.s}`,
  },
});

const FooterWrapper = styled(l.Space)({
  overflow: 'hidden',
  position: 'relative',
});

const Label = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.text,
  textTransform: 'uppercase',
  [breakpoints.mobile]: {
    fontSize: fontSizes.text,
    textAlign: 'center',
  },
});

const LogoRow = styled(l.Row)({
  [breakpoints.mobile]: {
    justifyContent: 'space-between',
    width: '100%',
  },
});

const LogoText = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 'bold',
  [breakpoints.mobile]: {
    fontSize: fontSizes.text,
  },
});

const Icicles = styled('img')(
  {
    marginLeft: '50%',
    transform: 'translate(-50%, 8px)',
    width: maxWidth,
  },
  ({ contact }: { contact?: boolean }) => ({
    height: contact ? 150 : 580,
    [breakpoints.mobile]: {
      height: contact ? 200 : 700,
      width: '100%',
    },
  }),
);

const Snowflake = styled('img')(
  {
    height: 45,
    marginRight: spacing.ml,
    [breakpoints.mobile]: {
      marginRight: 0,
    },
    [breakpoints.small]: {
      height: 35,
    },
  },
  ({ hideOnDesktop }: { hideOnDesktop?: boolean }) => ({
    display: hideOnDesktop ? 'none' : 'block',
    [breakpoints.mobile]: {
      display: 'block',
    },
  }),
);

const Footer = ({
  location,
}: {
  location: {
    pathname: string;
  };
}) => (
  <FooterWrapper mt={spacing.xxxl}>
    <Icicles
      contact={location.pathname === '/contact'}
      src={isMobileOnly() ? BottomIciclesMobileImg : BottomIciclesImg}
    />
    <FooterInner>
      {location.pathname !== '/contact' && (
        <FooterInfo
          alignTop
          spaceBetween
          width="80%"
          mb={[spacing.m, spacing.xxl]}
        >
          <div>
            <Label mb={spacing.ml}>Contact Information:</Label>
            <l.Row alignTop>
              <FooterInfoTextWrapper
                mb={[spacing.l, 0, 0]}
                ml={[spacing.s, 0]}
                mr={[spacing.ml, spacing.xl]}
              >
                <FooterInfoText>Address:</FooterInfoText>
                <FooterInfoText mt={[spacing.xl, spacing.xxl]}>
                  Phone:
                </FooterInfoText>
                <FooterInfoText mt={[26, spacing.s]}>Email:</FooterInfoText>
              </FooterInfoTextWrapper>
              <div>
                <FooterInfoText>
                  315 Hillcrest Dr
                  <br />
                  Laconia, NH 03246
                </FooterInfoText>
                <FooterInfoText>
                  <t.Anchor
                    border={borders.white}
                    color={colors.white}
                    href="tel:6035240445"
                  >
                    <PhoneIcon src={PhoneImg} />
                    603-524-0445
                  </t.Anchor>
                </FooterInfoText>
                <FooterInfoText>
                  <t.Anchor
                    border={borders.white}
                    color={colors.white}
                    href="mailto:service@wickedcoolmech.com"
                  >
                    <PhoneIcon height={spacing.l} src={EmailImg} />
                    service@wickedcoolmech.com
                  </t.Anchor>
                </FooterInfoText>
              </div>
            </l.Row>
          </div>
          <FooterBottomText mt={[spacing.s, 0]}>
            <Label mb={spacing.ml}>Hours of Operation:</Label>
            <FooterInfoText>Monday – Friday: 8am – 5pm</FooterInfoText>
            <t.Anchor
              href={FACEBOOK_PATH}
              my={[spacing.m, spacing.l, spacing.l]}
              target="_blank"
            >
              <l.Img height={spacing.xl} src={FBImg} />
            </t.Anchor>
          </FooterBottomText>
        </FooterInfo>
      )}
      {location.pathname === '/contact' && (
        <l.CenteredRow
          mb={[`-${spacing.s}`, `-${spacing.xxxl}`, `-${spacing.xxxl}`]}
        >
          <t.Anchor href={FACEBOOK_PATH} target="_blank" zIndex={10}>
            <l.Img height={[spacing.l, spacing.xl, spacing.xl]} src={FBImg} />
          </t.Anchor>
        </l.CenteredRow>
      )}
      <FooterBottom
        contact={location.pathname === '/contact'}
        px={[spacing.s, spacing.l]}
        py={spacing.m}
        spaceBetween
      >
        <LogoRow>
          <Snowflake src={SnowflakeImg} />
          <LogoText>Wicked Cool Refrigeration</LogoText>
          <Snowflake hideOnDesktop src={SnowflakeImg} />
        </LogoRow>
        <FooterBottomText>
          <t.Text color={colors.white} mb={spacing.s}>
            Copyright © {new Date().getFullYear()}
            &nbsp;Wicked Cool Refrigeration
          </t.Text>
          <t.Text color={colors.white} mb={[spacing.m, 0]}>
            Developed by Halsey Vandenberg
          </t.Text>
        </FooterBottomText>
      </FooterBottom>
    </FooterInner>
  </FooterWrapper>
);

export default withRouter(Footer);
