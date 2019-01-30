import * as React from 'react';
import styled from 'react-emotion';
import background from '../assets/images/background.png';
import l from '../styles/layout';
import { breakpoints, colors, fontSizes, spacing } from '../styles/theme';
import t from '../styles/typography';

const Main = styled('div')({
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: spacing.ml,
  width: '100%',
});

const Subtitle = styled(t.Subtitle)({
  marginLeft: spacing.xxxl,
  [breakpoints.mobile]: {
    marginLeft: spacing.ml,
  },
});

const Domain = styled('span')({
  color: colors.darkBlue,
  fontFamily: 'Cuprum',
  fontSize: fontSizes.h1,
  marginLeft: spacing.s,
});

const Or = styled(t.Text)({
  fontSize: fontSizes.text,
});

const Phone = styled(t.Text)({
  color: colors.lightBlue,
  fontFamily: 'Cuprum Bold',
});

const UnderConstruction = () => (
  <Main>
    <t.Title mt={spacing.huge}>WICKED COOL</t.Title>
    <Subtitle ml={[spacing.ml, spacing.xxxl]}>
      REFRIGERATION
      <Domain>.com</Domain>
    </Subtitle>
    <l.Space mt={spacing.xxl} />
    <t.Text center>is currently undergoing a little re-conditioning…</t.Text>
    <t.Text center mt={spacing.xxl}>
      We’ll be back soon, but in the meantime please contact us at
    </t.Text>
    <Phone mt={spacing.l}>603-524-0445</Phone>
    <Or mt={spacing.s}>or</Or>
    <Phone mt={spacing.s}>wickedcool444@gmail.com</Phone>
    <t.Text mt={spacing.l}>for any service requests.</t.Text>
  </Main>
);

export default UnderConstruction;
